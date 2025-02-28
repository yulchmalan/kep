const footerContent = `
  <div class="container">
    <div class="footer-top">
        <div>
        <p class="font-size">
            <i class="fa-solid fa-location-dot"></i>Адреса:
        </p>
        <a href="https://maps.app.goo.gl/C75wGNHST8XtxAoP6"
            >вул. Вовчинецька, 223<br />м. Івано-Франківськ, 76006</a
        >
        </div>
        <div>
        <p class="font-size">
            <i class="fa-solid fa-phone-volume"></i>Приймальня директора:
        </p>
        <a href="tel:0342783046">(0342) 78-30-46,</a>
        <a href="tel:0342783022">(0342) 78-30-22,</a>
        <a href="mailto:ifkep@ukr.net">ifkep@ukr.net</a>
        </div>
        <div>
        <p class="font-size">
            <i class="fa-solid fa-phone-volume"></i>Приймальна комісія:
        </p>
        <a href="tel:0342565700">(0342) 56-57-00,</a>
        <a href="tel:0688263546">(068) 826-35-46,</a>
        <a href="tel:0993754783">(099) 375-47-83</a>
        </div>
    </div>
    <div class="footer-bottom">
        <p class="font-size">
        Всі права захищені &copy; <span id="currentYear"></span>
        </p>
        <div>
        <div>
            <a href=""><i class="fa-brands fa-facebook"></i></a>
        </div>
        <div>
            <a href=""><i class="fa-brands fa-telegram"></i></a>
        </div>
        <div>
            <a href=""><i class="fa-brands fa-viber"></i></a>
        </div>
        </div>
    </div>
    </div>
`;

document.querySelector("footer").innerHTML = footerContent;
