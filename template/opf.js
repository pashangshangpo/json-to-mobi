/**
 * @file opf模板
 * @author pashangshangpo
 * @createTime 2018年5月16日 上午11:02:04
 */

/**
 * .def: config, chapters => string
 *   config: Object 配置信息
 *     name: String 书名
 *     lang: String 语言
 *     author: String 作者
 *     publisher: String 出版者
 *     date: String 出版时间
 *     cover: String 封面图片路径
 *   chapters: Array 章节
 */
module.exports = (config, chapters) => {
    return `
<?xml version="1.0" encoding="UTF-8"?>
<package xmlns:xx="http://saxon.sf.net/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/metadata/dublin_core" unique-identifier="BookId" version="2.0">
    <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
        <dc-metadata xmlns:dc="http://purl.org/metadata/dublin_core" xmlns:oebpackage="http://openbook.org/namespaces/oeb-package/1.0/"> 
            <dc:Title>${config.name}</dc:Title>
            <dc:Language>${config.lang}</dc:Language>
            <dc:Creator>${config.author}</dc:Creator>
            <dc:Publisher>${config.publisher}</dc:Publisher>
            <dc:Date>${config.date}</dc:Date>
        </dc-metadata>
        <x-metadata>
            <output encoding="utf-8" />
            <EmbeddedCover>${config.cover}</EmbeddedCover>
        </x-metadata>
    </metadata>
    <manifest>
        <item id="stylesheet" href="style/global.css" media-type="text/css"/>
        <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
        <item id="toc" href="toc.html" media-type="application/xhtml+xml"/>
        ${chapters.map((item, index) => {
            return `
                <item id="page-${index}" href="pages/page-${index}.html" media-type="application/xhtml+xml"/>
            `
        }).join('').trim()}
        <item id="page-end" href="pages/page-end.html" media-type="application/xhtml+xml"/>
    </manifest>
    <spine toc="ncx">
        <itemref idref="toc"/>
        ${chapters.map((item, index) => {
            return `
             <itemref idref="page-${index}"/>
            `
        }).join('').trim()}
        <itemref idref="page-end"/>
    </spine>
    <guide>
        <reference type="toc" title="Table of Contents" href="toc.html" />
    </guide>
</package>
    `
}