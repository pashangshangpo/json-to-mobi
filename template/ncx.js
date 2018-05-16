/**
 * @file ncx模板
 * @author pashangshangpo
 * @createTime 2018年5月16日 上午11:02:04
 */

/**
 * .def: name, navList => String
 *   name: String 书名
 *   navList: Array [Item] 导航列表
 *     Item: Object
 *       title: String 文章标题
 */
module.exports = (name, navList) => {
    return `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE ncx PUBLIC "-//NISO//DTD ncx 2005-1//EN" "http://www.daisy.org/z3986/2005/ncx-2005-1.dtd">
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1" xml:lang="en">
    <head>
    </head>
    <docTitle>
        <text>${name}</text>
    </docTitle>
    <navMap>
        <navPoint id="toc" playOrder="1">
            <navLabel>
                <text>目录</text>
            </navLabel>
            <content src="toc.html"/>
        </navPoint>
        ${navList.map((item, index) => {
            return `
                <navPoint id="navpoint-${index + 2}" playOrder="${index + 2}">
                    <navLabel>
                        <text>${item.title}</text>
                    </navLabel>
                    <content src="pages/page-${index}.html"/>
                </navPoint>
            `
        }).join('').trim()}
    </navMap>
</ncx>
    `
}