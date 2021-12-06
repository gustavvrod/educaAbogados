<template>
  <v-container>
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
                      v-model="sendItem.telefono"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Correo electronico*"
                      required
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
              <v-btn color="blue darken-1" text @click="$emit('close')">
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
  name: "Dialogcontacto",
  props: {
    dialog: Boolean,
  },
  data: () => ({
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
          this.$store.dispatch("getConsultas");
          this.loading = false;
          console.log("se envio la consulta");
        });
    },
  },
  computed: {
    ...mapState(["consulta", "edit"]),
  },
};
</script>
