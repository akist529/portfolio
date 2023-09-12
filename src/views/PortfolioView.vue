<template>
<section class="section-portfolio reveal" id="#portfolio">
    <header>
        <h3>Projects</h3>
        <span id="underline"></span>
    </header>
    <main>
        <Project 
            name="MakeDrink"
            :complete="true"
            liveLink="https://makedr.ink"
            :gitHub="'https://github.com/akist529/cocktail-mixer'"
            :techStack="['TypeScript', 'SASS', 'Next.js', 'Redux', 'Golang', 'SQLite', 'Apache']"
            :windowWidth="windowWidth">
            <ul>
                <li>Full stack cocktail builder application</li>
                <li>Uses Redux store to track entered ingredients</li>
                <li>Recipes are logically served based on available ingredients and substitutes, if possible</li>
            </ul>
        </Project>
        <Project 
            name="LiftShark"
            :complete="true"
            liveLink="https://liftshark.org"
            gitHub="https://github.com/akist529/gym-tracker"
            :techStack="['TypeScript', 'SASS', 'Vue', 'Pinia', 'Vue Query', 'Vuetify', 'Strapi']"
            :windowWidth="windowWidth"
        >
            <ul>
                <li>Full stack fitness tracking application</li>
                <li>Fetches data from public API to provide list of exercises</li>
                <li>Uses Strapi backend to manage user data such as custom workouts, routines and body measurements</li>
                <li>Uses Pinia store to manage client state</li>
            </ul>
        </Project>
        <Project
            name="Education Royale Gaming"
            :complete="false"
            liveLink="https://educationroyalegaming.com/"
            gitHub="https://github.com/akist529/education-royale-gaming"
            :techStack="['TypeScript', 'Next.js', 'Chakra UI']"
            :windowWidth="windowWidth"
        >
            <ul>
                <li>Worked closely with business leader to create an appealing user experience</li>
                <li>Uses Chakra UI for a sleek and scalable UI</li>
            </ul>
        </Project>
    </main>
</section>
</template>

<script lang="ts">
// Vue imports
import { defineComponent } from 'vue';
// Local components
import Project from 'components/Project.vue';

export default defineComponent({
    data () {
        let windowWidth = 0;

        return ({
            windowWidth
        });
    },
    methods: {
        handleWindowWidth () {
            this.windowWidth = window.innerWidth;
        },
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
    components: {
        Project
    },
    mounted () {
        this.handleWindowWidth();
        window.addEventListener("scroll", this.reveal);
        this.reveal();

        this.$nextTick(() => {
            window.addEventListener("resize", this.handleWindowWidth);
        })
    },
    beforeDestroy () {
        window.removeEventListener("resize", this.handleWindowWidth);
        window.removeEventListener("scroll", this.reveal);
    }
    
});
</script>

<style scoped lang="scss">
.section-portfolio {
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    scroll-margin-top: 100px;
    margin-bottom: 10vw;

    header {
        display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        h3 {
            font-size: 48px;
        }

        #underline {
            z-index: 998;
            width: 256px;
            height: 2px;
            background-color: white;
            margin: 0 auto;
            border-radius: 50%;
        }
    }

    main {
        display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: flex-start;
            gap: 20px;
    }
}
</style>