/**
 * @file opf模板
 * @author pashangshangpo
 * @createTime 2018年5月16日 上午11:02:04
 */

module.exports = (config, chapters) => {
    return `
<?xml version="1.0" encoding="UTF-8"?>
<package xmlns:xx="http://saxon.sf.net/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/metadata/dublin_core" unique-identifier="BookId" version="2.0">
    <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
        <meta name="fixed-layout" content="true"/>
        <meta name="orientation-lock" content="landscape"/>
        <meta name="original-resolution" content="1024x600"/>
        <meta name="book-type" content="children"/>
        <meta name="RegionMagnification" content="true"/>
        <dc-metadata xmlns:dc="http://purl.org/metadata/dublin_core" xmlns:oebpackage="http://openbook.org/namespaces/oeb-package/1.0/"> 
            <dc:title>${config.name}</dc:title>
            <dc:language>${config.lang}</dc:language>
            <dc:creator>${config.author}</dc:creator>
            <dc:publisher>${config.publisher}</dc:publisher>
            <dc:date>${config.date}</dc:date>
            <meta name="cover" content="my_cover_image" />
        </dc-metadata>
        <x-metadata>
            <EmbeddedCover>${config.cover}</EmbeddedCover>
        </x-metadata>
    </metadata>
    <manifest>
        <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
        <item id="stylesheet" href="style.css" media-type="text/css"/>
        <item id="cover" href="cover.html" media-type="application/xhtml+xml"/>
        ${chapters.map((item, index) => {
            return `
                <item id="page-${index}" href="pages/page-${index}.html" media-type="application/xhtml+xml"/>
            `
        }).join('').trim()}
    </manifest>
    <spine toc="ncx">
        <itemref idref="cover"/>
        ${chapters.map((item, index) => {
            return `
             <itemref idref="page-${index}"/>
            `
        }).join('').trim()}
    </spine>
</package>
    `
}