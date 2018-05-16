/**
 * @file 入口文件
 * @author pashangshangpo
 * @createTime 2018年5月16日 上午9:47:07
 */

module.exports = (config, outPath) => {
    config = {
        title: '',
        author: 'pashangshangpo',
        publisher: 'Pashangshangpo & Co.',
        date: new Date().getFullYear(),
        cover: 'images/cover.png',
        ...config
    }
}