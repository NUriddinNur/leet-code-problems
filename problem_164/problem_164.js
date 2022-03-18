



function maximumGap (nums) {
    let r = 0
    if (nums.length < 2) {
        return 0
    }

    const mergeSort = function(arr) {
        if (arr.length > 1) {

            mid = Math.ceil(arr.length / 2)
            let left = arr.slice(0, mid)
            let right = arr.slice(mid, arr.length)
    
            mergeSort(left);
            mergeSort(right);
    
            let i = j = k = 0;
    
            while(i < left.length && j < right.length) {
                if(left[i] < right[j]){
                    arr[k] = left[i]
                    i++;
                }else {
                    arr[k] = right[j]
                    j++
                }
                k++
            }
            while(i < left.length) {
                arr[k] = left[i];
                i++;
                k++;
            }
            while(j < right.length) {
                arr[k] = right[j];
                j++;
                k++
            }
        }
    }
    mergeSort(nums)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] !== undefined) {
            if (nums[i+1] - nums[i] > r){
                r = nums[i+1] - nums[i]
            }
        }
    }
    return r
};



console.log(maximumGap([3,6,9,1]))