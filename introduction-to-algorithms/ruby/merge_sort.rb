# MERGE SORT PSEUDOCODE

# MERGE(A, p, q, r), where: p <= q < r
# n1 = q - p + 1
# n2 = r - q
# let: L[1..n1 + 1] and R[1..n2 + 1] be new arrays
# for i = 1 to n1
#   L[i] = A[p+i-1]
# for j = 1 to n2
#   R[j] = A[q+j]
# L[n1+1] = sentinel1
# R[n2+1] = sentinel2
# i = 1
# j = 1
# for k = p to r
#   if L[i] <= R[j]
#     A[k] = L[i]
#     i = i + 1
#   else A[k] = R[j]
#     j = j + 1

# MERGE_SORT(A, p, r)
#   if p < r
#     q = |(p + r)/2|
#     MERGE_SORT(A, p, q)
#     MERGE_SORT(A, q + 1, r)
#     MERGE_SORT(A, p, q, r)

def merge_sort(array)
  return array if array.length <= 1
  left = array.slice(0, array.length/2)
  right = array.slice(left.length, array.length-1)
  merge(merge_sort(left), merge_sort(right))
end

def merge(left, right)
  sorted = []
  until left.empty? || right.empty?
    if left.first <= right.first
      sorted.push(left.shift)
    else
      sorted.push(right.shift)
    end
  end
  sorted.concat(left).concat(right)
end

a = [100, 45, 3, 56, 90, 76]
puts merge_sort(a).inspect
