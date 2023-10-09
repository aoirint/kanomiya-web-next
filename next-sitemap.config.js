/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://kanomiya.com',
  generateRobotsTxt: true,
  trailingSlash: true,
  output: 'export',
}
