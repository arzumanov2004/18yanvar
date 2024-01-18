const forumDiv = document.getElementById('forumDiv')
const inp = document.getElementById('inp')
const searc = document.getElementById('searc')

//Search By Name

function getSearch() {
    forumDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const filterData = db.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()))
        filterData.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox'
            box.innerHTML = `
            <div>
                <h3>${item.title}</h3>
                <p>$${item.description}</p>
            </div>
                <button style="background-color: #FD5F42; color: white; border: none; width: 80px; height: 40px; margin-right: 20px;" onclick="deleteFromForm(${item.id})">sil</button>

            `;
            forumDiv.appendChild(box);
        })
    })
}
searc.addEventListener('click',getSearch)

//sort AZ-ZA

const btnAZ = document.getElementById('btnA-Z')

function sortData() {
    forumDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => a.title.localeCompare(b.title))
        sortData.map(item =>{
            const box = document.createElement('tr')
                         box.className = 'myBox'
                         box.innerHTML = `
                         <div>
                         <h3>${item.title}</h3>
                         <p>$${item.description}</p>
                         </div>
                         <button style="background-color: #FD5F42; color: white; border: none; width: 80px; height: 40px; margin-right: 20px;" onclick="deleteFromForm(${item.id})">sil</button>

                         `;
                         forumDiv.appendChild(box);
        })
    })
}
btnAZ.addEventListener('click',sortData)

const btnZA = document.getElementById('btnZ-A')

function sortDataZA() {
    forumDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => b.title.localeCompare(a.title))
        sortData.map(item =>{
            const box = document.createElement('tr')
                         box.className = 'myBox'
                         box.innerHTML = `
                         <div>
                         <h3>${item.title}</h3>
                         <p>$${item.description}</p>
                     </div>
                         <button style="background-color: #FD5F42; color: white; border: none; width: 80px; height: 40px; margin-right: 20px;" onclick="deleteFromForm(${item.id})">sil</button>

                         `;
                         forumDiv.appendChild(box);
        })
    })
}
btnZA.addEventListener('click',sortDataZA)

const Myform = document.getElementById('Myform')
const exampleInputEmail1 = document.getElementById('exampleInputEmail1')
const exampleInputPassword1 = document.getElementById('exampleInputPassword1')

function postForm(e) {
    e.preventDefault()
    axios.post('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts',{
        email: exampleInputEmail1.value,
        password: exampleInputPassword1.value,

    })
    Myform.reset()
    setTimeout(() =>{
        getFormData()
    },1000)

}
Myform.addEventListener('submit',postForm)

function getFormData() {
    forumDiv.innerHTML = "";
    
    axios.get("https://65685f8d9927836bd974aa4c.mockapi.io/pradacts")
    .then((res) => {
        db = res.data
        db.map((item) => {
            const box = document.createElement("tr");
            box.className = 'myBox'
            box.innerHTML = `
            <div>
                <h3>${item.title}</h3>
                <p>$${item.description}</p>
            </div>
                <button style="background-color: #FD5F42; color: white; border: none; width: 80px; height: 40px; margin-right: 20px;" onclick="deleteFromForm(${item.id})">sil</button>
            `;
            forumDiv.appendChild(box);
        });
    });
}

getFormData();

function deleteFromForm(id) {
    axios.delete(`https://65685f8d9927836bd974aa4c.mockapi.io/pradacts/${id}`)
    setTimeout(() =>{
        getFormData()
    },1000)
}

const ddefault = document.getElementById('default')

ddefault.addEventListener("click",getFormData);


