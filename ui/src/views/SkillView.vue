<template>
  <div class="justify-content-center mx-5">
    <div class="input-group">
      <h5 class="display-7 mt-3">■ {{ $t("message.MySkills") }}</h5>
    </div>
    <table>
      <tr>
        <td style="vertical-align: top">
          <div style="width: 350px; height: 300px" class="mb-5">
            <canvas id="skillChart"></canvas>
          </div>
        </td>
        <td style="vertical-align: top" class="px-3">
          <table class="table table-striped table-bordered mx-3">
            <thead class="table-dark">
              <tr>
                <th>
                  <div class="input-group">
                    <h5 display-7 class="m-1">{{ $t("message.Language") }}</h5>
                  </div>
                </th>
                <th>
                  <h7 display-7 class="m-1">{{ $t("language.Listen") }}</h7>
                </th>
                <th>
                  <h7 display-7 class="m-1">{{ $t("language.Speak") }}</h7>
                </th>
                <th>
                  <h7 display-7 class="m-1">{{ $t("language.Read") }}</h7>
                </th>
                <th>
                  <h7 display-7 class="m-1">{{ $t("language.Write") }}</h7>
                </th>
                <th>
                  <h7 display-7 class="m-1">{{ $t("language.Typing") }}</h7>
                </th>
              </tr>
            </thead>
            <tbody style="text-align: center">
              <tr>
                <td style="color: red">{{ $t("language.English") }}</td>
                <td>{{ this.EnglishData[0] }}</td>
                <td>{{ this.EnglishData[1] }}</td>
                <td>{{ this.EnglishData[2] }}</td>
                <td>{{ this.EnglishData[3] }}</td>
                <td>{{ this.EnglishData[4] }}</td>
              </tr>
              <tr>
                <td style="color: green">{{ $t("language.Chinese") }}</td>
                <td>{{ this.ChineseData[1] }}</td>
                <td>{{ this.ChineseData[0] }}</td>
                <td>{{ this.ChineseData[2] }}</td>
                <td>{{ this.ChineseData[3] }}</td>
                <td>{{ this.ChineseData[4] }}</td>
              </tr>
              <tr>
                <td style="color: blue">{{ $t("language.Japanese") }}</td>
                <td>{{ this.JapaneseData[0] }}</td>
                <td>{{ this.JapaneseData[1] }}</td>
                <td>{{ this.JapaneseData[2] }}</td>
                <td>{{ this.JapaneseData[3] }}</td>
                <td>{{ this.JapaneseData[4] }}</td>
              </tr>

              <tr>
                <td style="color: black">{{ $t("language.Malay") }}</td>
                <td>{{ this.MalayData[0] }}</td>
                <td>{{ this.MalayData[1] }}</td>
                <td>{{ this.MalayData[2] }}</td>
                <td>{{ this.MalayData[3] }}</td>
                <td>{{ this.MalayData[4] }}</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </table>
    <h7 class="display-7 m-3">{{ $t("skill.remark") }}</h7>
    <table>
      <tr>
        <td style="vertical-align: top">
          <table class="table table-striped table-bordered mx-3">
            <thead class="table-dark">
              <tr>
                <th>
                  <div class="input-group">
                    <h5 display-7 class="m-1">CAD</h5>
                  </div>
                </th>
                <th>
                  <h6 display-7 class="m-1">{{ $t("message.Experiences") }}</h6>
                </th>
                <th>
                  <h6 display-7 class="m-1">{{ $t("message.Remark") }}</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AutoCAD</td>
                <td>◎</td>
                <td>2D, 3D, VBA</td>
              </tr>
              <tr>
                <td>Inventor</td>
                <td>◎</td>
                <td>2D, 3D, VBA</td>
              </tr>
              <tr>
                <td>SolidWork</td>
                <td>◎</td>
                <td>2D, 3D</td>
              </tr>
              <tr>
                <td>SolidEdge</td>
                <td>△</td>
                <td>2D, 3D</td>
              </tr>
              <tr>
                <td>CadCam</td>
                <td>△</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </td>
        <td rowspan="2" style="vertical-align: top; padding-left: 15px">
          <table class="table table-striped table-bordered mx-3">
            <thead class="table-dark">
              <tr>
                <th>
                  <div class="input-group">
                    <h5 display-7 class="m-1">Tools</h5>
                  </div>
                </th>
                <th>
                  <h6 display-7 class="m-1">{{ $t("message.Experiences") }}</h6>
                </th>
                <th>
                  <h6 display-7 class="m-1">{{ $t("message.Remark") }}</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GitHub</td>
                <td>◎</td>
                <td></td>
              </tr>
              <tr>
                <td>BitBucket</td>
                <td>◎</td>
                <td></td>
              </tr>
              <tr>
                <td>MS Offices</td>
                <td>◎</td>
                <td></td>
              </tr>
              <tr>
                <td>JIRA</td>
                <td>〇</td>
                <td></td>
              </tr>
              <tr>
                <td>Confluence</td>
                <td>△</td>
                <td></td>
              </tr>
              <tr>
                <td>Slack</td>
                <td>〇</td>
                <td></td>
              </tr>
              <tr>
                <td>SourceThree</td>
                <td>◎</td>
                <td></td>
              </tr>
              <tr>
                <td>PgAdmin</td>
                <td>◎</td>
                <td></td>
              </tr>
              <tr>
                <td>Visual Studio</td>
                <td>◎</td>
                <td></td>
              </tr>
              <tr>
                <td>Visual Studio Code</td>
                <td>◎</td>
                <td></td>
              </tr>
              <tr>
                <td>PostMan</td>
                <td>〇</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td style="vertical-align: top; padding-left: 15px">
          <table class="table table-striped table-bordered mx-3">
            <thead class="table-dark">
              <tr>
                <th>
                  <div class="input-group">
                    <h5 display-7 class="m-1">ＯＳ</h5>
                  </div>
                </th>
                <th>
                  <h6 display-7 class="m-1">{{ $t("message.Experiences") }}</h6>
                </th>
                <th>
                  <h6 display-7 class="m-1">{{ $t("message.Remark") }}</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Windows</td>
                <td>◎</td>
                <td></td>
              </tr>
              <tr>
                <td>Unix</td>
                <td>△</td>
                <td></td>
              </tr>
              <tr>
                <td>Android</td>
                <td>△</td>
                <td></td>
              </tr>
              <tr>
                <td>IOS</td>
                <td>-</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </table>
    <h7 class="display-7 m-3">{{ $t("skill.remark") }}</h7>
    <table>
      <tr>
        <td style="vertical-align: top">
          <table class="table table-striped table-bordered mx-3">
            <thead class="table-dark">
              <tr>
                <th>
                  <div class="input-group">
                    <h5 display-7 class="m-1">Server</h5>
                  </div>
                </th>
                <th>
                  <h6 display-7 class="m-1">{{ $t("message.Experiences") }}</h6>
                </th>
                <th>
                  <h6 display-7 class="m-1">{{ $t("message.Remark") }}</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apache</td>
                <td>◎</td>
                <td></td>
              </tr>
              <tr>
                <td>IIS</td>
                <td>〇</td>
                <td></td>
              </tr>
              <tr>
                <td>Node.js</td>
                <td>〇</td>
                <td></td>
              </tr>
              <tr>
                <td>Docker</td>
                <td>△</td>
                <td>Create Image</td>
              </tr>
              <tr>
                <td>Azure</td>
                <td>△</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </td>
        <td style="vertical-align: top; padding-left: 15px">
          <table class="table table-striped table-bordered mx-3">
            <thead class="table-dark">
              <tr>
                <th>
                  <div class="input-group">
                    <h5 display-7 class="m-1">DataBase</h5>
                  </div>
                </th>
                <th>
                  <h6 display-7 class="m-1">{{ $t("message.Experiences") }}</h6>
                </th>
                <th>
                  <h6 display-7 class="m-1">{{ $t("message.Remark") }}</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PostgreSQL</td>
                <td>◎</td>
                <td></td>
              </tr>
              <tr>
                <td>MySQL</td>
                <td>〇</td>
                <td></td>
              </tr>
              <tr>
                <td>Access</td>
                <td>〇</td>
                <td></td>
              </tr>
              <tr>
                <td>SQLite</td>
                <td>△</td>
                <td></td>
              </tr>
              <tr>
                <td>Oracle</td>
                <td>-</td>
                <td></td>
              </tr>
              <tr>
                <td>Reddit</td>
                <td>-</td>
                <td></td>
              </tr>
              <tr>
                <td>NoSQL</td>
                <td>-</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </table>
    <h7 class="display-7 m-3">{{ $t("skill.remark") }}</h7>
    <table>
      <tr>
        <td style="vertical-align: top">
          <table class="table table-striped table-bordered mx-3">
            <thead class="table-dark">
              <tr>
                <th>
                  <div class="input-group">
                    <h5 display-7 class="m-1">Language</h5>
                  </div>
                </th>
                <th>
                  <h6 display-7 class="m-1">{{ $t("message.Experiences") }}</h6>
                </th>
                <th>
                  <h6 display-7 class="m-1">{{ $t("message.Remark") }}</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>C#</td>
                <td>◎</td>
                <td></td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>◎</td>
                <td>HTML, CSS</td>
              </tr>
              <tr>
                <td>TypeScript</td>
                <td>△</td>
                <td></td>
              </tr>
              <tr>
                <td>VBA</td>
                <td>◎</td>
                <td></td>
              </tr>
              <tr>
                <td>PHP</td>
                <td>〇</td>
                <td>SQL Query</td>
              </tr>
              <tr>
                <td>Java</td>
                <td>〇</td>
                <td></td>
              </tr>
              <tr>
                <td>Git</td>
                <td>◎</td>
                <td></td>
              </tr>
              <tr>
                <td>Android</td>
                <td>△</td>
                <td></td>
              </tr>
              <tr>
                <td>Swift</td>
                <td>-</td>
                <td></td>
              </tr>
              <tr>
                <td>Python</td>
                <td>△</td>
                <td></td>
              </tr>
              <tr>
                <td>Ruby</td>
                <td>△</td>
                <td></td>
              </tr>
              <tr>
                <td>C, C++</td>
                <td>△</td>
                <td></td>
              </tr>
              <tr>
                <td>Objective-C</td>
                <td>-</td>
                <td></td>
              </tr>
              <tr>
                <td>Kotlin</td>
                <td>-</td>
                <td></td>
              </tr>
              <tr>
                <td>Perl</td>
                <td>-</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </td>
        <td style="vertical-align: top; padding-left: 15px">
          <table class="table table-striped table-bordered mx-3">
            <thead class="table-dark">
              <tr>
                <th>
                  <div class="input-group">
                    <h5 display-7 class="m-1">FrameWork/Library</h5>
                  </div>
                </th>
                <th>
                  <h6 display-7 class="m-1">{{ $t("message.Experiences") }}</h6>
                </th>
                <th>
                  <h6 display-7 class="m-1">{{ $t("message.Remark") }}</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ASP.NET CORE MVC</td>
                <td>◎</td>
                <td></td>
              </tr>
              <tr>
                <td>Rails</td>
                <td>△</td>
                <td></td>
              </tr>
              <tr>
                <td>Laravel</td>
                <td>-</td>
                <td></td>
              </tr>
              <tr>
                <td>CakePHP</td>
                <td>-</td>
                <td></td>
              </tr>
              <tr>
                <td>Struts</td>
                <td>-</td>
                <td></td>
              </tr>
              <tr>
                <td>Chart.js</td>
                <td>◎</td>
                <td></td>
              </tr>
              <tr>
                <td>JQuery.js</td>
                <td>◎</td>
                <td></td>
              </tr>
              <tr>
                <td>FusionChart.js</td>
                <td>〇</td>
                <td></td>
              </tr>
              <tr>
                <td>Enchant.js</td>
                <td>〇</td>
                <td></td>
              </tr>
              <tr>
                <td>Bootstrap.js</td>
                <td>〇</td>
                <td></td>
              </tr>
              <tr>
                <td>Vue.js</td>
                <td>〇</td>
                <td></td>
              </tr>
              <tr>
                <td>Vuetify.js</td>
                <td>〇</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default {
  data() {
    return {
      EnglishData: [70, 60, 70, 70, 70],
      JapaneseData: [70, 60, 60, 30, 60],
      ChineseData: [90, 80, 70, 30, 30],
      MalayData: [70, 40, 50, 30, 30],
    };
  },
  mounted: function () {
    this.radarSkill();
  },
  methods: {
    radarSkill() {
      var marksData = {
        labels: [
          this.$t("language.Listen"),
          this.$t("language.Speak"),
          this.$t("language.Read"),
          this.$t("language.Write"),
          this.$t("language.Typing"),
        ],
        datasets: [
          {
            label: this.$t("language.EnglishLabel"),
            backgroundColor: "transparent",
            borderColor: "rgba(200,0,0,0.6)",
            fill: false,
            radius: 6,
            pointRadius: 6,
            pointBorderWidth: 3,
            pointBackgroundColor: "orange",
            pointBorderColor: "rgba(200,0,0,0.6)",
            pointHoverRadius: 10,
            data: this.EnglishData,
          },
          {
            label: this.$t("language.JapaneseLabel"),
            backgroundColor: "transparent",
            borderColor: "rgba(0,0,200,0.6)",
            fill: false,
            radius: 6,
            pointRadius: 6,
            pointBorderWidth: 3,
            pointBackgroundColor: "cornflowerblue",
            pointBorderColor: "rgba(0,0,200,0.6)",
            pointHoverRadius: 10,
            data: this.JapaneseData,
          },
          {
            label: this.$t("language.ChineseLabel"),
            backgroundColor: "transparent",
            borderColor: "Green",
            fill: false,
            radius: 6,
            pointRadius: 6,
            pointBorderWidth: 3,
            pointBackgroundColor: "lightgreen",
            pointBorderColor: "Green",
            pointHoverRadius: 10,
            data: this.ChineseData,
          },
          {
            label: this.$t("language.MalayLabel"),
            backgroundColor: "transparent",
            borderColor: "Black",
            fill: false,
            radius: 6,
            pointRadius: 6,
            pointBorderWidth: 3,
            pointBackgroundColor: "White",
            pointBorderColor: "Black",
            pointHoverRadius: 10,
            data: this.MalayData,
          },
        ],
      };
      var chartOptions = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: "left",
          },
        },
        scales: {
          r: {
            //グラフの最小値・最大値
            min: 0,
            max: 100,
            //背景色
            backgroundColor: "snow",
            //グリッドライン
            grid: {
              color: "pink",
            },
            //アングルライン
            angleLines: {
              color: "green",
            },
            //各項目のラベル
            pointLabels: {
              color: "blue",
            },
          },
        },
      };
      var ctx = document.getElementById("skillChart").getContext("2d");

      Chart.register(ChartDataLabels);
      var radarChart = new Chart(ctx, {
        type: "radar",
        data: marksData,
        options: chartOptions,
      });
      radarChart;
    },
  },
};
</script>
