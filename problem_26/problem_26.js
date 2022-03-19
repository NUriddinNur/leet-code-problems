const removeDuplicates = (nums) => {  // +
  let cur = 0;

  for (let i = 1; i < nums.length; i++) {
    if(nums[cur] === nums[i]) continue
    cur++
    nums[cur] = nums[i]
    console.log(nums);
  }
  return cur
}

console.log(removeDuplicates([1,2,3,4,5]));
