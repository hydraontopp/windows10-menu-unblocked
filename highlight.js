var mycomputer = document.getElementById("mycomputer");
var trashbin = document.getElementById("trashbin");
var explorer = document.getElementById("explorer");
var controlpanel = document.getElementById("controlpanel");
var elements = [mycomputer,trashbin,explorer,controlpanel]
function clicked(element){
  elements.forEach(function(el){
    el.style.backgroundColor = 'rgba(19, 128, 128, 0)';
    el.style.border = 'rgba(19, 128, 128, 0)';
  })
  element.style.backgroundColor = "rgba(60, 215, 215, 0.35)";
  element.style.border = "2px solid rgba(19, 128, 128, 0.35)";
};

function backClicked(){
  elements.forEach(function(e){
    e.style.backgroundColor = 'rgba(19, 128, 128, 0)';
    e.style.border = 'rgba(19, 128, 128, 0)';
  }); 
};
