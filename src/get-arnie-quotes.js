const { httpGet } = require("./mock-http-interface");

const fetchListOfUrls = async (urls) => {
  return urls?.map(async (url) => {
    const response = await httpGet(url);
    const { body, status } = response;
    const parseBody = JSON.parse(body);
    if (status === 200) {
      return { "Arnie Quote": parseBody.message };
    } else {
      return { FAILURE: parseBody.message };
    }
  });
};

const getArnieQuotes = async (urls) => {
  return (await Promise.all(await fetchListOfUrls(urls))) ?? [];
};

module.exports = {
  getArnieQuotes,
};
