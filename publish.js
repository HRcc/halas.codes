const axios = require('axios')

const siteName = 'halas.codes'
const authToken = process.env.NETLIFY_ACCESS_TOKEN;

(async function () {
  try {
    let options = { headers: { Authorization: `Bearer ${authToken}` } }

    let res = await axios.get(`https://api.netlify.com/api/v1/sites/${siteName}/deploys`, options)

    const latestDeployId = res.data[0].id

    console.log(`Publishing build ${latestDeployId}`)

    res = await axios.post(`https://api.netlify.com/api/v1/sites/${siteName}/deploys/${latestDeployId}/restore`, {}, options)

    console.log(res.statusText)
    process.exit(0)
  } catch (err) {
    console.error('Unable to publish the release: ' + err.message)
    process.exit(1)
  }
})()
