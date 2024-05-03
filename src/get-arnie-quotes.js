const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  const results = await Promise.all(
    urls.map(async (url) => {
      const response = await httpGet(url);
      const { body, status } = response;
      const parsedBody = JSON.parse(body);
      if (status === 200) {
        return { "Arnie Quote": parsedBody.message };
      } else {
        return { FAILURE: parsedBody.message };
      }
    })
  );
  return results;
};

module.exports = {
  getArnieQuotes,
};
