export default function text(t){
    let style = `
        {
            font-size:25px;
            color:white;
            text-align:center;
        }
        :responsive{
            font-size:18px;
        }`

    const text = cE("div", style)
    text.innerHTML = t
    return(text)
}