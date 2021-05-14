class NeoAnchor extends HTMLAnchorElement{


    connectedCallback(){
        // logica....
        this.addEventListener('click', e=>{
            const confirmar = confirm('desa irse de la aplicacion?'); //

            if(!confirmar){
                // simulacion de un break!
                e.preventDefault();
            }
        })
    }
}

window.customElements.define('neo-anchor',NeoAnchor,{extends:'a'});