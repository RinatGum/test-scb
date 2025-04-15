class OverlayMenu {
  selectors = {
    root: "[data-js-overlay-menu]",
    dialog: "[data-js-overlay-menu-dialog]",
    burgerButton: "[data-js-overlay-menu-burger-button]",
  };

  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
  };

  constructor() {
    this.rootElement = null;
    this.dialogElement = null;
    this.burgerButtonElement = null;
  }

  init() {
    this.rootElement = document.querySelector(this.selectors.root);

    if (!this.rootElement) {
      console.error("Root element not found for OverlayMenu.");
      return;
    }

    this.dialogElement = this.rootElement.querySelector(this.selectors.dialog);
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    );

    if (!this.dialogElement || !this.burgerButtonElement) {
      console.error("Required elements not found in OverlayMenu.");
      return;
    }

    this.bindEvents();
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.dialogElement.open = !this.dialogElement.open;
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  };

  bindEvents() {
    this.burgerButtonElement.addEventListener(
      "click",
      this.onBurgerButtonClick
    );
  }
}

export default OverlayMenu;
