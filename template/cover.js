/**
 * @file cover模板
 * @author pashangshangpo
 * @createTime 2018年5月16日 下午12:30:36
 */

/**
 * .def: coverPath => string
 *   name: String 名称
 *   coverPath: String cover路径
 */
module.exports = (name, coverPath) => {
    return `
<!DOCTYPE html SYSTEM "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>封面</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body>
    <div>
        <h2>${name}</h2>
        ${coverPath ? `<img src="${coverPath}" alt="Comic Book Images"/>`: ''}
    </div>
</body>
</html>
    `
}