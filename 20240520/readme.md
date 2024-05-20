# 20240550

## 手風琴選單

- 開啟時
   - `+` -> `-`
   - 內容展開

- 使用`:checked`來處理狀態切換
   - `checkbox` -> 多項目展開
   - `radio` -> 單項目展開

`accrodion.html`

### 單選

- 結構與多選一樣，可直接複製多選結構。
- 將 `checkbox` 改為 `radio` 並且給予同樣的 `name` 值。

### 步驟拆解

```html
<div class="accrodion-item">
    <input type="checkbox" class="accrodion-switch" id="accrodion-multi-1">
    <label for="accrodion-multi-1" class="accrodion-header">
        <div>One</div>
        <div class="accrodion-to-open">+</div>
        <div class="accrodion-to-close">-</div>
    </label>
    <div class="accrodion-body zh-tw">我是第一個問題回答</div>
</div>
```

1.預設`accrodion-to-close`隱藏，`accrodion-to-open`顯示

```css
.accrodion-wrap .accrodion-to-close {
    display: none;
}
```

2.預設accrodion-body隱藏

```css
.accrodion-wrap .accrodion-body {
    padding: 10px;
    border: 1px solid #1a63b6;
    display: none;
}
```

3.`accrodion-switch:checked`時

3-1. `accrodion-to-close`顯示，`accrodion-to-open`隱藏

```css
.accrodion-wrap .accrodion-switch:checked~.accrodion-header .accrodion-to-open {
    display: none;
}

.accrodion-wrap .accrodion-switch:checked~.accrodion-header .accrodion-to-close {
    display: block;
}
```

3-2. `accrodion-body`顯示

```css
.accrodion-wrap .accrodion-switch:checked~.accrodion-body {
    display: block;
}
```

## 位置

使用`position`屬性

- `relative` 浮貼，有`z-index`屬性可用，會佔據原本位置
- `absolute` 遮住，有`z-index`屬性可用，不會佔據原本位置
- `fixed` 遮住，有`z-index`屬性可用，不會佔據原本位置

### z-index

- 圖層的概念，數字越高代表圖層越高
- 當數字相同時，後者蓋住前者

`position.html`

<div class="wrap">
    <div class="item relative">R1</div>
    <div class="item absolute">A</div>
    <div class="item relative">R2</div>
</div>
.wrap {
    padding: 20px;
    border: 1px solid #505050;
}

.wrap .item {
    width: 100px;
    height: 100px;
    background: #dedede;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.wrap .relative {
    background: red;
    position: relative;
    /* opacity: 0.2; */
    z-index: 1;
}

.wrap .absolute {
    background: yellow;
    color: red;
    position: absolute;
    z-index: 1; /* 調整數字觀察 */
    opacity: 0.5;
}