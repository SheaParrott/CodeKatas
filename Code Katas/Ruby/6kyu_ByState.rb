# Given a string with friends to visit in different states:

# ad3="John Daggett, 341 King Road, Plymouth MA
# Alice Ford, 22 East Broadway, Richmond VA
# Sal Carpenter, 73 6th Street, Boston MA"
# we want to produce a result that sorts the names by state
#  and lists the name of the state followed by the name of 
#  each person residing in that state (people's names sorted). 
#  When the result is printed we get:

# Massachusetts
# .....^John Daggett 341 King Road Plymouth Massachusetts
# .....^Sal Carpenter 73 6th Street Boston Massachusetts
# ^Virginia
# .....^Alice Ford 22 East Broadway Richmond Virginia
# Spaces not being always well seen, in the above result 
# ^ means a white space.

# Not printed, the resulting string will be:

# "Massachusetts\n..... John Daggett 341 King Road Plymouth 
# Massachusetts\n..... Sal Carpenter 73 6th Street Boston
#  Massachusetts\n Virginia\n..... Alice Ford 22 East Broadway 
#  Richmond Virginia"
# Notes
# There can be a blank last line in the given string of adresses.
# The tests only contains CA, MA, OK, PA, VA, AZ, ID, IN for states.
# You can see another example in the "Sample tests".
# States
# For the lazy ones:

# 'AZ': 'Arizona',
# 'CA': 'California',
# 'ID': 'Idaho',
# 'IN': 'Indiana',
# 'MA': 'Massachusetts',
# 'OK': 'Oklahoma',
# 'PA': 'Pennsylvania',
# 'VA': 'Virginia'

def bystate(str)
  arr = str.to_s.delete(',').split("\n").sort
  answer = []
  lastState = ''
  lookup = [
  ['AZ','Arizona'],
  ['CA', 'California'],
  ['ID', 'Idaho'],
  ['IN', 'Indiana'], 
  ['MA', 'Massachusetts'],
  ['OK', 'Oklahoma'], 
  ['PA', 'Pennsylvania'],
  ['VA', 'Virginia']]
  lookup.each do |abbreviation, name|
    while arr.find { |e| /#{abbreviation}/ =~ e } 
      foundString = arr.find { |e| (/#{abbreviation}/ =~ e)}
      foundReplaced = "\r\n..... " + foundString.gsub(/#{abbreviation}/, "") + name
      
      if lastState == ''
        answer.concat(Array.new(1, (name + foundReplaced)))
      elsif lastState == name
        answer.concat(Array.new(1, (foundReplaced)))
      else
        answer.concat(Array.new(1, ("\r\n " + name + "\r\n..... " + foundString.gsub(/#{abbreviation}/, name))))
      end
      arr = arr.reject{|i| i == foundString}
      lastState = name
    end
  end
  answer.join("")
end


# Not many votes on this one. However, this had a vote of 1
# for best practice

def subst(str)
  s = [" MA", " VA", " OK", " PA", " CA", " AZ", " ID", " IN"]
  st = [", Massachusetts", ", Virginia", ", Oklahoma", ", Pennsylvania", ", California", ", Arizona", ", Idaho", ", Indiana"]
  i = 0; a = str
  while (i < s.length) do
      a = a.gsub(s[i], st[i])
      i += 1
  end
  a
end
def bystate(str)
  a = subst(str)
  arr = a.split("\n")
  narr= []
  arr.each { |x| y = x.split(","); narr << [y[3], x] }
  narr = narr.sort
  i = 0; last = ""; res= ""
  while (i < narr.length) do
      e = narr[i][0]
      if (e != last) then
          last = e
          res += "\r\n" + e + "\r\n..... " + narr[i][1].split(",").join("")
      else
          res += "\r\n..... " + narr[i][1].split(",").join("")
      end
      i += 1
  end
  res[3..-1]
end