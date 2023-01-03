// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }

  return array;
}

export default function lottery(list, options) {
  options = { size: 1, unique: true, ...options };
  console.log('Original List:', list);

  if (options.unique) {
    list = [...new Set(list)];
  }

  if (options.excludes && options.excludes.length > 0) {
    list = list.filter((item) => !options.excludes.includes(item));
  }

  console.log('Shuffle list 10 times ...');
  // Shuffle list 10 times
  for (let i = 0; i < 10; i++) {
    list = shuffle(list);
  }

  console.log('Shuffled List:', list);

  return list.slice(0, options.size);
}
