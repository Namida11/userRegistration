const generateUniqueId = (data) => {
  if (data.length === 0) return "1";

  const ids = data.map((x) => x.id);

  let maxId = Math.max(...ids);
  return (maxId + 1).toString();
};

module.exports = generateUniqueId;
