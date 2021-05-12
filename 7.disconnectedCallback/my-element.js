class MyCustomElement extends HTMLElement{
    constructor(){
        super();
        console.log("Hola desde del constructor - MEMORIA");
    }

    connectedCallback(){
        console.log("Hola desde DOM");
    }
    disconnectedCallback(){
        console.log("Adios desde el dom");
    }
}
customElements.define('my-custom-element', MyCustomElement);

document.querySelector('my-custom-element').remove();