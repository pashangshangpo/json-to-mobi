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
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>${title}</title>
        <link rel="stylesheet" href="../style/global.css" type="text/css"/>
        <link rel="stylesheet" href="../style/page.css" type="text/css"/>
    </head>
    <body>
      <div id="page">${content}</div>
    </body>
</html>
    `
}