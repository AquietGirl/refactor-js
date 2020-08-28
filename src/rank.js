const zones = ["china", "east-indies"];

function voyageRisk(voyage) {
  let result = 1;
  result += calculateResultByLength(voyage, 4, 2);
  result += calculateResultByLength(voyage, 8, voyage.length - 8);
  
  if (zones.includes(voyage.zone)) {
    result += 4;
  }
  return Math.max(result, 0);
}

function hasChina(voyage, history) {
  return voyage.zone === zones[0] && history.some((v) => zones[0] === v.zone);
}

function calculateResultByLength(obj, length, result) {
  return obj.length > length ? result : 0;
}

function captainHistoryRisk(voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += history.filter((v) => v.profit < 0).length;
  if (hasChina(voyage, history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  if (zones.includes(voyage.zone)) {
    result += 1;
  }
  if (hasChina(voyage, history)) {
    result += 3;
    result += calculateResultByLength(history, 10, 1);
    result += calculateResultByLength(voyage, 12, 1);
    result += calculateResultByLength(voyage, 18, -1);
  } else {
    result += calculateResultByLength(history, 8, 1);
    result += calculateResultByLength(voyage, 14, -1);
  }
  return result;
}

function rating(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > vr + chr * 2) {
    return "A";
  } else {
    return "B";
  }
}

module.exports = {
  rating,
};

const voyage = {
  zone: "west-indies",
  length: 10,
};
const history = [
  {
    zone: "east-indies",
    profit: 5,
  },
  {
    zone: "west-indies",
    profit: 15,
  },
  {
    zone: "china",
    profit: -2,
  },
  {
    zone: "west-africa",
    profit: 7,
  },
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
