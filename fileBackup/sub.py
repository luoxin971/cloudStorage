#!/usr/bin/env python3
#-*- coding:utf-8 -*- 

"""
./script.py file_path subscribe_url 
替换文件中 www.luoxin.vip:25500/sub?target=... 的部分
主要目的是，自动更新 clash yaml 配置文件中的 dx(机场名) 的订阅链接
"""


from urllib.parse import quote
import sys
import re

def encode(url):
    return quote(url, 'utf-8')

file_path = sys.argv[1] 
url = sys.argv[2]

f1 = open(file_path, "r")
content = f1.read()
f1.close()

encode_url = encode(url)

t = re.sub("(?<=www\.luoxin\.vip:25500/sub\?target=clash&url=)(.*)(?=&insert)", encode_url, content )
# t = re.sub(r"(?<=www\.luoxin\.vip:25500/sub\?target=clash&url=)(.*)(?=&insert)", encode(url), content )

with open(file_path, "w") as f2:
    f2.write(t)

print(encode_url)