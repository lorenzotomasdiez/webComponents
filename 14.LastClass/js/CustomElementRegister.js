

class CustomElementRegister extends HTMLElement{
    constructor(){
        super();

        this.render();
    }

    render(){
        this.addEventListener('click',e=>{
            e.target.style.color='red';
        })
    }

}


window.customElements.define('neo-custom',CustomElementRegister);