const c=document.getElementById("cart");
function render(){
let cart=JSON.parse(localStorage.getItem("cart"))||[];
c.innerHTML="";
let total=0;
cart.forEach(i=>{
let p=products.find(x=>x.id===i.id);
total+=p.price*i.qty;
let d=document.createElement("div");
d.className="card";
d.innerHTML=`<h3>${p.name}</h3><p>${i.qty} x $${p.price}</p>`;
c.appendChild(d);
});
c.innerHTML+=`<h2>Итого: $${total}</h2>`;
}
render();
