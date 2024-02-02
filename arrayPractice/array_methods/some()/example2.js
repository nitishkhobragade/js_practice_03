var arr = [12, 81, 23, 34];

function test(element) {
  return element > 80;
}

var ans = arr.some(test);
console.log("Its " + ans);

////It tests whether any element is greater than 80. Thus, one element is present that is satisfying the condition. So, some() function returns True.
