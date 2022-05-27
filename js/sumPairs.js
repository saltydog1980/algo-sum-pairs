exports.sumPairs = function(arr, num) {
    //ans array to log match pairs
    ansArr = []
    //nested for loop looping through summing each value to each other value in the array
    //and then comparing to target, if match then pushing into ans array
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === num) {
                ansArr.push([arr[i], arr[j]])
                arr[i] = -1
                arr[j] = -1
            }
        }
    }
//if nothing in ans array returning unable, else returning the ans arr
    if (ansArr.length === 0) {
        return 'unable to find pairs'
    } 
    return ansArr      
};

