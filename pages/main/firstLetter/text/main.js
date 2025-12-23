export default function text(){
    let style = `
        {
            font-size:25px;
            color:white;
            text-align:center;
        }
        :responsive{
            font-size:17px;
        }`

    const text = cE("div", style)
    text.innerHTML = "Feia, né? Sofrido aproveitar a paisagem quando ela é assim..."
    return(text)
}