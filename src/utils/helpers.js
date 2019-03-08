function convertUnixTimeCode(timestamp) {
  return new Date(timestamp * 1000).toLocaleTimeString('en-US');
}

export default {
  convertUnixTimeCode
};
