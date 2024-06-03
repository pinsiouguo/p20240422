# 20240603

## footer

```html
<div class="footer">
    <div class="container">
        <div class="footer-wrap">
            <div class="left">
                <img src="./assets/images/logo.svg" alt="">
            </div>
            <div class="right">
                <div>&copy;appedu 2024.</div>
            </div>
        </div>
    </div>
</div>
```

```css
.footer {
    background: #fff;
    padding: 30px 0;
}

.footer-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

## page-2 背景處理

```html
<div class="page" id="page_02">
    <div class="page-wrap">
        <div class="container">
            <div class="page-content">
                1234
            </div>
        </div>
    </div>
</div>
```

```css
#page_02 {
    background-image: url(../images/process.jpeg);
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
    color: #fff;
    padding: 50px 0;
}

#page-2::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000079;
    z-index: 1;
}
```

## .page-content

改為 for `#page-1`

```css
#page-1 .page-content>div {
    min-height: 300px;
    position: relative;
}

/* #page-1 .page-content>div:first-child {
    border-right: 3px dashed #fff;
    padding-right: 30px;
} */

#page-1 .page-content>div:first-child {
    padding-right: 30px;
}

#page-1 .page-content>div:first-child::after {
    content: '';
    position: absolute;
    width: 0;
    /** height 剩餘數值一半 */
    top: 5%;
    height: 90%;
    /** border-left-width 數值一半 */
    right: -2px;
    border-left: 4px dashed #fff;
}

#page-1 .page-content>div:last-child {
    padding-left: 30px;
}

#page-1 .page-content .text {
    line-height: 30px;
    text-align: justify;
}
```

## .slogan2

針對 `#page-2` 定義

```css
#page-2 .slogan2 {
    max-width: 300px;
    /* margin: auto;
    margin-bottom: 15px; */
    margin-left: auto;
    margin-right: auto;
}
```

## flow 中心線

```html
<div class="flow">
    <div class="flow-item">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
        <div>09</div>
        <div>10</div>
    </div>
</div>
```

```css
.flow {
    border: 1px solid #000;
    padding: 30px 0;
    position: relative;
}

.flow::before {
    content: '';
    position: absolute;
    width: 0;
    height: calc(100% - 60px);
    border-left: 4px dashed #fff;
    left: calc(50% - 2px);
    z-index: 1;
}

.flow-item {
    position: relative;
    z-index: 2;
}
```

## .flow-item

```html
<div class="flow-item">
    <div class="flow-circle"></div>
    <div class="flow-text">
        <h3>title</h3>
        <div>text</div>
    </div>
</div>
```

```css
.flow-item {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 20px 0;
}

.flow-item .flow-circle {
    width: 26px;
    height: 26px;
    border-radius: 26px;
    background: red;
}

.flow-item .flow-text {
    position: absolute;
    left: calc(50% + 50px);
    padding: 15px;
    background: rgb(7, 69, 150);
    color: #fff;
    border-radius: 8px;
    min-width: 300px;
}
```