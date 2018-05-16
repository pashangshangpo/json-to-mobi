const jsonToMobi = require('./index')

jsonToMobi(
    {
        name: 'fs 模块',
        chapters: [
            {
                title: 'readFile()，readFileSync()',
                content: '<p>readFile方法的第一个参数是文件的路径，可以是绝对路径，也可以是相对路径。注意，如果是相对路径，是相对于当前进程所在的路径（process.cwd()），而不是相对于当前脚本所在的路径。</p><p>readFile方法的第二个参数是读取完成后的回调函数。该函数的第一个参数是发生错误时的错误对象，第二个参数是代表文件内容的Buffer实例。</p>'
            },
            {
                title: 'writeFile()，writeFileSync()',
                content: 'writeFile方法用于异步写入文件。'
            }
        ]
    },
    __dirname + '/books'
)