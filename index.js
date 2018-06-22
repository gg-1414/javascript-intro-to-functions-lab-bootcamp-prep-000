function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(`${string}`.toUpperCase())
}

shout('whats up');
whisper('WHADDUP GRAMMY');
logShout('does this work');