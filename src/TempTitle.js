class TempTitleComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Temperature Calculator</h1>`;
  }
}

customElements.define('temp-title', TempTitleComponent);