class NeoButton extends HTMLButtonElement{


    constructor(){
        super();
        var i = 0;
        this.addEventListener('click',e=>{
            i++;
            this.innerHTML='lo clickeaste ' + i + ' veces!';
            
        });
    }
    
}

window.customElements.define('neo-button',NeoButton,{extends:'button'});