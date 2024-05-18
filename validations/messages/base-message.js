const generateNotNullMessage = (fieldname) => {
  return `${fieldname} can not be empty`;
};

const generateMinAndMaxLength = (fieldname, min, max) => {
  return `${fieldname} between ${min} and ${max}`;
};

module.exports = {
  generateNotNullMessage,
  generateMinAndMaxLength,
};
