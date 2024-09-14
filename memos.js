var bbMemo = { memos: '', limit: '10', creatorId: '101', domId: '#bber',walineUrl:'' }
if (typeof (bbMemos) !== "undefined") { for (var key in bbMemos) { if (bbMemos[key]) { bbMemo[key] = bbMemos[key]; } } }
function loadCssCode(code) { var style = document.createElement('style'); style.type = 'text/css'; style.rel = 'stylesheet'; style.appendChild(document.createTextNode(code)); var head = document.getElementsByTagName('head')[0]; head.appendChild(style); }
var allCSS = "#bber{margin-top:2em;width:auto !important;}.bb-timeline pre{color:#aaa;}.bb-timeline ul{margin:0;padding:0;}.bb-timeline ul li{list-style-type:none;margin-bottom:3rem;}.bb-timeline ul li .datacont ul li{margin-bottom:0;}.bb-timeline ul li .bb-div{padding:.6rem 1rem;border:0px solid #666;}.bb-load button{font-size:.8rem;font-style:italic;background:none;border-radius:0;border:1px solid #666;padding:10px 30px;width:100%;letter-spacing:0.8rem;}.bb-timeline ul li .datatime{display:flex;width:16px;line-height:18px;font-size:14px;text-align:center;border-right:1px solid rgba(0,0,0,0.35);padding:0 22px 8px 0;float:left;margin-right:1rem;overflow:hidden;max-height:100px;}.bb-timeline ul li .datacont{margin:0 0 0 3.2rem;min-height:88px;}.bb-timeline ul li .datacont img[src*='emotion']{display:inline-block;width:auto;}.bb-timeline ul li .datafrom{color:#aaa;font-size:0.75em !important;font-style:italic;}.bb-timeline ul li p{margin:0;font-size:16px;letter-spacing:1px;line-height:28px;min-height:18px;margin:0;}.bb-timeline pre p{display:inline-block;}.bb-timeline pre p:empty{display:none;}.dark .bb-timeline ul li .datatime{border-color:#666;}.dark .bb-timeline ul li .bb-div p,.dark .bb-timeline .bb-load button{color:#fafafa;}.dark .bb-timeline ul li .bb-div p svg{fill:#fafafa;}.dark .bb-timeline ul li .datafrom{color:#aaa;}.datacont p{magin:0;}.datacont blockquote{font-family: KaiTi,STKaiti,STFangsong !important;margin:0 0 0 1rem;padding:.25rem 2rem;position: relative;border-left:0 none;}.datacont blockquote::before{line-height: 2rem;content: '“';font-family: Georgia, serif;font-size: 28px;font-weight: bold;position: absolute;left: 10px;top:5px;}.datacont .tag-span{color:#42b983;}.datasource a{color:#fafafa;background:#3b3d42;padding:2px 8px;margin:0 6px 0 0;border-radius:5px;font-size:.9rem;font-weight:400;}.datacont .img{cursor:pointer;border-radius:4px;}.datacont .img.square{height:180px;width:180px;object-fit:cover;}.resimg.grid{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:auto;gap:4px;width:calc(100%* 2 / 3);box-sizing:border-box;margin:4px 0 0;}.resimg.grid-2{grid-template-columns:repeat(2,1fr);width:80%;}.resimg.grid-4{grid-template-columns:repeat(2,1fr);width:calc(80% * 2 / 3);}.resimg.grid figure.gallery-thumbnail{position:relative;width:100%;cursor:zoom-in;}.resimg figure{text-align:left;max-height:50%;}.resimg figure img{}.resimg.grid figure,figcaption{margin:0 !important;}.resimg.grid figure.gallery-thumbnail > img.thumbnail-image{position:absolute;left:0;top:0;display:block;width:100%;height:100%;object-fit:cover;object-position:50% 50%;}#bb-footer{margin:5rem auto 1rem;text-align:center;}#bb-footer p{margin:0 0 0.6rem;}.bb-allnums{letter-spacing:2px;}.bb-allpub{text-decoration:none;font-style:italic;}.bb-timeline ul li::before{content:none;}.post-preview{max-width:680px;height:210px;margin:1em auto;position:relative;display:flex;background:#fff;border-radius:4px;box-shadow:0 1px 2px rgba(0,0,0,.25),0 0 1px rgba(0,0,0,.25);}.post-preview--meta{width:75%;padding:25px;overflow:hidden;}.post-preview--middle {line-height:28px;}.post-preview--title {font-size:18px;margin:0!important;}.post-preview--title a{text-decoration:none;}.post-preview--date{font-size:14px;color:#999;}.post-preview--excerpt{font-size:14px;line-height:1.825;}.post-preview--excerpt p{display: inline;margin: 0;}.post-preview--image {object-fit:cover;height:auto;width:25%;float:right;border-top-right-radius: 2px!important;border-bottom-right-radius:2px!important;border-top-left-radius:0!important;border-bottom-left-radius:0!important;}@media (max-width:550px) {.post-preview {width:95%;height:120px;}.post-preview--meta{padding:15px;}.post-preview--image{height:120px!important;}.post-preview--excerpt{display:none;}.post-preview--middle {line-height:19px;}}.rating{display:block;line-height:15px;}.rating-star{display:inline-block;width:75px;height:15px;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAClCAYAAAAUAAAYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5xJREFUeNrs3T9rFEEcxvG7qEQIglaCICKkin9AUEtBKxU7wS61VlYivgWj70TtNFj5BqzE7qxEWwsxKIoYn4UtluFmbm8nczvzm+/BjxyuDwNzu3uXD0+46f7LC5PA45Hm+WTYw1x2LRDc0jzTXB+wqMlsaLPutz8fDFjYZHYauAz3NBvt83XNnyUWNpn1nVm3OsHmsb3EomazzZnVXKMPNcc0xzUnNKc0Rzv/77fms+Z7O3vt9b1eU7bZrNN68l5zcolX4ofmsuZXTdnmMvyi2dR86Bmcac62P6vKrnVubpc0bxYE32nOab45N8YqsvPeDfcD4SOav4HjprPuu+H5BTt9LXDMfNbdLPfT678Fx6vKupt1o/O8+R3pkOaJ5/iktqx7z/qp+aq5q/nY+fczmheaK03Gs7D5rLtZdzSvA6/Ebc2u55j57HQB0TzW7AzkjiKzny6+2hlKNE8juMNcFqKBaIZndRlCNBBNgmx7ZkE0fbLtZkE0EA1EM17WuQwhGogGooFoss6296y52cNO+J6HLJoPaFdbsvA9zGerIxrPh85eWYgGooFoDiQbuAxp0UA0EVmdWbRo+ma1WbRoIBqIZtzsnHdDWjQQDUQD0WSbde5ZS2UhmtqJJtSEiVkXooFoIJre2VATJmZdiKZ2ogk1YSb8oVMvDeUPnSAaiCaPJkzMuhANRAPRQDQpsqEmTMy6EI11oolpwkA0EA1EcyDZmCYMRAPR+LMxTZjqiCamCQPRQDQQzehNGIgGooFoIJpVZ2OaMBBN7USTqgkD0UA0EE3vbKomDERTO9GkasKYJJpUTRiIBqKBaEZvwkA0EA1EA9GkyKZqwkA01olmrCYMRAPRQDR9LkO+0QmiKbAJUyTRjNWEgWggGohm9CYMRAPRQDQQzZDsWE0YiMYC0eTYhIFoIJrKiCbHJgxEY4FocmzCZEs0OTZhIBqIpjKiybEJA9FANBANROPL5tiEgWhKIJoSmzAQDURjjGhKbMJANCUQTYlNmNGIpsQmDEQD0RgjmhKbMBANRAPR1Es0JTZhIJpciMZaEwaigWgKJBprTRiIJheisdaESUo01powEA1EUyDRWGvCQDQQDURjm2isNWEgmlURzWw2q4pZIBqIJkOiCVyGJpkFolkV0ejMMvel28mIRptl7ku3IRqIpjCimfNuaJpZIBqIBqIpm2ice5Z5ZonJupvVkMRu4JW4qXnrOWY++1+AAQBw9BJSCTeN9wAAAABJRU5ErkJggg==);overflow:hidden;}.allstar10{background-position:0px 0px;}.allstar9{background-position:0px -15px;}.allstar8{background-position:0px -30px;}.allstar7{background-position:0px -45px;}.allstar6{background-position:0px -60px;}.allstar5{background-position:0px -75px;}.allstar4{background-position:0px -90px;}.allstar3{background-position:0px -105px;}.allstar2{background-position:0px -120px;}.allstar1{background-position:0px -135px;}.allstar0{background-position:0px -150px;}.rating-average{color:#777;display:inline-block;font-size:13px;margin-left:10px;}.dark .post-preview{background: #3b3d42;}.video-wrapper{position:relative;padding-bottom:55%;width:100%;height:0}.video-wrapper iframe{position:absolute;height:100%;width:100%;}"
loadCssCode(allCSS); var limit = bbMemo.limit
var memos = bbMemo.memos
var page = 1, offset = 0, nextLength = 0, nextDom = ''; var bbDom = document.querySelector(bbMemo.domId); var load = '<div class="bb-load"><button class="load-btn button-load">加载中……</button></div>'
if (bbDom) {
    getFirstList()
    var btn = document.querySelector("button.button-load"); btn.addEventListener("click", function () {
        btn.textContent = '加载中……'; updateHTMl(nextDom)
        if (nextLength < limit) {
            document.querySelector("button.button-load").remove()
            return
        }
        getNextList()
    });
}

