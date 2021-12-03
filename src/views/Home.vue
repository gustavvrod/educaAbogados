<template>
  <div>
    <homecomponent id="homeComponent" class="mb-12" />
    <servicioscomponent id="serviciosComponent" class="mt-12" />
    <nosotroscomponent id="nosotrosComponent" class="mt-12" />
  </div>
</template>

<script>
import Homecomponent from "../components/Homecomponent.vue";
import Nosotroscomponent from "../components/Nosotroscomponent.vue";
import Servicioscomponent from "../components/Servicioscomponent.vue";

export default {
  name: "Home",

  components: {
    Homecomponent,
    Servicioscomponent,
    Nosotroscomponent,
  },
};
</script>

