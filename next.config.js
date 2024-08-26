// next.config.js
module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/landingpage',
          permanent: true, // This makes the redirect a 308 Permanent Redirect
        },
      ]
    },
  }
  