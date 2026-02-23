class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div>
        <h1>Un Componente de ejemplo</h3>
        <p>Texto base para pruebas de marge</p>
      </div>
    `;
  }
}

customElements.define('my-component', MyComponent);