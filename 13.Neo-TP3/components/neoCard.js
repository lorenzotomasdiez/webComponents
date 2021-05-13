class neoCard extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot=this.attachShadow({mode:'open'});
        this._shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    static get observedAttributes() {
        return ['id','name']
    }
    connectedCallback(){
        this.name=this._shadowRoot.querySelector('#name');
        this.status=this._shadowRoot.querySelector('#status');
        this.species=this._shadowRoot.querySelector('#species');
        this.type=this._shadowRoot.querySelector('#type');
        this.gender=this._shadowRoot.querySelector('#gender');
        this.origin=this._shadowRoot.querySelector('#origin');
        this.image=this._shadowRoot.querySelector('#image');
        this.input = this._shadowRoot.querySelector('input');
        this.b = this._shadowRoot.querySelector('button');
        this.b.addEventListener('click', ()=>{
            if(this.input.value!=""){
                fetch("https://rickandmortyapi.com/api/character/"+this.input.value+"/")
                .then(resp => resp.json())
                .then(data=>{
                    this.name.innerHTML = data.name;
                    this.status.innerHTML = data.status;
                    this.species.innerHTML = data.species;
                    this.type.innerHTML = Math.floor(Math.random()*(3-0))+0;
                    this.gender.innerHTML = data.gender;
                    this.origin.innerHTML = data.origin.name;
                    this.image.setAttribute('src',`${data.image}`);
                });
            }
        });
    }
    disconnectedCallback(){
        if (confirm('esta seguro que quiere cerrar la pantall?')) {
            window.close();
        } else {
            console.log('el elemento fue borrado debe recargar la pagina');
        }
    }
    //---------------------------------------------------->
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML=
        `
        <div class="background"></div>
        <div class="wrapper">
            <h1>Charater Card</h1>
            <div id="card">
                <div class="info">
                    <div class="container">
                        <div>Name: </div><div id="name"></div>
                    </div>
                    <div class="container">
                        <div>Status: </div><div id="status"></div>
                    </div>
                    <div class="container">
                        <div>Specie: </div><div id="species"></div>
                    </div>
                    <div class="container">
                        <div>Type: </div><div id="type"></div>
                    </div>
                    <div class="container">
                        <div>Gender: </div><div id="gender"></div>
                    </div>
                    <div class="container">
                        <div>Origin: </div><div id="origin"></div>
                    </div>
                </div>
                <div class="info">
                    <img id="image" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
                </div>
            </div>    
            <div class="input">
                <input id="input" placeholder="ID"/> <button>GO</button>
            </div>    
        </div>
        
            ${this.getStyle()}
        `;
        return template;
    }
    getStyle(){
        return `
        <style>
            .background{
                position:absolute;
                width: 600px;
                margin:20px;
                padding:20px;
                height:400px;
                background-color:#fff;
                opacity:0.25;
                border-radius:30px;
            }
            .wrapper{
                position:relative;
                z-index:1;
                width: 600px;
                height:400px;
                margin:20px;
                padding:20px;
                display:flex;
                flex-direction:column;
            }
            .wrapper h1{
                margin-left:170px;
                text-transform: uppercase;
            }
            #card{
                width:100%;
                height:100%;
                display:flex;
                justify-content: center;
                align-items:center;
            }
            .container{
                display:flex;
                margin-bottom: 10px;
                border-bottom: 2px solid black;
            }
            .info{
                position: relative;
                width:50%;
                margin:20px;
            }
            img{
                width:150px;
                height:100%;
                margin-left:50px;
                background-color:#fff;
                border-radius:70px;
            }
            .input{
                font-family: 'Poppins', sans-serif;
                margin-left:20px;
                padding:5px;
                display:flex;
                justify-content: center;
                align-items:center;
            }
            .input input{
                width:50px;
                margin-right: 20px;
                padding: 5px;
                border:3px solid black;
                border-radius:5px;
                outline:none;
            }
            button{
                padding:6px;
                background:#000;
                border-radius:10px;
                border:2px solid #fff;
                color:#fff;
            }
            button:hover{
                padding:5px;
                background: #fff;
                box-shadow: 0px 0px 16px #fff;
                border-radius: 20px;
                border: 2px solid;
                transition: all 0.5s ease-in-out;
                border-image: linear-gradient(#fff, #000) 30;
                color:#000;
            }
        </style>
        `;
    }

}
customElements.define("neo-card", neoCard);