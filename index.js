function render () {

    const productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);

    productsPage.render();  
}

loaderPage.render();

let CATALOG = [];

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;

        setTimeout(function() {
            loaderPage.handleClear();
            render();
        }, 500);

    })
    .catch(error => {
        loaderPage.handleClear();
        errorPage.render();
        
    });