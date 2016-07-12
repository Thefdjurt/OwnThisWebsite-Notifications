javascript:{
if (Notification.permission!="granted"){
  Notification.requestPermission(function(p){
  if (p=="denied"){alert("You have disabled the notification functionality, unable to run this bookmarklet.");return;}
  exec();
  });
} else exec();
function exec(){
if (window.ownerName!=null){var _n=prompt("New owner name").toUpperCase();if(_n){window.ownerName=_n;}return;}
window.ownerName=prompt("Your owner name").toUpperCase(); if (!ownerName){return;}
function q(i){return document.querySelector(i);}

var focused=true,isOn=true,nt=null,timeout=null;
var ln=q("h2").innerText;
document.addEventListener("visibilitychange",function(){focused=!focused;});
var dA= document.createElement("div");dA.innerText="🔔";
var aOn="🔔",aOff="🔕";
dA.style="position:absolute; top:22px;left:100%; transform:translate(-64px,0);-moz-transform:translate(-64px,0);-ms-transform:translate(-64px,0);-o-transform:translate(-64px,0);-webkit-transform:translate(-64px,0); color:#555; font-weight:bold; font-size:32px; cursor:pointer; user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none; transition:color .3s;-moz-transition:color .3s;-o-transition:color .3s;-webkit-transition:color .3s;";
dA.onclick=function(e){e.preventDefault();
 isOn=!isOn;
 dA.innerText=isOn?aOn:aOff;
 dA.style.color=isOn?"#555":"#aaa";
 if (!isOn){clearTimeout(timeout);if(nt){nt.close();nt=null;}return;}
 loop();
};
document.body.appendChild(dA);

function loop(){
 var h=q("h2")||{innerText:null};
 if (!h.innerText){timeout=setTimeout(loop,50);return;}
 if (h.innerText!=ln){
  ln=h.innerText;
  if(nt){nt.close();nt=null;}
  if (ln!=ownerName && !focused){console.log("New owner:\n%c"+ln,"font-size:125%;background:#acd;padding:2.5px;");nt=new Notification("New owner",{body:ln});nt.onclick=function(){window.focus();};}
 }
 if (isOn){setTimeout(loop,250);}
}loop();
}
};