var nextPageToken = '';

function getFirstList() {
    bbDom.insertAdjacentHTML('afterend', load); 

    // var bbUrl = memos + "api/v1/memo?creatorId=" + bbMemo.creatorId + "&rowStatus=NORMAL&limit=" + limit; 
    // https://os.vrast.cn/api/v1/memos?filter=creator=='users/1'&&visibilities=='PUBLIC'&
    var bbUrl = memos + "api/v1/memos?filter=creator=='users/"+ bbMemo.creatorId + "'&&visibilities=='PUBLIC'&&pageSize=" + limit;
    // var bbUrl = memos + '&pageSize=' + limit;
    
    fetch(bbUrl).then(res => res.json()).then(resdata => {

        nextPageToken = resdata.nextPageToken;//获取token
        resdata = resdata.memos;
        updateHTMl(resdata)

        var nowLength = resdata.length
        if (nowLength < limit) {
            document.querySelector("button.button-load").remove()
            return
        }
        page++
        offset = limit * (page - 1)
        getNextList()
    });
}
function getNextList() {
    // var bbUrl = memos + "api/v1/memo?creatorId=" + bbMemo.creatorId + "&rowStatus=NORMAL&limit=" + limit + "&offset=" + offset; 
    // var bbUrl = memos + '&pageSize=' + limit + '&pageToken=' + nextPageToken;
    var bbUrl = memos + "api/v1/memos?filter=creator=='users/"+ bbMemo.creatorId + "'&&visibilities=='PUBLIC'&&pageSize=" + limit + '&pageToken=' + nextPageToken;

    fetch(bbUrl).then(res => res.json()).then(resdata => {
        resdata = resdata.memos;

        nextDom = resdata
        nextLength = nextDom.length
        page++
        offset = limit * (page - 1)
        if (nextLength < 1) {
            document.querySelector("button.button-load").remove()
            return
        }
    })
}
String.format = function() {
  if (arguments.length == 0)
      return null;
  var str = arguments[0];
  for ( var i = 1; i < arguments.length; i++) {
      var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
      str = str.replace(re, arguments[i]);
  }
  return str;
  /*
  调用方式：
      var info = "我喜欢吃{0}，也喜欢吃{1}，但是最喜欢的还是{0},偶尔再买点{2}。";
      var msg=String.format(info , "苹果","香蕉","香梨")
      alert(msg);
      输出:我喜欢吃苹果，也喜欢吃香蕉，但是最喜欢的还是苹果,偶尔再买点香梨。
  */
};

