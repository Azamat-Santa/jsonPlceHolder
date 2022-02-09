const doc = document
const url = 'https://jsonplaceholder.typicode.com/posts'
let output = doc.querySelector('.output')


window.onload = function() {
    fetch(url)
            .then(response => response.json())
            .then(data => loadImages(data))
            .catch(err => console.error(err));    
    
}
function loadImages(data){
    console.log(data);
    data.map(user => {
        let block = doc.createElement('div')
        block.className='cart'
        block.innerHTML = `
         <h5>Title: ${user.title}</h5>
         <div><h5>Body:</h5> 
         ${user.body}
         </div>
        `
        output.appendChild(block)
    })
}