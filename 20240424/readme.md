# 20240424

## 網站組成範本

`web_base.html`
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>網頁組成範本</title>
</head>
<body>
    <div class="header">
        Header
    </div>
    <div class="main">
        Main
    </div>
    <div class="footer">
        Footer
    </div>
</body>
</html>
`


## 自動格式化

`ctrl` + `shift` + `p` > `format document`

## 存檔自動格式化

`ctrl` + `shift` + `p` > `Open Workspace Settings (JSON)`
`.vscode/settings.json` 加入

```json
{
    "editor.formatOnSave": true
}
```

目前設定
```json
{
    "liveServer.settings.root": "/",
    "liveServer.settings.CustomBrowser": "chrome",
    "liveServer.settings.file": "index.html",
    "editor.formatOnSave": true
}
```

