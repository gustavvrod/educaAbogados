<template>
  <v-app>
    <v-app-bar color="blue-grey darken-1" dark dense app>
      <div class="d-flex align-center">
        <v-btn :to="{ name: 'Home' }" text class="mr-2">Educa Abogados</v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon
        @click="resNav = !resNav"
        class="d-block d-md-none d-lg-none d-xl-none"
      >
      </v-app-bar-nav-icon>
      <div class="d-none d-md-block d-lg-block d-xl-block">
        <v-btn href="#homeComponent" text
          ><span class="mr-2">Inicio</span></v-btn
        >
        <v-btn href="#serviciosComponent" text
          ><span class="mr-2">Servicios</span></v-btn
        >
        <v-btn href="#nosotrosComponent" text
          ><span class="mr-2">Nosotros</span></v-btn
        >
      </div>
    </v-app-bar>
    <v-navigation-drawer
      class="d-block d-md-none d-lg-none d-xl-none"
      v-model="resNav"
      absolute
      temporary
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Educa Abogados</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item>
          <v-btn href="#homeComponent" text
            ><span class="mr-2">Inicio</span></v-btn
          >
        </v-list-item>
        <v-list-item>
          <v-btn href="#serviciosComponent" text
            ><span class="mr-2">Servicios</span></v-btn
          >
        </v-list-item>
        <v-list-item>
          <v-btn href="#nosotrosComponent" text
            ><span class="mr-2">Nosotros</span></v-btn
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      resNav: false,
      responsiveMenu: null,
    };
  },
  watch: {
    responsiveMenu() {
      this.resnav = false;
    },
  },
});
</script>
