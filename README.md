# 将最新版的memos嵌入hexo
注意memos的版本号（Version: v0.22.4），我是最近的memos版本。
在网上找到的一些js脚本他使用的api是memos旧版的，导致无法获取到memos的数据。这边直接修改js代码使其正常工作。

网上找了个解决方案，原链接丢了，如您感兴趣可以自行搜索最初的脚本来源，本文仅记录整个js的api升级注意事项。
总共需要引入四个脚本，其中三个都是功能脚本，可以尝试找cdn上的源，需要修改的是memos.js脚本，使其兼容最新api。

![](https://wiki.vrast.cn/assets/files/2024-09-04/1725459527-54992-image.png)

## 修改
旧版的api使用上面注释的，下面对应的则是修改后的
新版缩略图的api很有意思，是在url的最后添加 `?thumbnail=true` 与七牛云的api有点类似。

```
// var bbUrl = memos + "api/v1/memo?creatorId=" + bbMemo.creatorId + "&rowStatus=NORMAL&limit=" + limit; 
 
var bbUrl = memos + "api/v1/memos?filter=creator=='users/"+ bbMemo.creatorId + "'&&visibilities=='PUBLIC'&&pageSize=" + limit;

//resUrl += '<a target="_blank" rel="noreferrer" href="' + memos + 'o/r/' + resources[j].id + '/' + resources[j].filename + '">' + resources[j].filename + '</a>' 
resUrl += '<a target="_blank" rel="noreferrer" href="' + memos + 'flie/' + resources[j].name + '/' + resources[j].filename + '?thumbnail=true">' + resources[j].filename + '</a>' 


// imgUrl += '<figure class="gallery-thumbnail"><img class="img thumbnail-image" src="' + memos + 'o/r/' + resources[j].id + '/' + resources[j].filename + '"/></figure>'
imgUrl += '<figure class="gallery-thumbnail"><img class="img thumbnail-image" src="' + memos + 'file/' + resources[j].name + '/' + resources[j].filename + '?thumbnail=true"/></figure>'
 
```



## Github地址
我已经整理好了修改后的脚本并且提交到github了。如果你感兴趣，可以在下面的地址获取所有代码。

其中 marked.js 我找到一个CDN 替换脚本：
> marked.js  -> https://cdn.bootcdn.net/ajax/libs/marked/14.0.0/marked.min.js

## 演示地址
> https://vrast.cn/talking/

## 效果图
![](https://wiki.vrast.cn/assets/files/2024-09-04/1725460066-104481-image.png)
