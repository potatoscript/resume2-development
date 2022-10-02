<template>
  <!-- Tabs content -->
  <div class="container mt-3">
    <h5>■ {{ $t("profile.PersonalInfo") }}</h5>
    <table>
      <tr>
        <td style="vertical-align: top" class="px-3">
          <img
            src="../../assets/MyPhoto.png"
            style="width: 200px; height: 210px"
            class="rounded float-start"
            alt="{{$t('profile.MyName')}}"
          />
        </td>
        <td style="vertical-align: top" class="px-3">
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 100px">{{
              $t("message.Name")
            }}</span>
            <span class="form-control">{{ $t("profile.MyName") }}</span>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 100px">{{
              $t("message.Age")
            }}</span>
            <span class="form-control">{{ $t("profile.MyAge") }}</span>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 100px">{{
              $t("message.Nationality")
            }}</span>
            <span class="form-control">{{ $t("profile.Nationality") }}</span>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 100px">{{
              $t("message.MyEmail")
            }}</span>
            <span class="form-control">{{ $t("profile.MyEmail") }}</span>
          </div>
        </td>
      </tr>
    </table>
    <h7 class="display-8">{{ $t("profile.Other") }}</h7>
  </div>
  <!-- Tabs content -->
</template>
