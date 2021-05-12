class myElement extends HTMLElement{
    constructor(){
        super(); //necesitamos que herede de HTMLElement todas sus funcionalidades.
        this.attachShadow({mode:'open'});
    };
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
            <section>
                <h2>
                    <slot name="title"></slot> 
                </h2>
                <div>
                    <p>
                        <slot name="body"></slot> 
                    </p>
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