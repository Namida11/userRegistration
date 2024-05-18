const generatePasswordMessage = (fieldname) => {
  return `${fieldname} must be [A-Z],[1-9]!`;
};
module.exports = {
  generatePasswordMessage,
};
