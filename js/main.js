var swiper = new Swiper(".portfolio__slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper2 = new Swiper(".partner__list", {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 70,
    autoplay: {
        delay: 2500 ,
    },
});
document.addEventListener('DOMContentLoaded', function() {

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    let phoneInputs = document.querySelectorAll('.js-phone-mask');
        phoneInputs.forEach(function (input) {
            const iti = window.intlTelInput(input, {
                initialCountry: "auto",
                geoIpLookup: callback => {
                    fetch("https://ipapi.co/json")
                        .then(res => res.json())
                        .then(data => callback(data.country_code))
                        .catch(() => callback("us"));
                },
                loadUtils: () => import("/intl-tel-input/js/utils.js?1743167482095") // for
            });

        });

    document.querySelector('.btn__close').addEventListener('click', function (){
        document.querySelector('.modal').classList.remove('df')
        document.querySelector('.modal').classList.add('dn');
    })
        document.querySelector('.banner__actions .btn__white').addEventListener('click', function (e){
            e.preventDefault();
            document.querySelector('.modal').classList.remove('dn')
            document.querySelector('.modal').classList.add('df')
        })


    }


);
//inputMask
