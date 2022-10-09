<template>
  <div class="justify-content-center mx-2">
    <div class="input-group">
      <h5 class="display-7 mt-3">■ {{ $t("message.MySamples") }}</h5>
    </div>
    <table class="table table-striped" style="font-size: 14px">
      <thead>
        <tr>
          <th>{{ $t("message.Date") }}</th>
          <th>{{ $t("message.System") }}</th>
          <th>{{ $t("message.SourceCode") }}</th>
          <th>{{ $t("message.Demo") }}</th>
          <th>{{ $t("message.Remark") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>2022-09</p>
          </td>
          <td>
            <p>{{ $t("sample.System2") }}</p>
          </td>
          <td>
            <a
              class="m-1"
              style="font-size: 12px"
              target="_blank"
              href="https://github.com/potatoscript/rubyonrails-project"
            >
              {{ $t("sample.SourceCode2") }}
            </a>
          </td>
          <td>
            <a
              class="m-1"
              style="font-size: 12px"
              target="_blank"
              href="https://rubyonrails-project.herokuapp.com/"
            >
              {{ $t("sample.Demo2") }}
            </a>
          </td>
          <td>
            {{ $t("sample.Remark2") }}
          </td>
        </tr>
        <tr>
          <td>
            <p>2022-08</p>
          </td>
          <td>
            <p>{{ $t("sample.System1") }}</p>
          </td>
          <td>
            <a
              class="m-1"
              style="font-size: 12px"
              target="_blank"
              href="https://github.com/potatoscript/arentinc-development"
            >
              {{ $t("sample.SourceCode1") }}
            </a>
          </td>
          <td>
            <a
              class="m-1"
              style="font-size: 12px"
              target="_blank"
              href="https://potatoscript.github.io/arentinc-production/"
            >
              {{ $t("sample.Demo1") }}
            </a>
          </td>
          <td>
            {{ $t("sample.Remark1") }}
          </td>
        </tr>
        <tr>
          <td>
            <p>2021-03</p>
          </td>
          <td>
            <p>{{ $t("sample.System4") }}</p>
          </td>
          <td></td>
          <td>
            <a
              class="m-1"
              style="font-size: 12px"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.potato.mysqlproject"
            >
              {{ $t("sample.Demo4") }}
            </a>
          </td>
          <td>
            {{ $t("sample.Remark4") }}
          </td>
        </tr>
        <tr>
          <td>
            <p>2020-12</p>
          </td>
          <td>
            <p>{{ $t("sample.System3") }}</p>
          </td>
          <td></td>
          <td>
            <a
              class="m-1"
              style="font-size: 12px"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.potato.barcodescanner"
            >
              {{ $t("sample.Demo3") }}
            </a>
          </td>
          <td>
            {{ $t("sample.Remark3") }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
