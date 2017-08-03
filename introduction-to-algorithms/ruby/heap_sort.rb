# max_heapify(A, heap_size, i)
#  l = LEFT(i)
#  r = RIGHT(i)
#  if l <= heap_size and A[l] > A[i]
#    largest = l
#  else largest = i
#  if r <= heap_size and A[r] > A[largest]
#    largest - r
#  if largest != i
#    exchange A[i] with A[largest]
#    max_heapify(A, heap_size, largest)

# build_max_heap(A)
#   heap_size = A.length
#   for i = [A.length/2] down_to 1
#     max_heapify(A, heap_size, i)

# heapsort(A)
#   build_max_heap(A)
#   for i = A.length down_to 2
#     exchange A[1] with A[i]
#     A.heap_size = A.heap_size - 1
#     max_heapify(A, heap_size, 1)

def max_heapify(list, heap_size, i)
  i = i.to_i

  left = i * 2
  right = i * 2 + 1
  largest = i

  if left < heap_size && list[left] > list[i]
    largest = left
  end

  if right < heap_size && list[right] > list[largest]
    largest = right
  end

  if largest != i
    _temp = list[i]
    list[i] = list[largest]
    list[largest] = _temp
    max_heapify(list, heap_size, largest)
  end
end

def build_max_heap(list)
  heap_size = list.length
  for i in ((list.length - 1) / 2).downto(0)
    max_heapify(list, heap_size, i)
  end
  list
end

def heapsort(list)
  heap_size = list.length
  _list = build_max_heap(list)
  for i in (_list.length - 1).downto(0)
    _list[0], _list[i] = _list[i], _list[0]
    heap_size = heap_size - 1
    max_heapify(_list, heap_size, 0)
  end
end

to_sort = [2, 8, 1, 4, 14, 7, 16, 10, 9, 3]
heapsort(to_sort)
puts to_sort.inspect
