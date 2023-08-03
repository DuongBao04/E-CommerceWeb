let carts = JSON.parse(localStorage.getItem("carts")) || [
    {
        img:'style/img/products/f1.jpg',
        name:'T-shirt',
        quantity:1,
        price:10
    },
    {
        img:'style/img/products/f2.jpg',
        name:'T-shirt',
        quantity:1,
        price:30
    }
]
let discount = 100;
displayItems();

function displayItems(){
    const cartSection = document.getElementById("cart");
    const cartBody = cartSection.getElementsByTagName("tbody")[0];
    cartBody.innerHTML = "";
    let totalPrice = 0;

    for (let i = 0; i < carts.length ; i++){
        const {img,name,quantity,price} = carts[i];
        let itemContent =
        `
        <tr>
            <td><i class="fa-solid fa-xmark" style = "cursor:pointer" onclick = "deleteItem(${i})"></i></td>
            <td><img src="${img}" alt=""></td>
            <td>${name}</td>
            <td>$${price}</td>
            <td><input type="number" value="${quantity}" class = "item-quantity-input" data-index="${i}"></td>
            <td>$${(price * quantity).toFixed(2)}</td>
        </tr>
        `
        cartBody.innerHTML += itemContent;
        totalPrice += price * quantity;
    }
    totalPrice = (totalPrice* discount / 100).toFixed(2);
    cartBody.innerHTML += 
    `
    <tr class = "total-output">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><p>Total</p></td>
        <td>$${totalPrice}</td>
    </tr> 
    `

    for (let quantity of cartBody.getElementsByClassName("item-quantity-input")){
        quantity.addEventListener('click',quantityChanged)
    }
    localStorage.setItem("carts",JSON.stringify(carts));
}

function deleteItem(position){
    carts.splice(position,1);
    displayItems();
}

function quantityChanged(event){
    let input = event.target;
    let newQuantity = parseInt(input.value);
    let index = input.dataset.index;

    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    else {
        carts[index].quantity = input.value;
        displayItems();
    }
}


function applyCoupon(){
    alert("Congratulation! You get 50% off");
    discount = 50;
    displayItems();
}

function pay() {
    carts = [];
    localStorage.setItem("carts",JSON.stringify(carts));
    displayItems();
    alert('Pay successfully!')
}