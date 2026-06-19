let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price,image){

cart.push({
name:name,
price:price,
image:image,
qty:1
});

localStorage.setItem("cart",JSON.stringify(cart));

alert("เพิ่มสินค้าเรียบร้อย");
}

function loadCart(){

let data = JSON.parse(localStorage.getItem("cart")) || [];

let html="";
let total=0;

data.forEach((item,index)=>{

total += item.price * item.qty;

html += `
<div class="cart-item">

<img src="${item.image}" width="100">

<div>
<h3>${item.name}</h3>
<p>${item.price} บาท</p>
</div>

<div>
<button onclick="minus(${index})">-</button>
${item.qty}
<button onclick="plus(${index})">+</button>
</div>

</div>
`;
});

document.getElementById("cart").innerHTML = html;
document.getElementById("total").innerHTML = total;
}

function plus(index){
cart[index].qty++;
localStorage.setItem("cart",JSON.stringify(cart));
loadCart();
}

function minus(index){

if(cart[index].qty>1){
cart[index].qty--;
}

localStorage.setItem("cart",JSON.stringify(cart));
loadCart();
}