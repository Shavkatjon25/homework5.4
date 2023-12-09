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
let inson=document.querySelector(".odam");
let tex=document.querySelector(".kom");
let inter=0;
let bosh=document.querySelector(".start")
bosh.addEventListener("click", function(){
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
        let joy1=document.querySelector(".x1");
        joy1.textContent=javob;
        joy1.addEventListener("click", function(){
            inson.textContent=+inson.textContent+1;
        })
    }else{
        let joy1=document.querySelector(".x1");
        joy1.textContent=+javob+Math.ceil(Math.random()*9);
        joy1.addEventListener("click", function(){
        tex.textContent=+tex.textContent+1;
    })
    }
    if(con==2){
        let joy1=document.querySelector(".x2");
        joy1.textContent=javob;
        joy1.addEventListener("click", function(){
            inson.textContent=(+inson.textContent)+1;
        })
    }
    else{
        let joy1=document.querySelector(".x2");
        joy1.textContent=+javob-Math.ceil(Math.random()*9)
        joy1.addEventListener("click", function(){
        tex.textContent=+tex.textContent+1;
    })
    }
    if(con==3){
        let joy1=document.querySelector(".x3");
        joy1.textContent=javob;
        joy1.addEventListener("click", function(){
            inson.textContent=(+inson.textContent)+1;
        })
    }else{
        let joy1=document.querySelector(".x3");
        joy1.textContent=+javob+Math.ceil(Math.random()*9);
        joy1.addEventListener("click", function(){
        tex.textContent=+tex.textContent+1;
    })
    }
    if(con==4){
        let joy1=document.querySelector(".x4");
        joy1.textContent=javob;
        joy1.addEventListener("click", function(){
            inson.textContent=+inson.textContent+1;
        })
    }else{
        let joy1=document.querySelector(".x4");
        joy1.textContent=+javob-Math.ceil(Math.random()*9);
        joy1.addEventListener("click", function(){
        tex.textContent=+tex.textContent+1;
    })
}
if(!inter){
    vaqt.textContent=9;
    inter=setInterval(function(){
        vaqt.textContent=+vaqt.textContent-1;
        if(vaqt.textContent==0){vaqt.textContent=9;}
    }, 1000)

}

})
