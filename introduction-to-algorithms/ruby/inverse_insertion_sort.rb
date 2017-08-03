# Rewrite the INSERTION-SORT procedure to sort into non-increasing instead of non-decreasing order.

# INSERTION-SORT(A)
# for j = 2 to A:length
#   key = A[j]
#   // Insert A[j] into the sorted sequence A]1..j-1]
#   i = j - 1
#   while i > 0 and A[i] > key
#     A[i + 1] =  A[i]
#     i = i - 1
#   A[i + 1] = key

a = [5, 3, 1, 4, 7]
b = [10, 8, 12, 2, 5]

def inverse_insertion_sort(array)
  for j in 1..array.length - 1
    key = array[j]
    i = j - 1
    while i >= 0 and array[i] < key do
      array[i + 1] = array[i]
      i = i - 1
    end
    array[i + 1] = key
  end
  puts array.inspect
end

inverse_insertion_sort(a)
inverse_insertion_sort(b)
