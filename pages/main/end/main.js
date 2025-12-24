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
        }
        :responsive{
            font-size:21px;
        }`

    const end = cE("div", style)
    end.innerHTML = "Essa carta seria a carta do nosso amor!<br><br>Ela ainda está curtinha...<br>Ainda bem que temos a vida inteira para escrevermos ela <span>juntos</span><br><br>Estou ansioso por isso!<br><br><br><br>Você já viu meu Linkedin hoje?"
    return(end)
}