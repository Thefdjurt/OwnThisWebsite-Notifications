javascript:{
/* An idea given to me by someone who thought I was a bot
   When you press shift you enter the owner input
   Thereby making it much quicker to type your name
   Pff. who cares about having to release the shift to enter in shift sensitive chars like .
   >>:D
*/
function q(i){return document.querySelector(i);}
document.onkeydown=function(e){
  if (e.keyCode==16 && document.activeElement.tagName!="INPUT"){ q("h2").click(); }
};
};
