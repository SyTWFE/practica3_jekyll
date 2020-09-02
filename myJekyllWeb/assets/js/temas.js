class Contenido extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
      const image = this.getAttribute('img');
      const title = this.getAttribute('title');
      const description = this.getAttribute('description');
      const url_site = this.getAttribute('link');

        let container = document.createElement('div');
        container.innerHTML = `

          <div class="card grey align="center">
            <div class="card-image">
                <img src="${image}">
            </div>
            <div class="card-content">
              <span class="card-title">${title}</span>
              <p>${description}</p>
            </div>

            <div class="card-action center">

              <a href="${url_site}">Oficial Site</a>
            </div>

            <div class="card-reveal">
              <span class="card-title">
                Los detalles del reloj
                <i class="material-icons right">close</i>
                <p>
                  Aqui esta todo el contenido del reloj
                </p>
              </span>
              
            </div>`;
        console.log("se ha añadido un elemento");      
        this.appendChild(container);
    }
}

window.customElements.define("ver-tema", Contenido);

function ver_tema(teme){
    let select = document.getElementById('tema_select');
    select.innerHTML = `El tema seleccionado es ${teme}`;
    
}