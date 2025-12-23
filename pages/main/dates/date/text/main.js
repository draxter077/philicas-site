export default function text(t){
    let style = `
        {
            font-size:25px;
            color:white;
            text-align:center;
            margin:10px 0px;
        }
        :responsive{
            font-size:13px;
            margin:5px 0px;
        }`

    const text = cE("div", style)
    text.innerHTML = t
    return(text)
}