customElements.get("custom-component") || customElements.define("custom-component", class extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.info("Hello world. I am a custom component and I have been initialised on the page.");
  }
});