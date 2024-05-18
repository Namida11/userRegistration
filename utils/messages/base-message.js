const generateNotNullMessage = (fieldname) => {
  return `${fieldname} can not be empty`;
};

const generateMinAndMaxLength = (fieldname, min, max) => {
  return `${fieldname} between ${min} and ${max}`;
};

const generateExsistMessage = (fieldname) => {
  return `${fieldname} already is exsist!`;
};

module.exports = {
  generateNotNullMessage,
  generateMinAndMaxLength,
  generateExsistMessage,
};
