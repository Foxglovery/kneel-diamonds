export const PlacedOrders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await fetchResponse.json()
    let orderHTML = "<h2>Ugly Jewelry In The Pipe</h2>"
    const divStringArray = orders.map(
        (order) => {
            const orderPrice = order.metal.price + order.style.price + order.size.price
            
            return `<div><li>Order #${order.id} is a ${order.style.style} ${order.size.carets} caret, made of ${order.metal.metal}, and will cost $${orderPrice}.</li></div>`
        }
    )

    orderHTML += divStringArray.join("")
    return orderHTML

// try removing from database and then re serving



}