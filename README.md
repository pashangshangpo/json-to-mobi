# jsonToMobi
把json转换成mobi电子书

## 使用说明
目前只支持MAC系统

## 示例

```
const jsonToMobi = require('./index')

jsonToMobi(
    {
        name: 'fs模块',
        chapters: [
            {
                title: '关于readFile的使用',
                content: '<p>readFile方法的第一个参数是文件的路径，<img width="300" height="250" src="https://images2018.cnblogs.com/news/24442/201805/24442-20180509134043877-1617765201.jpg" alt="腾讯云0509" />可以是绝对路径，也可以是相对路径。注意，如果是相对路径，是相对于当前进程所在的路径（process.cwd()），而不是相对于当前脚本所在的路径。</p><p>readFile方法的第二个参数是读取完成后的回调函数。该函数的第一个参数是发生错误时的错误对象，第二个参数是代表文件内容的Buffer实例。</p>',
                imgs: [
                    'https://images2018.cnblogs.com/news/24442/201805/24442-20180509134043877-1617765201.jpg'
                ]
            },
            {
                title: 'writeFile()，writeFileSync()',
                content: 'writeFile方法用于异步写入文件。writeFile方法用于异步写入文件。writeFile方法用于异步写入文件。writeFile方法用于异步写入文件。'
            }
        ]
    },
    __dirname
)
```

## 参数说明

```
/**
 * .def: (config, outputDir) => undefined
 *   config: Object
 *     name: String 书名
 *     lang: String 语言 默认en
 *     author: String 作者 默认pashangshangpo
 *     publisher: String 版权 默认Pashangshangpo & Co.
 *     date: String 时间 默认今年
 *     cover: String 封面图片路径
 *     chapters: Array [Item] 章节
 *       Item: Ojbect
 *         title: String 标题
 *         content: String html内容
 *         imgs: Array 内容中的所有图片路径, 如果不写此项则不会去解析和下载content中的图片
 *     outputDir: String 输出目录
 */
 ```