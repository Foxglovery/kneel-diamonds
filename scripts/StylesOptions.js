import { setStyleId } from "./TransientState.js"

export const StyleOptionsList = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styleOptions = await response.json()
    document.addEventListener("change", handleStyleChange)
    let styleHTML = "<h2>Styles</h2>"
   const divStringArray = styleOptions.map(
    (style) => {
        return `<div><input type='radio' name='style' value ="${style.id}"/> ${style.style}</div>`
    }
   )
   
   styleHTML += divStringArray.join("")
    return styleHTML
}

const handleStyleChange = (clickEvent) => {
    if (clickEvent.target.name === "style") {
        setStyleId(parseInt(clickEvent.target.value))
    }
}