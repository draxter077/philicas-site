import item from "./item/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            flex-wrap:wrap;
            width:100%;
            padding:5%;
            background:black;
        }`

    const content = cE("div", style)
    content.appendChild(item(false, "Ir à fazenda de morangos"))
    content.appendChild(item(false, "Fazer sushi e poke"))
    content.appendChild(item(false, "Fazer torta holandesa"))
    content.appendChild(item(false, "Fazer sorvete"))
    content.appendChild(item(false, "Comer maçã verde"))
    content.appendChild(item(false, "Jogar tênis"))
    content.appendChild(item(true, "Ir jantar fora do RU"))
    content.appendChild(item(false, "Toamr café juntos no sábado"))
    content.appendChild(item(false, "Ir à Santos Andrade"))
    content.appendChild(item(true, "Ir à Decathlon"))
    content.appendChild(item(true, "Rever Questão de Tempo de novo"))
    content.appendChild(item(false, "Assistir Rute e Boaz"))
    content.appendChild(item(false, "Fazer uma mini viagem"))
    content.appendChild(item(false, "Fazer empadão"))
    content.appendChild(item(false, "Fazer costela"))
    content.appendChild(item(false, "Fazer lasanha"))
    content.appendChild(item(true, "Ir ao Barigui de novo"))
    content.appendChild(item(true, "Rever Zootopia 1"))
    content.appendChild(item(true, "Ver Zootopia 2"))
    content.appendChild(item(false, "Comer galeto"))
    content.appendChild(item(false, "Comer fondue"))
    content.appendChild(item(true, "Ir a um costelão"))
    content.appendChild(item(false, "Comer crepe"))
    content.appendChild(item(true, "Treinar juntos"))
    content.appendChild(item(false, "Ir à Rua 24 horas"))
    content.appendChild(item(false, "Ver a Taunay"))
    content.appendChild(item(false, "Ir no sacolão"))
    content.appendChild(item(true, "Fazer bolo de banana"))
    content.appendChild(item(false, "Fazer banofee"))
    content.appendChild(item(true, "Fazer pastel"))
    content.appendChild(item(true, "Ir no cinema do Barigui"))
    return(content)
}