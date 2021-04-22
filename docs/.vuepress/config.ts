import {dirname, join} from "path"
import * as copydir from "copy-dir"
import { defineUserConfig, PageHeader, DefaultThemeOptions } from 'vuepress-vite'

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

  bundler: '@vuepress/bundler-vite',

  head: [
    ['meta', { name: "description", content: "Schema files used by Sierra Softworks tools, and their documentation." }],
    ['link', { rel: 'icon', href: 'https://cdn.sierrasoftworks.com/logos/icon_small.ico' }],
  ],

  extendsPageData(page, app) {
    const fixedHeaders = page.headers || []
    fixedHeaders.forEach(header => fixPageHeader(header))

    return {
      headers: fixedHeaders,
    }
  },

  onPrepared(app) {
    const srcDir = join(dirname(dirname(__dirname /* .vuepress */) /* docs */) /* $repo */, "src")
    const publicDir = join(__dirname, "public")
    copydir.sync(srcDir, publicDir, {
      filter(stat, filePath, fileName) {
        return !fileName.startsWith("test.")
      }
    })
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
            '/schemas.md'
          ]
        },
        {
          isGroup: true,
          text: "Config",
          children: [
            '/git-tool/README.md',
            '/wkd/README.md',
          ]
        },
        {
          isGroup: true,
          text: "APIs",
          children: [
            '/bender/README.md',
            '/rex/README.md',
            '/roadmap/README.md',
          ]
        }
      ]
    }
  },

  plugins: [
    ["@vuepress/plugin-google-analytics", { id: "G-WJQ1PVYVH0" }]
  ]
})