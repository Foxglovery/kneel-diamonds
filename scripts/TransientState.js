const transientState = {
    "metalid": 0,
    "styleid": 0,
    "sizeid": 0,
    "timePlaced": 0
}

export const setMetalId = (chosenMetal) => {
    transientState.metalid = chosenMetal
    console.log(transientState)
}

export const setStyleId = (chosenStyle) => {
    transientState.styleid = chosenStyle
    console.log(transientState)
}

export const setSizeId = (chosenSize) => {
    transientState.sizeid = chosenSize
    console.log(transientState)
}

export const setTimePlaced = () => {
    const timestamp = new Date().getTime();
    transientState.timePlaced = timestamp

}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("OrderWasPlaced") //defines a new event
    document.dispatchEvent(customEvent)//when ran, it dispatches the new event
}