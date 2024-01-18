const myDiv = document.getElementById('myDiv')

async function getProdacts() {
    try{
        const response = await axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
        const data = response.data
        db = data
        db.forEach(item => {
            const box = document.createElement('div')
            box.className = 'myBox col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'
            box.innerHTML = `
                <img src="${item.image}" alt="">
                <h3>${item.title}</h3>
                <p>$${item.description}</p>
                <button onclick="addToCart(${item.id})">Add To Basket -></button>
                <button onclick="wishlist(${item.id})">Add To Wishlist -></button>
            `;
            myDiv.appendChild(box);
        });
    }catch(error){
        console.error('xeta:',error);
    }
}

function addToCart(id) {
   const cart = JSON.parse(localStorage.getItem('cart')) || []
   const prodactsItem = cart.find(item => item.id == id) 
   if(prodactsItem){
    prodactsItem.count = (prodactsItem.count || 1) + 1
   }else{
        cart.push(db.find(item => item.id == id))
   }
   localStorage.setItem('cart',JSON.stringify(cart))
}

function wishlist(id) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
   const prodactsItem = wishlist.find(item => item.id == id) 
   if(prodactsItem){
        alert('bu urun sizin favorilerinizdedir')
    }else{
        wishlist.push(db.find(item => item.id == id))
   }
   localStorage.setItem('wishlist',JSON.stringify(wishlist))
    
}

getProdacts()
