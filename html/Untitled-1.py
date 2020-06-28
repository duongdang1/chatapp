def is_palindrom(number):
    digits = []
    count = 0
    while number > 0:
        digit = number % 10
        digits.append(digit)
        number = number // 10
        count += 1
        for num in range(len(digits)):
            if digits[num] == digits[len(digits)+1 - num]:
                return True