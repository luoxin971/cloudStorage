// extract proxy node list from subscribe url 
// and write into another yaml file
// 将订阅链接中的节点信息提取出来，另存为一个 yaml 文件
// 仅用于 clash 中的 parser

const { title } = require('process')

module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) => {
    // origin yaml
    const obj = yaml.parse(raw)
    // proxies nodes
    const nodes = obj.proxies
    // yaml -> string
    const content = yaml.stringify({proxies: nodes})
    // import fs to write file
    const fs = require('fs')
    const file_path = '/home/xin/.config/clash/proxies/'
    const file_name = `${name}.yaml`
    fs.writeFile(file_path+file_name, content, err => {
        if (err) {
            console.error(err)
	        return
        }
    })
    // system notify
    notify('clash update', `${name} nodes have been written into  ${file_name}!`, false)
    
    return yaml.stringify(obj)
}
