<template>
    <li class="nav-item">
        <button @mouseover="addAnimation" @mouseleave="removeAnimation">
            <span v-show="!mobileMenu"
                :id="name"
                class="icon"
                :style="{backgroundImage: `url(/images/icons/${getImageFile()}.svg)`}"
            ></span>
            <span>{{ name }}</span>
            <span v-show="mobileMenu"
                id="underline"
            ></span>
        </button>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        const hovered = false
        return {
            hovered
        }
    },
    props: ['name', 'mobileMenu'],
    methods: {
        addAnimation (e: Event) {
            if (e.currentTarget instanceof Element) {
                if (this.mobileMenu) {
                    e.currentTarget.children[2].classList.add("underlineAnimation")
                } else {
                    if (this.name === "about") {
                        e.currentTarget.children[0].classList.add("aboutAnimation")
                    } else {
                        this.hovered = true
                        e.currentTarget.children[0].classList.add("navAnimation")
                    }
                }
            }
        },
        removeAnimation (e: Event) {
            if (e.currentTarget instanceof Element) {
                if (this.mobileMenu) {
                    e.currentTarget.children[2].classList.remove("underlineAnimation")
                } else {
                    if (this.name === "about") {
                        e.currentTarget.children[0].classList.remove("aboutAnimation")
                    } else {
                        this.hovered = false
                        e.currentTarget.children[0].classList.remove("navAnimation")
                    }
                }
            }
        },
        getImageFile () {
            if (this.name === 'github' || this.name === 'linkedin') {
                return this.name
            } else {
                return (this.hovered ? `${this.name}_hover` : `${this.name}`)
            }
        }
    }
})
</script>

<style scoped lang="scss">
    li button {
        /* Positioning */
        display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        /* Visual */
        border: none;
        background: none;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 1rem;

        .icon {
            background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
            width: 28px;
            height: 28px;
            content: '';
            display: inline-block;
            filter: grayscale(1) invert(1);
        }

        #underline {
            width: 0%;
            height: 3px;
            background-color: white;
        }

        &:hover {
            span {
                color: rgb(180, 180, 180);
            }
        }
    }

    .navAnimation {
        animation: 0.2s navAnimation forwards ease-in-out;
    }

    .aboutAnimation {
        animation: 0.5s aboutAnimation forwards ease-in-out;
    }

    .underlineAnimation {
        animation: 0.2s underlineAnimation forwards ease-in-out;
    }

    @keyframes navAnimation {
        0% {
            transform: scale(1);
        } 100% {
            transform: scale(1.2);
        }
    }

    @keyframes aboutAnimation {
        0% {
            transform: 
                rotate(0deg) 
                scale(1);
        } 25% {
            transform: 
                rotate(30deg) 
                scale(1.2);
        } 50% {
            transform: 
                rotate(0deg) 
                scale(1.2);
        } 75% {
            transform: 
                rotate(-30deg) 
                scale(1.2);
        } 100% {
            transform: 
                rotate(0deg) 
                scale(1.2);
        }
    }

    @keyframes underlineAnimation {
        0% {
            width: 0%;
        } 100% {
            width: 100%;
        }
    }

    @media screen and (min-width: 600px) {
        li button {
            flex-direction: column;
            gap: 5px;
        }
    }
</style>