import { getPageElements } from "../pageElements.js";

const pageElements = getPageElements();
const openMenu = () => {
    pageElements.menuBtn.classList.toggle('nav-btn_active');
    if (pageElements.menuBtn.classList.contains('nav-btn_active')) {
        pageElements.overlay.classList.add('overlay-active');
        pageElements.mobileBlock.classList.add('modile-block_active');
        document.body.classList.add('active-menu');
    } else {
        pageElements.overlay.classList.remove('overlay-active');
        pageElements.mobileBlock.classList.remove('modile-block_active');
        document.body.classList.remove('active-menu');
    }
}
const closeMenu = () => {
    pageElements.overlay.classList.remove('overlay-active');
    pageElements.mobileBlock.classList.remove('modile-block_active');
    document.body.classList.remove('active-menu');
    pageElements.menuBtn.classList.remove('nav-btn_active');
}

export const menuControl = () => {
    document.addEventListener('click', e => {
        let target = e.target;
        if (target === pageElements.menuBtn) {
            openMenu();
        }
        if (target === pageElements.overlay) {
            closeMenu();
        }
    })
    pageElements.menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    })
    pageElements.shopLink.addEventListener('click', closeMenu);
}

