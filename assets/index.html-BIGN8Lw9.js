import{_ as t,e as s,j as a,o as n}from"./app-C2qXDXZv.js";const i={};function o(r,e){return n(),s("div",null,e[0]||(e[0]=[a(`<h2 id="daemon常用参数修改" tabindex="-1"><a class="header-anchor" href="#daemon常用参数修改"><span>daemon常用参数修改</span></a></h2><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>vim /etc/docker/daemon.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改Cgroup驱动为systemd、修改镜像源、设置代理服务器</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;],</span></span>
<span class="line"><span>  &quot;registry-mirrors&quot;: [&quot;https://quay.io/repository &quot;],</span></span>
<span class="line"><span>  &quot;proxies&quot;: {</span></span>
<span class="line"><span>    &quot;http_proxy&quot;: &quot;http://x.x.x.x:xxx&quot;,</span></span>
<span class="line"><span>    &quot;https_proxy&quot;: &quot;https://x.x.x.x:xxx&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const d=t(i,[["render",o],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/%E5%AE%B9%E5%99%A8/3mfac7xr/","title":"docker参数","lang":"zh-CN","frontmatter":{"title":"docker参数","createTime":"2025/02/28 12:43:02","permalink":"/容器/3mfac7xr/","description":"daemon常用参数修改 修改Cgroup驱动为systemd、修改镜像源、设置代理服务器","head":[["meta",{"property":"og:url","content":"https://git.x-cli.net/%E5%AE%B9%E5%99%A8/3mfac7xr/"}],["meta",{"property":"og:site_name","content":"谈呀"}],["meta",{"property":"og:title","content":"docker参数"}],["meta",{"property":"og:description","content":"daemon常用参数修改 修改Cgroup驱动为systemd、修改镜像源、设置代理服务器"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-24T15:33:57.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-24T15:33:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker参数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-24T15:33:57.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.2,"words":59},"git":{"updatedTime":1740411237000,"contributors":[{"name":"yu","username":"yu","email":"90786339+wyutan@users.noreply.github.com","commits":3,"avatar":"https://avatars.githubusercontent.com/yu?v=4","url":"https://github.com/yu"}]},"autoDesc":true,"filePathRelative":"容器/docker/1.docker参数.md","categoryList":[{"id":"22c799","sort":10000,"name":"容器"},{"id":"6b6146","sort":10001,"name":"docker"}]}');export{d as comp,c as data};
