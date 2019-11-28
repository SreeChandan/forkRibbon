<template>
  <div id="Container" :style="styleObjects['Container']">
    <div id="forkRibbon" :style="styleObjects['forkRibbon']">
      <div :class="modeResolves[0]">
        <a :href="forkLink" target="_blank">
          <div
            id="ribbon"
            :style="styleObjects['ribbon']"
            @mouseover="SetHoverState(['ribbon', true])"
            @mouseleave="SetHoverState(['ribbon', false])"
          >
            Fork me on Github
          </div></a
        >
      </div>
      <div :class="modeResolves[1]">
        <a :href="forkLink" target="_blank">
          <div id="cornerIcon" :style="styleObjects['cornerIcon']">
            <img
              :src="ImgSrc_Octocat"
              :style="styleObjects['Icon']"
              @mouseover="SetHoverState(['cornerIcon', true])"
              @mouseleave="SetHoverState(['cornerIcon', false])"
            /></div
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForkRibbon",
  components: {},
  props: {
    platform: String, // name
    forkLink: String,
    ZIndexBase_: Number,
    fixed_: Boolean,
    /*
      auto,
      both,
      customAuto,
      desktop,
      mobile,
      text,
      icon
    */
    mode: String
  },
  data: function() {
    return {
      ribbon: {
        hoverState: false
      },
      cornerIcon: {
        hoverState: false
      }
    };
  },
  computed: {
    ZIndexBase: function() {
      if (this.ZIndexBase_ === undefined) {
        return 500;
      } else {
        return this.ZIndexBase_;
      }
    },
    ImgSrc_Octocat: function() {
      return require("@/assets/octocat.svg");
    },
    styleObjects: function() {
      return {
        Container: {
          position: this.fixed_ ? "fixed" : "absolute",
          right: "0px",
          top: "0px",
          width: "200px",
          height: "200px",
          /*backgroundColor: "red",*/
          overflowX: "hidden",
          zIndex: this.ZIndexBase
          /*pointerEvents: "none",*/
        },
        forkRibbon: {
          position: "absolute",
          top: "0px",
          right: "0px",
          transform: "rotate(45deg)"
        },
        ribbon: {
          top: 0 + 80 + "px",
          right: -230 / 2 + "px",
          width: 230 + "px",
          height: "25px",
          backgroundColor: !this.ribbon.hoverState
            ? "rgb(245,245,245)"
            : "rgb(245,245,245)",
          boxShadow: !this.ribbon.hoverState
            ? "rgb(200,200,200) 0px 0px 1px 0px"
            : "rgb(15,15,15) 0px 0px 3px 0px",
          cursor: "pointer",
          borderWidth: "1px 0px",
          borderStyle: "dotted",
          zIndex: this.ZIndexBase + 2
        },
        cornerIcon: {
          top: 0 + "px",
          height: 80 + "px",
          width: 160 + "px",
          right: -160 / 2 + "px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(235,235,235)",
          zIndex: this.ZIndexBase + 1
        },
        Icon: {
          position: "absolute",
          top: "20px",
          borderRadius: "50%",
          boxShadow: !this.cornerIcon.hoverState
            ? "rgb(200,200,200) 0px 0px 1px 0px"
            : "rgb(15,15,15) 0px 0px 3px 0px",
          cursor: "pointer"
        }
      };
    },
    modeResolves: function() {
      let result = ["active", "active"];

      return result;
    }
  },
  methods: {
    SetHoverState: function(boo) {
      if (boo[0] === "ribbon") {
        this.ribbon.hoverState = boo[1];
      } else if (boo[0] === "cornerIcon") {
        this.cornerIcon.hoverState = boo[1];
      }
    }
  },
  watch: {
    /*
    ribbon : {
      deep: true,
      handler() {

      }
    }*/
  }
};
</script>

<style scoped>
#forkRibbon {
  /*position: absolute;
  right: 0px;
  top: 0px;*/
  /*top: 50px;
  right: 50px;
  transform: rotate(45deg);*/
}
div.active {
  display: block;
}
div.inactive {
  display: none;
}

div#ribbon {
  position: absolute;
  /*top: 0px;
  right: -100px;
  width: 200px;
  height: 25px;
  background-color: darkgrey;*/
  display: flex;
  justify-content: center;
  align-items: center;
}

div#cornerIcon {
  position: absolute;
  top: 0px;
  right: -24px;
  width: 48px;
  height: 48px;
}

img {
  width: 48px;
  height: 48px;
}
</style>
