/*
::slotted
Pseudoelemento que sirve para poder agregar estilos específicos a todo el contenido dinámico que venga desde fuera del componente y se vaya a colocar en las etiquetas slot.
.
::slotted(que tipo de etiqueta viene por fuera) {estilos}
.
Ejemplo ::slotted(span) {}
.
Si queremos ser más específicos, podemos usar clases:
::slotted(.texto) {}
.
Beneficio
Que los devs que usen el componente puedan modificar las cosas desde fuera sin tener que entrar al componente para cambiar los estilos.
.
Este pseudoelemento solo va a funcionar cuando tengamos un shadow DOM
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
            ::slotted(span){
                font-size:30px;
            }
            ::slotted(.blue){
                color:blue;
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