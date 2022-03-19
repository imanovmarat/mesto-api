module.exports = (err) => {
  const errorList = Object.keys(err);
  const messageList = errorList.map((item) => err[item].properties.message);
  return messageList.join(', ');
};
