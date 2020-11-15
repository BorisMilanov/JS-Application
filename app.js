window.addEventListener('load', () =>{
    const rootEl = document.querySelector('#root')
    const input = document.querySelector('#towns')
    document.querySelector('#btnLoadTowns').addEventListener('click', renderTowns)
    function renderTowns(e){
        e.preventDefault();
        const towns = input.value.split(', ')
        const templateTownString = document.getElementById('main-template').innerHTML;
        const templeteFn = Handlebars.compile(templateTownString);
        const generetedHtml = templeteFn({towns})
        rootEl.innerHTML = generetedHtml;
    }
  
   
});