export default function title(){
    let style = `
        {
            font-size:35px;
            color:white;
            text-align:center;
        }
        :responsive{
            font-size:25px;
        }`

    const title = cE("div", style)
    title.innerHTML = "E que tal deixar nela nossa lista de afazeres?"
    return(title)
}