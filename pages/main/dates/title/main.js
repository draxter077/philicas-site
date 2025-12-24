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
    title.innerHTML = "Adoraria deixar nela algumas datas importantes"
    return(title)
}