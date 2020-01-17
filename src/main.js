import ForkRibbon from "./components/ForkCorner.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("v-select-sides", ForkRibbon);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

ForkRibbon.install = install;

export default ForkRibbon;
