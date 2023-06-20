// balanceSelector.js
const numberWithCommas = (x) => {
  if (typeof x === "number") {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return "";
};

export default numberWithCommas;
