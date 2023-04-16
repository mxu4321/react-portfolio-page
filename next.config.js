/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ❄️ added file loader
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.(png|jpe?g|gif|svg|pdf)$/i,
  //     use: [
  //       {
  //         loader: 'file-loader',
  //         options: {
  //           name: '[path][name].[ext]',
  //         },
  //       },
  //     ],
  //   });
  //   return config;

  }

module.exports = nextConfig
