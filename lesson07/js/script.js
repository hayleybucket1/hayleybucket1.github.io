let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src;'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToload.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToload.forEach((img) => {
        loadImages(img);
    });
}