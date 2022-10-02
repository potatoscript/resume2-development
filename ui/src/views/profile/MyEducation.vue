<template>
  <!-- Tabs content -->
  <div class="container mt-3">
    <h5>■ {{ $t("profile.PersonalInfo") }}</h5>
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
export default {
  methods: {
    pop() {
      document.getElementById("imagemodal").style.display = "block";
      //$("#imagemodal").modal("show"); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
    },
  },
};
</script>
<style scoped></style>
