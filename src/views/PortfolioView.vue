<template>
    <Project :techStack="['Next.js', 'TypeScript', 'SCSS', 'Go', 'SQLite']">
        <h2>Bar.Home</h2>
        <p>Provides drink recipes based on available ingredients the user enters. Recipes may substitute ingredients where possible.</p>
    </Project>
    <Project :techStack="['Vue.js', 'TypeScript', 'SCSS', 'Strapi']">
        <h2>Gym Tracker</h2>
        <p>Allows users to log and track their workouts based on a variety of database exercises provided.</p>
    </Project>
    <Project :techStack="['React', 'JavaScript', 'SCSS']">
        <h2>"Tom Clancy's Rainbow Six: Siege" Info Suite</h2>
        <p>An informative app for the competitive first-person shooter video game "Tom Clancy's Rainbow Six: Siege". Users can explore maps of each of the game's levels and browse through information on each of the game's operators, offering helpful tactics and suggestions.</p>
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