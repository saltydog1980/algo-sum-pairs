exports.sumPairs = function(arr, num) {
    ansArr = []
    for (let i = 0; i < arr.length; i++) {
    arr[i]
        for (let j = 0; j < arr.length; j++) {
            arr[j]
            if(arr[i] + arr[j] === num) {
                ansArr.push([arr[i], arr[j]])
                arr[i] = -1
                arr[j] = -1
            }
        }
    }

    if (ansArr.length === 0) {
        return 'unable to find pairs'
    } 
    return ansArr      
};
