# 20240501

## 表單

`form.html`

```html
<form action="" method="GET">
    <div>
        <label for="login-account">帳號</label>
        <input type="text" name="account" value="" placeholder="輸入帳號" id="login-account" />
    </div>
    <div>
        <input type="text" name="name" value="" placeholder="輸入名稱" />
    </div>
    <div>
        <input type="password" name="passowrd" value="" placeholder="輸入密碼" />
    </div>
    <div>
        <button type="submit">發送</button>
    </div>
    <div>
        <button type="button" onclick="sayHi()">我不會發送</button>
    </div>
</form>

<script>
    const sayHi = () => {
        alert('Hi, 我不會發送，但是我會打招呼!');
    }
</script>
```

## 會員登入實戰

`login.html`

```html
<style>
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .login-block {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        position: relative;
    }

    .login-block::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #00000067;
    }

    .login-wrap {
        position: relative;
        z-index: 2;
        width: 400px;
        height: 350px;
        background-color: #fff;
        border-radius: 8px;
        padding: 20px;
    }

    .login-block .slogan {
        text-align: center;
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    .login-block label {
        display: block;
        margin-bottom: 5px;
        font-weight: 600;
        font-size: 20px;
    }

    .login-block .item {
        margin-bottom: 20px;
    }

    .login-block .item input {
        width: 100%;
        height: 50px;
        padding: 10px;
        font-size: 18px;
        outline: 0;
        border: 1px solid #383838;
        border-radius: 8px;
    }

    .btn-wrap {
        text-align: right;
    }

    .btn-wrap button {
        padding: 10px 20px;
        border: 0;
        background: #154db5;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 1px;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.4s;
    }

    .btn-wrap button:hover {
        background: #ff2d2d;
    }
</style>

<div class="login-block">
    <div class="login-wrap">
        <h1 class="slogan">會員登入</h1>
        <form action="https://book.niceinfos.com/api/form/" method="GET">
            <div class="form-row">
                <div class="item">
                    <label for="login-account">帳號</label>
                    <input type="text" id="login-account" name="account" placeholder="輸入帳號" />
                </div>
                <div class="item">
                    <label for="login-password">密碼</label>
                    <input type="password" id="login-password" name="password" placeholder="輸入密碼" />
                </div>
            </div>
            <div class="btn-wrap">
                <button>登入</button>
            </div>
        </form>
    </div>
</div>
```