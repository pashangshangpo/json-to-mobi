/**
 * @file 入口文件
 * @author pashangshangpo
 * @createTime 2018年5月16日 上午9:47:07
 */

const fs = require('fs')
const { resolve, basename } = require('path')
const { execSync, spawnSync } = require('child_process')
const downFile = require('./common/downFile')

const ncxTemplate = require('./template/ncx')
const opfTemplate = require('./template/opf')
const tocTemplate = require('./template/toc')
const pageTemplate = require('./template/page')

const userPath = resolve('.')
const appPath = __dirname

const newBook = config => {
    fs.writeFileSync('./temp/toc.ncx', ncxTemplate(config.name, config.chapters))
    fs.writeFileSync(`./temp/${config.name}.opf`, opfTemplate(config, config.chapters))
    fs.writeFileSync('./temp/toc.html', tocTemplate(config.chapters))
    fs.writeFileSync('./temp/pages/page-end.html', pageTemplate('全书完', ''))

    for (let index of Object.keys(config.chapters)) {
        const item = config.chapters[index]

        fs.writeFileSync(`./temp/pages/page-${index}.html`, pageTemplate(item.title, item.content))
    }
}

const toMobi = (config, outputDir) => {
    spawnSync('./lib/kindlegen', [`${userPath}/temp/${config.name}.opf`], { cwd: __dirname })
    execSync(`cp -r ${userPath}/temp/${config.name}.mobi ${outputDir}`, { cwd: userPath})
}

const processImages = async chapters => {
    for (let chapter of chapters) {
        if (chapter.imgs) {
            for (let imgUrl of chapter.imgs) {
                const outImageDir = `${userPath}/temp/images`
                const fileName = basename(imgUrl)
                
                if (!fs.existsSync(`${outImageDir}/${fileName}`)) {
                    console.log('正在下载: ', fileName)
                    await downFile(imgUrl, outImageDir).catch(err => {
                        console.log(err)
                    })
                }
                
                chapter.content = chapter.content.replace(imgUrl, `../images/${fileName}`)
            }
        }
    }

    return chapters
}

/**
 * .def: (config, outputDir)
 */
module.exports = (config, outputDir) => {
    config = {
        name: '',
        lang: 'en',
        author: 'pashangshangpo',
        publisher: 'Pashangshangpo & Co.',
        date: new Date().getFullYear(),
        cover: '',
        chapters: [],
        ...config
    }

    fs.mkdirSync('./temp', 0777)
    fs.mkdirSync('./temp/pages', 0777)
    execSync(`cp -r images style ${userPath}/temp`, { cwd: __dirname })

    processImages(config.chapters).then(chapters => {
        config.chapters = chapters

        newBook(config)
        toMobi(config, outputDir)

        execSync('rm -rf temp', { cwd: userPath })
    })
}