function updateHTMl(data) {
    var result = "", resultAll = ""; const TAG_REG = /#([^\s#]+?) /g, BILIBILI_REG = /<a.*?href="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))\/?".*?>.*<\/a>/g, NETEASE_MUSIC_REG = /<a.*?href="https:\/\/music\.163\.com\/.*id=([0-9]+)".*?>.*<\/a>/g, QQMUSIC_REG = /<a.*?href="https\:\/\/y\.qq\.com\/.*(\/[0-9a-zA-Z]+)(\.html)?".*?>.*?<\/a>/g, QQVIDEO_REG = /<a.*?href="https:\/\/v\.qq\.com\/.*\/([a-z|A-Z|0-9]+)\.html".*?>.*<\/a>/g, YOUKU_REG = /<a.*?href="https:\/\/v\.youku\.com\/.*\/id_([a-z|A-Z|0-9|==]+)\.html".*?>.*<\/a>/g, YOUTUBE_REG = /<a.*?href="https:\/\/www\.youtube\.com\/watch\?v\=([a-z|A-Z|0-9]{11})\".*?>.*<\/a>/g; marked.setOptions({ breaks: !0, smartypants: !0, langPrefix: 'language-' }); for (var i = 0; i < data.length; i++) {
        var bbContREG = data[i].content.replace(TAG_REG, "<span class='tag-span'>#$1</span> ")
        bbContREG = marked.parse(bbContREG).replace(BILIBILI_REG, "<div class='video-wrapper'><iframe src='//player.bilibili.com/player.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'></iframe></div>").replace(NETEASE_MUSIC_REG, "<meting-js auto='https://music.163.com/#/song?id=$1'></meting-js>").replace(QQMUSIC_REG, "<meting-js auto='https://y.qq.com/n/yqq/song$1.html'></meting-js>").replace(QQVIDEO_REG, "<div class='video-wrapper'><iframe src='//v.qq.com/iframe/player.html?vid=$1' allowFullScreen='true' frameborder='no'></iframe></div>").replace(YOUKU_REG, "<div class='video-wrapper'><iframe src='https://player.youku.com/embed/$1' frameborder=0 'allowfullscreen'></iframe></div>").replace(YOUTUBE_REG, "<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='YouTube Video'></iframe></div>")
        if (data[i].resources && data[i].resources.length > 0) {
            var resources = data[i].resources; var imgUrl = '', resUrl = '', resImgLength = 0; for (var j = 0; j < resources.length; j++) {
                var restype = resources[j].type.slice(0, 5); if (restype == 'image') {
                    // imgUrl += '<figure class="gallery-thumbnail"><img class="img thumbnail-image" src="' + memos + 'o/r/' + resources[j].id + '/' + resources[j].filename + '"/></figure>'
                    imgUrl += '<figure class="gallery-thumbnail"><img class="img" src="' + memos + 'file/' + resources[j].name + '/' + resources[j].filename + '?thumbnail=true"/></figure>'
                    resImgLength = resImgLength + 1
                }
                if (restype !== 'image') 
                {
                    //  resUrl += '<a target="_blank" rel="noreferrer" href="' + memos + 'o/r/' + resources[j].id + '/' + resources[j].filename + '">' + resources[j].filename + '</a>' 
                    resUrl += '<a target="_blank" rel="noreferrer" href="' + memos + 'flie/' + resources[j].name + '/' + resources[j].filename + '?thumbnail=true">' + resources[j].filename + '</a>' 
                }
            }
            if (imgUrl) {
                var resImgGrid = ""
                if (resImgLength !== 1) { var resImgGrid = "grid grid-" + resImgLength }
                bbContREG += '<div class="resimg ' + resImgGrid + '">' + imgUrl + '</div></div>'
            }
            if (resUrl) { bbContREG += '<p class="datasource">' + resUrl + '</p>' }
        }

        result += "<li class='bb-list-li'><div class='bb-div'><div class='datatime'>" + new Date(data[i].createTime).toLocaleString() + "</div><div class='datacont'>" + bbContREG + '<a class="memos_talk"  id={0} onclick="loadtalk(this)">评论</a><div id={0}-content></div>' + "</div></div></li>"
        result = String.format(result,data[i].uid)
    }
    var bbBefore = "<section class='bb-timeline'><ul class='bb-list-ul'>"
    var bbAfter = "</ul></section>"
    resultAll = bbBefore + result + bbAfter
    bbDom.insertAdjacentHTML('beforeend', resultAll); fetchDB()
    document.querySelector('button.button-load').textContent = '加载更多'; window.ViewImage && ViewImage.init('.datacont img')
    window.Lately && Lately.init({ target: '.datatime' });
}

