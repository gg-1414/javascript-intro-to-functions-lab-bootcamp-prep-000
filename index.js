function shout(string) {
  return string.toUpperCase()
}

shout('hello')

function whisper(string) {
  return string.toLowerCase()
}

whisper('HELLO')

function logShout(string) {
  console.log(`${string}`.toUpperCase())
}

var spy = 'hello' 
spy == logShout(spy)
spy = 'HELLO'
logShout(spy)

function logWhisper(string) {
  console.log(`${string}`.toLowerCase())
}

logWhisper(spy)

