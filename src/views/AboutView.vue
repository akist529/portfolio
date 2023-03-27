<template>
    <div class="section-about">
        <div>
            <h3>Hi, I'm Alex!</h3>
            <h4>I'm an industrial engineer turned web developer.</h4>
        </div>
        <img alt="Alex Kist" src="@images/about.jpeg" />
    </div>
</template>

<script lang="ts">

</script>

<style scoped lang="scss">
    .section-about {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        z-index: 1;

        div {
            display: flex;
            flex-direction: column;
        }

        h3 {
            font-size: 2rem;
        }

        img {
            height: 256px;
            border-radius: 50%;
        }
    }
</style>