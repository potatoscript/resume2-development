<template>
  <div class="justify-content-center mx-5">
    <div class="input-group">
      <h5 class="display-7 mt-3">■ {{ $t("message.Codility") }}</h5>
    </div>
    <table class="table table-striped" style="font-size: 14px">
      <thead>
        <tr>
          <th>{{ $t("message.Date") }}</th>
          <th>{{ $t("message.Description") }}</th>
          <th>{{ $t("message.Solution") }}</th>
          <th>{{ $t("message.Result") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>2022-10</p>
          </td>
          <td>
            <div class="brinza-task-description">
              <p>
                A <i>binary gap</i> within a positive integer N is any maximal
                sequence of consecutive zeros that is surrounded by ones at both
                ends in the binary representation of N.
              </p>
              <p>
                For example, number 9 has binary representation
                <tt style="white-space: pre-wrap">1001</tt> and contains a
                binary gap of length 2. The number 529 has binary representation
                <tt style="white-space: pre-wrap">1000010001</tt> and contains
                two binary gaps: one of length 4 and one of length 3. The number
                20 has binary representation
                <tt style="white-space: pre-wrap">10100</tt> and contains one
                binary gap of length 1. The number 15 has binary representation
                <tt style="white-space: pre-wrap">1111</tt> and has no binary
                gaps. The number 32 has binary representation
                <tt style="white-space: pre-wrap">100000</tt> and has no binary
                gaps.
              </p>
              <p>Write a function:</p>
              <blockquote>
                <p
                  style="
                    font-family: monospace;
                    font-size: 9pt;
                    display: block;
                    white-space: pre-wrap;
                  "
                >
                  <tt>function solution(N);</tt>
                </p>
              </blockquote>
              <p>
                that, given a positive integer N, returns the length of its
                longest binary gap. The function should return 0 if N
                doesn&#x27;t contain a binary gap.
              </p>
              <p>
                For example, given N = 1041 the function should return 5,
                because N has binary representation
                <tt style="white-space: pre-wrap">10000010001</tt> and so its
                longest binary gap is of length 5. Given N = 32 the function
                should return 0, because N has binary representation
                &#x27;100000&#x27; and thus no binary gaps.
              </p>
              <p>
                Write an <b><b>efficient</b></b> algorithm for the following
                assumptions:
              </p>
              <blockquote>
                <ul style="margin: 10px; padding: 0px">
                  <li>
                    N is an integer within the range [<span class="number"
                      >1</span
                    >..<span class="number">2,147,483,647</span>].
                  </li>
                </ul>
              </blockquote>
            </div>
          </td>
          <td>
            <textarea
              rows="4"
              cols="45"
              style="
                text-align: left;
                font-size: 10px;
                height: 280px;
                background: transparent;
              "
            >
                function solution(N) {
                  var binary = (N >>> 0).toString(2);
                  var binaryArr = String(binary).split("");
                  if(
                      binaryArr[0]=="0" || 
                      binaryArr[binaryArr.length]=="0"
                  ) return "0";
                  var binaryGap = [];
                  var n = 0;
                  binaryArr.forEach(function(b){
                  if(b==0)n++;
                  if(b==1)binaryGap.push(n),n=0;
                })
                  return Math.max.apply(null, binaryGap);
                }
              </textarea
            >
          </td>
          <td>The solution obtained perfect score</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
