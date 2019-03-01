let valids = {
  lessThan(value1, value2) {
    return Number(value1) < Number(value2);
  },
  greaterThan(value1, value2) {
    return Number(value1) > Number(value2);
  },
  equal(value1, value2) {
    return value1 == value2;
  }
};
export default valids;
