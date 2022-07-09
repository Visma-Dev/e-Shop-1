class Cart {

    handlerClear() {
        ROOT_CART.innerHTML = "";
    }

    render() {
        const productsStore = localStorageUtil.getProducts(); 
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if(productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="cart-element__name">${name} :</td>
                        <td class="cart-element__price">${price.toLocaleString()} ₽</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="cart-container">
                <h1 class="cart-title">Корзина</h1>
                <div class="cart__exit" onclick="cartPage.handlerClear()"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                    <td class="cart-element__name">Итого:</td>
                    <td class="cart-element__sum_price">${sumCatalog.toLocaleString()} ₽</td>
                </tr>
                </table>
            </div>
        `;
        ROOT_CART.innerHTML = html;
    }
}

const cartPage = new Cart();