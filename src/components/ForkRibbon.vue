<template>
  <div id="forkRibbon">
    <div class="inactive">
      <div id="ribbon">Fork me on Github</div>
    </div>
    <div class="active">
      <div id="cornerIcon">
        <img :src="ImgSrc_Octocat" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForkRibbon",
  components: {},
  props: {
    toLink: String
  },
  data: function() {
    return {};
  },
  computed: {
    ImgSrc_Octocat: function() {
      return require("@/assets/octocat.svg");
    }
  }
};
</script>

<style scoped>
#forkRibbon {
  position: fixed;
  /*right: 0px;
  top: 0px;*/
  top: 3.23em;
  right: 3.23em;
  transform: rotate(45deg);
}
div.active {
  display: block;
}
div.inactive {
  display: none;
}

div#ribbon {
  position: absolute;
  right: -100px;
  width: 200px;
  height: 25px;
  background-color: darkgrey;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
