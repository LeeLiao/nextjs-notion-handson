import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '8737c09d277649cfae39eb8b6762f7bb',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Hands-On',
  domain: 'nextjs-notion-handson.vercel.app',
  author: 'Leeliao',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // bilibili: '576830363',
  weixin: 'wow3dhand',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/about': 'b8c7cdd5bde849dcb77311025df2a4c1',
    '/arms': '14f5528b21fc4290b58c22c18feb3ee1',
    '/designers': '572a58227ea04c94b548fa3b1ecb30c1',
    '/supporting-service': 'df0284a95bb945289fd28ec8a6a90a83',
    '/stories': '0d23287a68ae4460b74c075cfc7f83b0',
    '/help': '6bec63208fd649dd856629a2ac305da5',
    '/zh1': '869a8e0d73b9457fbb691df6bde6fc20',
    '/media': 'f4f8cc8248794640a5343c4908be3131'

  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '关于展翼',
      pageId: 'b8c7cdd5bde849dcb77311025df2a4c1'
    },
    {
      title: '义肢辅具',
      pageId: '14f5528b21fc4290b58c22c18feb3ee1'
    }
    // {
    //   title: '设计师',
    //   pageId: '572a58227ea04c94b548fa3b1ecb30c1'
    // },
    // {
    //   title: '支持服务',
    //   pageId: 'df0284a95bb945289fd28ec8a6a90a83'
    // },
    // {
    //   title: '有趣故事',
    //   pageId: '0d23287a68ae4460b74c075cfc7f83b0'
    // },
    // {
    //   title: '我要义肢',
    //   pageId: '6bec63208fd649dd856629a2ac305da5'
    // }
  ]
})
