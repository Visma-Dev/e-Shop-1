// Класс для работы с Локальным хранилищем
class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    // обработка товаров в корзине
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }   

    // добавление в корзину
    putProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);

        // Проверка на наличие товара в корзине
        if (index === -1) {
            products.push(id);
            pushProduct(true);
        } else {
            products.splice(index, 1);
        }
        
        products.push(id);
        localStorage.setItem(this.keyName, JSON.stringify(products));

        return { pushProduct, products }
    }
}

const localStorageUtil = new LocalStorageUtil();
