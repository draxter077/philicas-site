export default function title(){
    let style = `
        {
            font-size:35px;
            color:white;
            width:100%;
            text-align:left;
            border-top:1px solid red;
            padding:2.5% 0px;
            margin:2.5% 0px 0px 0px;
        }
        :responsive{
            font-size:21px;
        }
        >span{
            width:100%;
            text-align:right;
        }`

    const title = cE("div", style)
    title.innerHTML = "Em minha defesa, não existiam muitas coisas que podia te falar,<br>Embora existissem muitas que quisesse dizer<br><br><br><span>Se pudesse reescrever ela, diria que</span>"
    return(title)
}