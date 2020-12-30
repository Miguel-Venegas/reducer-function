// reducer function

const nums = [3, 4, 5, 6, 7];
// To multiply all values in nums:

const product = nums.reduce((total, current) => total * current); // output: 2520

// return the max grade

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

  // first version
    const maxGrade = grades.reduce((max, currentValue) => {
      if(currentValue > max) return currentValue;
      return max; 
  }); // output: 99

  // 2nd version
    const maxGrade2 = grades.reduce((max, currentValue) => {
      return Math.max(max, currentValue);
    }); // output: 99
