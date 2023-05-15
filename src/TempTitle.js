class TempTitleComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<h1>Temperature Calculator</h1>`;
  }
}

customElements.define('temp-title', TempTitleComponent);