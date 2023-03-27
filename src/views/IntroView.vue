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
        margin-top: 160px;
        
        h1, h2 {
            font-family: 'Kanit';
            text-shadow: 8px 6px 20px rgb(0,0,0);
        }

        h1 {
            font-size: 10rem;
        }

        h2 {
            font-size: 4rem;
            position: relative;
            bottom: 60px;
        }
    }
</style>