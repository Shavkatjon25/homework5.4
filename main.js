let plus=document.querySelector(".continer_amal_plus");
let minus=document.querySelector(".continer_amal_minus");
let kop=document.querySelector(".continer_amal_kopay");
let vaqt=document.querySelector(".test");
let javob="";
let amal=document.querySelector(".amal");
plus.addEventListener("click", function(){
    amal.textContent="+";
    const yoq=document.getElementById("uch");
    yoq.style.display="block"
})
minus.addEventListener("click", function(){
    amal.textContent="-";
    const yoq=document.getElementById("uch");
    yoq.style.display="block"
})
kop.addEventListener("click", function(){
    amal.textContent="*";
    const yoq=document.getElementById("uch");
    yoq.style.display="none"
})
let ox=document.querySelector(".x");
let oy=document.querySelector(".y");
let hona1=document.querySelector(".continer_hona_1");
let hona2=document.querySelector(".continer_hona_2");
let hona3=document.querySelector(".continer_hona_3");
let honson=0;
hona1.addEventListener("click", function(){
    honson=1;
    let bg=document.getElementById("bir");
    bg.style.backgroundColor="red";
    let bs=document.getElementById("ikki");
    bs.style.backgroundColor="cornflowerblue";
    let ba=document.getElementById("uch");
    bs.style.backgroundColor="cornflowerblue";
})
hona2.addEventListener("click", function(){
    honson=2;
    let bg=document.getElementById("bir");
    bg.style.backgroundColor="cornflowerblue";
    let bs=document.getElementById("ikki");
    bs.style.backgroundColor="red";
    let ba=document.getElementById("uch");
    ba.style.backgroundColor="cornflowerblue";
})
hona3.addEventListener("click", function(){
    hons=3;
    let bg=document.getElementById("bir");
    bg.style.backgroundColor="cornflowerblue";
    let bs=document.getElementById("ikki");
    bs.style.backgroundColor="cornflowerblue";
    let ba=document.getElementById("uch");
    ba.style.backgroundColor="red";
})



let bol1=false;
let bol2=false;
let bol3=false;
let bol4=false;
let bol=true
let sd=9;
let inson=document.querySelector(".odam");
let tex=document.querySelector(".kom");
function natija1(){
    inson.textContent=+inson.textContent+1;
};
function natija2(){
    tex.textContent=+tex.textContent+1;
};
let joy4=document.querySelector(".x4");
let joy1=document.querySelector(".x1");
let joy2=document.querySelector(".x2");
let joy3=document.querySelector(".x3");
joy1.addEventListener("click", function(){
   if(bol1){ natija1();}else{natija2()}
   bol=true;
   vaqt.textContent=sd;
})
joy2.addEventListener("click", function(){
    if(bol2){ natija1();}else{natija2()}
    bol=true;
    vaqt.textContent=sd;
 })
 joy3.addEventListener("click", function(){
    if(bol3){ natija1();}else{natija2()}
     bol=true;
     vaqt.textContent=sd;
 })
 joy4.addEventListener("click", function(){
    if(bol4){ natija1();}else{natija2()}
     bol=true;
     vaqt.textContent=sd;
 })
 let sd9=document.querySelector(".oson");
 sd9.addEventListener("click", function(){
    sd=9;
    sd9.style.backgroundColor="red";
    sd7.style.backgroundColor="rgb(76, 43, 226)";
    sd5.style.backgroundColor="rgb(76, 43, 226)";
})
 let sd7=document.querySelector(".odatiy");
 sd7.addEventListener("click", function(){
    sd=7;
    sd9.style.backgroundColor="rgb(76, 43, 226)";
    sd7.style.backgroundColor="red";
    sd5.style.backgroundColor="rgb(76, 43, 226)";
})
 let sd5=document.querySelector(".qiyin");
 sd5.addEventListener("click", function(){
    sd=5;
    sd9.style.backgroundColor="rgb(76, 43, 226)";
    sd7.style.backgroundColor="rgb(76, 43, 226)";
    sd5.style.backgroundColor="red";
})


let intr=null;



let inter=0;
let bosh=document.querySelector(".start")
bosh.addEventListener("click", function(){
    intr=setInterval(function(){
    while(bol){
    if(honson==1){
        ox.textContent=Math.ceil(Math.random()*9);
        oy.textContent=Math.ceil(Math.random()*9);
        javob=ox.textContent+amal.textContent+oy.textContent;
        javob=eval(javob);
    }
    if(honson==2){
        ox.textContent=Math.ceil(Math.random()*99);
        oy.textContent=Math.ceil(Math.random()*99);
        javob=ox.textContent+amal.textContent+oy.textContent;
        javob=eval(javob);
    }
    if(honson==3){
        ox.textContent=Math.ceil(Math.random()*1000);
        oy.textContent=Math.ceil(Math.random()*1000);
        javob=ox.textContent+amal.textContent+oy.textContent;
        javob=eval(javob);
    }
    let con=Math.ceil(Math.random()*4);
    if(con==1){
        joy1.textContent=javob;
        bol1=true;
    }else{
        joy1.textContent=+javob+Math.ceil(Math.random()*9);
        bol1=false;
    }
    if(con==2){
        joy2.textContent=javob;
        bol2=true;
    }
    else{
        joy2.textContent=+javob-Math.ceil(Math.random()*9);
        bol2=false;
    }
    if(con==3){
        joy1.textContent=javob;
        bol3=true;
    }else{
        joy3.textContent=+javob+Math.ceil(Math.random()*9);
        bol3=false;
    }
    if(con==4){
        joy4.textContent=javob;
        bol4=true;
    }else{
        joy4.textContent=+javob-Math.ceil(Math.random()*9);
        bol4=false;
}
bol=false
if(!inter){
    vaqt.textContent=sd;
    inter=setInterval(function(){
        vaqt.textContent=+vaqt.textContent-1;
        if(vaqt.textContent==0){vaqt.textContent=9; natija2();  bol=true;}
    }, 1000)

}
}
},100)

})

setInterval(function(){
if(inson.textContent==10){
    clearInterval(intr);
    clearInterval(inter);
    vaqt.textContent=0;
    alert("Siz yuttingiz \r\n 👍👍👍👍👍👍👍")
    tex.textContent=0;
    inson.textContent=0;
}
if(tex.textContent==10){
    clearInterval(intr);
    clearInterval(inter);
    inter=null;
    intr=null;
    vaqt.textContent=0;
    alert("Siz yutkazdingiz \r\n 🥺🥺🥺🥺🥺")
    tex.textContent=0;
    inson.textContent=0;
}
},10)
let res=document.querySelector(".restart");
res.addEventListener("click", function(){
    tex.textContent=0;
    inson.textContent=0;
})