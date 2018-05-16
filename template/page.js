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
        <?xml version="1.0" encoding="UTF-8"?>
        <!doctype html>
        <html lang="en">
        <head>
            <link rel="stylesheet" href="../style/global.css" type="text/css" />
            <link rel="stylesheet" href="../style/page.css" type="text/css" />
        </head>
        <body>
            <h2>${title}</h2>
            <div class="pagebreak"></div>
            <div id="page">${content}</div>
            <div class="pagebreak"></div>
        </body>
        </html>
    `
}