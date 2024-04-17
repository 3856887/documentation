import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c as r,a as e,e as n,d as t,w as s,b as c}from"./app-CPC1n7W-.js";const d={},m=e("h1",{id:"centos-8-rocky-linux-8-almalinux-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#centos-8-rocky-linux-8-almalinux-8"},[e("span",null,"CentOS 8, Rocky Linux 8, AlmaLinux 8")])],-1),p=e("p",null,"In this guide we will install Pterodactyl's Wings v1.X — including all of it's dependencies — and configure it to use a SSL connection.",-1),u={class:"hint-container tip"},h=e("p",{class:"hint-container-title"},"提示",-1),g=e("h2",{id:"install-requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-requirements"},[e("span",null,"Install Requirements")])],-1),v=c(`<h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Install yum tools</span>
dnf <span class="token function">install</span> <span class="token parameter variable">-y</span> dnf-utils device-mapper-persistent-data lvm2

<span class="token comment">## Add the docker repo</span>
dnf config-manager --add-repo<span class="token operator">=</span>https://download.docker.com/linux/centos/docker-ce.repo

<span class="token comment">## Install docker</span>
dnf <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce <span class="token parameter variable">--nobest</span>

<span class="token comment">## Enable docker service</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="firewalld-changes" tabindex="-1"><a class="header-anchor" href="#firewalld-changes"><span>FirewallD Changes</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd --add-port <span class="token number">8080</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd --add-port <span class="token number">2022</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>trusted --change-interface<span class="token operator">=</span>pterodactyl0
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>trusted --add-masquerade <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="installing-wings" tabindex="-1"><a class="header-anchor" href="#installing-wings"><span>Installing Wings</span></a></h2>`,5),f=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,[n("If you have SELinux enforcement enabled and you are getting AVC denials from your containers, try relocating your Wings data directory from "),e("code",null,"/var/lib/pterodactyl"),n(" to "),e("code",null,"/var/srv/containers/pterodactyl"),n(". That is where the targeted policy expects Docker to read and write data from.")])],-1);function k(b,y){const a=l("RouteLink");return o(),r("div",null,[m,p,e("div",u,[h,e("p",null,[n("This guide is based off the "),t(a,{to:"/wings/1.0/installing.html"},{default:s(()=>[n("official installation documentation")]),_:1}),n(" but is tailored specifically for Enterprise Linux 8.")])]),g,e("p",null,[n("We will first begin by installing all of the Wings' "),t(a,{to:"/wings/1.0/installing.html#dependencies"},{default:s(()=>[n("required")]),_:1}),n(" dependencies.")]),v,e("p",null,[n("Great, now all of the dependencies and firewall rules have been dealt with. From here follow the "),t(a,{to:"/wings/1.0/installing.html#enabling-swap"},{default:s(()=>[n("official Wings installation documentation")]),_:1}),n(".")]),f])}const _=i(d,[["render",k],["__file","centos8.html.vue"]]),L=JSON.parse(`{"path":"/community/installation-guides/wings/centos8.html","title":"CentOS 8, Rocky Linux 8, AlmaLinux 8","lang":"zh-CN","frontmatter":{"description":"CentOS 8, Rocky Linux 8, AlmaLinux 8 In this guide we will install Pterodactyl's Wings v1.X — including all of it's dependencies — and configure it to use a SSL connection. 提示 T...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/community/installation-guides/wings/centos8.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"CentOS 8, Rocky Linux 8, AlmaLinux 8"}],["meta",{"property":"og:description","content":"CentOS 8, Rocky Linux 8, AlmaLinux 8 In this guide we will install Pterodactyl's Wings v1.X — including all of it's dependencies — and configure it to use a SSL connection. 提示 T..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-17T00:57:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-17T00:57:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CentOS 8, Rocky Linux 8, AlmaLinux 8\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-17T00:57:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Install Requirements","slug":"install-requirements","link":"#install-requirements","children":[{"level":3,"title":"Docker","slug":"docker","link":"#docker","children":[]},{"level":3,"title":"FirewallD Changes","slug":"firewalld-changes","link":"#firewalld-changes","children":[]}]},{"level":2,"title":"Installing Wings","slug":"installing-wings","link":"#installing-wings","children":[]}],"git":{"createdTime":1536990178000,"updatedTime":1713315474000,"contributors":[{"name":"Chance Callahan","email":"chance@chancecallahan.com","commits":1},{"name":"Gamer4life","email":"42851999+gamer4life1@users.noreply.github.com","commits":1},{"name":"JackOXI","email":"53652452+JackW6809@users.noreply.github.com","commits":1},{"name":"JohnB17","email":"63297273+JohnB17@users.noreply.github.com","commits":1},{"name":"Mark David","email":"44349634+markd69@users.noreply.github.com","commits":1},{"name":"Michael Parker","email":"parkervcp@gmail.com","commits":1},{"name":"TekExplorer","email":"tekexplorerm@gmail.com","commits":1},{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.7,"words":211},"filePathRelative":"community/installation-guides/wings/centos8.md","localizedDate":"2018年9月15日","autoDesc":true}`);export{_ as comp,L as data};
