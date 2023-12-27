<template>
    <v-main class="main-container">
        <v-container>
            <v-row>
              <template v-for="n in 4" :key="n">
                <v-col
                  class="mt-2"
                  cols="12"
                >
                  <strong>Category {{ n }}</strong>
                </v-col>
    
                <v-col
                  v-for="j in 4"
                  :key="`${n}${j}`"
                  cols="3"
                >
                <v-card
                color="grey-lighten-1"
                :class="['ma-4']"
                height="200"
                width="200"
            >
            </v-card>
                </v-col>
              </template>
            </v-row>
          </v-container>
    </v-main>
</template>
<style>
.main-container{
    width: 80vw;
    margin: 0 auto;

}
</style>