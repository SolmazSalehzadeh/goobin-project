var accordionMenu= document.getElementById("collapseOne")  ;
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    if(accordionMenu.classList.contains("show")){
      accordionMenu.classList.remove("show")
    }
  }