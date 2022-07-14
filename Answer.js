


function SumOfArrIntegers(nums, target) {

    //created an empty object, this will store the key and value
    let obj = {};

    //loop through the given array
    for (let i = 0; i < nums.length; i++) {

      let val = nums[i];
  
      //check if the value exist 
      if (obj[target - val] >= 0) {
        return [nums[obj[target - val]], val];
      } else {
        obj[val] = i; 
      }
    }
  };
  

