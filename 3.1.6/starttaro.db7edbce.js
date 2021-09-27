import{e as s,o as a,G as n}from"./vendor.9cc7b6f2.js";const p={class:"markdown-body"},l=[n('<h1>小程序开发</h1><h2>介绍</h2><ul><li><p>作为一款具有京东风格的组件库，我们一直致力于用心打造更符合开发者体验的组件库。NutUI 3.0 上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。</p></li><li><p>为了给开发者提供更高效便捷的开发方式，NutUI 和 Taro 合力，现已可以用 NutUI 开发小程序了，NutUI 提供了 50+ 组件涵盖了日常业务开发使用的大部分组件。</p></li><li><p>二者的结合，不仅可以让开发者一处代码，多端运行，畅快自如地开发小程序。更可以在开发过程中，使用到更美观、更便捷、组件更丰富的组件库。我们将 NutUI 和 Taro 更完美地接合到一起，Taro 官方将 NutUI 作为 Vue技术栈的推荐组件库。现在开发者将可以使用 NutUI 无缝开发 H5 和多端小程序。</p></li></ul><h2>预览</h2><blockquote><p>微信扫描下方二维码体验，体验组件库示例 , Demo 源码 <a href="https://github.com/jdf2e/nutui-demo/tree/master/taro">https://github.com/jdf2e/nutui-demo/tree/master/taro</a></p></blockquote><img width="200" src="https://storage.360buyimg.com/jdc-article/gh_f2231eb941be_258.jpg"><h2>安装</h2><ul><li>通过 Npm 或 Yarn 安装</li></ul><h3>安装 Taro 脚手架</h3><pre><code class="language-bash"><span class="hljs-comment"># 使用 npm 安装 CLI</span>\nnpm install -g @tarojs/cli\n\n<span class="hljs-comment"># OR 使用 yarn 安装 CLI</span>\nyarn global add @tarojs/cli\n\n<span class="hljs-comment"># OR 安装了 cnpm，使用 cnpm 安装 CLI</span>\ncnpm install -g @tarojs/cli\n</code></pre><blockquote><p>值得一提的是，如果安装过程出现sass相关的安装错误，请在安装 mirror-config-china 后重试。</p></blockquote><pre><code class="language-bash">npm install -g mirror-config-china\n</code></pre><h3>检查是否安装成功</h3><pre><code class="language-bash">taro -v\n</code></pre><h3>项目初始化</h3><p>使用命令创建模板：</p><pre><code class="language-bash">taro init myApp\n</code></pre><h3>按照下方图片依次选择，选择 Vue3 + NutUI 模板</h3><img src="https://storage.360buyimg.com/jdc-article/taro.jpg"><h3>NPM 使用示例</h3><blockquote><p>注意：这种方式将会导入所有组件，打包文件大小会很大</p></blockquote><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;\n<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./App.vue&quot;</span>;\n<span class="hljs-keyword">import</span> NutUI <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@nutui/nutui-taro&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@nutui/nutui-taro/dist/style.css&quot;</span>;\ncreateApp(App).use(NutUI);\n</code></pre><h4>推荐使用按需加载</h4><p><a href="https://github.com/ant-design/babel-plugin-import">babel-plugin-import</a> 是一款 babel 插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。</p><h5>安装插件</h5><pre><code class="language-bash">npm install babel-plugin-import --save-dev\n</code></pre><p>在 <code>.babelrc</code> 或 <code>babel.config.js</code> 中添加配置：</p><pre><code class="language-javascript">{\n  <span class="hljs-comment">// ...</span>\n  <span class="hljs-attr">plugins</span>: [\n    [\n      <span class="hljs-string">&quot;import&quot;</span>,\n      {\n        <span class="hljs-string">&quot;libraryName&quot;</span>: <span class="hljs-string">&quot;@nutui/nutui&quot;</span>,\n        <span class="hljs-string">&quot;libraryDirectory&quot;</span>: <span class="hljs-string">&quot;dist/packages/_es&quot;</span>,\n        <span class="hljs-string">&quot;camel2DashComponentName&quot;</span>: <span class="hljs-literal">false</span>\n      },\n      <span class="hljs-string">&#39;nutui3-vue&#39;</span>\n    ],\n    [\n      <span class="hljs-string">&quot;import&quot;</span>,\n      {\n        <span class="hljs-string">&quot;libraryName&quot;</span>: <span class="hljs-string">&quot;@nutui/nutui-taro&quot;</span>,\n        <span class="hljs-string">&quot;libraryDirectory&quot;</span>: <span class="hljs-string">&quot;dist/packages/_es&quot;</span>,\n        <span class="hljs-string">&quot;camel2DashComponentName&quot;</span>: <span class="hljs-literal">false</span>\n      },\n      <span class="hljs-string">&#39;nutui3-taro&#39;</span>\n    ]\n  ]\n}\n</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;\n<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./App.vue&quot;</span>;\n<span class="hljs-keyword">import</span> { Button, Cell, Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@nutui/nutui-taro&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@nutui/nutui-taro/dist/style.css&quot;</span>;\ncreateApp(App).use(Button).use(Cell).use(Icon);\n</code></pre><h4>定制化主题使用</h4><p>首先需要在 <strong>app.ts</strong> 文件中配置 使用 scss 样式文件如：</p><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;\n<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./App.vue&quot;</span>;\n<span class="hljs-keyword">import</span> { Button, Cell, Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@nutui/nutui-taro&quot;</span>;\n<span class="hljs-comment">// 定制化主题必须使用 scss </span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@nutui/nutui-taro/dist/styles/themes/default.scss&#39;</span>;\ncreateApp(App).use(Button).use(Cell).use(Icon);\n</code></pre><p>创建定制化主题样式文件 <code>assets/styles/custom_theme.scss</code> ，样式变量覆盖表参考 <a href="https://github.com/jdf2e/nutui/blob/next/src/packages/styles/variables.scss">nutui variables</a></p><pre><code class="language-scss"><span class="hljs-variable">$primary-color</span>: <span class="hljs-number">#478EF2</span>;\n<span class="hljs-variable">$primary-color-end</span>: <span class="hljs-number">#496AF2</span>;\n</code></pre><p>然后需要在 <code>config/index.js</code> 文件中配置 <code>scss</code> 文件全局覆盖如：</p><pre><code class="language-javascript"><span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;path&#39;</span>);\n<span class="hljs-keyword">const</span> config = {\n  <span class="hljs-attr">deviceRatio</span>: {\n    <span class="hljs-number">640</span>: <span class="hljs-number">2.34</span> / <span class="hljs-number">2</span>,\n    <span class="hljs-number">750</span>: <span class="hljs-number">1</span>,\n    <span class="hljs-number">828</span>: <span class="hljs-number">1.81</span> / <span class="hljs-number">2</span>,\n    <span class="hljs-number">375</span>: <span class="hljs-number">2</span> / <span class="hljs-number">1</span>\n  },\n  <span class="hljs-attr">sass</span>: {\n    <span class="hljs-attr">resource</span>: [\n        path.resolve(__dirname, <span class="hljs-string">&#39;..&#39;</span>, <span class="hljs-string">&#39;src/assets/styles/custom_theme.scss&#39;</span>)\n    ]\n  },\n  <span class="hljs-comment">// ...</span>\n</code></pre><p><code>vue</code> 文件中使用查看效果</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">view</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> &gt;</span>nutui<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</code></pre>',38)],t={setup:(n,{expose:t})=>(t({frontmatter:{}}),(n,t)=>(a(),s("div",p,l)))};export{t as default};