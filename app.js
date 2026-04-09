const c=document.getElementById("products");
function render(list){
c.innerHTML="";
list.forEach(p=>{
let d=document.createElement("div");
d.className="card";
d.innerHTML=`<h3>${p.name}</h3><p>${p.description}</p><p>$${p.price}</p><button onclick="add(${p.id})">В корзину</button>`;
c.appendChild(d);
});
}
function add(id){
let cart=JSON.parse(localStorage.getItem("cart"))||[];
let i=cart.find(x=>x.id===id);
if(i)i.qty++;else cart.push({id,qty:1});
localStorage.setItem("cart",JSON.stringify(cart));
alert("Добавлено");
}
render(products);
