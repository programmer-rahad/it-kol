function allLoaded() {



    // Header
    !function () {
        const toggleButtons = document.querySelectorAll('header .logo i');
        const navs = document.querySelectorAll('header nav');
        const headerButtons = document.querySelectorAll('header .header-button');
        const header = document.querySelector('header');
        const fixedHeader = header.cloneNode(true);
        fixedHeader.classList.add('fixed-header');

        header.insertAdjacentElement('beforebegin', fixedHeader)

        const headers = document.querySelectorAll('header');

        headers.forEach(function (header) {
            header.addEventListener('click', function () {
                if (event.target.nodeName === 'I') {
                    event.target.classList.toggle('fa-times');



                    const header = event.currentTarget;
                    const nav = header.querySelector('nav');
                    const headerButton = header.querySelector('.header-button');
                    const height = nav.offsetHeight;
                    let navTotalHeight = nav.children[0].offsetHeight

                    if (header.classList.contains('fixed-header')) {
                        if (!height) {
                            nav.style.height = navTotalHeight + 'px';
                            headerButton.style.height = headerButton.children[0].offsetHeight + 35 + 'px';
                        } else {
                            nav.style.height = '0';
                            headerButton.style.height = '0';
                        }
                    } else {
                        if (!height) {
                            nav.style.height = navTotalHeight + 'px';
                            headerButton.style.height = headerButton.children[0].offsetHeight + 35 + 'px';
                        } else {
                            nav.style.height = '0';
                            headerButton.style.height = '0';

                        }
                    }
                }
            });
        })

        window.addEventListener('scroll', function () {
            const header = document.querySelector('header + header');
            const height = header.offsetHeight;
            if (scrollY > height) {
                header.previousElementSibling.style.transform = 'translateY(0)';
            } else {
                header.previousElementSibling.style.transform = 'translateY(-100%)';

            }
        })

    }();

}

document.addEventListener('DOMContentLoaded', allLoaded)