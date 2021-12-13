<template>
<panel title="Upcoming Sessions">
<div v-for="session in sessions" :key="session.id">
    <slot>
        <v-card
    max-width="500"
    class="mx-auto my-2" 
  >
        <strong>Title : </strong>{{ session.title }}
        <br>
        <strong>Topic : </strong> {{ session.topic }}
        <br>
        <strong>Author : </strong>{{ session.author }}
        <br>
        <strong>Session Joining link : </strong><a v-bind:href="session.meetlink">{{ session.meetlink }} </a>
        <br>
        <strong>Session date : </strong>{{ session.date }}
        </v-card>
    </slot>
</div>
</panel>
</template>

<script>
import Panel from '@/components/Panel'
import SessionService from '@/services/SessionService'

export default {
    components: {
        Panel
    },
    data() {
        return {
            sessions: null
        }
    },
    async mounted () {
        const response= await SessionService.upcoming()
        this.sessions = response.data
    }
}
</script>

<style scoped>
</style>