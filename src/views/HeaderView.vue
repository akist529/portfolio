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
        top: 0;
        left: 0;
        right: 0;
        position: fixed;
        height: 80px;
        z-index: 1;

        background: rgb(51, 51, 51);
        padding: 10px 5px;

        nav {
            width: 100%;
        }

        ul {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            justify-items: center;
            align-items: center;
            list-style-type: none;
            width: 100%;
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
