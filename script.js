document.addEventListener("DOMContentLoaded", () => {

    /*
        ПЛАВНОЕ ПОЯВЛЕНИЕ СТРАНИЦЫ
    */

    document.body.classList.add("page-loaded");


    /*
        ПОЯВЛЕНИЕ БЛОКОВ ПРИ ПРОКРУТКЕ
    */

    const animatedElements = document.querySelectorAll(
        ".service-card, .about-preview, .story, .value, .contacts"
    );


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach((element) => {

        observer.observe(element);

    });



    /*
        ДВИЖЕНИЕ КРУГОВ ЗА КУРСОРОМ
    */

    const visual = document.querySelector(".hero-visual");


    if (visual) {

        visual.addEventListener("mousemove", (event) => {

            const rect = visual.getBoundingClientRect();


            const x = event.clientX - rect.left;

            const y = event.clientY - rect.top;


            const moveX =
                (x - rect.width / 2) / 25;


            const moveY =
                (y - rect.height / 2) / 25;


            const circleOne =
                visual.querySelector(".circle-one");


            const circleTwo =
                visual.querySelector(".circle-two");


            if (circleOne) {

                circleOne.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;

            }


            if (circleTwo) {

                circleTwo.style.transform =
                    `translate(${-moveX}px, ${-moveY}px)`;

            }

        });


        /*
            Возвращаем круги
            в исходное положение
        */

        visual.addEventListener("mouseleave", () => {

            const circleOne =
                visual.querySelector(".circle-one");


            const circleTwo =
                visual.querySelector(".circle-two");


            if (circleOne) {

                circleOne.style.transform =
                    "translate(0, 0)";

            }


            if (circleTwo) {

                circleTwo.style.transform =
                    "translate(0, 0)";

            }

        });

    }

});