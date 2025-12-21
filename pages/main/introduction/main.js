import background from "./background/main.js"
import text from "./text/main.js"

export default function introduction(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            background:black;
        }`

    const introduction = cE("div", style)
    introduction.appendChild(background())
    introduction.appendChild(text("O que dar de presente?"))
    introduction.appendChild(text("Um óleo de banho?"))
    introduction.appendChild(text("Teste"))
    introduction.appendChild(text("Teste"))

    window.addEventListener(
        "scroll",
        async function a(){
            let viewport = window.innerHeight
            let scrolled = window.scrollY
            let d = window.location.toString().replaceAll("/404.html","")

            let background = introduction.children[0]
            if(scrolled < viewport*2.5 && background.src != ""){
                background.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 501))
                background.src = ""
                background.style.opacity = 0.5
            }
            else if(scrolled >= viewport*2.5 && background.src != `${d}/assets/introduction/nivea.webp`){
                background.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 501))
                background.src = "./assets/introduction/nivea.webp"
                await new Promise(resolve => setTimeout(resolve, 100))
                background.style.opacity = 0.5
            }
        }
    )
    return(introduction)
}