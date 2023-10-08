import { placeOrder } from "./TransientState.js"


export const OrderButtonGen = () => {
    const buttonHTML = `<button data-type="button" id="place-order-btn">Place Order</button>`
    
   
    return buttonHTML
}
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    if (itemClicked.dataset.type === "button") {
        placeOrder()
        }
        
    })
