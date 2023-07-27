<template>
    <section class="section-about" id="#about">
        <figure>
            <img 
                alt="Alex Kist" 
                src="/images/about.jpeg" />
        </figure>
        <article class="about-content">
            <header class="about-header">
                <div class="about-title">
                    <h3>About</h3>
                    <span id="underline"></span>
                </div>
            </header>
            <strong>Hi, I'm Alex!</strong>
            <ul>
                <li>Industrial Engineer turned Software Engineer</li>
                <li>1.5 years self-taught experience</li>
                <li>Specialized in Front-End</li>
                <li>Capable in Back-End</li>
                <li>JavaScript, TypeScript, React, Next.js, Vue</li>
                <li>Node.js, Express.js, MongoDB, MySQL</li>
            </ul>
        </article>
    </section>
</template>

<style scoped lang="scss">
.section-about {
    /* Positioning */
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 100px;
    position: relative;
    scroll-margin-top: 100px;
    animation-name: about-spawn;
        animation-duration: 0.25s;
        animation-delay: 0.25s;
        animation-fill-mode: forwards;
    opacity: 0%;
    top: 100vh;

    figure img {
        border: 20px dashed rgb(175,175,175);
        box-shadow: 0 0 0 3px rgb(130,35,35);
        width: 75vw;
        max-width: 512px;
        height: auto;
    }

    .about-content {
        /* Positioning */
        display: flex;
            flex-direction: column;
            gap: 10px;
        padding: 30px 20px 20px;
        position: relative;
            z-index: 0;

        /* Visual */
        background-image: url('/images/backgrounds/binding_dark.png');
        border: 3px solid rgb(130,35,35);
            border-radius: 10px;
        filter: drop-shadow(0px 10px 3px black);

        ul {
            /* Positioning */
            display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                gap: 10px;

            /* Visual */
            list-style-type: none;

            li {
                /* Positioning */
                display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 20px;

                &::before {
                    background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                    content: '';
                    height: 32px;
                    width: 32px;
                }

                &:nth-child(1)::before {
                    background-image: url('/images/icons/career-change.png');
                }

                &:nth-child(2)::before {
                    background-image: url('/images/icons/self-taught.png');
                }

                &:nth-child(3)::before {
                    background-image: url('/images/icons/front-end.png');
                }

                &:nth-child(4)::before {
                    background-image: url('/images/icons/back-end.png');
                }

                &:nth-child(5)::before {
                    background-image: url('/images/icons/frontend-tech.png');
                }

                &:nth-child(6)::before {
                    background-image: url('/images/icons/backend-tech.png');
                }
            }
        }
    }

    .about-header {
        /* Positioning */
        display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
        position: absolute;
            top: -22%;
            left: 15%;
            z-index: 2;
        transform: translateX(-15%) translateY(50%);
        padding: 2px 12px;
        width: 192px;
        height: 48px;
        margin: 0px auto;

        /* Visual */
        background-image: url('/images/backgrounds/binding_dark.png');
        border-top: 3px solid rgb(130,35,35);
            border-left: 3px solid rgb(130,35,35);
            border-right: 3px solid rgb(130,35,35);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        text-transform: uppercase;

        .about-title {
            display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

            h3 {
                /* Positioning */
                display: inline;
                position: relative;
                    bottom: 5px;

                /* Visual */
                font-size: 32px;
            }

            #underline {
                width: 112px;
                height: 2px;
                background-color: white;
                margin: 0 auto;
                position: relative;
                    bottom: 10px;
                    z-index: 999;
                border-radius: 50%;
            }
        }

        &::after {
            background-image: url('/images/icons/about.svg');
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
            width: 32px;
            height: 32px;
            display: inline-block;
            content: '';
            filter: invert(1);
        }
    }

    img {
        height: 256px;
        border-radius: 50%;
    }
}

@keyframes about-spawn {
    from {
        opacity: 0%;
        top: 100vh;
    } to {
        opacity: 100%;
        top: 0;
    }
}

@media only screen and (min-width: 992px) {
    .section-about {
        flex-direction: row;
            justify-content: space-evenly;
            gap: 0;
    }
}
</style>