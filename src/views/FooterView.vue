<template>
    <footer>
        <!-- Icons by Aranagraphics, Freepik, juicy_fish, Becris, Pixel Buddha Premium & Afian Rochmah Afif -->
        <span>AlexKist.com © {{ new Date().getFullYear() }}</span><br/>
        <div>
            <span>Built with</span>
            <img
                alt="Vue"
                title="Vue"
                src="/images/icons/vue.svg" />
            <span>and</span>
            <img
                alt="Astro"
                title="Astro"
                src="/images/icons/astro.svg" />
        </div>
    </footer>
</template>

<style scoped lang="scss">
    footer {
        /* Positioning */
        position: relative;
            bottom: 0;
            left: 0;
            right: 0;
        display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        /* Visual */
        background-image: url('/images/backgrounds/footer_lodyas.webp');
        padding: 10px 20px;
        font-size: 16px;
        text-align: center;
        
        div {
            /* Positioning */
            display: flex;

            img {
                /* Positioning */
                height: 16px;

                /* Visual */
                padding: 0 5px;
            }
        }
    }
</style>