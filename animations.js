document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-animate");
    const heroDivLeft = document.querySelector(".HeroDivLeft");
    const heroDivRight = document.querySelector(".HeroDivRight");
    const joinButton = document.querySelector(".JoinButtonDiv button");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
    };

    const displayScrollElement = (element) => {
        element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    const initialHeroAnimation = () => {
        displayScrollElement(heroDivLeft);
        displayScrollElement(heroDivRight);
        displayScrollElement(joinButton);
    };

    // Initialize the hero div animation
    initialHeroAnimation();

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

    handleScrollAnimation(); // Initialize the scroll animations when the page loads
});
