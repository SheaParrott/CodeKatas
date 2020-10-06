-- Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

-- SQL: return results in a column named greeting

-- [Make sure you type the exact thing I wrote or the program may not execute properly]

--person table has name data
select concat('Hello, ', name, ' how are you doing today?') as greeting
from person