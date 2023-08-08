import{_ as s,v as a,b as n,R as l}from"./chunks/framework.bc760d84.js";const A=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"guide/quickstart.md","filePath":"guide/quickstart.md"}'),e={name:"guide/quickstart.md"},p=l(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><h2 id="环境支持" tabindex="-1">环境支持 <a class="header-anchor" href="#环境支持" aria-label="Permalink to &quot;环境支持&quot;">​</a></h2><p>Etu Design 可以在支持 ES2018 和 ResizeObserver 的浏览器上运行</p><div class="vp-table__container"><table><thead><tr><th style="text-align:left;">Edge</th><th style="text-align:left;">Firefox</th><th style="text-align:left;">Chrome</th><th style="text-align:left;">Safari</th></tr></thead><tbody><tr><td style="text-align:left;">&gt;=79</td><td style="text-align:left;">&gt;=78</td><td style="text-align:left;">&gt;=64</td><td style="text-align:left;">&gt;=12</td></tr></tbody></table></div><h2 id="版本" tabindex="-1">版本 <a class="header-anchor" href="#版本" aria-label="Permalink to &quot;版本&quot;">​</a></h2><p>lyy-utils 有望进一步开发迭代</p><h2 id="使用包管理器" tabindex="-1">使用包管理器 <a class="header-anchor" href="#使用包管理器" aria-label="Permalink to &quot;使用包管理器&quot;">​</a></h2><p>我们建议您使用包管理器（如 <code>NPM</code>、<code>Yarn</code> 或 <code>pnpm</code>）安装 <code>lyy-utils</code>，然后您就可以使用打包工具，例如 <code>Vite</code> 或 <code>webpack</code>等</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;"># 选择一个你喜欢的包管理器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># NPM</span></span>
<span class="line"><span style="color:#80A665;">$</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">install</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">lyy-utils</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">--save</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># Yarn</span></span>
<span class="line"><span style="color:#80A665;">$</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">yarn</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">lyy-utils</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;"># pnpm</span></span>
<span class="line"><span style="color:#80A665;">$</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">pnpm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">install</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">etu-design</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># 选择一个你喜欢的包管理器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># NPM</span></span>
<span class="line"><span style="color:#59873A;">$</span><span style="color:#393A34;"> </span><span style="color:#B56959;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">install</span><span style="color:#393A34;"> </span><span style="color:#B56959;">lyy-utils</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--save</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># Yarn</span></span>
<span class="line"><span style="color:#59873A;">$</span><span style="color:#393A34;"> </span><span style="color:#B56959;">yarn</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#B56959;">lyy-utils</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;"># pnpm</span></span>
<span class="line"><span style="color:#59873A;">$</span><span style="color:#393A34;"> </span><span style="color:#B56959;">pnpm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">install</span><span style="color:#393A34;"> </span><span style="color:#B56959;">etu-design</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>如果您的网络环境不好，建议使用相关镜像服务 <code>cnpm</code> 或 中国 <code>NPM</code> 镜像。</p><h2 id="完整引入" tabindex="-1">完整引入 <a class="header-anchor" href="#完整引入" aria-label="Permalink to &quot;完整引入&quot;">​</a></h2><p>如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。</p><div class="language-JavaScript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// main.js</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// main.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,13),t=[p];function o(r,c,i,d,y,h){return a(),n("div",null,t)}const b=s(e,[["render",o]]);export{A as __pageData,b as default};
