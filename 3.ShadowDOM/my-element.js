//SHADOW DOM ES UN DOM INDEPENDIENTE ADENTRO DEL DOM GLOBAL ASI QUE TODO LO QUE COINCIDE CON ESTE DOM
//NO VA A COEXISTIR CON ESTE DOM, ESO NOS AYUDA A GENERAR ESTA PROTECCION.
//
class myElement extends HTMLElement{
    constructor(){
        super(); //necesitamos que herede de HTMLElement todas sus funcionalidades.
        this.attachShadow({mode:'open'});
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