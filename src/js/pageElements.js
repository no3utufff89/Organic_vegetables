export const getPageElements = () => {
    const menuBtn = document.querySelector('.nav-btn');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    const mobileBlock = document.querySelector('.modile-block');
    const menuLinks = document.querySelectorAll('.mobile-menu-list__link');
    const shopLink = document.querySelector('.shop-link');
    return {
        menuBtn,
        body,
        overlay,
        mobileBlock,
        menuLinks,
        shopLink
    }

}