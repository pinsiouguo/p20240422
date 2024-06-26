let usernameInput = document.querySelector('#username');
let sayBtn = document.querySelector('#say-btn');
let responseBlock = document.querySelector('#response');

const sayHi = () => {
    let name = usernameInput.value;
    let message = `Hi, ${name}.`;
    responseBlock.innerHTML = message;
}

sayBtn.addEventListener('click', sayHi)

let a = 10;
let b = 20;

console.log(`a: ${a}, b: ${b}, a - b`);
if (a - b) {
    console.log('ok')
} else {
    console.log('no')
}

let c = 10;
let d = 10;

console.log(`c: ${c}, d: ${d}, c - d`);
if (c - d) {
    console.log('ok')
} else {
    console.log('no')
}