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
    TASK 10: 2022-10-16 (easy)

    A non-empty array A consisting of N integers is given. 
    The array contains an odd number of elements, 
    and each element of the array can be paired with another element that has the same value, 
    except for one element that is left unpaired.

    For example, in array A such that:

    A[0] = 9  A[1] = 3  A[2] = 9
    A[3] = 3  A[4] = 9  A[5] = 7
    A[6] = 9
    the elements at indexes 0 and 2 have value 9,
    the elements at indexes 1 and 3 have value 3,
    the elements at indexes 4 and 6 have value 9,
    the element at index 5 has value 7 and is unpaired.
    Write a function:

    function solution(A);

    that, given an array A consisting of N integers 
    fulfilling the above conditions, returns the value of the unpaired element.

    For example, given array A such that:

    A[0] = 9  A[1] = 3  A[2] = 9
    A[3] = 3  A[4] = 9  A[5] = 7
    A[6] = 9
    the function should return 7, as explained in the example above.

    Write an efficient algorithm for the following assumptions:

    N is an odd integer within the range [1..1,000,000];
    each element of array A is an integer within the range [1..1,000,000,000];
    all but one of the values in A occur an even number of times.

            </textarea
              >

              <textarea
                class="mx-3"
                rows="4"
                cols="55"
                style="text-align: left; font-size: 13px; height: 280px"
              >
    SOLUTION 10: 2022-10-17 (15mins 100%)
    Detected time complexity:O(N) or O(N*log(N))

    function solution(A) {
        const B = {}
        A.forEach(element => {
            B[element] = (B[element] || 0) + 1;
        });
        for (var key in B) {
            if(B[key]%2!=0){
                return parseInt(key)
            }
        }
        return 0;
    }

    SOLUTION 10: 2022-10-16 (15mins 66%)
    Detected time complexity: O(N**2)
      Killed. Hard limit reached: 6.000 sec

    function solution(A) {
        const counts = {}
        var d = [...A];
        var odd = 0;
        A.forEach(element => {
            d.shift();  
            counts[element] = (counts[element] || 0) + 1;   
            if(counts[element]%2!=0 && !d.includes(element)){
                odd = element
            }
        });
        return odd;
    }

    SOLUTION 10: 2022-10-16 (15mins 66%)
    Detected time complexity: O(N**2)
      splice() is several orders of magnitude slower than a for loop 
      iterating through the elements.

    function solution(A) {
        var c = [];
        for(var i=0; i＜A.length; i++){
            if(!c.includes(A[i])){
                c.push(A[i]);
            }else{
                c.splice(c.indexOf(A[i]), 1)
            }
        }
        if(c && c[0]!= undefined)return c[0];
        return 0;
    }


    SOLUTION 10: 2022-10-16 (25mins 50%)
    Detected time complexity: O(N**2)
    and undefined return found

    function solution(A) {
        var c = []
        var d = []
        for(var i=0; i＜A.length; i++){
            if(c.includes(A[i])){
                d.push(A[i])
            }else{
                c.push(A[i])
            }
        }
        return c.filter(x => !d.includes(x))[0]
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
    TASK 9: 2022-10-12 (easy)

    A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

    Array A contains only 0s and/or 1s:

    0 represents a car traveling east,
    1 represents a car traveling west.
    The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P ＜ Q ＜ N, is passing when P is traveling to the east and Q is traveling to the west.

    For example, consider array A such that:

    A[0] = 0
    A[1] = 1
    A[2] = 0
    A[3] = 1
    A[4] = 1
    We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

    Write a function:

    class Solution { public int solution(int[] A); }

    that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

    The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

    For example, given:

    A[0] = 0
    A[1] = 1
    A[2] = 0
    A[3] = 1
    A[4] = 1
    the function should return 5, as explained above.

    Write an efficient algorithm for the following assumptions:

    N is an integer within the range [1..100,000];
    each element of array A is an integer that can have one of the following values: 0, 1.

            </textarea
              >

              <textarea
                class="mx-3"
                rows="4"
                cols="55"
                style="text-align: left; font-size: 13px; height: 280px"
              >
    SOLUTION 9: 2022-10-15 (18mins 100%) 
    Detected time complexity: O(N)

    function solution(A) {
        var n = 0;
        var c = [];
        if(!A.includes(0))return 0;
        if(!A.includes(1))return 0;
        for(var i=0; i＜A.length; i++ ){
            if(A[i]==0)c.push(0);
            if(A[i]!=0 && c.includes(0)){
                n += c.length;
            }
        }
        if(n>1000000000)return -1;
        return n;
    }

    SOLUTION 9: 2022-10-14 (15mins 50%) 
    Detected time complexity: O(N**2) and wrong answer

    function solution(A) {
        var n = 0;
        var c = [];
        for(var i=0; i＜A.length; i++ ){
            if(A[i]!=0 && c.includes(0)){
                for(var j=0; j＜c.length;j++){
                    n++;
                }
            }else{
                c.push(0)
            }
        }

        return n;
    }

    SOLUTION 9: 2022-10-12 (25mins 60%) 
    Detected time complexity: O(N**2)

    function solution(A) {
        var n = 0;
        for(var i=0; i＜A.length; i++ ){
            if(A[i]==0){
                for(var j=i+1; j＜A.length; j++ ){
                    if(A[j]==1){
                        n++;
                    }
                }
            }
        }
        return n;
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
    TASK 8: 2022-10-11 (easy)

    Write a function:

    class Solution { public int solution(int X, int Y, int D); }

    that, given three integers X, Y and D, 
    returns the minimal number of jumps from position X to 
    a position equal to or greater than Y.

    For example, given:

    X = 10
    Y = 85
    D = 30
    the function should return 3, because the frog will be positioned as follows:

    after the first jump, at position 10 + 30 = 40
    after the second jump, at position 10 + 30 + 30 = 70
    after the third jump, at position 10 + 30 + 30 + 30 = 100
    Write an efficient algorithm for the following assumptions:

    X, Y and D are integers within the range [1..1,000,000,000];
    X ≤ Y.

            </textarea
              >

              <textarea
                class="mx-3"
                rows="4"
                cols="55"
                style="text-align: left; font-size: 13px; height: 280px"
              >
    SOLUTION 8: 2022-10-11 (25mins 100%)

    function solution(X, Y, D) {
        var T = (Y-X)/D;
        return Math.ceil(T);
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
    TASK 7: 2022-10-11 (easy)

    Write a function:

    class Solution { public int[] solution(int[] A, int K); }

    that, given an array A consisting of N integers and an integer K, 
    returns the array A rotated K times.

    For example, given

        A = [3, 8, 9, 7, 6]
        K = 3
    the function should return [9, 7, 6, 3, 8]. Three rotations were made:

        [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
        [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
        [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
    For another example, given

        A = [0, 0, 0]
        K = 1
    the function should return [0, 0, 0]

    Given

        A = [1, 2, 3, 4]
        K = 4
    the function should return [1, 2, 3, 4]

    Assume that:

    N and K are integers within the range [0..100];
    each element of array A is an integer within the range [−1,000..1,000].

            </textarea
              >

              <textarea
                class="mx-3"
                rows="4"
                cols="55"
                style="text-align: left; font-size: 13px; height: 280px"
              >
    SOLUTION 7: 2022-10-11 (25mins 100%)

    function solution(A, K) {
        for(var i=0;i＜K;i++){
           A.unshift(A[A.length-1]);
           A.pop();
        }
        return A;
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
    TASK 6: 2022-10-11 (easy)

    Write a function: function solution(N[]);

    that, return fibonacci

            </textarea
              >

              <textarea
                class="mx-3"
                rows="4"
                cols="55"
                style="text-align: left; font-size: 13px; height: 280px"
              >
    SOLUTION 6: 2022-10-11 (15mins)

    function solution(n) {
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else {
            return this.fibonacci(n - 1) +
                this.fibonacci(n - 2);
        }
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
                style="
                  text-align: left;
                  font-size: 13px;
                  height: 280px;
                  background: lightpink;
                "
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
