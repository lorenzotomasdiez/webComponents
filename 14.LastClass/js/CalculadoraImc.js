const t = document.createElement('template');


t.innerHTML = `
    <input type="number" id="peso" placeholder="peso" /><br/>
    <input type="number" id="altura" placeholder="altura" /><br/>
    <button>Calcular</button><br/>
    <img width="300px" />
`;



class CalculadoraIMC extends HTMLElement {


    constructor() {
        super();

        // ponemos en contexto el template

        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(t.content.cloneNode(true));
    }

    connectedCallback() {
        var peso = this._shadowRoot.querySelector('#peso');
        var altura = this._shadowRoot.querySelector('#altura');
        var calcular = this._shadowRoot.querySelector('button');
        this.foto = this._shadowRoot.querySelector('img');

        calcular.addEventListener('click', e => {

            this._cualculo(peso.value, altura.value);
        })

    }

    // viene privado 
    _cualculo(peso, altura) {

        var res = (peso / (altura * altura));
        this.foto.style='border-radius:  50%'
        console.log(res);

        if(res <= 18.4){
            console.log('bajo peso');
            this.foto.src= 'img/flaco.jpeg';
        }else if(res >= 18.5 && res <= 24.9){
            console.log(' peso saludable');
            this.foto.src= 'img/normal.png';

        }else{
            console.log('sobre peso');
            this.foto.src= 'img/gordo.png';

        }

    }

}


window.customElements.define('neo-imc',CalculadoraIMC);