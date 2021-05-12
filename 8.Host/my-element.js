/*
:HOST
Pseudoclase que utilizaremos para darle estilos a nuestro componente web (no se trata necesariamente de los estilos visuales).
.
Se trata de los estilos que vienen definidos por default con una etiqueta, como pueden ser display, padding y margin.
.
:host da estilos al componente
.
La pseudoclase :host se utiliza dentro del método donde escribíamos nuestro css del componente getStyles(){}
.
**:host **{estilos para el componente}
.
Teniendo varias instancias de un componente, si a una le agregamos una clase por ejemplo ‘blue’
:host(.blue) {estilos para el componente con la clase blue}
Va a buscar el elemento que tenga de atributo una clase con el valor blue y le va a agregar los estilos que definimos.
.
También podemos darle estilos por atributo. Por ejemplo si a una instancia le agregamos el atributo ‘yellow’
:host([yellow]) {estilos para el elemento que tenga el atributo yellow}
.
También podemos agregar cierto contexto.
Por ejemplo, si tenemos una instancia del componente dentro de un article con una clase ‘card’
:host-context(article.card) {estilos}
.
Hacer cambios al contenido del componente
:host([yellow]) h1 {estilos}
*/
class myElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
            <section>
                <h1>
                    <slot name="title"></slot>
                </h1>
                <p>
                    <slot name="body"></slot>
                </p>
                <slot></slot>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles(){
        return `
        <style>
            :host{
                display:inline-block;
                width:100%;
                min-width:300px;
                max-width:450px;
                font-size:20px;
                background:#444;
            }
            :host(.blue){
                background: pink;
            }
            :host([yellow]){
                background: #ffff;
            }
            :host([yellow]) h1 {
                color:#fff;
            }
            :host-context(article.card){
                display:block;
                max-width:100%;
                background-color: blue;
            }
        </style>
        `;
    };
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}
customElements.define('my-element', myElement);