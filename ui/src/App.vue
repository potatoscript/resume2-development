<template>
  <div class="p-3 container-fluid">
    <nav class="navbar navbar-expand-sm bg-light navbar-dark navbar-fixed-top">
      <ul class="navbar-nav navbar-left">
        <li>
          <h4 class="d-flex justify-content-center m-1">
            {{ $t("profile.MyName") }}
          </h4>
        </li>
        <li>
          <h4
            class="d-flex justify-content-center m-1 mx-2"
            style="color: blue"
          >
            {{ $t("message.MyYearExperience") }}
          </h4>
        </li>
        <li class="nav-item">
          <router-link
            class="btn btn-light btn-outline-primary m-1 mx-3"
            to="/"
            >{{ $t("message.Profile") }}</router-link
          >
        </li>
        <li class="nav-item m-1">
          <router-link
            class="btn btn-light btn-outline-primary"
            :to="{ name: 'skill' }"
            >{{ $t("message.MySkills") }}</router-link
          >
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item m-1">
          <div
            class="btn-group"
            checked
            data-bs-toggle="toggle"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              @click="this.$i18n.locale = 'ja'"
              class="btn btn-info"
            >
              {{ $t("message.Japanese") }}
            </button>
            <button
              type="button"
              @click="this.$i18n.locale = 'en'"
              class="btn btn-danger"
            >
              {{ $t("message.English") }}
            </button>
          </div>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>

<style>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
.toggle.ios,
.toggle-on.ios,
.toggle-off.ios {
  border-radius: 20rem;
}
.toggle.ios .toggle-handle {
  border-radius: 20rem;
}
</style>
