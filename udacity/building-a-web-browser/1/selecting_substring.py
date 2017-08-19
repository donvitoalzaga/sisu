def myfirst_yoursecond(p, q):
	p_index = p.find(" ")
	q_index = q.find(" ")
	return p[ : p_index] == q[q_index + 1 : ]