function loadtalk(e) {

  let id = e.getAttribute("id");
  let talkDom = document.getElementById(`${id}-content`);


  if (document.getElementById("waline")) {
    document.getElementById("waline").remove()
  }

  let talkContent = "<div class='nofancybox' id='waline'></div>";
  talkDom.insertAdjacentHTML('beforeend', talkContent);


  let metaInfo = ['nick', 'mail', 'link']
  let requiredMeta = 'nick,mail,link'.split(',').filter(item => {
    return metaInfo.indexOf(item) > -1
  })

  let post_index = window.location.pathname.replace(/\/$/,'') + String.format("/talk_page/{0}",id);
  Waline.init({
    el: '#waline',
    comment: true,
    path:post_index,
    serverURL: bbMemo.walineUrl,
    pageSize: '15',
    wordLimit: '500',
    requiredMeta,
    locale: {
      level0: '学步中',
      level1: '幼稚园',
      level2: '小学生',
      level3: '初中生',
      level4: '高中生',
      level5: '大一萌新',
      level6: '大二学霸',
      level7: '大三精英',
      level8: '大四前辈',
      level9: '超级毕业生'
    },
  })
}

function fetchDB() {
    var dbAPI = "https://douban.edui.fun/"; var dbA = document.querySelectorAll(".bb-timeline a[href*='douban.com/subject/']:not([rel='noreferrer'])") || ''; if (dbA) {
        for (var i = 0; i < dbA.length; i++) {
            _this = dbA[i]
            var dbHref = _this.href
            var db_reg = /^https\:\/\/(movie|book)\.douban\.com\/subject\/([0-9]+)\/?/; var db_type = dbHref.replace(db_reg, "$1"); var db_id = dbHref.replace(db_reg, "$2").toString(); if (db_type == 'movie') {
                var this_item = 'movie' + db_id; var url = dbAPI + "movies/" + db_id; if (localStorage.getItem(this_item) == null || localStorage.getItem(this_item) == 'undefined') {
                    fetch(url).then(res => res.json()).then(data => {
                        let fetch_item = 'movies' + data.sid; let fetch_href = "https://movie.douban.com/subject/" + data.sid + "/"
                        localStorage.setItem(fetch_item, JSON.stringify(data)); movieShow(fetch_href, fetch_item)
                    });
                } else { movieShow(dbHref, this_item) }
            } else if (db_type == 'book') {
                var this_item = 'book' + db_id; var url = dbAPI + "v2/book/id/" + db_id; if (localStorage.getItem(this_item) == null || localStorage.getItem(this_item) == 'undefined') {
                    fetch(url).then(res => res.json()).then(data => {
                        let fetch_item = 'book' + data.id; let fetch_href = "https://book.douban.com/subject/" + data.id + "/"
                        localStorage.setItem(fetch_item, JSON.stringify(data)); bookShow(fetch_href, fetch_item)
                    });
                } else { bookShow(dbHref, this_item) }
            }
        }
    }
}
function movieShow(fetch_href, fetch_item) {
    var storage = localStorage.getItem(fetch_item); var data = JSON.parse(storage); var db_star = Math.ceil(data.rating); var db_html = "<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' rel='noreferrer' href='" + fetch_href + "'>《" + data.name + "》</a></h4><div class='rating'><div class='rating-star allstar" + db_star + "'></div><div class='rating-average'>" + data.rating + "</div></div><time class='post-preview--date'>导演：" + data.director + " / 类型：" + data.genre + " / " + data.year + "</time><section style='max-height:75px;overflow:hidden;' class='post-preview--excerpt'>" + data.intro.replace(/\s*/g, "") + "</section></div></div><img referrer-policy='no-referrer' loading='lazy' class='post-preview--image' src=" + data.img + "></div>"
    var db_div = document.createElement("div"); var qs_href = ".bb-timeline a[href='" + fetch_href + "']"
    var qs_dom = document.querySelector(qs_href)
    qs_dom.parentNode.replaceChild(db_div, qs_dom); db_div.innerHTML = db_html
}
function bookShow(fetch_href, fetch_item) {
    var storage = localStorage.getItem(fetch_item); var data = JSON.parse(storage); var db_star = Math.ceil(data.rating.average); var db_html = "<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' rel='noreferrer' href='" + fetch_href + "'>《" + data.title + "》</a></h4><div class='rating'><div class='rating-star allstar" + db_star + "'></div><div class='rating-average'>" + data.rating.average + "</div></div><time class='post-preview--date'>作者：" + data.author + " </time><section style='max-height:75px;overflow:hidden;' class='post-preview--excerpt'>" + data.summary.replace(/\s*/g, "") + "</section></div></div><img referrer-policy='no-referrer' loading='lazy' class='post-preview--image' src=" + data.images.medium + "></div>"
    var db_div = document.createElement("div"); var qs_href = ".bb-timeline a[href='" + fetch_href + "']"
    var qs_dom = document.querySelector(qs_href)
    qs_dom.parentNode.replaceChild(db_div, qs_dom); db_div.innerHTML = db_html
}
