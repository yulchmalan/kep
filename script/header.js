class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <address class="topbar">
        <div class="container">
          <div class="topbar_section">
            <p>Ми в соцмережах:</p>
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-telegram"></i></a>
            <a href=""><i class="fa-brands fa-viber"></i></a>
          </div>
          <div class="topbar_section">
            <div class="geo">
              <i class="fa-solid fa-location-dot"></i>
              <a href="https://maps.app.goo.gl/C75wGNHST8XtxAoP6"
                >вул. Вовчинецька, 223</a
              >
            </div>
            <div class="mail">
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:ifkep@ukr.net">ifkep@ukr.net</a>
            </div>
            <div class="tel">
              <i class="fa-solid fa-phone-volume"></i>
              <a href="tel:0342783046">0342783046</a>
            </div>
          </div>
        </div>
      </address>
      <nav>
        <div class="container">
          <a href="index.html" class="logo"
            ><img
              src="images/logo.png"
              alt="Логотип Коледжу електронних приладів"
            />
          </a>
          <ul class="nav-links">
            <li><a href="index.html" class="active">Головна</a></li>
            <li class="dropdown">
              <span>Про коледж <i class="fa-solid fa-chevron-down"></i></span>
              <ul class="dropdown-menu">
                <li><a href="#">Історія коледжу</a></li>
                <li><a href="#">Пам'яті Захисників України</a></li>
                <li><a href="#">Адміністрація</a></li>
                <li><a href="#">Кадровий склад</a></li>
                <li><a href="#">Матеріально-технічне забезпечення</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <span
                >Публічна інформація <i class="fa-solid fa-chevron-down"></i
              ></span>
              <ul class="dropdown-menu">
                <li><a href="#">Установчі документи</a></li>
                <li><a href="#">Положення</a></li>
                <li><a href="#">Вибори директора</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <span
                >Освітня діяльність <i class="fa-solid fa-chevron-down"></i
              ></span>
              <ul class="dropdown-menu">
                <li><a href="edu_activity_sub_pages/psychologist.html">Методична рада</a></li>
                <li><a href="edu_activity_sub_pages/activity_clubs.html">Виховна діяльність</a></li>
                <li><a href="#">Виробнича діяльність</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <span>Викладачу <i class="fa-solid fa-chevron-down"></i></span>
              <ul class="dropdown-menu">
                <li><a href="#">Атестація педагогічних працівників</a></li>
                <li><a href="pages/teacher/training.html">Підвищення кваліфікації</a></li>
                <li><a href="#">Школа нового педагога</a></li>
                <li><a href="#">Методичні матеріали</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <span>Студенту <i class="fa-solid fa-chevron-down"></i></span>
              <ul class="dropdown-menu">
                <li><a href="#">Стипендіальне забезпечення</a></li>
                <li><a href="#">Каталог дисциплін вільного вибору</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <span>Вступнику <i class="fa-solid fa-chevron-down"></i></span>
              <ul class="dropdown-menu">
                <li><a href="#">Нормативно-правова база</a></li>
                <li><a href="#">Протоколи</a></li>
                <li><a href="#">Рейтингові списки</a></li>
                <li><a href="#">Інформація про вступ</a></li>
                <li><a href="#">Підготовчі курси</a></li>
              </ul>
            </li>
          </ul>
          <div>
            <button type="button" id="search-button" class="search-button icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <button type="button" id="burger" class="burger icon">
              <i class="fa-solid fa-bars"></i>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </nav>
`;
  }
}

customElements.define("custom-header", Header);
