def sum_pairs(num_list, target):
    nums = {}
    answer_list = []

    for num in num_list:
        rem = target - num

        if rem in nums:
            answer_list.append([num, rem])
        else:
            nums[num] = True
    return answer_list
