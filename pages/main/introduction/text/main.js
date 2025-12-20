export default function text(t){
    let style = `
        {
            display:flex;
            align-items:center;
            justify-content:center;
            width:100%;
            height:100svh;
            color:white;
            font-size:40px;
            z-index:1;
        }
        :responsive{
            font-size:25px;
        }`

    const text = cE("div", style)
    text.innerHTML = t
    return(text)
}