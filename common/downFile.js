/**
 * @file 下载文件
 * @author pashangshangpo
 * @createTime 2018年5月17日 下午3:23:10
 */

const fs = require('fs')
const http = require('http')
const https = require('https')
const { basename, join } = require('path')

module.exports = (url, outDir) => {
    let type = http
    if (url.indexOf('https') === 0) {
        type = https
    }

    return new Promise((resolve, reject) => {
        let req = null
        let requestTimer = setTimeout(() => {
            reject()
            req && req.abort()
        }, 5000)

        req = type.get(url, res => {
            clearTimeout(requestTimer)

            let responseTimer = setTimeout(() => {
                reject()
                res.destroy()
            }, 60000)

            let data = ''

            res.setEncoding('binary')
            res.on('data', chunk => {
                data += chunk
            })
            res.on('end', () => {
                clearTimeout(responseTimer)

                fs.writeFile(join(outDir, basename(url)), data, 'binary', err => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    
                    resolve()
                })
            })
        }).on('error', () => {
            clearTimeout(requestTimer)
            reject()
        })
    })
}