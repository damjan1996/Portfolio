export function register() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            const swUrl = `${import.meta.env.BASE_URL}sw.js`;
            navigator.serviceWorker
                .register(swUrl)
                .then((_registration) => {
                    console.log('ServiceWorker registration successful');
                })
                .catch((error) => {
                    console.error('ServiceWorker registration failed:', error);
                });
        });
    }
}

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then((registration) => {
                registration.unregister();
            })
            .catch((error) => {
                console.error(error.message);
            });
    }
}
