function getRandomFromArray(array) {
  if (array.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  const randomObject = array[randomIndex];
  const item = randomObject['poster_path'];

  return item;
}

export default getRandomFromArray;
