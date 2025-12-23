export default function background(){
    let style = `
        {
            position:sticky;
            top:0%;
            left:0%;
            width:100%;
            height:100lvh;
            opacity:0.5;
            background:black;
            object-fit:cover;
            transition:all 0.5s;
        }`

    const background = cE("img", style)
    return(background)
}