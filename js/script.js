function userScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white');
            navbar.classList.add('navbar-sticky');
        }
        else {
            navbar.classList.remove('bg-white');
            navbar.classList.remove('navbar-sticky');
        }
    });
}


document.addEventListener('DOMContentLoaded', userScroll);


let items = document.querySelectorAll('.carousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i < minPerSlide; i++) {
				if (!next) {
                    // wrap carousel by using first child
                    next = items[0]
            }

            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
}   )