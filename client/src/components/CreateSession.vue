<template>
<panel title="Create Sessions MetaData">
    <slot>
    <v-text-field
      placeholder="Title"
      v-model="title"
      required
    ></v-text-field>
    <br>
    <v-text-field
      placeholder="Author"
      v-model="author"
    ></v-text-field>
    <br>
    <v-text-field
      placeholder="Topic of session"
      v-model="topic"
    ></v-text-field>
    <br>
    <v-text-field
      placeholder="Session organizing Date in dd-mm-fullyear format"
      v-model="date"
    ></v-text-field>
    <br>
    <v-text-field
      placeholder="Provide session meeting link"
      v-model="meetlink"
    ></v-text-field>
    <br>
    <v-btn
      dark
      class="createbtn"
      @click='create'
    >
      Create
    </v-btn>
    </slot>
</panel>
</template>

<script>
import Panel from '@/components/Panel'
import SessionService from '@/services/SessionService'

export default {
    data () {
        return {
                title: '',
                author: '',
                topic: '',
                date: '',
                meetlink: ''
        }
    },
    components: {
        Panel
    },
    methods: {
        async create() {
            try {
                await SessionService.create({
                        title: this.title,
                        author: this.author,
                        topic: this.topic,
                        date: this.date,
                        meetlink: this.meetlink
                })
                this.$router.push({
                    name:'sessions'
                })
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>
.createbtn { 
    width: 10rem;
    margin-left: 21rem;
}
</style>
