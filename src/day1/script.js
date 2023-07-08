'use strict';

/*
 * Coding Challenge:
 * Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game.
 * The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
 * Your tasks:
 * 1. Create an array 'events' of the different game events that happened (no duplicates)
 * 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
 * 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
 * 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽ GOAL
 * GOOD LUCK 😀
 */

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
console.log(gameEvents);
/*
Output:
    Map(11) {
  17 => '⚽ GOAL',
  36 => '🔁 Substitution',
  47 => '⚽ GOAL',
  61 => '🔁 Substitution',
  64 => '🔶 Yellow card',
  69 => '🔴 Red card',
  70 => '🔁 Substitution',
  72 => '🔁 Substitution',
  76 => '⚽ GOAL',
  80 => '⚽ GOAL',
  92 => '🔶 Yellow card'
}
 */

//  Task 1
let gameEventSet = new Set();
for (let i = 0; i <= 90; i++) {
  if (gameEvents.has(i)) {
    gameEventSet.add(gameEvents.get(i));
  }
}
console.log(gameEventSet);
//  Output: Set(4) { '⚽ GOAL', '🔁 Substitution', '🔶 Yellow card', '🔴 Red card' }

const events = [...gameEventSet];
console.log(events);
//  Output: [ '⚽ GOAL', '🔁 Substitution', '🔶 Yellow card', '🔴 Red card' ]

//  Task 2
if (gameEvents.has(64) && gameEvents.get(64) === '🔶 Yellow card') {
  gameEvents.delete(64);
}
console.log(gameEvents);
/*
Output:
    Map(10) {
  17 => '⚽ GOAL',
  36 => '🔁 Substitution',
  47 => '⚽ GOAL',
  61 => '🔁 Substitution',
  69 => '🔴 Red card',
  70 => '🔁 Substitution',
  72 => '🔁 Substitution',
  76 => '⚽ GOAL',
  80 => '⚽ GOAL',
  92 => '🔶 Yellow card'
}
 */

//  Task 3
const getEventAvg = function (map) {
  let eventArr = [];
  for (let i = 0; i <= 90; i++) {
    if (map.has(i)) {
      eventArr.push(i);
    }
  }
  const numEvent = eventArr.length;
  return `An event happened, on average, every ${numEvent} minutes.`;
};

console.log(getEventAvg(gameEvents));
//  Output: An event happened, on average, every 9 minutes.

//  Task 4
for (let i = 0; i <= 90; i++) {
  const matchHalf = i <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  if (gameEvents.has(i) === true)
    console.log(`${matchHalf} ${i}:  ${gameEvents.get(i)}`);
}
/*
Output:
    [FIRST HALF] 17:  ⚽ GOAL
    [FIRST HALF] 36:  🔁 Substitution
    [SECOND HALF] 47:  ⚽ GOAL
    [SECOND HALF] 61:  🔁 Substitution
    [SECOND HALF] 69:  🔴 Red card
    [SECOND HALF] 70:  🔁 Substitution
    [SECOND HALF] 72:  🔁 Substitution
    [SECOND HALF] 76:  ⚽ GOAL
    [SECOND HALF] 80:  ⚽ GOAL
 */
