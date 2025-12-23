import word from "./word/main.js"

export default function content(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
        }`

    const content = cE("div", style)
    content.appendChild(word(0, "Eu estava ansioso para poder conhecer você"))
    content.appendChild(word(1, "RU"))
    content.appendChild(word(2, "Moto"))
    content.appendChild(word(3, "Não queria que fosse para Portugal"))
    content.appendChild(word(4, "Bla"))
    return(content)
}