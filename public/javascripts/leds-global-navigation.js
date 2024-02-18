class GlobalNav {
    constructor(elem) {
        this.container = elem;
        this.menuToggle = elem.querySelector('.leds-global-navigation__toggle-button');
        this.menuPanel = elem.querySelector('.leds-global-navigation__navigation-menu');

        this.addEvents();
    }

    addEvents() {
        // add event for resizing
        this.menuToggle.addEventListener('click', this.handleMenuClick.bind(this));
    }

    handleMenuClick(e) {
        const isOpen = this.menuToggle.getAttribute('aria-expanded') === 'true';

        this.menuToggle.setAttribute('aria-expanded', !isOpen);

        if (isOpen) {
            this.menuPanel.classList.remove('leds-global-navigation__navigation-menu--open');
        } else {
            this.menuPanel.classList.add('leds-global-navigation__navigation-menu--open');
        }

    }
}

setTimeout(() => {
    const globalNav = Array.from(document.querySelectorAll('.leds-global-navigation'));
    if (globalNav && globalNav.length > 0) {
        globalNav.forEach((nav) => {
            new GlobalNav(nav);
        });
    }
}, 1000);