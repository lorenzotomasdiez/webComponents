class myElement extends HTMLElement{
    constructor(){
        super(); //necesitamos que herede de HTMLElement todas sus funcionalidades.
        this.attachShadow({mode:'open'});
        this.title=this.getAttribute("title");
        this.parrafo=this.getAttribute("parrafo");
        this.img=this.getAttribute("img");
    };
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
            <section>
                <h2>${this.title}</h2>
                <div>
                    <p>${this.parrafo}</p>
                    <img src=${this.img}/>
                </div>
            </section>
            ${this.getStyles()}
        `;
        /* agregando esta etiqueta podemos renderizar el texto dentro de la etiqueta padre */
        return template;
    };
    getStyles(){
        return `
        <style>
            h2{
                color:blue
            }
        </style>
        `;
    };
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    };
    connectedCallback(){
        this.render();
    };
};

customElements.define('my-element', myElement);