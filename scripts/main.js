import { MetalOptionsList } from "./Metals.js";
import { OrderButtonGen } from "./OrderButton.js";
import { PlacedOrders } from "./PlacedOrders.js";
import { SizeOptionsList } from "./Sizes.js";
import { StyleOptionsList } from "./StylesOptions.js";

const render = async () => {
    const metalOptionsHTML = await MetalOptionsList()
    const sizeOptionsHTML = await SizeOptionsList()
    const styleOptionsHTML = await StyleOptionsList()
    const ordersHTML = await PlacedOrders()
    const orderButton = await OrderButtonGen()
    const container = document.querySelector("#container")
    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">

        </article>
        <article class ="order">
            ${orderButton}
        </article>
        <article class="customOrders">
            
            <ul>${ordersHTML}</ul>
        </article>
    `

    container.innerHTML = composedHTML
}
render()

document.addEventListener("OrderWasPlaced", event => {
    console.log("State of data has changed. Now regenerating HTML...Nerdzz")
    render()
})//re-renders the html when order button is clicked