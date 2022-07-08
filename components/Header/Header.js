class Header {

    render(count) {
        const html = `
            <div class="container">
                <img class = "logo" src="https://i.ibb.co/BNgGwNJ/favicon.png">
                <nav class="nav">
                    <a class="nav__link" href="#">Смартфоны</a>
                    <a class="nav__link" href="#">Бытовая электроника</a>
                    <a class="nav__link" href="#">Мебель</a>
                    <a class="nav__link" href="#">Игровые приставки</a>
                </nav>
                <div class = "counter"> 
                    🛒 ${count}
                </div>
            </div>
        `;
        
        ROOT_HEADER.innerHTML = html
    }
}
const headerPage = new Header();
const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);

