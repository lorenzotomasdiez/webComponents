/*
MY NOTES FOR CUSTOM PROPIERTIES 😄
.
Como se ha comentado en anteriores clases generar un componente reutilizable implica que no tenemos que ir hasta el código de este y cambiarlo, entonces lo que haremos es re asignar nuestros estilos por fuera.

Con shadow dom esta idea que se plantea de poder cambiar nuestros estilos por fuera no es posible, pero esto en cierto punto es mentira ya que podremos hacerlo atraves de las Custom Properties que son unas variables en donde las generamos y de valor estas tienen un estilo.

Lo que haremos es definir variables en nuestros host y luego agregárselas a nuestros elementos que estan dentro de los componentes para probarlas.

Luego para poderlas modificar desde fuera del codigo establecido en el componente, lo que hacemos es modificarlas desde nuestro css, seleccionando lo que queremos modificar y reasignando el valor de la variable.

Podremos utilizar como selector el componente y clases que le establezcamos al componente.
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
                <div>
                    <p>
                        <slot name="body"></slot>
                    </p>
                <div>
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
            --primary-color:tomato;
            --secondary-color:salmon;
            --heading-primary:30px;
            --heading-secondary:25px;
            display:inline-block;
            width:100%;
            min-width: 300px;
            max-width: 450px;
        }
        section{
            background: var(--primary-color);
        }
        section div{
            background:var(--secondary-color);
        }
        h1{
            font-size:var(--heading-primary);
        }
        p{
            font-size:var(--heading-secondary);
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