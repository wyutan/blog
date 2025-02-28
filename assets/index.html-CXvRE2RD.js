import{_ as t,e as s,j as i,o as a}from"./app-C2qXDXZv.js";const n={};function d(l,e){return a(),s("div",null,e[0]||(e[0]=[i('<h2 id="find命令" tabindex="-1"><a class="header-anchor" href="#find命令"><span>find命令</span></a></h2><ol><li><p><strong>按文件名查找</strong>：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>find /path/to/search -name &quot;filename&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在指定路径下搜索文件名为 &quot;filename&quot; 的文件。</p></li><li><p><strong>按文件类型查找</strong>：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>find /path/to/search -type f</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在指定路径下搜索普通文件。</p></li><li><p><strong>按目录查找</strong>：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>find /path/to/search -type d</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在指定路径下搜索目录。</p></li><li><p><strong>按文件大小查找</strong>：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>find /path/to/search -size +1M</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在指定路径下搜索大小大于1MB的文件。</p></li><li><p><strong>按时间查找</strong>：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>find /path/to/search -mtime -7</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在指定路径下搜索最近7天内修改过的文件。</p></li><li><p><strong>按权限查找</strong>：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>find /path/to/search -perm 644</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在指定路径下搜索权限为 644 的文件。</p></li><li><p><strong>执行命令</strong>：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>find /path/to/search -exec command {} \\;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在搜索到的每个文件上执行指定的命令。</p></li></ol>',2)]))}const o=t(n,[["render",d],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/os/linux/ctfas8um/","title":"find","lang":"zh-CN","frontmatter":{"title":"find","createTime":"2025/02/28 12:43:02","permalink":"/os/linux/ctfas8um/","description":"find命令 按文件名查找： 在指定路径下搜索文件名为 \\"filename\\" 的文件。 按文件类型查找： 在指定路径下搜索普通文件。 按目录查找： 在指定路径下搜索目录。 按文件大小查找： 在指定路径下搜索大小大于1MB的文件。 按时间查找： 在指定路径下搜索最近7天内修改过的文件。 按权限查找： 在指定路径下搜索权限为 644 的文件。 执行命令： ...","head":[["meta",{"property":"og:url","content":"https://git.x-cli.net/os/linux/ctfas8um/"}],["meta",{"property":"og:site_name","content":"谈呀"}],["meta",{"property":"og:title","content":"find"}],["meta",{"property":"og:description","content":"find命令 按文件名查找： 在指定路径下搜索文件名为 \\"filename\\" 的文件。 按文件类型查找： 在指定路径下搜索普通文件。 按目录查找： 在指定路径下搜索目录。 按文件大小查找： 在指定路径下搜索大小大于1MB的文件。 按时间查找： 在指定路径下搜索最近7天内修改过的文件。 按权限查找： 在指定路径下搜索权限为 644 的文件。 执行命令： ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T00:23:23.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-25T00:23:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"find\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T00:23:23.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.64,"words":191},"git":{"updatedTime":1740443003000,"contributors":[{"name":"yu","username":"yu","email":"90786339+wyutan@users.noreply.github.com","commits":3,"avatar":"https://avatars.githubusercontent.com/yu?v=4","url":"https://github.com/yu"}]},"autoDesc":true,"filePathRelative":"os/linux/command/2.find.md"}');export{o as comp,p as data};
