function distanceFromHqInBlocks(blockNumbr) {
  let hq = 42;
  if (blockNumbr >= 42) {
    return blockNumbr - hq;
  } else {
    return hq - blockNumbr;
  }
}

function distanceFromHqInFeet(blockNumbr) {
  let hq = 42;
  if (blockNumbr >= 42) {
    return (blockNumbr - hq) * 264;
  } else {
    return (hq - blockNumbr) * 264;
  }
}

function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock > endBlock) {
    return (startBlock - endBlock) * 264;
  } else {
    return (endBlock - startBlock) * 264;
  }
}

function calculatesFarePrice(startBlock, endBlock) {
  let travelledInFt = Math.abs(startBlock - endBlock) * 264;

  if (travelledInFt <= 400) {
    return 0;
  } else if (travelledInFt >= 401 && travelledInFt <= 2000) {
    return (travelledInFt - 400) * 0.02;
  } else if (travelledInFt > 2000 && travelledInFt <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
