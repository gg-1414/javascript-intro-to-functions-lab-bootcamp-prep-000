function shout(string) {
  return string.toUpperCase();
}

// shout('hello');

function whisper(string) {
  return string.toLowerCase();
}

// whisper('HELLO');

function logShout(string) {
  console.log(`${string}`.toUpperCase());
}

const spy = 'hello';
logShout(spy);
spy == 'HELLO';

function logWhisper(string) {
  console.log(`${string}`.toLowerCase());
}

logWhisper(spy);

