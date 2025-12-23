export default function logo(url){
    let style = `
        {
            width:30%;
            filter:invert(1);
        }`

    const logo = cE("img", style)
    logo.src = url
    return(logo)
}