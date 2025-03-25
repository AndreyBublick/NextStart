// next.config.js
module.exports = {
  compiler: {
    styledComponents: true, // Если используете styled-components
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        pathname: '/api/character/**',
        port: '',
        search: '',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      "@babel/runtime/regenerator": require.resolve("@babel/runtime/regenerator")
    };
    return config;
  }
}