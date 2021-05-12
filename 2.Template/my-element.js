class myElement extends HTMLElement{
    constructor(){
        super(); //necesitamos que herede de HTMLElement todas sus funcionalidades.
    };
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
            <section>
                <h2> Hola mundo! </h2>
                <div> 
                    <p>Soy mas text</p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    };
    getStyles(){
        return `
        <style>
            h2{
                color:red
            }
        </style>
        `;
    };
    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true));
    };
    connectedCallback(){
        this.render();
    };
};

customElements.define('my-element', myElement);