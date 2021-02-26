<template>
  <v-container class="content-container">
    <vue-resizable
      v-model="windowResizable"
      v-if="windowResizable"
      class="resizable elevation-3"
      ref="resizableComponent"
      :dragSelector="dragSelector"
      :active="handlers"
      :fit-parent="fit"
      :max-width="maxW | checkEmpty"
      :max-height="maxH | checkEmpty"
      :min-width="minW | checkEmpty"
      :min-height="minH | checkEmpty"
      :width="width"
      :height="height"
      :left="left"
      :top="top"
      @mount="eHandler"
      @resize:move="eHandler"
      @resize:start="eHandler"
      @resize:end="eHandler"
      @drag:move="eHandler"
      @drag:start="eHandler"
      @drag:end="eHandler"
    >
      <v-card class="card-resizable">
        <v-toolbar class="drag-container-1" color="primary" dark>
          Me puedes mover
          <v-spacer></v-spacer>
          <v-btn small dark fab absolute right color="primary" class="btnDeleteImgUser" @click="closeResizable()">
            <v-icon>
              mdi-close
            </v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="card-text-resizable text-center">
          <div class="text-h2">Hello world!</div>
          <b class="text-int">Esta ventana modifica su tamaño</b>
        </v-card-text>
        <!-- <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false"></v-btn>
        </v-card-actions> -->
      </v-card>
    </vue-resizable>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo-gps-trans.png')"
          class="my-3"
          contain
          height="100"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to GPS proves
        </h1>

        <p class="subheading font-weight-regular">
          Para obtener ayuda y colaboración con otros desarrolladores de GPS
        </p>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12" class="mb-4">
        <h2 class="headline font-weight-bold mb-3">
          Ejemplo de modal
        </h2>

        <v-btn
          class="ma-2"
          color="primary"
          v-bind="attrs"
          v-on="on"
          @click="windowResizable = !windowResizable"
          >Visualizar 1</v-btn
        >       
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import VueResizable from "vue-resizable";

export default {
  name: "HelloWorld",
  components: { VueResizable },
  data() {
    const tW = 550;
    const tH = 450;
    return {
      // dialog: false,
      handlers: ["r", "rb", "b", "lb", "l", "lt", "t", "rt"],
      left: `calc( 50% - ${tW / 2}px)`,
      top: `calc(50% - ${tH / 2}px)`,
      height: tH,
      width: tW,
      maxW: "100%",
      maxH: "100%",
      minW: 100,
      minH: 100,
      fit: true,
      event: "",
      dragSelector: ".drag-container-1, .drag-container-2",
      windowResizable: false,
    };
  },

  methods: {
    eHandler(data) {
      this.width = data.width;
      this.height = data.height;
      this.left = data.left;
      this.top = data.top;
      this.event = data.eventName;
    },
    closeResizable() {
      this.windowResizable = false
    }
  },

  filters: {
    checkEmpty(value) {
      return typeof value !== "number" ? 0 : value;
    },
  },
};
</script>

<style scoped></style>
<style>
.content-container {
  height: 100vh;
  max-width: 100vw !important;
}
.box-resizable {
  width: 100%;
  height: 100%;
}
.card-resizable {
  width: 100%;
  height: 100%;
}
.card-text-resizable {
  width: 100%;
}
.text-int {
  color: #1976D2;
}
/* styles ventana resizable */
.resizable {
  background-position: top left;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 1px solid #1976D2;
  /* background: #007fff; */
  font-weight: normal;
  /* color: #ffffff; */
  position: absolute !important;
  z-index: 9999999;
}
.drag-container-1,
.drag-container-2 {
  width: 100%;
  height: 20px;
  text-align: center;
  cursor: grabbing;
}

</style>
