var fs = require('fs');

function getList(){
    var list='';
    fs.readdirSync("./public/images").forEach((file) => {
        list+=`<a href="../image/${file}" id="imageLink"><img src="../images/${file}" id="imageThumbnail"></a>`;
    });
    return list;
}

module.exports = {
    HTML:function(){
        var list = getList();
        return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="/stylesheets/style.css">
                <title>소혜 DB</title>
            </head>
            <body>
                <div id="header">
                    <h1>소혜 데이터베이스</h1>
                    <img src="/cover.png" alt="cover" class="headImage">
                    <ul class="navigator">
                        <li class="category"><a href="/" class="link">홈</a></li>
                        <li class="category"><a href="/image" class="link">갤러리</a></li>
                        <li class="category"><a href="/image/upload" class="link">업로드</a></li>
                    </ul>
                    <br/>
                </div>
                <div id="content">
                    ${list}
                </div>
            </body>
        </html>
        `;
    }
}