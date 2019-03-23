module.exports = {
    HTML:function(id){
        var fileName = `../images/${id}`;
        return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/stylesheets/style.css">
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
                    <div id="imageGrid">
                        Rendering...
                    </div>

                    <script type="text/javascript">
                        document.getElementById('imageGrid').innerHTML = '<img src="${fileName}" id="imageDetail">';
                    </script>
                </div>
            </body>
        </html>
        `;
    }
}
