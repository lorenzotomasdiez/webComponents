const template = document.createElement('div');
template.innerHTML = `
    <style>
        .texto{
            color:red;
        }
        p{
            color: blue;
        }    
    </style>
    <p class="texto">Hola mundo2 </p>
    <p>Texto ejemplo clase</p>
`;
class myElement extends HTMLElement{
    constructor(){
        super(); //necesitamos que herede de HTMLElement todas sus funcionalidades.
        
        this.p=document.createElement('p');
    };
    connectedCallback(){
        this.p.textContent="Hola Mundo!!";
        this.appendChild(this.p);
        this.appendChild(template);
    };
};

customElements.define('my-element', myElement);