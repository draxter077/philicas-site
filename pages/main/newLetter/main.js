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
    newLetter.appendChild(title("left", "Em minha defesa, não existiam muitas coisas que podia te falar, embora existissem muitas que já quisesse dizer. Escreveria muitas coisas a mais nela se pudesse voltar no tempo (talvez já tenha fechado meus punhos em um armário tentando isso)<br>Não quero escrever uma nova carta que falhe em expressar tudo o que sinto, e me parece que uma carta convencional me levaria justamente a isso..."))
    newLetter.appendChild(img())
    newLetter.appendChild(title("right", "E se existisse uma carta cujas palavras eu pudesse mudar conforme meu amor aumenta?<br>Uma carta que <span>nós dois</span> pudéssemos escrever?<br>Uma carta que jamais me deixaria sem dizer o que quero?"))
    return(newLetter)
}