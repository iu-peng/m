// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "爱上豆腐脑",
  tagline: "还要吃油条", // 标题下面的字
  url: "https://iu-peng.github.io",
  baseUrl: "/m/", // 这里看自己需要添加，如果添加为/win/  访问主页就是 https://iu-peng.github.io/win/
  onBrokenLinks: "warn", // 只有部署的时候生效
  onBrokenMarkdownLinks: "warn", // 只有部署的时候生效
  favicon: "img/favicon.ico", // 网页标签上面的小logo
  // GIT_PASS=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

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "iu-peng", // 这里是你github的名字
  projectName: "", // 这个是你要部署到的github的项目名字 可不写
  trailingSlash: false,
  deploymentBranch: "master",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    "docusaurus-plugin-sass",
    // [
    //   require.resolve("@cmfcmf/docusaurus-search-local"),
    //   {
    //     indexDocs: true,
    //     indexDocSidebarParentCategories: 0,
    //     indexBlog: true,
    //     indexPages: false,
    //     language: ["en", "zh"],
    //     style: undefined,
    //     maxSearchResults: 8,

    //     // lunr.js-specific settings
    //     lunr: {
    //       tokenizerSeparator: /[\s\-]+/,
    //       b: 0.75,
    //       k1: 1.2,
    //       titleBoost: 5,
    //       contentBoost: 1,
    //       tagsBoost: 3,
    //       parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
    //     },
    //   },
    // ],
  ],
  // 中文搜索 不太准
  // themes: [
  //   [
  //     require.resolve("@easyops-cn/docusaurus-search-local"),
  //     {
  //       // ... Your options.
  //       // `hashed` is recommended as long-term-cache of index file is possible.
  //       hashed: true,
  //       indexPages: true,
  //       highlightSearchTermsOnTargetPage: true,
  //       explicitSearchResultPath: true,
  //       removeDefaultStemmer: true,
  //       searchResultLimits: 20, // 搜索数量
  //       // For Docs using Chinese, The `language` is recommended to set to:
  //       // ```
  //       language: ["zh"],
  //       // ```
  //     },
  //   ],
  // ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routeBasePath: "/", // 把文档放在网站根部
          sidebarPath: require.resolve("./sidebars.js"),
          // breadcrumbs: false, // 面包屑导航
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "豆腐爱上脑",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "/category/总结类目",
          //   position: "right",
          //   label: "👨🏻‍🌾 文档",
          // },
          { to: "/blog", label: "👨🏻‍🎓 博客", position: "right" },
          // {
          //   to: "/life",
          //   label: "👨🏻‍🎓 生活",
          //   position: "right",
          //   items: [
          //     { label: "菜单", to: "/life" },
          //     { label: "运动", to: "/sport" },
          //   ],
          // },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      algolia: {
        appId: "6U5JBNCE9B",
        apiKey: "9ddac23efb1ae0b2eb2375bb80101ae9",
        indexName: "iu-peng",
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "markdown",
      },
    }),
};

module.exports = config;
