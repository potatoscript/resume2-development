<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item" role="presentation">
        <a
          class="nav-link active"
          data-bs-toggle="tab"
          aria-current="page"
          href="#"
          @click="toggleModal('#')"
          >{{ $t("message.Profile") }}</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          data-bs-toggle="tab"
          aria-current="page"
          href="#education"
          @click="toggleModal('#education')"
          >{{ $t("message.Education") }}</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          data-bs-toggle="tab"
          aria-current="page"
          href="#experiences"
          @click="toggleModal('#experiences')"
          >{{ $t("message.MyCV") }}</a
        >
      </li>
    </ul>
    <app-router :page="page"></app-router>
  </div>
</template>
<script>
import AppRouter from "../router/ProfileRouter";
export default {
  components: {
    AppRouter,
  },
  data() {
    return {
      page: "#",
    };
  },
  methods: {
    toggleModal(hash) {
      this.page = hash;
    },
  },
};
</script>
<style scoped>
.modal-header {
  background-color: #cae4ba;
}
.nav-link {
  background-color: #cae4ba !important;
  cursor: pointer;
  border-top: 1px solid white !important;
  border-right: 1px solid white !important;
  border-left: 1px solid white !important;
}
.active {
  background-color: white !important;
  border-top: 1px solid black !important;
  border-right: 1px solid black !important;
  border-left: 1px solid black !important;
}
</style>
