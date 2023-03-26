<template>
    <div>
        <img alt="Alex Kist" src="@images/about.jpeg" />
    </div>
    <div id="about">
        <div>
            <h1>Hi, I'm Alex!</h1>
            <div id="summary">
                <p>I am a self-taught web developer currently working as an industrial engineer in the Chicago area.</p>
                <p>Outside of code, I enjoy weightlifting, brazilian jiu-jitsu, hobbyist game dev and reading.</p>
                <p>My end-goal is to work with a team of passionate developers where I can grow as an individual and stay up-to-date with the latest technologies in the world of web applications.</p>
            </div>
        </div>
        <h2>My Proficiencies</h2>
        <div className="skillsets">
            <img id="htmlLogo" src="@images/HTML5.svg" />
            <p>I strive to make my HTML code as semantic as possible, focusing on accessibility and readability.</p>
            <img id="cssLogo" src="@images/CSS3.svg" />
            <p>Every day I find new ways to keep my CSS organized with the help of preprocessors such as SASS. I regularly use CSS Flexbox and Grid layouts for all of my projects.</p>
            <img id="jsLogo" src="@images/JavaScript.svg" />
            <p>I have a strong grasp of JavaScript ES6 syntax and aim to keep code modular wherever possible.</p>
            <img id="reactLogo" src="@images/React.svg" />
            <p>I have hands-on experience working with React, utilizing its vast array of third-party libraries with NPM.</p>
            <img id="vueLogo" src="@images/vue.svg" />
            <p>I have Vue experience</p>
        </div>
        <h2>Other Skills</h2>
        <div id="other-skills">
            <img title="Bootstrap" src="@images/Bootstrap.svg" />
            <img title="ESLint" src="@images/ESLint.svg" />
            <img title="SASS" src="@images/Sass.svg" />
            <img title="LESS" src="@images/Less.svg" />
            <img title="Git" src="@images/Git.svg" />
            <img title="VS Code" src="@images/vscode.svg" />
            <img title="jQuery" src="@images/JQuery.svg" />
            <img title="Webpack" src="@images/webpacksvg" />
            <img title="MongoDB" src="@images/mongodb.svg" />
        </div>
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss">
    div {
        padding-top: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 256px;
            border-radius: 50%;
        }
    }
</style>