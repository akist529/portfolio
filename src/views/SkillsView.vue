<template>
<section class="section-skills reveal" id="#skills">
    <header>
        <h3>Skills</h3>
        <span id="underline"></span>
    </header>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Sass</li>
        <li>Bootstrap</li>
        <li>Vuetify</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Redux</li>
        <li>Vue</li>
        <li>Pinia</li>
        <li>Vue Query</li>
        <li>Astro</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Strapi</li>
    </ul>
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    methods: {
        reveal () {
            var reveals = document.querySelectorAll(".reveal");
            
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        }
    },
    mounted () {
        window.addEventListener("scroll", this.reveal);
        this.reveal();
    },
    beforeDestroy () {
        window.removeEventListener("scroll", this.reveal);
    }
});
</script>

<style lang="scss">
.section-skills {
    /* Positioning */
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    scroll-margin-top: 100px;
    margin-bottom: 10vw;
        
    header {
        /* Positioning */
        display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        h3 {
            /* Visual */
            font-size: 48px;
        }

        #underline {
            /* Positioning */
            z-index: 998;
            width: 256px;
            height: 2px;
            margin: 0 auto;

            /* Visual */
            background-color: white;
            border-radius: 50%;
        }
    }

    ul {
        /* Positioning */
        display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 20px;

        /* Visual */
        list-style-type: none;
        font-size: 24px;

        li {   
            display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 10px;

            &::after {
                background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                content: '';
                height: 96px;
                width: 96px;
            }

            &:nth-child(1)::after {
                background-image: url('/images/icons/html.svg');
            }

            &:nth-child(2)::after {
                background-image: url('/images/icons/css.svg');
            }

            &:nth-child(3)::after {
                background-image: url('/images/icons/sass.svg');
            }

            &:nth-child(4)::after {
                background-image: url('/images/icons/bootstrap.svg');
            }

            &:nth-child(5)::after {
                background-image: url('/images/icons/vuetify.svg');
            }

            &:nth-child(6)::after {
                background-image: url('/images/icons/javascript.svg');
            }

            &:nth-child(7)::after {
                background-image: url('/images/icons/typescript.svg');
            }

            &:nth-child(8)::after {
                background-image: url('/images/icons/react.svg');
            }

            &:nth-child(9)::after {
                background-image: url('/images/icons/nextjs.svg');
                filter: invert(1);
            }

            &:nth-child(10)::after {
                background-image: url('/images/icons/redux.svg');
            }

            &:nth-child(11)::after {
                background-image: url('/images/icons/vue.svg');
            }

            &:nth-child(12)::after {
                background-image: url('/images/icons/pinia.svg');
            }

            &:nth-child(13)::after {
                background-image: url('/images/icons/vue-query.svg');
            }

            &:nth-child(14)::after {
                background-image: url('/images/icons/astro.svg');
            }

            &:nth-child(15)::after {
                background-image: url('/images/icons/nodejs.svg');
            }

            &:nth-child(16)::after {
                background-image: url('/images/icons/expressjs.svg');
                filter: invert(1);
            }

            &:nth-child(17)::after {
                background-image: url('/images/icons/mongodb.svg');
            }

            &:nth-child(18)::after {
                background-image: url('/images/icons/mysql.svg');
            }

            &:nth-child(19)::after {
                background-image: url('/images/icons/strapi.svg');
            }
        }
    }
}
</style>