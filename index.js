/**
 * @file 入口文件
 * @author pashangshangpo
 * @createTime 2018年5月16日 上午9:47:07
 */

const fs = require('fs')
const { resolve } = require('path')
const { execSync } = require('child_process')

const ncxTemplate = require('./template/ncx')
const opfTemplate = require('./template/opf')
const tocTemplate = require('./template/toc')
const pageTemplate = require('./template/page')

const userPath = resolve('.')
const appPath = __dirname

module.exports = (config, outPath) => {
    config = {
        name: '',
        lang: 'en',
        author: 'pashangshangpo',
        publisher: 'Pashangshangpo & Co.',
        date: new Date().getFullYear(),
        cover: 'images/cover.png',
        chapters: [],
        ...config
    }

    fs.mkdirSync('./temp', 0777)
    fs.mkdirSync('./temp/pages', 0777)

    execSync(`cp -r images style ${userPath}/temp`, { cwd: __dirname })

    fs.writeFileSync('./temp/toc.ncx', ncxTemplate(config.name, config.chapters))
    fs.writeFileSync('./temp/content.opf', opfTemplate(config, config.chapters))
    fs.writeFileSync('./temp/toc.html', tocTemplate(config.chapters))
    fs.writeFileSync('./temp/pages/page-end.html', pageTemplate('全书完', ''))

    for (let index of Object.keys(config.chapters)) {
        const item = config.chapters[index]

        fs.writeFileSync(`./temp/pages/page-${index}.html`, pageTemplate(item.title, item.content))
    }

    execSync(`lib/kindlegen ${userPath}/temp/${config.name}`, { cwd: __dirname })

    // execSync('rm -rf temp', { cwd: __dirname })
}