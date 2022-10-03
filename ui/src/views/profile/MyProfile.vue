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
        <td style="vertical-align: top" class="px-3">
          <canvas id="locationChart" width="300" height="200"></canvas>
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
<script>
// chart library
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default {
  mounted: function () {
    this.doughnutLocation();
  },
  methods: {
    doughnutLocation() {
      var chartColors = [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ];
      var data = [20, 3, 7, 2, 13];
      var config = {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: data,
              backgroundColor: chartColors,
              label: "Dataset 1",
            },
          ],
          labels: [
            this.$t("country.Malaysia") +
              " (" +
              data[0] +
              this.$t("message.Year") +
              ")",
            this.$t("country.England") +
              " (" +
              data[1] +
              this.$t("message.Year") +
              ")",
            this.$t("country.Singapore") +
              " (" +
              data[2] +
              this.$t("message.Year") +
              ")",
            this.$t("country.Thailand") +
              " (" +
              data[3] +
              this.$t("message.Year") +
              ")",
            this.$t("country.Japan") +
              " (" +
              data[4] +
              this.$t("message.Year") +
              ")",
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "right",
            },
            title: {
              display: true,
              text: this.$t("country.YearOfLiving"),
            },
            label: {
              render: function (args) {
                return args.label + " " + args.value + this.$t("message.Year");
              },
              arc: false,
              fontSize: 12,
              fontColor: "blue",
              position: "outside",
            },
          },
        },
      };
      Chart.register(ChartDataLabels);
      var ctx = document.getElementById("locationChart").getContext("2d");

      var locationChart = new Chart(ctx, config);
      locationChart;
    },
  },
};
</script>
