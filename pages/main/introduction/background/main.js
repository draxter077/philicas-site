export default function background(){
    let style = `
        {
            position:sticky;
            top:0%;
            left:0%;
            width:100%;
            height:100svh;
            opacity:0.5;
            background:green;
            object-fit:cover;
            transition:all 0.5s;
        }`

    const background = cE("img", style)
    background.src = "./assets/zootopia.jpg"
    return(background)
}