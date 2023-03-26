<template>
    <Project :techStack="['HTML', 'CSS', 'JavaScript']">
        <h2>Tic-Tac-Toe</h2>
        <p>Allows users to choose 2-player and AI modes. Players mark spaces on the grid until a player wins. Score is kept and players can enter their own names.</p>
    </Project>
    <Project :techStack="['HTML', 'CSS', 'JavaScript']">
        <h2>To-Do App</h2>
        <p>Allows users to log tasks toward projects. Includes log-in and collaborative features (i.e. invite others to a project & assign tasks to them).</p>
    </Project>
    <Project :techStack="['HTML', 'CSS', 'JavaScript']">
        <h2>Library</h2>
        <p>Allows users to add books to their bookshelf, including books they have either read or wish to read. Entries can be deleted or sorted as desired.</p>
    </Project>
    <Project :techStack="['HTML', 'CSS', 'JavaScript']">
        <h2>Restaurant</h2>
        <p>A mock restaurant page for a bar & grill themed around rock & roll.</p>
    </Project>
    <Project :techStack="['HTML', 'CSS', 'JavaScript']">
        <h2>Etch A Sketch</h2>
        <p>Allows users to draw with the cursor and manually change the size of the grid. Users can also change the color they wish to draw with, and can reset the board when desired.</p>
    </Project>
    <Project :techStack="['HTML', 'CSS', 'JavaScript']">
        <h2>Rock Paper Scissors</h2>
        <p>Players take turns in a simple game of rock-paper-scissors until one player wins 5 rounds, upon which the game resets.</p>
    </Project>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Project from 'components/Project.vue'

export default defineComponent({
    components: {
        Project
    }
})
</script>