<template>
  <v-container>
    <h1 class="ml-4">Nuestro compromiso</h1>
    <v-row justify="center">
      <v-col cols="5">
        <v-card class="d-none d-md-block">
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse mo- lestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="11" md="5">
        <v-card class="mx-auto" tile>
          <v-list flat>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.number"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      {
        text: "Lorem ipsum dolorsit amet, consectetuer adipiscing elit,sed diam nonummy",
        number: "1",
      },
      {
        text: "Lorem ipsum dolorsit amet, consectetuer adipiscing elit,sed diam nonummy",
        number: "2",
      },
      {
        text: "Lorem ipsum dolorsit amet, consectetuer adipiscing elit,sed diam nonummy",
        number: "3",
      },
    ],
  }),
};
</script>