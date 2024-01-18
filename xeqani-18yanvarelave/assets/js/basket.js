const myDiv = document.getElementById('myDiv')

function getBasket() {
    myDiv.innerHTML = ''
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item,index) =>{
        const box = document.createElement('div')
            box.className = 'myBox col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'
            box.innerHTML = `
                <img src="${item.image}" alt="">
                <h3>${item.title}</h3>
                <h2>Urun Sayi:${item.count}</h2>
                <p>$${item.description}</p>
                <button onclick="deleteCart(${index})">delete</button>
            `;
            myDiv.appendChild(box);
    })
}

function deleteCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    getBasket()
}
getBasket()