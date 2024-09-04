---
title: 最近又记录了一些内容
date: 2024-09-04 15:36:16
comments: true
---


{% raw %}
<div class="container">
  <p>共发表了 <span id="total">0</span> 条.</p>
</div>
<script>
    var bbMemos = {
    memos : "https://os.vrast.cn/",
    limit : '10',
    creatorId:'1' ,
    domId: '#bber',
  }

  function getTotal() {
    var totalUrl = bbMemos.memos + "api/v1/memos?filter=creator=='users/"+ bbMemos.creatorId + "'&&visibilities=='PUBLIC'";

    fetch(totalUrl).then(res => res.json()).then(resdata => {
      if (resdata) {
        var allnums = resdata.memos.map(memo => {
          const match = memo.name.match(/\d+/);
          return match ? parseInt(match[0], 10) : null;
        }).filter(num => num !== null);

        var memosCount = document.getElementById('total');
        memosCount.innerHTML = allnums.length;
      }
    }).catch(err => {});
  };
  window.onload = getTotal();
</script>

<div id="bber"></div>
<script src="./memos.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/marked/14.0.0/marked.min.js"></script>
<script src="./view-image.min.js"></script>
<script src="./lately.min.js"></script>
{% endraw %}