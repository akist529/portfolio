<template>
    <div className="project">
        <div className="project-details">
            <img src="@images/phone.webp" />
            <div>
                <slot></slot>
            </div>
        </div>
        <div v-if="techStack" className="project-tech-stack">
            <h3>Tech Stack</h3>
            <div className="project-tech">
                <img v-for="tech in techStack" className="project-tech" :alt="`${tech}`" :src="`@images/${tech.toLowerCase()}.svg`" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['techStack']
})
</script>