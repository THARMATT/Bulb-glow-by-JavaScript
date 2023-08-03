let a=document.querySelector(".circle")
let c=document.querySelector(".rectangle")
// a.style.backgroundColor:"red"
let b=document.querySelector("button")

let flag=0;
b.addEventListener('click',function(){
    if(flag==0){
        a.style.backgroundColor="yellow"
        c.style.backgroundColor="yellow"
    b.innerHTML="OFF"
flag=1;
    }
    else{
        a.style.backgroundColor="rgb(229, 202, 202)"
        c.style.backgroundColor="rgb(229, 202, 202)"
    b.innerHTML="ON"
flag=0;
    }
})
