export default (() => {
  if (!customElements.get('custom-component')) {
    customElements.define(
      'custom-component',
      class CustomComponent extends HTMLElement {
        /**
         * Creates an instance of the custom component.
         * Calls the parent class constructor.
         *
         * @constructor
         * @extends HTMLElement
         */
        constructor() {
          super();
        }

        /**
         * Called when the custom element is appended to the document.
         * Logs a message to the console indicating that the custom component has been initialized.
         */
        connectedCallback() {
          console.info(
            'Hello world. I am a custom component and I have been initialised on the page.',
          );
        }
      },
    );
  }
})();
