import { App, defineUserConfig, PageHeader } from 'vuepress'
import { DefaultThemeOptions } from '@vuepress/theme-default'

function htmlDecode(input: string): string {
  return input.replace("&#39;", "'").replace("&amp;", "&").replace("&quot;", '"')
}

function fixPageHeader(header: PageHeader) {
  header.title = htmlDecode(header.title)
  header.children.forEach(child => fixPageHeader(child))
}

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-GB',
  title: 'Sierra Softworks Schemas',
  description: 'Schema files used by Sierra Softworks tools, and their documentation.',

  head: [
    ['meta', { name: "description", content: "Schema files used by Sierra Softworks tools, and their documentation." }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  bundler: "@vuepress/bundler-vite",

  extendsPageData(page, app) {
    const fixedHeaders = page.headers || []
    fixedHeaders.forEach(header => fixPageHeader(header))

    return {
      headers: fixedHeaders,
    }
  },

  themeConfig: {
    logo: 'https://cdn.sierrasoftworks.com/logos/icon.png',

    docsRepo: "SierraSoftworks/schemas",
    repo: "SierraSoftworks/schemas",
    navbar: [
      {
        text: "Schemas",
        link: "/schemas.md"
      },
      {
        text: "Report an Issue",
        link: "https://github.com/SierraSoftworks/schemas/issues/new",
        target: "_blank"
      }
    ],

    sidebar: {
      '/': [
        {
          isGroup: true,
          text: "Schemas",
          children: [
            '/schemas.md',
            '/bender/README.md',
            '/git-tool/README.md',
            '/rex/README.md',
            '/wkd/README.md'
          ]
        }
      ]
    }
  },

  plugins: [
    ["@vuepress/plugin-google-analytics", { id: "G-WJQ1PVYVH0" }]
  ]
})