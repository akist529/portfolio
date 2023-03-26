<template>
    <footer>
        <span>AlexKist.com © 2023</span><br/>
        <div>
            <span>Built with</span>
            <img alt="Vue" title="Vue" src="@images/vue.svg" />
            <span>and</span>
            <img alt="Astro" title="Astro" src="@images/astro-icon-light.svg" />
        </div>
    </footer>
</template>

<style lang="scss">
    footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background: rgb(51, 51, 51);
        padding: 10px 20px;

        font-size: 16px;
        
        div {
            display: flex;

            img {
                height: 16px;
                padding: 0 5px;
            }
        }
    }
</style>