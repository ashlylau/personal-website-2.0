module.exports = {
  siteMetadata: {
    title: `Ashly Lau`,
    description: `Graduate of Imperial College London and SWE at Google.`,
    author: `ashlylau`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-144189459-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Libre Baskerville`,
          `Lato`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-embed-video",
          "gatsby-remark-images",
          `gatsby-remark-copy-linked-files`,
        {
          resolve: "gatsby-remark-embed-video",
          options: {
            // width: 800,
            // ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
            // height: 400, // Optional: Overrides optional.ratio
            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            urlOverrides: [
              {
                id: 'youtube',
                embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
              }
            ], containerClass: 'embedVideo-container', 
          }
        }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ashly Lau Portfolio`,
        short_name: `Ashly`,
        start_url: `/`,
        background_color: `#65CAE2`,
        theme_color: `#65CAE2`,
        display: `standalone`,
        icon: `src/images/logos/smiley.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
