/**
 * @file toc模板
 * @author pashangshangpo
 * @createTime 2018年5月16日 下午12:30:36
 */

/**
 * .def: toc: navList => string
 *   navList: Array [Item] 导航列表
 *     Item: Object
 *       title: String 标题
 */
module.exports = navList => {
    return `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>封面</title>
        <link rel="stylesheet" href="style/global.css" type="text/css" />
        <link rel="stylesheet" href="style/page.css" type="text/css" />
    </head>
    <body>
        <div id="toc">
            <h2>目录</h2>
            <ul>
                ${navList.map((item, index) => {
                    return `
                    <li><a href="pages/page-${index}.html">${item.title}</a></li>
                    `
                }).join('').trim()}
            </ul>
        </div>
        <div class="pagebreak"></div>
    </body>
    </html>
    `
}