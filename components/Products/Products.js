class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'В корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetLocationStorage(element, id) {
        const { pushProducts, products } = localStorageUtil.putProducts(id);

        if (pushProducts){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        headerPage.render(products.length);
    }
    render() {
        const productsStore = localStorageUtil.getProducts(); 
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, img, price }) => {
            let activeClass = "";
            let activeText = "";

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else { 
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            };  

            htmlCatalog += `
                <li class="products-element">
                    <img class="products-element__img" scr="${img}" />
                    <span class="products-element__price">${price.toLocaleString()} ₽</span>
                    <span class="products-element__name">${name}</span>
                    <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                        ${activeText}
                    </button>
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

const productsPage = new Products();
productsPage.render();  