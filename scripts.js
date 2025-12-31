document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 200);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const planes = document.querySelectorAll("img.fly-in");
    planes.forEach((plane, index) => {
        setTimeout(() => {
            plane.classList.add('visible');
        }, index * 300);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('img.imgag');
    imgs.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('visible')
        }, index * 200);
    });
});