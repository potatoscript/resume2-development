<!-- Router.vue -->
<template>
  <component :is="routedComponent"></component>
</template>

<script>
import MyProfile from "../views/profile/MyProfile";
import MyEducation from "../views/profile/MyEducation";
import MyExperiences from "../views/profile/MyExperiences";

const routes = {
  "#": MyProfile,
  "#education": MyEducation,
  "#experiences": MyExperiences,
};

export default {
  data() {
    return { current: window.location.hash };
  },
  props: ["page"],
  computed: {
    routedComponent() {
      // alert(this.current + this.page);
      return routes[this.current + this.page];
    },
  },
  render(createElement) {
    return createElement(this.routedComponent);
  },
};
</script>
