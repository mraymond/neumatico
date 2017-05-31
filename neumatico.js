setInterval(function() {
    document.documentElement.style.cssText = "height:100%;width:100%;overflow:auto;transform: rotate("+Date.now()%360+"deg);";
},10);
