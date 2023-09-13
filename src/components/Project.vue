<template>
    <article class="project">
        <h4>&lt;{{ name }} /></h4>
        <picture>
            <source
                media="(min-width:992px)"
                :srcset="`/images/previews/${name.toLowerCase().replaceAll(' ', '')}-laptop.webp`"
                width="384"
            />
            <source
                media="(min-width:600px)"
                :srcset="`/images/previews/${name.toLowerCase().replaceAll(' ', '')}-tablet.webp`"
                width="256"
            />
            <img
                :src="`/images/previews/${name.toLowerCase().replaceAll(' ', '')}-mobile.webp`"
                :alt="`${name} Preview`"
                width="192"
            />
        </picture>
        <div class="description">
            <div
                class="desc-corner"
                style="top: 0; left: 0;"
            ></div>
            <slot></slot>
            <div
                class="desc-corner"
                style="right: 0; bottom: 0; transform: rotate(180deg)"
            ></div>
        </div>
        <div class="tech-stack">
            <header class="stack-header">
                <h5>Tech Stack</h5>
                <span id="underline"></span>
            </header>
            <ul>
                <li v-for="tech in techStack">
                    <span>{{ tech }}</span>
                    <span
                        class="tech-img"
                        :style="{backgroundImage: `url(/images/icons/${tech.toLowerCase().replaceAll('.', '').replaceAll(' ', '-')}.svg), url(/images/icons/${tech.toLowerCase().replaceAll('.', '').replaceAll(' ', '-')}.png)`}"
                    ></span>
                </li>
            </ul>
        </div>
        <ul class="links">
            <li>
                <a
                    :href="liveLink"
                    target="_blank"
                    class="link live-link"
                >Link</a>
            </li>
            <li>
                <a
                    :href="gitHub"
                    target="_blank"
                    class="link git-link"
                >Repo</a>
            </li>
        </ul>
    </article>
</template>

<script scoped lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: [
        'name', 
        'complete', 
        'liveLink', 
        'gitHub', 
        'techStack', 
        'windowWidth'
    ]
});
</script>

<style lang="scss">
.project {
    /* Positioning */
    display: grid;
        grid-template-rows: auto auto auto auto auto auto;
        grid-template-columns: 100%;
        justify-items: center;
        align-items: center;
        gap: 10px;

    h4 {
        grid-row: 1 / 2;
    }

    picture {
        grid-row: 2 / 3;
    }

    .description {
        grid-row: 3 / 4;
        width: 90%;
        position: relative;
        padding: 20px;

        .desc-corner {
            width: 50px;
            height: 50px;
            border-top: 3px solid white;
            border-left: 3px solid white;
            position: absolute;
        }
    }

    .tech-stack {
        grid-row: 5 / 6;
        position: relative;

        .stack-header {
            /* Positioning */
            display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            position: relative;
                top: 3px;
                left: 50%;
                z-index: 2;
            transform: translateX(-50%);
            padding: 2px 12px;
            width: 75%;
            height: 48px;

            /* Visual */
            background-image: url('/images/backgrounds/binding_dark.png');
            border-top: 3px solid rgb(130,35,35);
                border-left: 3px solid rgb(130,35,35);
                border-right: 3px solid rgb(130,35,35);
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            text-transform: uppercase;

            h5 {
                /* Visual */
                font-size: 24px;
                width: auto;
            }

            #underline {
                width: 100%;
                max-width: 160px;
                height: 2px;
                background-color: white;
                margin: 0 auto;
                position: relative;
                    z-index: 999;
                border-radius: 50%;
            }
        }

        ul {
            /* Positioning */
            display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 10px;
            padding: 15px;

            /* Visual */
            list-style-type: none;
            text-transform: uppercase;
            background-image: url('/images/backgrounds/binding_dark.png');
            border: 3px solid rgb(130,35,35);
                border-radius: 10px;
            filter: drop-shadow(0px 10px 3px black);

            li {
                /* Positioning */
                display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                /* Visual */
                color: rgb(180, 180, 180);

                .tech-img {
                    background-repeat: no-repeat;
                    background-size: contain;
                    background-position: center;
                    width: 48px;
                    height: 48px;
                    content: '';
                    display: inline-block;
                }
            }
        }
    }

    .links {
        /* Positioning */
        grid-row: 6 / 7;
        display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
        margin-top: 15px;
        padding: 15px;

        /* Visual */
        list-style-type: none;

        .link {
            /* Positioning */
            display: flex;
                flex-direction: column-reverse;
                justify-content: center;
                align-items: center;
                gap: 10px;
            position: relative;
            padding: 10px;

            /* Visual */
            text-transform: uppercase;
            border-radius: 10px;
            background-color: rgb(76, 99, 116);
            font-size: 24px;

            span {
                font-size: 24px;
                height: 18px;
            }

            &::after {
                background-repeat: no-repeat;
                    background-size: contain;
                    background-position: center;
                content: '';
                width: 32px;
                height: 32px;
                display: inline-block;
            }
        }

        .live-link::after {
            background-image: url('/images/icons/double_arrow.svg');
        }

        .git-link::after {
            background-image: url('/images/icons/github.svg');
        }
    }
}

@media only screen and (min-width: 600px) {
    .project {
        max-width: calc(50% - 40px);
        grid-template-rows: auto auto 250px auto auto auto;

        .tech-stack {
            ul {
                height: 350px;
            }
        }
    }
}

@media only screen and (min-width: 606px) {
    .project .tech-stack ul {
        height: 250px;
    }
}

@media only screen and (min-width: 750px) {
    .project .tech-stack ul {
        height: 175px;
    }
}

@media only screen and (min-width: 1217px) {
    .project .tech-stack ul {
        height: 100px;
    }
}
</style>