

const btn = document.body.querySelector('btn')
const form = document.forms[0]
const getBtn = document.body.querySelector('#get')
const gottenMesages = document.body.querySelector('.gottenMesages')
form.addEventListener('submit', function(event){
    const message = {
        time: new Date(),
        text: this.elements.text.value,
        author: this.elements.user.value,


    }
    console.log(message)
    fetch('http://192.168.0.200:3000/messages',{
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
            .then(task => {
                console.log(task);
            }) 



    event.preventDefault();
})

setInterval(() => {
    fetch( 'http://192.168.0.200:3000/messages')
    .then( response => response.json() )
        .then( task=>{
            task.forEach( user =>{
                const objUser = {
                    text: user.text,
                    author: user.author,
                    time: user.time,

                }
                console.log(objUser);
                const p = document.createElement('p')
                p.innerHTML = objUser.text
                gottenMesages.append(p)
            });  
            
        })
}, 2000);
    
