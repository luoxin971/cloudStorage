
module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) => {
    const obj = yaml.parse(raw)
    const content = 'something'
    console.log(content)

    const fs = require('fs')
    fs.writeFile('./abcdefg.txt', content, {flag: 'a+' }, err => {
        if (err) {
            console.error(err)
	    return
        }
    })
    
    return yaml.stringify(obj)
}
