<script lang="ts" setup>
const isFavorite = ref(false);
const overlay = ref(true);
</script>
<template>
    <v-main class="main-container">
        <v-container>
            <v-row>
              <v-col
                v-for="n in 24"
                :key="n"
                cols="3"
              >
                <v-card height="350">
                    <v-img
                    class="d-flex text-white flex-column justify-end"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover
                    >
                    </v-img>
                    <v-card-subtitle class="pt-4">Number 10</v-card-subtitle>
                    <v-card-text>
                        <div>Whitehaven Beach</div>
                        <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
    </v-main>
</template>
<style>
.main-container{
    width: 85vw;
    margin: 0 auto;

}
.img-container{
    height: 100%;
}
</style>