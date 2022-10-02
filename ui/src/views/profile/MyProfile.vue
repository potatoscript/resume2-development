<template>
  <!-- Tabs content -->
  <div class="container mt-3">
    <h5 class="display-7">■ {{ $t("profile.PersonalInfo") }}</h5>
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
            <span class="form-control">45</span>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 100px">{{
              $t("message.Nationality")
            }}</span>
            <span class="form-control">{{ $t("profile.Nationality") }}</span>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 100px">{{
              $t("message.Email")
            }}</span>
            <span class="form-control">limksmail@yahoo.co.jp</span
            ><!--@cannot be used inside locale file-->
          </div>
        </td>
      </tr>
    </table>
    <h7 class="display-8">{{ $t("profile.Other") }}</h7>
    <br />
    <hr />
    <div>
      <h5 class="display-7">■ {{ $t("message.Hobby") }}</h5>
      <h7 class="display-8 ml-5">- {{ $t("hobby.1") }}</h7
      ><br />
      <h7 class="display-8 ml-5">- {{ $t("hobby.2") }}</h7>
    </div>
  </div>
  <!-- Tabs content -->
</template>
