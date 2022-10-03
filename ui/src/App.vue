<template>
  <div class="container-fluid">
    <nav
      id="navbar_top"
      class="navbar navbar-expand-sm bg-light navbar-dark navbar-fixed-top"
    >
      <ul class="navbar-nav navbar-left">
        <li>
          <h5 display-5 class="d-flex justify-content-center m-1">
            {{ $t("profile.MyName") }}
          </h5>
        </li>
        <li>
          <h5
            display-5
            class="d-flex justify-content-center m-1 mx-2"
            style="color: blue"
          >
            {{ $t("message.MyYearExperience") }}
          </h5>
        </li>
      </ul>
      <ul class="navbar-nav navbar-left">
        <li class="nav-item">
          <router-link class="btn btn-light btn-outline-primary mx-1" to="/">{{
            $t("message.Profile")
          }}</router-link>
          <router-link
            class="btn btn-light btn-outline-primary mx-1"
            :to="{ name: 'skill' }"
            >{{ $t("message.MySkills") }}</router-link
          >
        </li>
        <li class="nav-item">
          <a
            class="btn btn-secondary m-1 dense"
            style="font-size: 10px"
            target="_blank"
            href="https://github.com/potatoscript/resume2-development/blob/master/ui/src/assets/Resume.pdf"
          >
            {{ $t("message.EnglishResume") }}
          </a>
          <a
            class="btn btn-secondary dense my-1"
            target="_blank"
            style="font-size: 10px"
            href="https://github.com/potatoscript/resume2-development/blob/master/ui/src/assets/履歴書.pdf"
          >
            {{ $t("message.JapaneseResume") }}
          </a>
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
import axios from "axios";
export default {
  data() {
    return {
      navbar_height: 0,
    };
  },
  mounted: function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 2) {
        document.getElementById("navbar_top").classList.add("fixed-top");
        // add padding top to show content behind navbar
        this.navbar_height = document.querySelector(".navbar").offsetHeight;
        document.body.style.paddingTop = this.navbar_height + "px";
      } else {
        document.getElementById("navbar_top").classList.remove("fixed-top");
        // remove padding top from body
        document.body.style.paddingTop = "0";
      }
    });
  },
  methods: {
    DownloadResume() {
      axios({
        url:
          "https://github.com/potatoscript/resume2-development/blob/master/ui/src/assets/Resume.pdf" +
          this.$t("message.Resume"), // File URL Goes Here
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        method: "GET",
        responseType: "blob",
      }).then((res) => {
        var FILE = window.URL.createObjectURL(new Blob([res.data]));

        var docUrl = document.createElement("x");
        docUrl.href = FILE;
        docUrl.setAttribute("download", "file.pdf");
        document.body.appendChild(docUrl);
        docUrl.click();
      });
    },
  },
};
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
