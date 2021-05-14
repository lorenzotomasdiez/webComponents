class neoTag extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot=this.attachShadow({mode:'open'});
        this._shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    static get observedAttributes(){
        return [];
    };
    connectedCallback(){
        this.bgClass=this._shadowRoot.querySelector('article');
        setInterval(() => {
            this.bgClass.style=`background-image:url(${this.randomImage()})`;
        }, 2000);
    }
    disconnectedCallback(){
        if (confirm('esta seguro que quiere cerrar la pantall?')) {
            window.close();
        } else {
            console.log('el elemento fue borrado debe recargar la pagina');
        }
    }
    randomImage(){
        const array = [
            "./img/image1.jpg",
            "./img/image2.jpg",
            "./img/image3.jpg"
        ];
        return array[Math.floor(Math.random()*(3-0))+0];
    }
    //---------------------------------------------------->
    //TEMPLATE & STYLES
    //---------------------------------------------------->
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=
        `
            <article id="background"></article>
            <div class="wrapper">
                <div id="header">
                    <h2>RICK & MORTY<span>Character Getter<span></h2>
                </div>
                <neo-card></neo-card>
            </div>
            ${this.getStyle()}
        `;
        return template;
    }

    getStyle(){
        return `
        <style>
            
            #background{
                position: absolute;
                width:100%;
                height:100%;
                background-image: url(${this.randomImage()});
                background-size:cover;
                background-position: center center;
                filter:blur(0.8px);
                transition:all .5s ease-in-out;
            }
            .wrapper{
                position: relative;
                z-index:1;
                display:flex;
                flex-wrap: wrap;
                flex-direction: column;
                justify-content: center;
                align-items:center;
                font-family: 'Poppins', sans-serif;
            }
            #header{
                width:100%;
                height:100px;
                display:flex;
                align-items:center;
                justify-content:center;
                background:#fff;
            }
            #header h2{
                font-size:2rem;
                text-transform: uppercase;
                color:#000;
                padding:20px 40px;
            }
            #header span{
                margin-left:10px;
                font-size:1rem;
            }
        </style>
        `
    }
}
customElements.define("neo-tag",neoTag)