<template>
<section className="section-intro">
    <h1>
        <div>
            <span v-for="letter of firstName">{{ letter }}</span>
        </div>
        <div>
            <span v-for="letter of lastName">{{ letter }}</span>
        </div>
    </h1>
    <h2>Web Developer</h2>
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        const firstName = 'Alex';
        const lastName = 'Kist';

        return ({
            firstName,
            lastName
        });
    }
})
</script>

<style scoped lang="scss">
.section-intro {
    /* Positioning */
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    margin-top: 80px;
    margin-bottom: 80px;
    
    h1, h2 {
        /* Visual */
        text-align: center;
        text-transform: uppercase;
    }

    h1 {
        /* Positioning */
        display: flex;
            flex-direction: column;

        span {
            /* Positioning */
            display: inline-block;
            min-width: 12px;

            /* Visual */
            opacity: 0%;
            background-blend-mode: normal;
                background-color: rgba(50,50,50,1);
                -webkit-background-clip: text;
                background-clip: text;
            animation-name: name-spawn;
                animation-duration: 1s;
                animation-delay: 0.25s;
                animation-timing-function: ease-out;
                animation-fill-mode: forwards;
        }
    }

    h2 {
        /* Visual */
        -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
        opacity: 0;
        animation-name: title-spawn;
            animation-duration: 1s;
            animation-delay: 1.25s;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;
    }
}

@keyframes name-spawn {
    from {
        opacity: 0%;
        background-color: rgba(50,50,50,1);
        transform: rotateY(90deg);
    } to {
        opacity: 100%;
        background-color: rgba(50,50,50,0);
        transform: rotateY(0deg);
    }
}

@keyframes title-spawn {
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
}

@media only screen and (min-width: 600px) {
    .section-intro {
        h1 {
            flex-direction: row;
            gap: 24px;
        }
    }
}
</style>