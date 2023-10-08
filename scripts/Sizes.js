import { setSizeId } from "./TransientState.js"

export const SizeOptionsList = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizeOptions = await response.json()
    document.addEventListener("change", handleSizeChoice)
    let sizesHTML = "<h2>Sizes</h2>"
    
    const divStringArray = sizeOptions.map(
        (size) => {
            return `<div><input type='radio' name='size' value ="${size.id}"/> ${size.carets}</div>`
        
        }
    )
        sizesHTML += divStringArray.join("")

    return sizesHTML
}

const handleSizeChoice = (clickEvent) => {
    if (clickEvent.target.name === "size") {
        setSizeId(parseInt(clickEvent.target.value))
    }
}
