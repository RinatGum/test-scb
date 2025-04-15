import "normalize.css";
import "./styles/main.scss";
import OverlayMenu from "./js/OverlayMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  const overlayMenu = new OverlayMenu();
  overlayMenu.init();

  const menuItemsWithSubmenu = document.querySelectorAll(
    ".header__menu-item--with-submenu"
  );

  menuItemsWithSubmenu.forEach((item) => {
    const submenuToggle = item.querySelector(
      ".header__menu-link--with-submenu"
    );

    submenuToggle.addEventListener("click", (event) => {
      event.preventDefault();
      const isOpen = item.classList.contains("is-open");

      menuItemsWithSubmenu.forEach((i) => i.classList.remove("is-open"));

      if (!isOpen) {
        item.classList.add("is-open");
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".header__menu-item--with-submenu")) {
      menuItemsWithSubmenu.forEach((item) => item.classList.remove("is-open"));
    }
  });

  const submenuItemsWithSubmenu = document.querySelectorAll(
    ".header__submenu-item--with-submenu"
  );

  submenuItemsWithSubmenu.forEach((item) => {
    const submenuToggle = item.querySelector(
      ".header__submenu-link--with-submenu"
    );
    const connector = document.createElement("div");
    connector.classList.add("header__submenu-connector");
    item.appendChild(connector);

    submenuToggle.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const isOpen = item.classList.contains("is-open");

      submenuItemsWithSubmenu.forEach((i) => {
        if (i !== item) i.classList.remove("is-open");
      });

      if (!isOpen) {
        item.classList.add("is-open");
      } else {
        item.classList.remove("is-open");
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".header__submenu-item--with-submenu")) {
      submenuItemsWithSubmenu.forEach((item) =>
        item.classList.remove("is-open")
      );
    }
  });
});

document.querySelector("#app").innerHTML = `
  <header class="header" data-js-overlay-menu>
  <div class="header__inner container">
    <a class="header__logo" href="#" aria-label="Логитип компании">
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 54 54" fill="none">
        <g filter="url(#filter0_d_1_4)">
          <path d="M48 23C48 34.598 38.598 44 27 44C15.402 44 6 34.598 6 23C6 11.402 15.402 2 27 2C38.598 2 48 11.402 48 23Z" stroke="#2D9CDB" stroke-width="4"></path>
          <path d="M17.462 19.64C18.518 19.64 19.34 19.904 19.928 20.432C20.516 20.96 20.81 21.824 20.81 23.024V29H18.128V23.582C18.128 22.43 17.552 21.854 16.4 21.854C16.124 21.854 15.842 21.896 15.554 21.98C15.266 22.064 15.044 22.166 14.888 22.286L14.852 29H12.188V16.292H14.888V20.306C15.716 19.862 16.574 19.64 17.462 19.64Z" fill="white"></path>
          <path d="M23.0659 26.462H25.6759V29H23.0659V26.462Z" fill="white"></path>
          <path d="M28.4111 29V15.9922H30.9687L34.5723 26.0557L38.2812 15.9922H40.5664V29H38.8437V18.418L35.2578 28.1299H33.4736L29.9932 18.3916V29H28.4111Z" fill="white"></path>
        </g>
        <defs>
          <filter id="filter0_d_1_4" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4"></feBlend>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_4" result="shape"></feBlend>
          </filter>
        </defs>
      </svg>
    </a>
    <dialog class="header__overlay-menu-dialog" data-js-overlay-menu-dialog>
    <nav class="header__menu">
      <ul class="header__menu-list">
        <li class="header__menu-item">
          <a class="header__menu-link" href="#">Главная</a>
        </li>
        <li class="header__menu-item header__menu-item--with-submenu">
          <button class="header__menu-link header__menu-link--with-submenu" >Основное меню
            <svg class="header__menu-arrow" xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
              <path d="M4.5359 0L8.5359 6H0.535904L4.5359 0Z" fill="#F2994A"></path>
            </svg>
          </button>
          <ul class="header__submenu">
            <li class="header__submenu-item">
              <a class="header__submenu-link" href="#">Заказать вёрстку</a>
            </li>
            <li class="header__submenu-item">
              <a class="header__submenu-link" href="#">Отправить макет на проверку</a>
            </li>
            <li class="header__submenu-item">
              <a class="header__submenu-link" href="#">Хочу работать у вас</a>
            </li>
            <li class="header__submenu-item header__submenu-item--with-submenu">
              <div class="header__submenu-link-wrapper">
                <button class="header__submenu-link header__submenu-link--with-submenu" >Есть предложения по работе с клиентами
                
                </button>
                <svg class="header__submenu-arrow" xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                    <path d="M4.5359 0L8.5359 6H0.535904L4.5359 0Z" fill="#F2994A"></path>
                  </svg>
              </div>
              <ul class="header__submenu-submenu">
                <li class="header__submenu-submenu-item">
                  <a href="#" class="header__submenu-submenu-link">У меня есть оффер</a>
                </li>
                <li class="header__submenu-submenu-item">
                  <a href="#" class="header__submenu-submenu-link">Сделать партнёром</a>
                </li>
              </ul>
            </li>
          </ul>  
        </li>
        <li class="header__menu-item">
          <a class="header__menu-link" href="#">Наши сервисы</a>
        </li>
        <li class="header__menu-item">
          <a class="header__menu-link" href="#">Контакты</a>
        </li>
      </ul>
    </nav>
  </dialog>
  <div class="header__actions">
    <a class="header__actions-button" href="tel:+1(321)222-33-33">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.821 16.43 14.94C17.55 15.311 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.391 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#5BC12C"></path>
      </svg>
      <span class="header__actions-text">+1 (321) 222 - 33 -33</span>
    </a>
  </div>
  <button
                    class='header__burger-button burger-button'
                    
                        data-js-overlay-menu-burger-button
                        aria-label="Кнопка открытия меню"
                    
  >
   <svg class="burger-button__icon" width="30" height="30" viewBox="0 0 100 100">
    <path class="burger-button__line burger-button__line--1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"/>
    <path class="burger-button__line burger-button__line--2" d="M 20,50 H 80"/>
    <path class="burger-button__line burger-button__line--3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"/>
  </svg>
  </button>
  </div>
  
</header>
<main class="main">

</main>
`;
