class Header {

    handlerOpenCartPage() {
        cartPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
                <img class = "logo" src="https://i.ibb.co/BNgGwNJ/favicon.png">
                <nav class="nav">
                    <a class="nav__link" href="#">Смартфоны</a>
                    <a class="nav__link" href="#">Бытовая электроника</a>
                    <a class="nav__link" href="#">Мебель</a>
                    <a class="nav__link" href="#">Игровые приставки</a>
                </nav>
                <div class = "counter" onClick="headerPage.handlerOpenCartPage();"> 
                     ${count} 🛒 Корзина
                </div>
            </div>
        `;
        
        ROOT_HEADER.innerHTML = html
    }
}
const headerPage = new Header();



