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
        <meta name="dtb:uid" content="content"/>
        <meta name="dtb:depth" content="1"/>
        <meta name="dtb:totalPageCount" content="0"/>
        <meta name="dtb:maxPageNumber" content="0"/>
    </head>
    <docTitle>
        <text>${name}</text>
    </docTitle>
    <navMap>
        <navPoint id="navpoint-1" playOrder="1">
            <navLabel>
                <text xmlns:ns="http://www.daisy.org/z3986/2005/ncx/">Cover</text>
            </navLabel>
            <content src="cover.html"/>
        </navPoint>
        ${navList.map((item, index) => {
            return `
                <navPoint id="navpoint-${index + 2}" playOrder="${index + 2}">
                    <navLabel>
                        <text xmlns:ns="http://www.daisy.org/z3986/2005/ncx/">${item.title}</text>
                    </navLabel>
                    <content src="pages/page-${index}.html"/>
                </navPoint>
            `
        }).join('').trim()}
    </navMap>
</ncx>
    `
}