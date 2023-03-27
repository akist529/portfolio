<template>
    <div className="section-intro">
        <h1>Alex Kist</h1>
        <h2>Front-End Developer</h2>
    </div>
</template>

<style scoped lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Kanit&display=swap');

    .section-intro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        margin-top: 30vh;
        opacity: 0%;
        gap: 100vh;
        z-index: 1;
        animation-name: intro-spawn;
        animation-duration: 1.5s;
        animation-delay: 0.2s;
        animation-fill-mode: forwards;

        h1 {
            font-family: 'Kanit';
            font-size: 4rem;
            text-shadow: 8px 6px 20px rgb(0,0,0);
        }

        h2 {
            font-family: 'Kanit';
            font-size: 1.8rem;
            text-shadow: 8px 6px 20px rgb(0,0,0);
            position: relative;
            bottom: 20px;
        }

        @keyframes intro-spawn {
            0% {
                opacity: 0%;
                gap: 100vh;
            } 100% {
                opacity: 100%;
                gap: 0px;
            }
        }
    }
</style>