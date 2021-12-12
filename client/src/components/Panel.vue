<template>
<div class="cardcont">
<h3>{{ title }}</h3>
  <v-card
    max-width="900"
    class="mx-auto cardstyle"
  >
    <v-container>
      <v-row dense>
      <slot>
        No session created yet
      </slot>
      </v-row>
    </v-container>
  </v-card>
  </div>
</template>

<script>
export default { 
  props: [
    'title'
  ]
  }
</script>

<style scoped>
.cardcont {
margin-top: 5rem;
}
.cardstyle {
background-color: rgb(244, 255, 255);
}
</style>
