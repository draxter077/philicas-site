import stat from "./stat/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            flex-wrap:wrap;
            width:100%;
            padding:5% 0%;
            background:black;
        }`

    const content = cE("div", style)
    let d = new Date()

    content.appendChild(stat("./assets/stats/calendar.png", Math.floor((d-1754668380000)/86400000), "Dias passados juntos"))
    content.appendChild(stat("./assets/stats/clock.png", Math.floor((d-1754668380000)/3600000), "Horas passadas juntos"))
    content.appendChild(stat("./assets/stats/letter.png", Math.floor((d-1754668380000)/180000), "Mensagens trocadas"))
    content.appendChild(stat("./assets/stats/heart.png", Math.floor((d-1765413060000)/86400000), "Dias que você é minha namorada"))
    content.appendChild(stat("./assets/stats/dress.png", "...", "Dias que você é minha esposa"))
    return(content)
}