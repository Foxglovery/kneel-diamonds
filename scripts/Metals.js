import { setMetalId } from "./TransientState.js"

export const MetalOptionsList = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metalOptions = await response.json()
    document.addEventListener("change", handleMetalChoice)
    let metalsHTML = "<h2>Metals</h2>"
    
    const divStringArray = metalOptions.map(
        (metal) => {
            return  `<div><input type='radio' name='metal' value ="${metal.id}"/> ${metal.metal}</div>`            
        }
    )
    
    metalsHTML += divStringArray.join("")
    return metalsHTML
}

const handleMetalChoice = (clickEvent) => {
    if (clickEvent.target.name === "metals") {
        setMetalId(parseInt(clickEvent.target.value))
    }
}
//added click for metal.
