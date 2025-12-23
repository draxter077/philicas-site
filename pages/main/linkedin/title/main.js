export default function title(){
    let style = `
        {
            font-size:35px;
            color:white;
            width:90%;
            text-align:right;
            border-top:1px solid red;
            padding:10px 0px 0px 0px;
        }
        :responsive{
            font-size:20px;
            width:95%;
        }`

    const title = cE("div", style)
    title.innerHTML = "E uma última coisinha, amor<br>Você já viu meu Linkedin hoje?"
    return(title)
}