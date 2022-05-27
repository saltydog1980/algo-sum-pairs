def sum_pairs(num_list, target):
    #ans list to log match pairs
    ans_list = []
    #nested for loop looping through summing each value to each other value in the list
#   #and then comparing to target, if match then pushing into ans list
    for i in range(0, len(num_list), 1):
        for j in range(1, len(num_list), 1):
            if num_list[i] + num_list[j] == target:
                ans_list.append([num_list[i], num_list[j]])
                num_list[i] = -1
                num_list[j] = -1
    #if nothing in ans list returning unable, else returning the ans list
    if len(ans_list) == 0:
        return 'unable to find pairs'
    else:
        return ans_list                
