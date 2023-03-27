<template>
    <header>
        <nav>
            <ul>
                <HeaderItem name="about" :mobileMenu="mobileMenu" />
                <HeaderItem name="portfolio" :mobileMenu="mobileMenu" />
                <HeaderItem name="contact" :mobileMenu="mobileMenu" />
            </ul>
        </nav>
        <ul>
            <HeaderItem name="github" :mobileMenu="mobileMenu" />
            <HeaderItem name="linkedin" :mobileMenu="mobileMenu" />
            <HeaderItem name="resume" :mobileMenu="mobileMenu" />
        </ul>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderItem from 'components/HeaderItem.vue'

export default defineComponent({
    data () {
        const portfolioHover = false
        const mobileMenu = true
        const windowWidth = 0

        return {
            portfolioHover,
            mobileMenu,
            windowWidth
        }
    },
    methods: {
        handleWindowWidth () {
            if (window.innerWidth < 620) {
                this.mobileMenu = true
            } else {
                this.mobileMenu = false
            }
        }
    },
    components: {
        HeaderItem
    },
    beforeMount () {
        this.handleWindowWidth()
        window.addEventListener("resize", this.handleWindowWidth)
    },
    beforeUnmount () {
        window.removeEventListener("resize", this.handleWindowWidth)
    }
})
</script>

<style scoped lang="scss">
    header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 0;
        z-index: 2;

        background: rgb(51, 51, 51);
        border-bottom: 2px solid rgb(187, 187, 187);
        box-shadow: 5px 5px 20px rgb(0,0,0);
        padding: 0;

        animation-name: header-spawn;
        animation-duration: 1s;
        animation-fill-mode: forwards;

        nav {
            width: 100%;
            position: relative;
            right: 100vw;
            opacity: 0%;

            animation-name: nav-spawn;
            animation-duration: 0.8s;
            animation-delay: 0.5s;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;
        }

        ul {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            justify-items: center;
            align-items: center;
            list-style-type: none;
            width: 100%;
        }

        > ul {
            position: relative;
            left: 100vw;
            opacity: 0%;

            animation-name: social-spawn;
            animation-duration: 0.8s;
            animation-delay: 0.5s;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;
        }

        @keyframes nav-spawn {
            0% {
                opacity: 0%;
                right: 100vw;
            } 100% {
                opacity: 100%;
                right: 0;
            }
        }

        @keyframes social-spawn {
            0% {
                opacity: 0%;
                left: 100vw;
            } 100% {
                opacity: 100%;
                left: 0;
            }
        }
    }

    @keyframes header-spawn {
        0% {
            height: 0;
        } 100% {
            height: 80px;
            padding: 10px 5px;
        }
    }

    @media only screen and (min-width: 620px) {
        header {
            flex-direction: row;
            align-items: center;

            nav {
                width: auto;
            }

            ul {
                gap: 15px;
                width: auto;
            }
        }
    }
</style>
