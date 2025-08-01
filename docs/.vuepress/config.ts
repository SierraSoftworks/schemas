import { dirname, join } from "path"
import { defineUserConfig, PageHeader } from 'vuepress'
import { viteBundler } from "@vuepress/bundler-vite"
import { defaultTheme } from '@vuepress/theme-default'
import { path, fs } from '@vuepress/utils'

import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { seoPlugin } from "@vuepress/plugin-seo"
import { sitemapPlugin } from "@vuepress/plugin-sitemap"

function htmlDecode(input: string): string {
  return input.replace("&#39;", "'").replace("&amp;", "&").replace("&quot;", '"')
}

function fixPageHeader(header: PageHeader) {
  header.title = htmlDecode(header.title)
  header.children.forEach(child => fixPageHeader(child))
}

export default defineUserConfig({
  lang: 'en-GB',
  title: 'Sierra Softworks Schemas',
  description: 'Schema files used by Sierra Softworks tools, and their documentation.',

  head: [
    ['meta', { name: "description", content: "Schema files used by Sierra Softworks tools, and their documentation." }],
    ['link', { rel: 'icon', href: 'https://cdn.sierrasoftworks.com/logos/icon_small.ico' }],
    ["script", {
        defer: "",
        src: "https://analytics.sierrasoftworks.com/script.js",
    }],
  ],

  bundler: viteBundler(),

  extendsPage(page, app) {
    const fixedHeaders = page.headers || []
    fixedHeaders.forEach(header => fixPageHeader(header))

    page.headers = fixedHeaders
  },

  async onPrepared(app) {
    const srcDir = join(dirname(dirname(__dirname /* .vuepress */) /* docs */) /* $repo */, "src")
    await fs.copy(srcDir, app.dir.public(), {
      overwrite: true,
      filter: f => !path.basename(f).startsWith("test.")
    })
  },

  theme: defaultTheme({
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
          text: "Schemas",
          children: [
            '/schemas.md'
          ]
        },
        {
          text: "Config",
          children: [
            '/git-tool/README.md',
            '/wkd/README.md',
          ]
        },
        {
          text: "APIs",
          children: [
            '/bender/README.md',
            '/rex/README.md',
            '/roadmap/README.md',
          ]
        }
      ]
    }
  }),

  plugins: [
    googleAnalyticsPlugin({ id: "G-WJQ1PVYVH0" }),
    seoPlugin({
      hostname: "https://schemas.sierrasoftworks.com",
      author: {
        name: "Sierra Softworks",
        url: "https://sierrasoftworks.com"
      },
    }),
    sitemapPlugin({
      hostname: "https://schemas.sierrasoftworks.com",
      changefreq: "weekly",
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ]
})
