export default function end(){
    let style = `
        {
            width:100%;
            padding:5%;
            background:black;
            text-align:center;
            color:white;
            font-size:30px;
        }
        >span{
            background:red;
            padding:5px;
        }`

    const end = cE("div", style)
    end.innerHTML = "Sei que essa carta ainda está curtinha<br>Mas temos a vida inteira para escrevermos ela <span>juntos</span><br><br>Estou ansioso por isso!<br><br><br><br>Você já viu meu Linkedin hoje?"
    return(end)
}