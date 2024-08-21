// next.config.js
module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/login',
          permanent: true, // This makes the redirect a 308 Permanent Redirect
        },
      ]
    },
  }
  