if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>a(e,t),l={module:{uri:t},exports:n,require:r};s[t]=Promise.all(i.map((e=>l[e]||r(e)))).then((e=>(d(...e),n)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/0.4_to_0.5.html-0wNt3or3.js",revision:"f2354db922f0f4829f91303ed6e57acb"},{url:"assets/0.5_to_0.6.html-BpvTUMB9.js",revision:"b032aa052895a79fef04bae4dbfaefb3"},{url:"assets/0.5.html-BwWCAP_L.js",revision:"83872d51fd9e27f7db89700f0b8a224e"},{url:"assets/0.6_to_0.7.html-CFoYnZJi.js",revision:"16515a59ff033018dcd1ad4381493aa4"},{url:"assets/0.6.html-BDNb-uHA.js",revision:"d5f56eff5533f1a3cfb57636fd682d0b"},{url:"assets/0.7.html-B_7m1Kzs.js",revision:"016aa68612449d9b05a08aabec061f40"},{url:"assets/404.html-BI-GyQmp.js",revision:"820ed59b5eed22eb06681e5c93087f38"},{url:"assets/about.html-DM1b2v-i.js",revision:"209109a85d04672c07f7f4f12c7168ac"},{url:"assets/about.html-DY-Jn9Bt.js",revision:"fc8885b6f4c708fe12dd5b1e67308f45"},{url:"assets/add_node.html-B90Y-L4T.js",revision:"3d1e843f26e2af849d847001106952ac"},{url:"assets/additional_configuration.html-C2sqjz6j.js",revision:"ce3e2b77610203388e7466355b8c66a8"},{url:"assets/app-BNGakUg2.js",revision:"5682a40ccafc1427cc5eb447affdc3bb"},{url:"assets/artisan.html-jzfSNaDA.js",revision:"e9578ac2fa4fbf9e24ff208ef0bfb929"},{url:"assets/btpanel_getstarted.html-CWq7tZc7.js",revision:"3c54acb78b9a7b1a5f6a6cbe0622f740"},{url:"assets/centos7.html-DaF_OtyU.js",revision:"f75b919e2d9f9b326740da02726e89c3"},{url:"assets/centos7.html-XfgnBL1g.js",revision:"c1719c3e46dd7c349819d11e496dc418"},{url:"assets/centos8.html-D2-HyM1a.js",revision:"992152c236c3a4c9b0c1e251d3c5ea5a"},{url:"assets/centos8.html-DgAvLOoM.js",revision:"661b5d15f721b2d6a81a511240f059c9"},{url:"assets/community.html-BaOMMjaK.js",revision:"5c4f93bd6da2a342d4f8f1838eb72842"},{url:"assets/configuration.html-BAVyDzD5.js",revision:"3f21dc5b579c57d78f546fcc6cf41d79"},{url:"assets/configuration.html-DECWGCzb.js",revision:"f3946f8e26c89c8bca135ce0bf7b9052"},{url:"assets/configuration.html-Mneu8oyv.js",revision:"f26e973c86a6a950dd7e81e73ac06d67"},{url:"assets/creating_a_custom_egg.html-Dd95Qn17.js",revision:"b400270f4bb5061021e9e1753670f54c"},{url:"assets/creating_a_custom_image.html-DYDKIIJD.js",revision:"ebb108b9fd5656ad160f65ec76f39647"},{url:"assets/creating_ssl_certificates.html-Bt42A_Q3.js",revision:"11002a8f9c4ab979bc7000d5f077b1ce"},{url:"assets/debian_8_docker.html-DLKOpxTd.js",revision:"160bd051399e4093c5c8ee605d582c7f"},{url:"assets/debian.html-B8krj0WT.js",revision:"751ace1bcb76dd8106851de287a3da62"},{url:"assets/debian.html-BO6iipl8.js",revision:"8c55d28d2a9085b07225b87974c4ef5d"},{url:"assets/docker_getstarted.html-CBg8IGO7.js",revision:"da241c0183d7c838f55c06fee0c20915"},{url:"assets/docsearch-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/faq.html-CMOdzWNr.js",revision:"456b23097410a89796673d85bc81cdf2"},{url:"assets/getting_started.html-B7OhBJRx.js",revision:"9ce1cb4ce85ab54a851f4c6323454830"},{url:"assets/getting_started.html-C780H2Zp.js",revision:"10eb56e996dad6562fd15baefa2070f3"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-Ds2TtRM5.js",revision:"4b2541a3a6e4abc1431da28a1aa02b8c"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-7T4hlSYb.js",revision:"2a901c4401a90151f339442d44f48fa3"},{url:"assets/index.html-aVP7zWjg.js",revision:"82d00b2f073d59a234af43dd86ce52e8"},{url:"assets/index.html-B01cSDzX.js",revision:"0834f1843ae24669c68c3c7606521924"},{url:"assets/index.html-B5hjnA-B.js",revision:"2c968a65c3caffd193a06eaedd2f1856"},{url:"assets/index.html-B7vIFL29.js",revision:"a4ee7536963d2a1c13395cf1bd050b90"},{url:"assets/index.html-BBj9f5-d.js",revision:"40bce1477c557bd6bdb7165c9f51792f"},{url:"assets/index.html-BEX2eRxR.js",revision:"fc50b5339f7385feb043a95e6d3e1af7"},{url:"assets/index.html-BouQ3jko.js",revision:"5dfdb2817c2c8815b41cc3bc4cf2cb7c"},{url:"assets/index.html-BQ3kMbRu.js",revision:"654b53281371306df7babbb476ac8c3e"},{url:"assets/index.html-C6M1klMH.js",revision:"a17a56335780b353ab2a331bc34a7b61"},{url:"assets/index.html-CO1dsMRY.js",revision:"842b25f8008b0bbf05ec5055d3971145"},{url:"assets/index.html-CQ35-IUU.js",revision:"d263e8be08a2177705897ef4b7771939"},{url:"assets/index.html-Cr8ylrxw.js",revision:"8c60d7490b489b296bb063cd6382f25c"},{url:"assets/index.html-CvALFFqX.js",revision:"3caf3fa0e76e461b6d42369b561dcbe3"},{url:"assets/index.html-CZKH5Nt-.js",revision:"596283b1a3d809b34ae983b238901efe"},{url:"assets/index.html-D9BawHKB.js",revision:"ac1c8fd47e80bd9d9833144fc7d92677"},{url:"assets/index.html-Dbgoo3C6.js",revision:"b0be93a696379a5e70042edf834dddd3"},{url:"assets/index.html-DFvRX8HP.js",revision:"c66c5ff4d64bea46aef8eba8b6e463ac"},{url:"assets/index.html-Lhteudwl.js",revision:"2cbf1a607b2f123cdb350d90789456ce"},{url:"assets/index.html-Mu5v8N1E.js",revision:"dc08082bbcc377f11b9def92f8195d5f"},{url:"assets/index.html-mUK-dm9H.js",revision:"ab67d4c1999cda9162d12bf203d3170b"},{url:"assets/index.html-umFcJFZM.js",revision:"e28d048cc325da245973b4381b4f7244"},{url:"assets/index.html-V1XKlMuI.js",revision:"31d5964639e8ca078a8f2505cd8470e3"},{url:"assets/installing.html-Bfgtmcu_.js",revision:"0641ab91bb1a1f796109096232d4d9c1"},{url:"assets/installing.html-CTmqK7Sq.js",revision:"2980ede89c204d864b2c63f4261d85bc"},{url:"assets/introduction.html-ZhTL7p1B.js",revision:"4419c31094ac2b12b43f20da6840d7b1"},{url:"assets/kernel_modifications.html-D1HlxKVH.js",revision:"fc8e9561d7117c22193c651a7e67f70c"},{url:"assets/legacy_upgrade.html-B-_e1LjF.js",revision:"d049eab8a639884ee5747baa97bf8213"},{url:"assets/markdown.esm-BG2Xu2Hd.js",revision:"dfebc8121864151002204ef714f81472"},{url:"assets/migrating.html-Bv46SMgf.js",revision:"d32f1d8aad355d1ad7cca3aa01da5d21"},{url:"assets/migrating.html-q6y0quFM.js",revision:"93ff91a174a8c66b2c20c828d116960e"},{url:"assets/minecraft.html-Djn24dqE.js",revision:"0b13c27d5ac3c90baf9843e3e135a2b1"},{url:"assets/mounts.html-vcVeXImr.js",revision:"ebe7655f5d31f02fbf5394cedd64158a"},{url:"assets/mysql_setup.html-D3fNxSnN.js",revision:"da27d33ceb6b277512cefe17b2183912"},{url:"assets/panel.html-C4JXj27H.js",revision:"ddc48426ff9c4f0eedcb892b118aef8d"},{url:"assets/photoswipe.esm-SzV8tJDW.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/php_upgrade.html-ZaYtsR_z.js",revision:"a6656ed01d47415b56de8a952fad3e3c"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/reveal.esm-CYbl4_PU.js",revision:"d7a2a78c9e57530577ca771ebd6203f1"},{url:"assets/standalone_sftp.html-7MR4Ctww.js",revision:"f859d774e69bf72e3ebd8cb845a0b408"},{url:"assets/style-DTzY5I4H.css",revision:"f6d784d32f3ddf7cc44ffb3b42000f2d"},{url:"assets/style-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/terms.html-D1G-9hDM.js",revision:"0b3abd0494223b721dab37d0e3b277d1"},{url:"assets/troubleshooting.html-B9EGKaby.js",revision:"7d1fa35a3e7aaa3dff295dfee62c85da"},{url:"assets/troubleshooting.html-CyzutZwq.js",revision:"b9a8929f1037694ee03579f9fbcf8f38"},{url:"assets/ubuntu1804.html-6x_G6Hvj.js",revision:"15361dc1241bc68e3b92d059928431ee"},{url:"assets/ubuntu1804.html-B2YL3kW2.js",revision:"97cf60e8ed7e1e703c3130c7ace50486"},{url:"assets/ubuntu2004.html-BK6MTws_.js",revision:"e148d8bf78630fa093053f197b685872"},{url:"assets/ubuntu2004.html-KtaPNWeo.js",revision:"6802bcea2a0a6b6f7fadae4226f8b574"},{url:"assets/updating.html-BB8NTfg4.js",revision:"a8f76ecd97e481dd49f2c591da892a48"},{url:"assets/upgrading.html-DnzniAR-.js",revision:"ed2f5b69143db57746aec75e81c03524"},{url:"assets/upgrading.html-jXzsCvCI.js",revision:"fdf85a67af8d6eb2992f06fd31f6b76f"},{url:"assets/upgrading.html-oMnE2XGx.js",revision:"7b1362f6c3449a4a5d9596813e6ba9be"},{url:"assets/webserver_configuration.html-CSkNxxoe.js",revision:"4de713d79c3819846f5f1e736ba61fb5"},{url:"assets/webserver_configuration.html-i5_67fcV.js",revision:"138675f558e0525340e4ba64ed1bc445"},{url:"assets/wings_configuration_example-CiiF11xE.js",revision:"e0576ca1ee55a2bea8484bb93399c3da"},{url:"assets/wings.html-B293OumH.js",revision:"806adaeeafa18d912ed9de3f32241ed5"},{url:"favicons/safari-pinned-tab.svg",revision:"db7d6b19affde4828e29e156a292d578"},{url:"frontpage/loading.svg",revision:"f9ac6b8127286b1a1b15d6938f96ea4a"},{url:"logos/pterry.svg",revision:"f3fb9eb4376d84e63d648afd82d42591"},{url:"pterodactyl-flat.svg",revision:"210292be2b55fff33f927f259db9f81c"},{url:"404.html",revision:"3eac7d087c0a659e631d46975a040ae5"},{url:"community/about.html",revision:"df99adbb6bdd2b1fb5587c530671a1a3"},{url:"community/config/eggs/creating_a_custom_egg.html",revision:"3a28817c6cb093fe3d6ac2b6e635a0ec"},{url:"community/config/eggs/creating_a_custom_image.html",revision:"4425b8515a2f23601465d70623bfa48a"},{url:"community/config/eggs/index.html",revision:"28055645c3bea09346f49a287210c786"},{url:"community/config/index.html",revision:"f7e64fd087aa016e85d5bff996bb6083"},{url:"community/config/nodes/add_node.html",revision:"7aa272d39f2322c6486a5afcbb4f6526"},{url:"community/config/nodes/index.html",revision:"60c1706aeda8bbf44a68c3dd57e4ba51"},{url:"community/customization/index.html",revision:"bc98280ea0ce79a706d5b61ca29b56e6"},{url:"community/customization/panel.html",revision:"cbfaa8e0b290bc34398ce014e816c2c6"},{url:"community/customization/wings.html",revision:"49fbdc1ab0cabbf4f30cbc27de2f21f9"},{url:"community/faq.html",revision:"a6f7e1941ad5fe5ded1578d454f6f09b"},{url:"community/games/index.html",revision:"60e4037c2d285d834c2d0fc1285071fa"},{url:"community/games/minecraft.html",revision:"5a2975e39b4e77e937983b06f1ae468f"},{url:"community/index.html",revision:"41de3f31fd0ea75bcf8491712909d88e"},{url:"community/installation-guides/index.html",revision:"e0f1de4f86cef85f1d407fef0910f550"},{url:"community/installation-guides/panel/centos7.html",revision:"6d05e43339815b33af4d6fb1684a8cfd"},{url:"community/installation-guides/panel/centos8.html",revision:"af37226260caf329bd6a72bb83ec0f1c"},{url:"community/installation-guides/panel/debian.html",revision:"efec905b23a2514d264a415f569221d6"},{url:"community/installation-guides/panel/index.html",revision:"6ef9d276b58d203ef57c315ecceaa7e0"},{url:"community/installation-guides/panel/ubuntu1804.html",revision:"47e0fdcdae727d8709be1be3d7bb1061"},{url:"community/installation-guides/panel/ubuntu2004.html",revision:"e04bab48860deb0ccd3b93da456053e1"},{url:"community/installation-guides/wings/centos7.html",revision:"aaee01153cfedaff4c5e934360e1a6db"},{url:"community/installation-guides/wings/centos8.html",revision:"0854a42ad71bdf7eac81e359a786a759"},{url:"community/installation-guides/wings/debian.html",revision:"bb8f5c9748df5a5cbd16280a77c35dd7"},{url:"community/installation-guides/wings/index.html",revision:"15c4091ffcb015a24171af29c8800f28"},{url:"community/installation-guides/wings/ubuntu1804.html",revision:"916fa6a991b08dbd07c6ce00f072fd4a"},{url:"community/installation-guides/wings/ubuntu2004.html",revision:"12b777db194e5bbe513d4e44c7125704"},{url:"community/tutorials/artisan.html",revision:"658af2b36c590e43365b700f1eae28c2"},{url:"community/tutorials/index.html",revision:"02c6a2c4fcad032f0b0f2210e93bfc03"},{url:"community/tutorials/migrating.html",revision:"c203fa7afaab6d6994477113fbfea775"},{url:"daemon/0.6/configuration.html",revision:"e17556c2c4dde132c650639fbd95b464"},{url:"daemon/0.6/debian_8_docker.html",revision:"56e94a37ffe87a4582822dd0776a5a8f"},{url:"daemon/0.6/index.html",revision:"2199f8f8962e60e2d8af8047b44252bd"},{url:"daemon/0.6/installing.html",revision:"d77393697264f690998bb1bb7be21fca"},{url:"daemon/0.6/kernel_modifications.html",revision:"0089a1c4de0125d154d0e2cb6abb4206"},{url:"daemon/0.6/standalone_sftp.html",revision:"7eb900c35f1eff0f5b4825b332eef6ad"},{url:"daemon/0.6/upgrade/0.4_to_0.5.html",revision:"38b179c50c164fef39387ee279a61860"},{url:"daemon/0.6/upgrade/0.5_to_0.6.html",revision:"6d71b651ce392118ab90a276aeb591c2"},{url:"daemon/0.6/upgrade/0.5.html",revision:"6996b36d4e2a2d5e5c91615310e79d2d"},{url:"daemon/0.6/upgrade/0.6.html",revision:"b425299793b8f698bded38b86f89f67d"},{url:"daemon/0.6/upgrade/index.html",revision:"09ca5215fc6d557add6c57d41653955d"},{url:"daemon/0.6/upgrading.html",revision:"a4de328eb7b9ffecf33dd8470ed0e8fd"},{url:"daemon/index.html",revision:"e67f92055400a7fabfcc99cf4aaa3202"},{url:"guides/index.html",revision:"73b8a60536d47f2c54001a82bba8a7e6"},{url:"guides/mounts.html",revision:"a57e288b467d81abdd860feba8da9bc8"},{url:"guides/php_upgrade.html",revision:"bb43afe5c90e554e68a0a1fd148a1808"},{url:"index.html",revision:"23ab94dc49a7d9e3a9e7e60c7083eeba"},{url:"panel/0.7/configuration.html",revision:"4e670b80d0da06add34d5723ffc70754"},{url:"panel/0.7/getting_started.html",revision:"fd94dfed6df2bbacdfc3a31d6f39ee51"},{url:"panel/0.7/index.html",revision:"f5d1df4b417e70e51646c7a3ec8567f4"},{url:"panel/0.7/troubleshooting.html",revision:"07ee7a6582ed2eea5e5cfa6b787a4291"},{url:"panel/0.7/upgrade/0.6_to_0.7.html",revision:"7cca0d3fa8c52e81c2a2e59238d93594"},{url:"panel/0.7/upgrade/0.7.html",revision:"e4e7e9816c9c21fd9519476afc7d38fb"},{url:"panel/0.7/upgrade/index.html",revision:"d90b59ac0b95896c7e39561fc2083fb1"},{url:"panel/0.7/upgrading.html",revision:"f1de3ea2ce0bcfd91e1427301a94afdc"},{url:"panel/0.7/webserver_configuration.html",revision:"7a94130445064d6daf67938555c01495"},{url:"panel/1.0/additional_configuration.html",revision:"ffe330858e753c0a7ee3dade19b93023"},{url:"panel/1.0/btpanel_getstarted.html",revision:"f54f7f46df2fb7c771165873be05e184"},{url:"panel/1.0/docker_getstarted.html",revision:"bf7dee4e4e4236d735e32fd5f84efef7"},{url:"panel/1.0/getting_started.html",revision:"ffbd37fc94cb3a07e6f0360f0c08afef"},{url:"panel/1.0/index.html",revision:"37d6839ccf7d97f0dfe3c47244ff73c3"},{url:"panel/1.0/legacy_upgrade.html",revision:"418b87511c29bbd46896059f447097c9"},{url:"panel/1.0/troubleshooting.html",revision:"576bba063696654dee7e57cf6bab0609"},{url:"panel/1.0/updating.html",revision:"8dc34dcf76eeb5b53bc2014c477229d8"},{url:"panel/1.0/webserver_configuration.html",revision:"d95fdf8e7ea9f63a2e52fb757f45b17d"},{url:"panel/index.html",revision:"65452f511932c78ee35ae2b7c28c7132"},{url:"project/about.html",revision:"fd5597330a3b7f05a20b8a0f97e266c3"},{url:"project/community.html",revision:"13cf536a827d0c1a1704c7b6749780d0"},{url:"project/index.html",revision:"f1c3b9dec3543b0efb1ceeea3b4c6961"},{url:"project/introduction.html",revision:"49e15fb23015c065d11c494fdbf73e8b"},{url:"project/terms.html",revision:"0f59a608c7ad0f1d74af6425dc786f50"},{url:"tutorials/creating_ssl_certificates.html",revision:"ed57220d6a28b630ed1d8c9dc93670f7"},{url:"tutorials/index.html",revision:"6b2abbc6a298cc91a0dddbcdf1420b0d"},{url:"tutorials/mysql_setup.html",revision:"7cc45820d359047104fe98b1f3f6afa9"},{url:"wings/1.0/configuration.html",revision:"461478da389c822ad4b3ad83a74e83f3"},{url:"wings/1.0/index.html",revision:"238ca7752eaed575ec7d78c7150d50c6"},{url:"wings/1.0/installing.html",revision:"28f5d70c87236142d208b4d5b1207119"},{url:"wings/1.0/migrating.html",revision:"384ad4a7530e52ebfd7465a532a0cef2"},{url:"wings/1.0/upgrading.html",revision:"377fdfe3a598e319b92c0d4f366f0daf"},{url:"wings/index.html",revision:"7a26d02c9ee057cb82d5bf0ae9a0bd5c"}],{}),e.cleanupOutdatedCaches()}));
