export default function img(){
    let style = `
        {
            height:30svh;
            filter:invert(1);
        }
        :responsive{
            height:fit-content;
            width:50%;
        }`

    const img = cE("img", style)
    img.src = "./assets/line.png"
    return(img)
}