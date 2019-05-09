// Description:
// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most
// creative hello world you can think of? What is a "hello world" solution you would want
// to show your friends?

// solution 1

const greet = () =>
  '01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100 00100001'
    .split(' ')
    .map(x => String.fromCharCode(parseInt(x, 2)))
    .join('')

// or, if you are not a computer? (sarcasm) Here my simple - solution 2
// prettier-ignore

const greet = () => 'hello world!'


// interesting solutions from others


// uno
// prettier-ignore


(function () { 
  var prev = 22915696;
  var modulus = Math.pow(2,32);
  var multiplier = 1664525;
  var increment = 1013904223;
  
  function setRandSeed(s) {
    prev = s;
  }
  function random() {
    prev = (multiplier * prev + increment) % modulus;  
    return prev/Math.pow(2,32);
  }
  Math.random = random;
  Math.setRandSeed = setRandSeed;
})();

function generateChar() {
  return String.fromCharCode(Math.floor(Math.random() * (91 - 65)) + 65)
}

function generateWord(length) {
  var res = ''
  for (var i = 0; i < length; i++) res += generateChar()
  return res.toLowerCase()
}

function greet() {
  var greetings = generateWord(5)
  Math.setRandSeed(18337180)
  var someone = generateWord(5)

  return greetings + ' ' + someone + '!'
}

// dos
// prettier-ignore

function greet(){
  var a=0
    var abc=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var hello = [];
    var world = [];
                    a++;    a++;  a++;a++;  a++;      a++;      a++;a--;a++;
hello.push(abc[a]); a++;    a++;  a--;      a--;      a--;      a--;    a--;
hello.push(abc[a]); a++;a++;a++;  a++;a--;  a++;      a++;      a++;    a++;
hello.push(abc[a]); a++;    a++;  a--;      a--;      a++;      a--;    a=a;
hello.push(abc[a]);  a++;    a--;  a++;a++;  a--;a++;  a--;a++;  a++;a--;a++;
hello.push(abc[a]);

           
                    a++;          a++;  a++;a++;a++;  a++;a--;a++;  a=a;      a++;a++;
world.push(abc[a]);  a--;         a--;   a--;    a--;  a--;    a--;  a--;      a--;   a=a;
world.push(abc[a]);   a++;      a++;    a++;    a--;  a--;a--;      a++;      a++;    a++;
world.push(abc[a]);    a--;a++;a--;     a--;    a--;  a--;  a++;    a--;      a--;   a--;
world.push(abc[a]);     a--;  a--;      a--;a--;a--;  a--;    a--;  a--;a++;  a=a;a--;
world.push(abc[a]);

  return hello.join("") + " " + world.join("")+"!";
}

// tres
// prettier-ignore

function greet() {

  /*
  quu..__
   $$$b  `---.__
    "$$b        `--.                          ___.---uuudP
     `$$b           `.__.------.__     __.---'      $$$$"              .
       "$b          -'            `-.-'            $$$"              .'|
         ".                                       d$"             _.'  |
           `.   /                              ..."             .'     |
             `./                           ..::-'            _.'       |
              /                         .:::-'            .-'         .'
             :                          ::''\          _.'            |
            .' .-.             .-.           `.      .'               |
            : /'$$|           .@"$\           `.   .'              _.-'
           .'|$u$$|          |$$,$$|           |  <            _.-'
           | `:$$:'          :$$$$$:           `.  `.       .-'
           :                  `"--'             |    `-.     \
          :##.       ==             .###.       `.      `.    `\
          |##:                      :###:        |        >     >
     */return "hello world!";/*     |#'     `..'`..'          `###'        x:      /     /
           \                                   xXX|     /    ./
            \                                xXXX'|    /   ./
            /`-.                                  `.  /   /
           :    `-  ...........,                   | /  .'
           |         ``:::::::'       .            |<    `.
           |             ```          |           x| \ `.:``.
           |                         .'    /'   xXX|  `:`M`M':.
           |    |                    ;    /:' xXXX'|  -'MMMMM:'
           `.  .'                   :    /:'       |-'MMMM.-'
            |  |                   .'   /'        .'MMM.-'
            `'`'                   :  ,'          |MMM<
              |                     `'            |tbap\
               \                                  :MM.-'
                \                 |              .''
                 \.               `.            /
                  /     .:::::::.. :           /
                 |     .:::::::::::`.         /
                 |   .:::------------\       /
                /   .''               >::'  /
                `',:                 :    .'
                                      
  */
  }

// cuatro
// prettier-ignore

function greet() {
    return brainfuck('[-]>[-]<>++++++++++[<++++++++++>-]<++++.---.>+++[<+++>-]<--..+++.>+++++++++[<--------->-]<++.>+++++++++[<+++++++++>-]<++++++.>+++[<--->-]<+.+++.>++[<-->-]<--.>+++[<--->-]<+.>++++++++[<-------->-]<---.');
  }

function brainfuck(i) {
  var d = [],
    o = [],
    p = 0,
    c = 0,
    l = i.length
  while (c !== l) {
    !d[p] && (d[p] = 0)
    switch (i[c]) {
      case '<':
        p--
        break
      case '>':
        p++
        break
      case '-':
        d[p]--
        break
      case '+':
        d[p]++
        break
      case '[':
        while (d[p] === 0 && i[++c] !== ']');
        break
      case ']':
        while (d[p] !== 0 && i[--c] !== '[');
        break
      case '.':
        o.push(String.fromCharCode(d[p]))
        break
    }
    c++
  }

  return o.join('')
}

// cinco
// prettier-ignore

function greet() {
    var morse = { 
      '': ' ',
      '-.-.--': '!',
      '.-..-.': '"',
      '...-..-': '$',
      '.-...': '&',
      '.----.': '\'',
      '-.--.': '(',
      '-.--.-': ')',
      '.-.-.': '+',
      '--..--': ',',
      '-....-': '-',
      '.-.-.-': '.',
      '-..-.': '/',
      '-----': '0',
      '.----': '1',
      '..---': '2',
      '...--': '3',
      '....-': '4',
      '.....': '5',
      '-....': '6',
      '--...': '7',
      '---..': '8',
      '----.': '9',
      '---...': ':',
      '-.-.-.': ';',
      '-...-': '=',
      '..--..': '?',
      '.--.-.': '@',
      '.-': 'a',
      '-...': 'b',
      '-.-.': 'c',
      '-..': 'd',
      '.': 'e',
      '..-.': 'f',
      '--.': 'g',
      '....': 'h',
      '..': 'i',
      '.---': 'j',
      '-.-': 'k',
      '.-..': 'l',
      '--': 'm',
      '-.': 'n',
      '---': 'o',
      '.--.': 'p',
      '--.-': 'q',
      '.-.': 'r',
      '...': 's',
      '-': 't',
      '..-': 'u',
      '...-': 'v',
      '.--': 'w',
      '-..-': 'x',
      '-.--': 'y',
      '--..': 'z',
      '..--.-': '_',
      '...---...': 'SOS'
    };
    var arr = '.... . .-.. .-.. ---  .-- --- .-. .-.. -.. -.-.--'.split(' ');
    var res = [];
    for (var i = 0; i < arr.length; i++) {
      for (var key in morse) {
        if(arr[i] === key){
          res.push(morse[key]);
        }
      }
    }
    return res.join('').trim();
  }
