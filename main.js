let html = document.querySelector('#html')
let style = document.querySelector("#style")


let string = `/* 你好,我是叫奶思.
 * 接下来我要画一个太极图
 * 首先我需要一个div
 */ 
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我要把div1变成一个太极图
 * 看好啦！
 * 首先把他变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow:0px 0px 1px black;
    border:none;
}

/* 现在把八卦图变成一黑一白
 * 我们用gradient（渐变）的方法
 */
#div1{
    background: linear-gradient(90deg, rgba(10,10,10,1) 0%, rgba(8,8,8,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/* 加两个小球 */
#div1::before{
    width:100px;
    height:100px;
    left:50%;
    top:0px;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(5,5,5,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    border-radius:50%;
}

#div1::after{
    width:100px;
    height:100px;
    left:50%;
    bottom:0px;
    transform:translateX(-50%);
    background:radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(5,5,5,1) 100%);
    border-radius:50%;
}





`;

let n=0;
let string2 = ""

let step = ()=>{
    setTimeout(()=>{
        if(string[n]==='\n'){
            string2 +='<br>';
        }else if(string[n]===' '){
            string2 += "&nbsp";
        }else{
            string2 += string[n]
            }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);//JS里面不能出现像<br>的标签
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        n+=1;
        if(n<string.length){
            step();
        } 
    },50)
}
step();




