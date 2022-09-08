window.addEventListener("mouseover", (event) => {
     if (event.target.className == "menu-item"){
        event.target.style.backgroundColor = "blue";
     }
}
)

window.addEventListener("mouseout", (event) => {
    if (event.target.className == "menu-item"){
        event.target.style.backgroundColor = "black";
     }
}
)

window.addEventListener("click", (event) => {
   if (event.target.className == "menu-item"){
      console.log("Yes")
   }
}
)