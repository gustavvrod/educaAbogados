<template>
  <v-container>
    <!-- Servicios in home view -->
    <h1>Nuestros Servicios</h1>
    <v-row justify="center">
      <v-col cols="11" sm="9" md="4" v-for="(service, i) in services" :key="i">
        <v-card class="mx-auto my-4">
          <v-img
            cover
            max-height="200"
            class="white--text align-end"
            :src="require('../assets/' + service.image)"
          >
            <v-card-title>{{ service.title }}</v-card-title>
          </v-img>

          <v-card-actions>
            <v-btn
              color="orange"
              text
              @click="showDialog(service.buttonAction)"
            >
              {{ service.buttonText }}
            </v-btn>
          </v-card-actions>
          <!--  <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              {{ service.buttonText }}
            </v-btn>
          </template> -->
        </v-card>
      </v-col>
    </v-row>

    <!-- DIALOG -->
    <v-row justify="space-around">
      <!-- dialog Primer Servicio -->
      <v-col cols="auto">
        <v-dialog
          v-model="dialogPrimerServicio"
          transition="dialog-bottom-transition"
          max-width="600"
        >
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark
                >Opening from the bottom</v-toolbar
              >
              <v-card-text>
                <div class="text-h2 pa-12">Hello world!</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>

      <!-- dialog Segundo Servicio -->
      <v-col cols="auto">
        <v-dialog
          transition="dialog-top-transition"
          max-width="600"
          v-model="dialogSegundoServicio"
        >
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark>Opening from the top</v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-12">Hello world!</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>

      <!-- dialog Tercer Servicio -->
      <v-col cols="auto">
        <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
          v-model="dialogTercerServicio"
        >
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark
                >Opening from the bottom</v-toolbar
              >
              <v-card-text>
                <div class="text-h2 pa-12">Hello world!</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialogPrimerServicio: false,
    dialogSegundoServicio: false,
    dialogTercerServicio: false,
    services: [
      {
        title: "Primer servicio",
        buttonText: "más información",
        buttonAction: "dialogPrimerServicio",
        image: "books.jpg",
      },
      {
        title: "Segundo servicio",
        buttonText: "más información",
        buttonAction: "dialogSegundoServicio",
        image: "lawyer.jpg",
      },
      {
        title: "Tercer servicio",
        buttonText: "más información",
        buttonAction: "dialogTercerServicio",
        image: "scale.jpg",
      },
    ],
  }),
  methods: {
    showDialog(selectedService) {
      console.log(selectedService);
      if (selectedService == "dialogPrimerServicio") {
        this.dialogPrimerServicio = true;
      } else if (selectedService == "dialogSegundoServicio") {
        this.dialogSegundoServicio = true;
      } else if (selectedService == "dialogTercerServicio") {
        this.dialogTercerServicio = true;
      }
    },
  },
};
</script>