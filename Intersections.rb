def Intersections(lines, circles)
  l_has_intersection = []
  c_has_intersection = []

  lines.each_with_index { |l, il|
    circles.each_with_index { |c, ic|
      a = square(l[0]) + 1
      b = -2*c[0] + 2*l[0]*l[1] - 2*c[1]*l[0]
      c = square(l[1]) + 2*c[1]*l[1] + square(c[0]) + square(c[1]) - square(c[2])

      delta = square(b) - 4*a*c

      unless delta <= 0
        l_has_intersection.push il
        puts "l:" + il.to_s
        c_has_intersection.push ic
        puts "c:" + ic.to_s
      end
    }
  }
  l_max = max_occurence_element l_has_intersection
  c_max = max_occurence_element c_has_intersection

  l_max > c_max ? l_max : c_max
end

def square number
  number*number
end

def max_occurence_element arr
  freq = arr.inject(Hash.new(0)) { |h,v| h[v] += 1; h }
  freq[arr.max_by { |v| freq[v] }]
end
