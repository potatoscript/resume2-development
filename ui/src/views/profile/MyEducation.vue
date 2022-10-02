<template>
  <!-- Tabs content -->
  <div class="container mt-3">
    <h5>■ {{ $t("message.Education") }}</h5>
    <table>
      <tr>
        <td style="vertical-align: top" class="px-3">
          <img
            src="../../assets/MyCertificate.png"
            style="width: 200px; height: 210px; cursor: zoom-in"
            class="rounded float-start"
            alt="{{$t('profile.MyCertificate')}}"
            onclick="document.getElementById('modal01').style.display='block'"
          />
          <div
            id="modal01"
            class="w3-modal"
            onclick="this.style.display='none'"
          >
            <div class="w3-modal-content w3-animate-zoom">
              <img src="../../assets/MyCertificate.png" style="width: 100%" />
            </div>
          </div>
        </td>
        <td style="vertical-align: top" class="px-3">
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 100px">{{
              $t("message.University")
            }}</span>
            <span class="form-control">{{ $t("profile.MyUniversity") }}</span>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 100px">{{
              $t("message.Address")
            }}</span>
            <span class="form-control">{{
              $t("profile.UniversityAddress")
            }}</span>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 100px">{{
              $t("message.Course")
            }}</span>
            <span class="form-control">{{ $t("profile.Course") }}</span>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 100px">{{
              $t("message.Period")
            }}</span>
            <span class="form-control">{{ $t("profile.Period") }}</span>
          </div>
        </td>
      </tr>
    </table>
    <h7 class="display-8">{{ $t("profile.EducationOther") }}</h7>
  </div>
  <!-- Tabs content -->
</template>
<script>
export default {};
</script>
<style scoped>
@media (max-width: 600px) {
  .w3-modal-content {
    margin: 0 10px;
    width: auto !important;
  }
  .w3-modal {
    padding-top: 30px;
  }
  .w3-dropdown-hover.w3-mobile .w3-dropdown-content,
  .w3-dropdown-click.w3-mobile .w3-dropdown-content {
    position: relative;
  }
  .w3-hide-small {
    display: none !important;
  }
  .w3-mobile {
    display: block;
    width: 100% !important;
  }
  .w3-bar-item.w3-mobile,
  .w3-dropdown-hover.w3-mobile,
  .w3-dropdown-click.w3-mobile {
    text-align: center;
  }
  .w3-dropdown-hover.w3-mobile,
  .w3-dropdown-hover.w3-mobile .w3-btn,
  .w3-dropdown-hover.w3-mobile .w3-button,
  .w3-dropdown-click.w3-mobile,
  .w3-dropdown-click.w3-mobile .w3-btn,
  .w3-dropdown-click.w3-mobile .w3-button {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .w3-modal-content {
    width: 500px;
  }
  .w3-modal {
    padding-top: 50px;
  }
}
@media (min-width: 993px) {
  .w3-modal-content {
    width: 900px;
  }
  .w3-hide-large {
    display: none !important;
  }
  .w3-sidebar.w3-collapse {
    display: block !important;
  }
}
@media (max-width: 992px) and (min-width: 601px) {
  .w3-hide-medium {
    display: none !important;
  }
}
@media (max-width: 992px) {
  .w3-sidebar.w3-collapse {
    display: none;
  }
  .w3-main {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .w3-auto {
    max-width: 100%;
  }
}
.w3-animate-zoom {
  animation: animatezoom 0.6s;
}
@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
.w3-modal {
  z-index: 3;
  display: none;
  padding-top: 100px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.w3-modal-content {
  margin: auto;
  background-color: #fff;
  position: relative;
  padding: 0;
  outline: 0;
  width: 600px;
}
</style>
