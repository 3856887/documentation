import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as r,c as d,a as e,e as a,d as n,w as s,b as l}from"./app-CPC1n7W-.js";const c={},p=e("h1",{id:"upgrading-0-5-x-to-0-6-x",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#upgrading-0-5-x-to-0-6-x"},[e("span",null,"Upgrading 0.5.X to 0.6.X")])],-1),h={class:"hint-container caution"},u=e("p",{class:"hint-container-title"},"This Software is Abandoned",-1),m=e("p",null,[a("This documentation is for "),e("strong",null,"abandoned software"),a(" which does not recieve any security updates or support from the community. This documentation has been left accessible for historial reasons.")],-1),g=l(`<div class="hint-container warning"><p class="hint-container-title">Server Restart Required</p><p>Your servers will need to be restarted after upgrading the daemon in order to see the expected log output in the Panel.</p></div><h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes"><span>Breaking Changes</span></a></h2><p>This release introduces a few breaking changes to how the Daemon operates, but maintains compatibility with <code>v0.7.X</code> of the Panel, so you don&#39;t need to worry about updating the Panel.</p><p>Of notable change in this release is that we&#39;ve switched from using custom logging functionality to using Docker logging functionality. This allows us to better output events that happen before we can attach to the container, centralizes logic, and allows Docker to manage the logs (which it does very well). Now, when your server refuses to boot, instead of seeing an unhelpful &quot;Server has crashed&quot; message with nothing before it, you&#39;ll see <em>everything</em> that happened in the container leading up to that point, assuming things were output.</p><h2 id="download-files" tabindex="-1"><a class="header-anchor" href="#download-files"><span>Download Files</span></a></h2><p>To upgrade from v0.5.X first switch the directory where you installed your Daemon. If you followed the installation guide your Daemon is most likely located in <code>/srv/daemon</code>. Then, download and unpack the archive using the command below.</p><div class="hint-container caution"><p class="hint-container-title">警告</p><p>Stop your Daemon process before continuing in order to avoid any issues and ensure everything updates as expected.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop wings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/pterodactyl/daemon/releases/download/v0.6.13/daemon.tar.gz <span class="token operator">|</span> <span class="token function">tar</span> --strip-components<span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">-xzv</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then, update the core dependencies for the Daemon with the following command.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> update <span class="token parameter variable">--only</span><span class="token operator">=</span>production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="start-the-daemon" tabindex="-1"><a class="header-anchor" href="#start-the-daemon"><span>Start the Daemon</span></a></h3><p>Finally, start your daemon up, most likely with the command below.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start wings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="rebuild-containers" tabindex="-1"><a class="header-anchor" href="#rebuild-containers"><span>Rebuild Containers</span></a></h2><p>Because of some changes we made behind the scenes when it comes to displaying server output you&#39;ll need to rebuild and restart all of your servers. The rebuild step is required, the restart step is optional, but highly recommended otherwise you will not be able to see any console output.</p><p>Run the following commands <em>from the Panel server</em> in order to perform a mass rebuild and restart. Replace <code>###</code> with the ID of the node you just upgraded, or remove the <code>--node</code> flag entirely to rebuild on all nodes.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>php artisan p:server:rebuild <span class="token parameter variable">--node</span><span class="token operator">=</span><span class="token comment">###</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then, restart all of the servers using the following command, or by manually restarting them one at a time in the Panel.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>php artisan p:server:bulk-power restart <span class="token parameter variable">--nodes</span><span class="token operator">=</span><span class="token comment">###</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19);function b(v,f){const t=i("RouteLink");return r(),d("div",null,[p,e("div",h,[u,m,e("p",null,[a("You should be installing and using "),n(t,{to:"/wings/1.0/installing.html"},{default:s(()=>[a("Wings")]),_:1}),a(" in production environments with "),n(t,{to:"/panel/1.0/getting_started.html"},{default:s(()=>[a("Pterodactyl Panel 1.0")]),_:1}),a(".")])]),g])}const _=o(c,[["render",b],["__file","0.5_to_0.6.html.vue"]]),k=JSON.parse('{"path":"/daemon/0.6/upgrade/0.5_to_0.6.html","title":"Upgrading 0.5.X to 0.6.X","lang":"zh-CN","frontmatter":{"description":"Upgrading 0.5.X to 0.6.X This Software is Abandoned This documentation is for abandoned software which does not recieve any security updates or support from the community. This ...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/daemon/0.6/upgrade/0.5_to_0.6.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"Upgrading 0.5.X to 0.6.X"}],["meta",{"property":"og:description","content":"Upgrading 0.5.X to 0.6.X This Software is Abandoned This documentation is for abandoned software which does not recieve any security updates or support from the community. This ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-17T00:57:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-17T00:57:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Upgrading 0.5.X to 0.6.X\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-17T00:57:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Breaking Changes","slug":"breaking-changes","link":"#breaking-changes","children":[]},{"level":2,"title":"Download Files","slug":"download-files","link":"#download-files","children":[{"level":3,"title":"Start the Daemon","slug":"start-the-daemon","link":"#start-the-daemon","children":[]}]},{"level":2,"title":"Rebuild Containers","slug":"rebuild-containers","link":"#rebuild-containers","children":[]}],"git":{"createdTime":1533515982000,"updatedTime":1713315474000,"contributors":[{"name":"Dane Everitt","email":"dane@daneeveritt.com","commits":1},{"name":"Jakob Schrettenbrunner","email":"dev@schrej.net","commits":1},{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.46,"words":439},"filePathRelative":"daemon/0.6/upgrade/0.5_to_0.6.md","localizedDate":"2018年8月6日","autoDesc":true}');export{_ as comp,k as data};
