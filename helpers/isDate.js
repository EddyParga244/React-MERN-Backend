const isDate = (value) => {
  if (!value) {
    return false;
  }

  if (!isNaN(value)) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  isDate,
};
