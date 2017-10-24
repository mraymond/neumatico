export default function(reverse){
  const direction = (reverse === true)? '-' : '';
  
  setInterval(function() {
    document.documentElement.style.cssText = "height:100%;width:100%;overflow:auto;transform: rotate("+(direction)+(Date.now()%360)+"deg);";
  },10);
}