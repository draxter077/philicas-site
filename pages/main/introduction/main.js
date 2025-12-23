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
    introduction.appendChild(text("Prezada, Letícia")) //1vp
    introduction.appendChild(text("Eu não irei escrever uma carta de Natal para você")) //2vp
    introduction.appendChild(text("Porém...")) //3vp
    introduction.appendChild(text("Se eu fosse escrever uma carta para o meu amor,")) //4 vp
    introduction.appendChild(text("Ela seria um pouco diferente")) //5vp
    introduction.appendChild(text("Sei que não escrevemos cartas do mesmo jeito...<br><br>Mas me dê uma chance!")) //6vp

    window.addEventListener(
        "load",
        async function a(){ // 10s after load to test
            let b = introduction.children[0]
            b.src = `${d}/assets/introduction/2.jpg`
            await new Promise(resolve => setTimeout(resolve, 8000))
            b.src = `${d}/assets/introduction/1.jpg`
        }
    )

    window.addEventListener(
        "scroll",
        async function a(){
            let viewport = window.innerHeight
            let scrolled = window.scrollY
            let d = window.location.toString().replaceAll("/404.html","")

            let background = introduction.children[0]
            if(scrolled >= viewport*3 && background.src != `${d}/assets/introduction/2.jpg`){
                background.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 501))
                background.src = ""
                background.src = `${d}/assets/introduction/2.jpg`
                background.style.opacity = 0.2
            }
            else if(scrolled < viewport*3 && background.src != `${d}/assets/introduction/1.jpg`){
                background.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 501))
                background.src = ""
                background.src = `${d}/assets/introduction/1.jpg`
                background.style.opacity = 0.3
            }
        }
    )
    return(introduction)
}