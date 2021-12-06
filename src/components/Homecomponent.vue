<template>
  <v-container id="containerHome">
    <!-- Main section Call to action  -->
    <v-row justify="center">
      <v-col cols="11">
        <v-card>
          <v-img src="../assets/law1.jpg">
            <h1 class="mx-auto">Llamado a la acción</h1>
            <v-btn
              rounded
              color="primary"
              dark
              elevation="2"
              @click="openDialog"
            >
              contacto
            </v-btn>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <Dialogcontacto :dialog="dialog" @close="closeDialog" />
  </v-container>
</template>

<script>
import Dialogcontacto from "../components/Dialogcontacto.vue";
export default {
  name: "Homecomponent",
  components: {
    Dialogcontacto,
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>


