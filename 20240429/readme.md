# 20240429

## video tag

下載 `3Mb` 影片檔案，放置到 `assets/video` 資料夾內。

`video_tag.html`

```html
<style>
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .video-player {
        width: 500px;
        margin: 20px auto;
    }

    .video-player video {
        max-width: 100%;
    }
</style>

<div class="video-player">
    <video controls loop autoplay muted>
        <source src="./assets/video/sample.mp4" type="video/mp4">
    </video>
</div>
```

### 屬性

- controls 顯示控制項目

- muted 靜音

- loop 循環播放

- autoplay 自動播放，因為瀏覽器限制需搭配`muted` 才會自動播放

## 背景影片播放

`background_video.html`

```html
<style>
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .wrap {
        width: 100%;
        height: 100vh;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .video-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .slogan {
        position: relative;
        z-index: 3;
        color: #fff;
        font-size: 50px;
        font-weight: 600;
    }

    .mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: #0000003f;
    }
</style>

<div class="wrap">
    <h1 class="slogan">Hello World!</h1>
    <video autoplay loop muted class="video-bg">
        <source src="./assets/video/sample.mp4" type="video/mp4">
    </video>
    <div class="mask"></div>
</div>
```

## iframe
[COS](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS)

### 使用 google map

`分享` > `嵌入地圖`

### 使用 YT
`分享` > `嵌入影片`

***部分影片無法在頁面上撥放***

`iframe_tag.html`

```html
<style>
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .title {
        text-align: center;
        font-size: 40px;
        margin: 15px auto;
    }

    .map-wrap {
        margin-bottom: 20px;
    }

    .map-wrap iframe {
        width: 100%;
    }

    .yt-wrap {
        margin: auto;
        text-align: center;
    }
</style>

<h1 class="title">聯絡我們</h1>
<div class="map-wrap">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.4131762040997!2d120.66118968666713!3d24.157238317343424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d78069134cb%3A0xf7a65bba8f974f36!2z5ZyL56uL6Ieq54S256eR5a245Y2a54mp6aSo!5e0!3m2!1szh-TW!2stw!4v1714389902266!5m2!1szh-TW!2stw"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

<div class="yt-wrap">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/33hE0Z0iNys?si=melYgeH9EiGgzt8u"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
```

