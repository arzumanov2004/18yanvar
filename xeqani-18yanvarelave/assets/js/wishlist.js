const myDiv = document.getElementById('myDiv')

function getWishlist() {
    myDiv.innerHTML = ''
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.map((item,index) =>{
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
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.splice(index,1)
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
    getWishlist()
}
getWishlist()