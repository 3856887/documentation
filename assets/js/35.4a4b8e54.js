(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{381:function(t,e,s){"use strict";s.r(e);var a=s(48),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"building-wings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-wings"}},[t._v("#")]),t._v(" Building Wings")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Do "),s("strong",[t._v("not")]),t._v(" run the following steps on your production nodes.")])]),t._v(" "),s("p",[t._v("Wings is written in Go. This makes it very easy to modify and compile it on your own, and distribute your own binaries.\nThis guide will cover the steps necessary to build it yourself.")]),t._v(" "),s("p",[t._v("It will not, however, explain where to look for certain aspects of Wings and which changes are necessary to achieve specific results. Knowledge of the Go language is required if you want to modify it.")]),t._v(" "),s("p",[t._v("Building Go programs is very easy, and the same also applies to Wings. Go is cross-platform, but Wings only supports Linux at the moment. The easiest way to compile it for Linux is to run the commands on a Linux machine.")]),t._v(" "),s("h2",{attrs:{id:"build-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-requirements"}},[t._v("#")]),t._v(" Build Requirements")]),t._v(" "),s("p",[t._v("An up to date version of Go is required to compile Wings. The minimum version can be found at the top of the "),s("a",{attrs:{href:"https://github.com/pterodactyl/wings/blob/develop/go.mod",target:"_blank",rel:"noopener noreferrer"}},[t._v("go.mod"),s("OutboundLink")],1),t._v(" file. See the "),s("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("official instructions"),s("OutboundLink")],1),t._v(" for help with installing Go.")]),t._v(" "),s("h2",{attrs:{id:"building"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building"}},[t._v("#")]),t._v(" Building")]),t._v(" "),s("p",[t._v("Execute the following command in your local clone of the repository to compile Wings into a binary.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("go build\n")])])]),s("p",[t._v("You should now have a "),s("code",[t._v("wings")]),t._v(" binary file in your wings directory.")]),t._v(" "),s("h2",{attrs:{id:"install-the-new-binary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-the-new-binary"}},[t._v("#")]),t._v(" Install the new binary")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Root required")]),t._v(" "),s("p",[t._v("Some the following commands require root permissions. Prepend them with "),s("code",[t._v("sudo")]),t._v(" if you are not logged in as root.")])]),t._v(" "),s("ol",[s("li",[t._v("Backup the current installation of wings")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" /usr/local/bin/wings /usr/local/bin/wings-backup\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Place the new binary in "),s("code",[t._v("/usr/local/bin")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cp ./wings /usr/local/bin\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Restart wings")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("systemctl restart wings\n")])])]),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),s("p",[t._v("If the wings service does not start properly, you can try to start Wings in a console window.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("wings --debug\n")])])]),s("p",[t._v("Remember to stop the system service before, and re-enable it afterwards.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("systemctl stop wings\n\nsystemctl start wings\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);