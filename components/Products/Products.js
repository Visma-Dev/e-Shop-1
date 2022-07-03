class Products {
    
    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img }) => {
            htmlCatalog += `
                <li class="products-element">
                    <img class="products-element__img" scr="${img}" />
                    <span class="products-element__price">${price.toLocaleString()} ₽</span>
                    <span class="products-element__name">${name}</span>
                    <button class="products-element__btn">В корзину</button>
                </li>
            `;               
        }); 

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productPage = new Products();
productPage.render();  