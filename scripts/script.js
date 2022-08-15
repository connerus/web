const menu_item = document.querySelector(".menu li");

menu_item.addEventListener("mouseover", () =>
    menu_item.innerText = "///About Me"

);
menu_item.addEventListener("mouseout", () =>
    menu_item.innerText = "About Me"

);

// window.addEventListener("mouseover", function(){
    
//     if (Event.target.classname = "menu"){
//         this.alert(1);
//     }
// }, {once:true});