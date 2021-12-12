<template>
<div class="cardcont">
<h3>Sessions Page</h3>
  <v-card
    max-width="900"
    class="mx-auto"
  >

    <v-container>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    START RADIO
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          color: '#1F7087',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
    }),
  }
</script>

<style scoped>
.cardcont {
margin-top: 5rem;
}
</style>
