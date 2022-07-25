(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{433:function(t,s,a){"use strict";a.r(s);var v=a(48),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"升级-wings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级-wings"}},[t._v("#")]),t._v(" 升级 Wings")]),t._v(" "),a("p",[t._v("升级Wings并不困难，只需不到一分钟就可以完成。")]),t._v(" "),a("h2",{attrs:{id:"wings-版本需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wings-版本需求"}},[t._v("#")]),t._v(" Wings 版本需求")]),t._v(" "),a("p",[t._v("每个翼龙面板版本要求的最低版本Wings都不相同，具体情况可参考下方图表，在大多数情况下Wings版本保持跟面板版本相匹配即可。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("面板版本")]),t._v(" "),a("th",[t._v("Wings版本")]),t._v(" "),a("th",[t._v("支持状况")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1.0.x")]),t._v(" "),a("td",[t._v("1.0.x")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("1.1.x")]),t._v(" "),a("td",[t._v("1.1.x")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("1.2.x")]),t._v(" "),a("td",[t._v("1.2.x")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("1.3.x")]),t._v(" "),a("td",[t._v("1.3.x")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("1.4.x")]),t._v(" "),a("td",[t._v("1.4.x")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("1.5.x")]),t._v(" "),a("td",[t._v("1.4.x")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("1.6.x")]),t._v(" "),a("td",[t._v("1.4.x")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("1.7.x")]),t._v(" "),a("td",[t._v("1.5.x")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("1.8.x")]),t._v(" "),a("td",[t._v("1.6.x")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("1.9.x")]),t._v(" "),a("td",[t._v("1.6.x")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("1.10.x")])]),t._v(" "),a("td",[a("strong",[t._v("1.7.x")])]),t._v(" "),a("td",[t._v("✅")])])])]),t._v(" "),a("p",[t._v("首先，下载最新的 wings 二进制文件到 "),a("code",[t._v("/usr/local/bin")]),t._v("。您将需要短暂停止 Wings。 "),a("em",[t._v("您正在运行的服务器"),a("strong",[t._v("不会")]),t._v("受到影响。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("systemctl stop wings\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L -o /usr/local/bin/wings "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/pterodactyl/wings/releases/latest/download/wings_linux_$([[ "'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -m"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x86_64"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"amd64"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arm64"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v('"\n'),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" u+x /usr/local/bin/wings\n")])])]),a("h2",{attrs:{id:"重启进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启进程"}},[t._v("#")]),t._v(" 重启进程")]),t._v(" "),a("p",[t._v("最后，重启 wings 进程。正在运行的服务器不会受到影响，与实例的连线将会自动重新连接。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("systemctl restart wings\n")])])])])}),[],!1,null,null,null);s.default=_.exports}}]);