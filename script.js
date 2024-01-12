const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'cyan'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'oranged'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'indigo'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'violet'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'maroon'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'olive'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'magenta'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'tan'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'teal'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'azure'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'silver'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'coral'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'fuchsia'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'crimson'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'hotpink'){
            body.style.backgroundColor=e.target.id;
        }
        
        if(e.target.id === 'brown'){
            body.style.backgroundColor=e.target.id;
        }
    })
});
