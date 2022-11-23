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
   header_text.innerText = "My name is Danil. I live in Russia. I'm junior frontend developer and junior UX/UI designer"
}
)

skills_btn.addEventListener("click", (event) => {
   header.innerText = "My skills"
   header_text.innerText = 'Figma, HTML, JS, CSS'
}
)

socials_btn.addEventListener("click", (event) => {
   header.innerText = "Social media"
   header_text.innerText = 'VK. YT. Twitch. Trovo'
}
)

//я люблю Иру сильнее всех на свете