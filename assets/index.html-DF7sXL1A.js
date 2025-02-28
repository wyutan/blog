import{_ as t,e as s,j as i,o as n}from"./app-C2qXDXZv.js";const a={};function d(o,e){return n(),s("div",null,e[0]||(e[0]=[i('<h2 id="sed命令" tabindex="-1"><a class="header-anchor" href="#sed命令"><span>sed命令</span></a></h2><ol><li><p><strong>替换文本</strong>：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>sed s/old_text/new_text/g filename</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在文件中查找 <code>old_text</code> 并将其替换为 <code>new_text</code>。</p></li><li><p><strong>删除行</strong>：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>sed /pattern_to_delete/d filename</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>删除包含匹配模式 <code>pattern_to_delete</code> 的行。</p></li><li><p><strong>添加行</strong>：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>sed 1i`/`New line filename</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在文件的第一行之前添加一个新行。</p></li><li><p><strong>查找行</strong>：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>sed -n /pattern_to_find/p filename</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查找并打印包含匹配模式 <code>pattern_to_find</code> 的行。</p></li><li><p><strong>替换文本并保存到新文件</strong>：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>sed s/old_text/new_text/g filename &gt; new_filename</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><strong>在匹配内容行首添加<code>#</code></strong>:</p></li></ol><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>sed /pattern_to_match/s/^/#/ filename</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在文件中查找包含匹配模式 <code>pattern_to_match</code> 的行，并在这些行的行首添加 <code>#</code>。</p>',4)]))}const r=t(a,[["render",d],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/os/linux/39cmb84t/","title":"sed","lang":"zh-CN","frontmatter":{"title":"sed","createTime":"2025/02/28 12:43:02","permalink":"/os/linux/39cmb84t/","description":"sed命令 替换文本： 在文件中查找 old_text 并将其替换为 new_text。 删除行： 删除包含匹配模式 pattern_to_delete 的行。 添加行： 在文件的第一行之前添加一个新行。 查找行： 查找并打印包含匹配模式 pattern_to_find 的行。 替换文本并保存到新文件： 在匹配内容行首添加#:","head":[["meta",{"property":"og:url","content":"https://git.x-cli.net/os/linux/39cmb84t/"}],["meta",{"property":"og:site_name","content":"谈呀"}],["meta",{"property":"og:title","content":"sed"}],["meta",{"property":"og:description","content":"sed命令 替换文本： 在文件中查找 old_text 并将其替换为 new_text。 删除行： 删除包含匹配模式 pattern_to_delete 的行。 添加行： 在文件的第一行之前添加一个新行。 查找行： 查找并打印包含匹配模式 pattern_to_find 的行。 替换文本并保存到新文件： 在匹配内容行首添加#:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T00:23:36.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-25T00:23:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sed\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T00:23:36.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.52,"words":155},"git":{"updatedTime":1740443016000,"contributors":[{"name":"yu","username":"yu","email":"90786339+wyutan@users.noreply.github.com","commits":3,"avatar":"https://avatars.githubusercontent.com/yu?v=4","url":"https://github.com/yu"}]},"autoDesc":true,"filePathRelative":"os/linux/command/3.sed.md"}');export{r as comp,c as data};
