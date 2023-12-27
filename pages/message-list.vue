<script lang="ts" setup>
const cards = ref(['Today', 'Yesterday',"10/31"]);
// const cards = ['Today', 'Yesterday'];
</script>

<template>
    <v-main>
        <v-container
          class="py-8 px-6"
          fluid
        >
          <v-row>
            <v-col
              v-for="card in cards"
              :key="card"
              cols="12"
            >
              <v-card
                class="px-4"
              >
                <v-subheader>{{ card }}</v-subheader>
  
                <v-list two-line>
                  <v-list-item
                    v-for="n in 6"
                    :key="n"
                  >
                    <template v-slot:prepend>
                      <v-icon icon="mdi-account"></v-icon>
                    </template>

                    <v-list-item-content>
                      <v-list-item-title>Message {{ n }}</v-list-item-title>

                      <v-list-item-subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-divider
                      v-if="n !== 6"
                      :key="`divider-${n}`"
                      inset
                    ></v-divider>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
</template>