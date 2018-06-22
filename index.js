function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(`${string}`.toUpperCase())
  
}

const spy = 'hello' 
logShout(spy)
spy == 'HELLO'
logShout(spy)