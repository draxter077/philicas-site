import date from "./date/main.js"

export default function dates(){
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

    const dates = cE("div", style)
    dates.appendChild(date("./assets/dates/brownie.png", "Brownie cru<br>Primeiro dia juntos", "01/08/2025"))
    dates.appendChild(date("./assets/dates/rain.png", "Primeira volta de moto<br>Primeira mensagem", "08/08/2025"))
    dates.appendChild(date("./assets/dates/f1.png", "Primeiro cinema<br>Poltronas i23 e i24", "10/08/2025"))
    dates.appendChild(date("./assets/dates/food.png", "Primeiro RU juntos<br><br>", "22/08/2025"))
    dates.appendChild(date("./assets/dates/building.png", "Ida à Dengo<br>Andrey e o casamento", "29/08/2025"))
    dates.appendChild(date("./assets/dates/hands.png", "Zootopia<br><br>", "31/08/2025"))
    dates.appendChild(date("./assets/dates/love.png", "O primeiro sim<br><br>", "10/12/2025, 21h13"))
    dates.appendChild(date("./assets/dates/movie.png", "Zootopia<br>Agora como namorados", "11/12/2025"))
    dates.appendChild(date("./assets/dates/ring.png", "Primeira aliança<br><br>", "17/12/2025"))
    return(dates)
}