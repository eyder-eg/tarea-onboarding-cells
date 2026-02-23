class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div>
        <h1>Un Componente de ejemplo</h3>
        <p>Texto de mi rama Master</p>
      </div>
    `;
  }
}

customElements.define('my-component', MyComponent);