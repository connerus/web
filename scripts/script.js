const header = document.querySelector(".header-text")
const about_btn = document.querySelector("#about")
const skills_btn = document.querySelector("#skills")
const socials_btn = document.querySelector("#socials")
const header_text = document.querySelector(".header-info")

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

about_btn.addEventListener("click", (event) => {
   header.innerText = "Who am I?"
   header_text.innerText = "My name is Danil. "
}
)

skills_btn.addEventListener("click", (event) => {
   header.innerText = "My skills"
}
)

socials_btn.addEventListener("click", (event) => {
   header.innerText = "Social media"
}
)

