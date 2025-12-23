export default function letter(){
    let style = `
        {
            height:80svh;
            width:30%;
            border-radius:10px;
            padding:2px;
            margin:20px 0px;
        }
        :responsive{
            width:95%;
        }`
    
    const letter = cE("iframe", style)
    letter.src = `https://docs.google.com/viewer?url=https://www.philicas.com.br/assets/firstLetter.pdf&embedded=true`
    return(letter)
}