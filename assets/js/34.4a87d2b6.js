(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{381:function(t,s,a){"use strict";a.r(s);var n=a(48),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"构建面板资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建面板资源"}},[t._v("#")]),t._v(" 构建面板资源")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[a("strong",[t._v("请勿在您的生产")]),t._v("节点上运行以下步骤。")])]),t._v(" "),a("p",[t._v("在 "),a("a",{attrs:{href:"https://github.com/pterodactyl-china/panel/blob/develop/BUILDING.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("BUILDING.md"),a("OutboundLink")],1),t._v(" 文件中也提供了有关如何构建面板的说明。")]),t._v(" "),a("p",[t._v("面板的前端是用 React 构建的。对源文件所做的任何更改都需要重新编译。\n这也适用于样式表。以下部分解释了如何执行此操作。")]),t._v(" "),a("h2",{attrs:{id:"安装依赖项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖项"}},[t._v("#")]),t._v(" 安装依赖项")]),t._v(" "),a("p",[t._v("以下命令将安装必要的依赖项以构建面板资源。")]),t._v(" "),a("p",[t._v("构建工具需要 NodeJS，使用 yarn 作为包管理器。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ubuntu/Debian")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sL https://deb.nodesource.com/setup_16.x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -E "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y nodejs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CentOS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sL https://rpm.nodesource.com/setup_16.x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -E "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y nodejs "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CentOS 7")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dnf "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y nodejs "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CentOS 8")]),t._v("\n")])])]),a("p",[t._v("安装所需的 JavaScript 软件包。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Yarn")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /var/www/pterodactyl\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装面板构建依赖项")]),t._v("\n")])])]),a("h2",{attrs:{id:"构建面板资源-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建面板资源-2"}},[t._v("#")]),t._v(" 构建面板资源")]),t._v(" "),a("p",[t._v("以下命令将重建面板前端。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /var/www/pterodactyl\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" build:production "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建面板")]),t._v("\n")])])]),a("p",[t._v("您可以使用 "),a("code",[t._v("yarn run watch")]),t._v(" 命令，可以几乎实时地查看更改进度，以便于开发。一旦您对此更改感到满意，可以使用前面提到的 "),a("code",[t._v("yarn build:production")]),t._v(" 命令构建面板。")])])}),[],!1,null,null,null);s.default=e.exports}}]);