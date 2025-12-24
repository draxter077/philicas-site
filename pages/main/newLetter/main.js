import title from "./title/main.js"
import img from "./img/main.js"

export default function newLetter(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            background:black;
            padding:0% 5%;
            border-bottom:1px solid red;
        }
        :responsive{
            padding:5% 2.5%;
        }`

    const newLetter = cE("div", style)
    newLetter.appendChild(title("left", "Em minha defesa, não existiam muitas coisas que podia te falar, embora existissem muitas que quisesse dizer.<br>Agora, estou na situação oposta: <span>por onde começar a falar?</span><br><br>Não queria deixar nada de fora, pois que todo detalhe é importante"))
    newLetter.appendChild(img())
    newLetter.appendChild(title("right", "E que tal uma carta que sempre falasse de nós?<br>E que sempre se atualizasse?<br>Uma carta que <span>nós dois</span> pudéssemos escrever?"))
    return(newLetter)
}