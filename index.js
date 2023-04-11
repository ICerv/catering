const justFood = (numberOfPeople) => {
  return `catering od Just Food pro ${numberOfPeople} lidi za ${Math.round(numberOfPeople * 100)}Kč`
}
// console.log(justFood(10));


const yourMama = (numberOfPeople) => {
  return `catering od Your Mama pro ${numberOfPeople} lidi za ${Math.round(numberOfPeople * 1000)}Kč`
}

// console.log(yourMama(10));

const flavourHaven = (numberOfPeople) => {
  return `catering od Flavour Haven pro ${numberOfPeople} lidi za ${Math.round(numberOfPeople * 3000)}Kč`
}

// console.log(flavourHaven(10));

const createEvent = (title, numberOfPeople, catering) => {
  return `
  Událost ${title} s ${catering(numberOfPeople)}
  `;
}

document.body.innerHTML += createEvent(
  'Inaugurace prezidenta', 100, flavourHaven
);