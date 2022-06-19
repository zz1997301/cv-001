let span1 = document.querySelector('#span1');
let style = document.querySelector('#style');
let string = `
/** 你好，我是小张
下面将给大家画一个太极图
首先这边一个div**/
#div1 {
    border: 1px solid red;
    width: 200px;
    height:200px;
}
/** 需要先把外围的⚪画出来的哈 **/
#div1 {
    border-radius: 50%;
    border:none;
    box-shadow: 0 0 3px rgba(0,0,0,0.3);
}
/**众所周知，太极是分为两级的，因此先把颜色进行区分**/
#div1 {
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/** 阴阳是有两个风火轮一样的 **/
#div1::before {
    content: '';
    display:block;
    border:1px solid red;
    height:100px;
    width:100px;
    top:0;
    left:50%;
    transform:translate(-50px);
    border-radius:50%;
    border:none;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
    content: '';
    display:block;
    border:1px solid red;
    height:100px;
    width:100px;
    bottom:0;
    left:50%;
    transform:translate(-50px);
    border-radius:50%;
    border:none;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 24%, rgba(255,255,255,1) 24%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = '';

let n = -1;
span1.innerHTML = string.substring(0,n);

// let step = ()=>{
//     setTimeout(() => {
//         if(n <= string.length - 1){
//             n = n + 1;
//             span1.innerHTML = string.substring(0,n);
//             step()
//         }
//     }, 500);

// }

function step() {
    setTimeout(() => {
        n = n + 1;
        if(string[n] === '\n'){
            string2 += '<br/>';
        }else if(string[n] === ' '){
            string2 += '&nbsp;';
        }else {
            string2 += string[n];
        }
            
        span1.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0.,9999)
        span1.scrollTo(0,9999)
        if(n < string.length -1){
            step()
        }
    }, 10);
}
step()






