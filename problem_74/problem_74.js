


function searchMatrix (matrix, target) {

    function binarySearch(arr, n) {
        if(arr.length === 1 && arr[0] === n) {
            return arr[0]
        }
        let end = arr.length-1
        let start = 0

        while (start <= end) {
            let mid = Math.floor((start+end) / 2)

            if(arr[mid] === n) {
                return arr[mid]
            }
            if(arr[mid] > n) {
                end = mid - 1
            }else {
                start = mid + 1
            }
        }
        return -1
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(binarySearch(matrix[i], target));
        if (binarySearch(matrix[i], target) === target) {
            return true
        }
    }
    
    return false
}


console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 10));

