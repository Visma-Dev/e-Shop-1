class Error {
    render() {
        const html = `
        <div class="error-container">
            <div class = "error-message">
                <h3>404 ошибка - страница не найдена</h3>
                <p>Мы уже работаем над проблемой</p>
            </div>
        <div>        
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();
