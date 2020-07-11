correct = [[1,2,3],
           [2,3,1],
           [3,1,2]]

incorrect = [[1,2,3,4],
             [2,3,1,3],
             [3,1,2,3],
             [4,4,4,4]]

incorrect2 = [[1,2,3,4],
             [2,3,1,4],
             [4,1,2,3],
             [3,4,1,2]]
# this fails because the numbers are not in sequence 1...n
incorrect3 = [[1,2,3,4,5],
              [2,3,1,5,6],
              [4,5,2,1,3],
              [3,4,5,2,1],
              [5,6,4,3,2]]

incorrect4 = [['a','b','c'],
              ['b','c','a'],
              ['c','a','b']]

incorrect5 = [ [1, 1.5],
               [1.5, 1]]
               
def check_sudoku(array):
    seen = set()
    max_value = len(array)
    if validate_cols(array,seen,max_value) and validate_rows(array,seen,max_value):
        return True
    else:
        return False

def is_valid(item):
    if isinstance(item, int) and item > 0 and item < 10:
        return True
    else: 
        return False

def validate_rows(array,seen,max_value):
  for row in array:
        for item in row:
            if is_valid(item) == True and not item in seen and not item > max_value:
                seen.add(item)
            else:
                return False
        seen.clear()
  return True

def validate_cols(array, seen, max_value):   
    for i in range(len(array[0])):
        for j in range(len(array)):
            item = array[j][i]
            if is_valid(item) and not item in seen and not item > max_value:
                seen.add(item)
            else:
                return False
        seen.clear()
    return True

print(check_sudoku(incorrect))
#>>> False

print(check_sudoku(correct))
#>>> True

print(check_sudoku(incorrect2))
#>>> False

print(check_sudoku(incorrect3))
#>>> False

print(check_sudoku(incorrect4))
#>>> False

print(check_sudoku(incorrect5))
#>>> False
