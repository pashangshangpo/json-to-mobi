/**
 * @file 入口文件
 * @author pashangshangpo
 * @createTime 2018年5月16日 上午9:47:07
 */

const fs = require('fs')

const ncxTemplate = require('./template/ncx')
const opfTemplate = require('./template/opf')
const coverTemplate = require('./template/cover')
const pageTemplate = require('./template/page')

module.exports = (config, outPath) => {
    config = {
        name: '',
        lang: 'zh',
        author: 'pashangshangpo',
        publisher: 'Pashangshangpo & Co.',
        date: new Date().getFullYear(),
        cover: 'images/cover.png',
        chapters: [],
        ...config
    }

    fs.mkdirSync('./temp', 0777)
    fs.mkdirSync('./temp/pages', 0777)

    fs.writeFileSync('./temp/toc.ncx', ncxTemplate(config.name, config.chapters))
    fs.writeFileSync('./temp/content.opf', opfTemplate(config, config.chapters))
    fs.writeFileSync('./temp/cover.html', coverTemplate(config.cover))

    for (let index of Object.keys(config.chapters)) {
        const item = config.chapters[index]

        fs.writeFile(`./temp/pages/page-${index}`, pageTemplate(item.title, item.content))
    }
}