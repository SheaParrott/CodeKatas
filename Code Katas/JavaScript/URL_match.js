process.stdin.resume()
process.stdin.setEncoding('utf8')

var stdin = ''
process.stdin
  .on('data', function(chunk) {
    stdin += chunk
    stdin = stdin.trim()
    var regex = new RegExp(
      '^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?'
    )

    if (stdin.match(regex)) {
      stdin = 'True \n'
    } else {
      stdin = 'False \n'
    }
  })
  .on('end', function() {
    var lines = stdin.trim().split('\n')
    for (var i = 0; i < lines.length; i++) {
      process.stdout.write(lines[i])
    }
  })
