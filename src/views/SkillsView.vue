<template>
<section class="section-skills reveal" id="#skills">
    <header>
        <h3>Skills</h3>
        <span id="underline"></span>
    </header>
    <ul class="skills-wrapper">
        <li class="skills-section">
            <h4>Front End</h4>
            <ul class="skills-front">
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>Bootstrap</li>
                <li>Vuetify</li>
                <li>Chakra UI</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Redux</li>
                <li>Vue</li>
                <li>Pinia</li>
                <li>Vue Query</li>
                <li>Astro</li>
            </ul>
        </li>
        <li class="skills-section">
            <h4>Back End</h4>
            <ul class="skills-back">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>SQLite</li>
                <li>Strapi</li>
            </ul>
        </li>
        <li class="skills-section">
            <h4>Tools</h4>
            <ul class="skills-tools">
                <li>Git</li>
                <li>GitHub</li>
            </ul>
        </li>
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

    .skills-wrapper {
        /* Positioning */
        display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 50px;

        /* Visual */
        list-style-type: none;
        font-size: 24px;

        .skills-section {   
            display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 10px;

            ul {
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
                }
            }
        }
    }

    .skills-front {
        li:nth-child(1)::after {
            background-image: url('/images/icons/html.svg');
        }

        li:nth-child(2)::after {
            background-image: url('/images/icons/css.svg');
        }

        li:nth-child(3)::after {
            background-image: url('/images/icons/sass.svg');
        }

        li:nth-child(4)::after {
            background-image: url('/images/icons/bootstrap.svg');
        }

        li:nth-child(5)::after {
            background-image: url('/images/icons/vuetify.svg');
        }

        li:nth-child(6)::after {
            background-image: url('/images/icons/chakra-ui.png');
        }

        li:nth-child(7)::after {
            background-image: url('/images/icons/javascript.svg');
        }

        li:nth-child(8)::after {
            background-image: url('/images/icons/typescript.svg');
        }

        li:nth-child(9)::after {
            background-image: url('/images/icons/react.svg');
        }

        li:nth-child(10)::after {
            background-image: url('/images/icons/nextjs.svg');
            filter: invert(1);
        }

        li:nth-child(11)::after {
            background-image: url('/images/icons/redux.svg');
        }

        li:nth-child(12)::after {
            background-image: url('/images/icons/vue.svg');
        }

        li:nth-child(13)::after {
            background-image: url('/images/icons/pinia.svg');
        }

        li:nth-child(14)::after {
            background-image: url('/images/icons/vue-query.svg');
        }

        li:nth-child(15)::after {
            background-image: url('/images/icons/astro.svg');
        }
    }

    .skills-back {
        li:nth-child(1)::after {
            background-image: url('/images/icons/nodejs.svg');
        }

        li:nth-child(2)::after {
            background-image: url('/images/icons/expressjs.svg');
            filter: invert(1);
        }

        li:nth-child(3)::after {
            background-image: url('/images/icons/mongodb.svg');
        }

        li:nth-child(4)::after {
            background-image: url('/images/icons/sqlite.svg');
        }

        li:nth-child(5)::after {
            background-image: url('/images/icons/strapi.svg');
        }
    }

    .skills-tools {
        li:nth-child(1)::after {
            background-image: url('/images/icons/git.svg');
        }

        li:nth-child(2)::after {
            background-image: url('/images/icons/github.svg');
        }
    }
}
</style>