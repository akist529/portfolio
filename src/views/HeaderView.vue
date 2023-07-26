<template>
    <header>
        <nav>
            <ul>
                <a @click="scrollToSection('#about')">
                    <HeaderItem 
                        name="about" 
                        :mobileMenu="mobileMenu" />
                </a>
                <a @click="scrollToSection('#portfolio')">
                    <HeaderItem 
                        name="portfolio" 
                        :mobileMenu="mobileMenu" />
                </a>
                <a @click="scrollToSection('#skills')">
                    <HeaderItem 
                        name="skills" 
                        :mobileMenu="mobileMenu" />
                </a>
                <a @click="scrollToSection('#contact')">
                    <HeaderItem 
                        name="contact" 
                        :mobileMenu="mobileMenu" />
                </a>
            </ul>
        </nav>
        <ul>
            <a href="https://github.com/akist529" target="_blank"><HeaderItem name="github" :mobileMenu="mobileMenu" /></a>
            <a href="https://www.linkedin.com/in/alexkist" target="_blank"><HeaderItem name="linkedin" :mobileMenu="mobileMenu" /></a>
            <HeaderItem 
                name="resume" 
                :mobileMenu="mobileMenu" />
        </ul>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderItem from 'components/HeaderItem.vue'

export default defineComponent({
    data () {
        const portfolioHover = false;
        const mobileMenu = true;
        const windowWidth = 0;

        return ({
            portfolioHover,
            mobileMenu,
            windowWidth
        });
    },
    methods: {
        handleWindowWidth () {
            if (window.innerWidth < 600) {
                this.mobileMenu = true;
            } else {
                this.mobileMenu = false;
            }
        },
        scrollToSection (id: string) {
            document.getElementById(id)?.scrollIntoView();
        }
    },
    components: {
        HeaderItem
    },
    beforeMount () {
        this.handleWindowWidth();
        window.addEventListener("resize", this.handleWindowWidth);
    }
})
</script>

<style scoped lang="scss">
    header {
        /* Positioning */
        display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
        position: fixed;
            top: -100px;
            right: 0;
            left: 0;
        height: 80px;
        z-index: 999;

        /* Visual */
        background-image: url('/images/backgrounds/footer_lodyas.png');
        padding: 10px 5px;
        animation: 1s header-spawn 1s forwards;
        border-bottom: 2px solid rgb(200, 200, 200);

        nav, ul {
            width: 100%;
        }

        ul {
            /* Positioning */
            display: grid;
                grid-template-columns: repeat(4, 1fr);
                justify-items: center;
                align-items: center;

            /* Visual */
            list-style-type: none;
        }

        > ul {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media only screen and (min-width: 600px) {
        header {
            /* Positioning */
            flex-direction: row;
            align-items: center;

            nav, ul {
                width: auto;
            }

            ul {
                gap: 15px;
            }
        }
    }

    @keyframes header-spawn {
        from {
            top: -100px;
        } to {
            top: 0px;
        }
    }
</style>
