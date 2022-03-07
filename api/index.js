const axios = require('axios').default

module.exports = async(req, res) => {

  const one = await axios.request({
    url: 'https://api.isconte.com/ones/random',
    method: 'get',
    headers: {
      'x-user-agent': 'conte-world-f',
    },
  })

  res.status(200).json(one.data.data);
};