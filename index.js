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

    // fs.writeFile()
    toc.ncx
    ncxTemplate(config.name, config.chapters)
}