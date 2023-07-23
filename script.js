document.getElementById('add-button').addEventListener('click',()=>{
    const values = document.getElementById('todo-input').value;
    let element = document.querySelector('.list-group');
    let template = `<li class="list-group-item shadow-lg p-3 mb-5 bg-body-tertiary rounded">${values}</li>`
    element.insertAdjacentHTML('afterbegin',template);
},false);

document.getElementById('delete-button').addEventListener('click',()=>{
    let parent = document.querySelector('.list-group');
    let child = document.querySelector('.list-group-item');
    parent.removeChild(child)
})