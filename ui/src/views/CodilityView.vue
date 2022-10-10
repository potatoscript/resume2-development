<template>
  <div class="justify-content-center mx-5">
    <div class="input-group">
      <h5 class="display-7 mt-3">■ {{ $t("language.Codility") }}</h5>
    </div>
    <table class="table table-striped" style="font-size: 14px">
      <thead>
        <tr>
          <td>
            <div class="input-group">
              <textarea
                rows="4"
                cols="80"
                style="
                  text-align: left;
                  font-size: 13px;
                  height: 280px;
                  background: black;
                  color: white;
                "
              >
    TASK 5: 2022-10-09 (hard)

    Write a function:

    class Solution { public int solution(int[] A, int[] B); }

    that, given two arrays, A and B, consisting of N integers and describing the links, 
    computes the number of pairs of nodes X and Y, such that 0 ≤ X ＜ Y ≤ N, 
    and X and Y are connected via an odd number of links.

    For example, given N = 6 and the following arrays:

    A[0] = 0    B[0] = 3
    A[1] = 3    B[1] = 1
    A[2] = 4    B[2] = 3
    A[3] = 2    B[3] = 3
    A[4] = 6    B[4] = 3
    A[5] = 3    B[5] = 5


    the function should return 6, since:

    there are six pairs of nodes connected by direct links, and
    all other pairs of nodes are connected via two links.
    Given N = 5 and the following arrays:

    A[0] = 0    B[0] = 1
    A[1] = 4    B[1] = 3
    A[2] = 2    B[2] = 1
    A[3] = 2    B[3] = 3
    A[4] = 4    B[4] = 5


    the function should return 9, since:

    there are five pairs of nodes connected by direct links,
    there are three pairs of nodes connected via three links, and
    there is one pair of nodes connected via five links.
    Given N = 7 and the following arrays:

    A[0] = 0    B[0] = 3
    A[1] = 4    B[1] = 5
    A[2] = 4    B[2] = 1
    A[3] = 2    B[3] = 3
    A[4] = 7    B[4] = 4
    A[5] = 6    B[5] = 3
    A[6] = 3    B[6] = 4


    the function should return 16, since:

    there are seven pairs of nodes connected by direct links, and
    there are nine pairs of nodes connected via three links.
    Write an efficient algorithm for the following assumptions:

    N is an integer within the range [0..90,000];
    each element of arrays A and B is an integer within the range [0..N];
    the network has a tree topology;
    any pair of nodes is connected via no more than 1000 links.
            </textarea
              >
              <textarea
                class="mx-3"
                rows="4"
                cols="55"
                style="text-align: left; font-size: 13px; height: 280px"
              >
    SOLUTION 5: 

    function solution(N) {
        // thinking...
    }
              </textarea>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="input-group">
              <textarea
                rows="4"
                cols="80"
                style="
                  text-align: left;
                  font-size: 13px;
                  height: 280px;
                  background: black;
                  color: white;
                "
              >
    TASK 4: 2022-10-08 (easy)

    Write a function: function solution(N);

    that, given a string N, returns N in CamelCase. 

    For example, given N = "I am-bruce!! nice to@ meet you"; 
    the function should return "iAmBruceNiceToMeetYou".
            </textarea
              >

              <textarea
                class="mx-3"
                rows="4"
                cols="55"
                style="text-align: left; font-size: 13px; height: 280px"
              >
    SOLUTION 4: 2022-10-08 (15mins)

    function CamelCase(N){
        var regEx = /^[0-9a-zA-Z]+$/;
        var N = N.split("");
        var str = N[0].toLowerCase();
        for(var i=1; i ＜ N.length; i++){
            if(N[i].match(regEx) && N[i]!=" ")
            {
            str+=N[i].toLowerCase(); 
            }
            else
            {
                if(N[i+1].match(regEx)){
                    str+=N[i+1].toUpperCase();
                    i++;
                }
                
            }
        }
        return str;
    }
              </textarea>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="input-group">
              <textarea
                rows="4"
                cols="80"
                style="
                  text-align: left;
                  font-size: 13px;
                  height: 280px;
                  background: black;
                  color: white;
                "
              >
    TASK 3: 2022-10-08 (easy)

    Write a function: function solution(N);

    that, given a positive integer N, returns the length of its
    longest binary gap. The function should return 0 if N
    doesn&#x27;t contain a binary gap.

    For example, given N = 1041 the function should return 5,
    because N has binary representation 10000010001 and so its
    longest binary gap is of length 5. Given N = 32 the function
    should return 0, because N has binary representation
    &#x27;100000&#x27; and thus no binary gaps.

    Write an efficient algorithm for the following
    assumptions: N is an integer within the range 1..2,147,483,647.
            </textarea
              >

              <textarea
                class="mx-3"
                rows="4"
                cols="55"
                style="text-align: left; font-size: 13px; height: 280px"
              >
    SOLUTION 3: 2022-10-08 (15mins)

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
              </textarea>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="input-group">
              <textarea
                rows="4"
                cols="80"
                style="
                  text-align: left;
                  font-size: 13px;
                  height: 280px;
                  background: black;
                  color: white;
                "
              >
    TASK 2: 2022-10-07 (easy)

    Write a function: function solution(a,b,k);

    that, given a range of positive integer a to b and division number k, 
    returns the number of division of k

    For example, given a = 1, b = 10 and k = 3 the function should return 3,
    because range of a,b = 1,2,3,4,5,6,7,8,9,10 which 3,6,9 can be divider by k

    Write an efficient algorithm for the following
    assumptions: b is an integer within the range 1..2,147,483,647.
            </textarea
              >

              <textarea
                class="mx-3"
                rows="4"
                cols="55"
                style="text-align: left; font-size: 13px; height: 280px"
              >
    SOLUTION 2: 2022-10-07 (15mins)

    // Poor solution: time complexity = Linear time – O(n)
    function solution(a,b,k) {
       var n = 0;
       var arry = [];
       for(var i=a; i＜=b; i++){
           if(i%k==0)arry.push(i),n++;
       }
       console.log(arry)
       return n;
    }

    // Good Solution: time complexity = Constant time – O (1)
    function solution(a,b,k) {
      if(a%k==0)return Math.floor(((b-a)/k+1))
      if(a%k>0)return Math.floor((b-(a-a%k))/k)
    }


              </textarea>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="input-group">
              <textarea
                rows="4"
                cols="80"
                style="
                  text-align: left;
                  font-size: 13px;
                  height: 280px;
                  background: black;
                  color: white;
                "
              >
    TASK 1: 2022-10-06 (easy)

    Write a function: function solution(N[]);

    that, given an array N of set of integer values, 
    returns the smaller missing integer in the array

    For example, given N = [1,5,3,6,9] the function should return 4,
    because 4 is the smallest missing integer in N

    Write an efficient algorithm for the following
    assumptions: N within the range 1..2,147,483,647.
            </textarea
              >

              <textarea
                class="mx-3"
                rows="4"
                cols="55"
                style="text-align: left; font-size: 13px; height: 280px"
              >
    SOLUTION 1: 2022-10-06 (15mins)

    function solution(N) {
        var min = Math.min.apply(null, N);
        var max =  Math.max.apply(null, N);
        if(max＜0)return 1;

        N.sort(function(b,a){return b-a});

        for(var key in N) {
            var value = N[key]+1;
            if(!N.includes(value) ＆＆ value>0){
                return value;
            }
        }
    }
              </textarea>
            </div>
          </td>
        </tr>
      </thead>
    </table>
  </div>
</template>
<style scoped>
table th,
td {
  vertical-align: top;
}
</style>
