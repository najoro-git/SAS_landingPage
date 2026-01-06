const button = document.querySelector('#login');
const content = document.querySelector('.loginForm');

const bg = document.querySelector('#container');

button.addEventListener('click',() => {
    if(content.style.display === 'none'){
        content.style.display = 'block';
    }else{
        content.style.display = 'none';
    }
});




