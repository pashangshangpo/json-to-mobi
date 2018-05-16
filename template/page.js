/**
 * @file page模板
 * @author pashangshangpo
 * @createTime 2018年5月16日 下午12:39:16
 */

/**
 * .def: title, content => string
 *   title: String 标题
 *   content: String 内容
 */
module.exports = (title, content) => {
    return `
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <title>${title}</title>
            <link rel="stylesheet" href="../style/global.css" type="text/css" />
            <link rel="stylesheet" href="../style/page.css" type="text/css" />
        </head>
        <body>
            <div id="page">${content}</div>
            <div class="pagebreak"></div>
        </body>
        </html>
    `
}