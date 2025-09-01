(() => {
  class StickyHeader extends HTMLElement {
    constructor() {
      super();

      this.section = this.closest("[data-section]");
      this.stickyHeader = this.querySelector("[data-sticky-header]");
      this.isDesktop = window.matchMedia("(min-width: 1025px)");

      if (!this.isDesktop) return;

      this.addObserver();
    }

    addObserver() {
      const headerObserver = new IntersectionObserver(this.handleHeaderObserverIntersecting.bind(this));
      const sectionObserver = new IntersectionObserver(this.handleSectionObserverIntersecting.bind(this));

      sectionObserver.observe(this.section);
      headerObserver.observe(this);
    }

    handleHeaderObserverIntersecting(entries) {
      entries.forEach(entry => {
        this.setStickyHeaderState(entry.isIntersecting ? "remove" : "add");
      });
    }

    handleSectionObserverIntersecting(entries) {
      entries.forEach(entry => {
        this.setStickyHeaderState(entry.isIntersecting ? "add" : "remove");
      });
    }

    setStickyHeaderState(action) {
      this.stickyHeader.classList[action]("fixed", "bottom-0", "left-0", "right-0", "py-5");
    }
  }

  if (!customElements.get("sticky-header")) {
    customElements.define("sticky-header", StickyHeader)
  }
})()