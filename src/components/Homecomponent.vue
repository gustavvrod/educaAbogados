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
              @click="dialog = true"
            >
              contacto
            </v-btn>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <!-- DIALOG form user input -->
    <v-card-actions>
      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Estamos atentos a tu consulta</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Nombre*"
                      required
                      autofocus
                      v-model="sendItem.nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Telefono*"
                      required
                      autofocus
                      v-model="sendItem.telefono"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Correo electronico*"
                      required
                      autofocus
                      v-model="sendItem.correo"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Ingrese su consulta"
                      v-model="sendItem.consultaUsuario"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <h4>* indica un campo requerido obligatoriamente</h4>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Cerrar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                @click="addConsulta"
              >
                Enviar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-card-actions>
  </v-container>
</template>

<script>
//import Firebase from "firebase";
import { mapState /*mapMutations*/ } from "vuex";
import axios from "axios";
export default {
  name: "Homecomponent",
  data: () => ({
    dialog: false,
    loading: false,
    sendItem: {
      nombre: "",
      correo: "",
      telefono: 56,
      consultaUsuario: "",
    },
  }),
  methods: {
    addConsulta() {
      this.loading = true;
      axios
        .post(
          "https://us-central1-educaabogados.cloudfunctions.net/test/consulta",
          this.sendItem
        )
        .then((accept) => {
          this.loading = false;
          this.$store.dispatch("getConsultas");
          console.log("se envio la consulta");
        });
    },
  },
  computed: {
    ...mapState(["consulta", "edit"]),
  },
};
</script>


