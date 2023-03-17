(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{424:function(t,e,a){"use strict";a.r(e);var n=a(48),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"网络服务器配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络服务器配置"}},[t._v("#")]),t._v(" 网络服务器配置")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("使用 SSL 配置时，您必须创建 SSL 证书，否则您的网络服务器将无法启动。请参阅 "),a("RouterLink",{attrs:{to:"/tutorials/creating_ssl_certificates.html"}},[t._v("创建 SSL 证书")]),t._v(" 文档页面以了解如何在继续之前创建这些证书。")],1)]),t._v(" "),a("tabs",[a("tab",{attrs:{name:"使用 SSL 的 Nginx"}},[a("p",[t._v("首先，删除默认的 NGINX 配置。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" /etc/nginx/sites-enabled/default\n")])])]),a("p",[t._v("现在，您应该复制下面文件的内容，将 "),a("code",[t._v("<domain>")]),t._v(" 替换为您使用的域名后，粘贴到名为 "),a("code",[t._v("pterodactyl.conf")]),t._v(" 的文件中，并将该文件放在 "),a("code",[t._v("/etc/nginx/sites-available/")]),t._v(" 目录下， 或 — 如果在 CentOS 上，则为 "),a("code",[t._v("/etc/nginx/conf.d/")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-conf extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('server_tokens off;\n\nserver {\n    listen 80;\n    server_name <domain>;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name <domain>;\n\n    root /var/www/pterodactyl/public;\n    index index.php;\n\n    access_log /var/log/nginx/pterodactyl.app-access.log;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n\n    sendfile off;\n\n    # SSL Configuration - Replace the example <domain> with your domain\n    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;\n    ssl_session_cache shared:SSL:10m;\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";\n    ssl_prefer_server_ciphers on;\n\n    # See https://hstspreload.org/ before uncommenting the line below.\n    # add_header Strict-Transport-Security "max-age=15768000; preload;";\n    add_header X-Content-Type-Options nosniff;\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Robots-Tag none;\n    add_header Content-Security-Policy "frame-ancestors \'self\'";\n    add_header X-Frame-Options DENY;\n    add_header Referrer-Policy same-origin;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/run/php/php8.1-fpm.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n        include /etc/nginx/fastcgi_params;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n')])])]),a("h3",{attrs:{id:"启用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用配置"}},[t._v("#")]),t._v(" 启用配置")]),t._v(" "),a("p",[t._v("最后一步是启用 NGINX 配置并重新启动它。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果您使用的是 CentOS，则不需要符号链接此文件。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 无论操作系统如何，您都需要重新启动 nginx。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart nginx\n")])])])]),t._v(" "),a("tab",{attrs:{name:"没有使用 SSL 的 Nginx"}},[a("p",[t._v("首先，删除默认的 NGINX 配置。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" /etc/nginx/sites-enabled/default\n")])])]),a("p",[t._v("现在，您应该复制下面文件的内容，将 "),a("code",[t._v("<domain>")]),t._v(" 替换为您使用的域名后，粘贴到名为 "),a("code",[t._v("pterodactyl.conf")]),t._v(" 的文件中，并将该文件放在 "),a("code",[t._v("/etc/nginx/sites-available/")]),t._v(" 目录下， 或 — 如果在 CentOS 上，则为 "),a("code",[t._v("/etc/nginx/conf.d/")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-conf extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('server {\n    # Replace the example <domain> with your domain name or IP address\n    listen 80;\n    server_name <domain>;\n\n\n    root /var/www/pterodactyl/public;\n    index index.html index.htm index.php;\n    charset utf-8;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location = /favicon.ico { access_log off; log_not_found off; }\n    location = /robots.txt  { access_log off; log_not_found off; }\n\n    access_log off;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n\n    sendfile off;\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/run/php/php8.1-fpm.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n')])])]),a("h3",{attrs:{id:"启用配置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用配置-2"}},[t._v("#")]),t._v(" 启用配置")]),t._v(" "),a("p",[t._v("最后一步是启用 NGINX 配置并重新启动它。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果您使用的是 CentOS，则不需要符号链接此文件。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 无论操作系统如何，您都需要重新启动 nginx。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart nginx\n")])])])]),t._v(" "),a("tab",{attrs:{name:"使用 SSL 的 Apache"}},[a("p",[t._v("首先，删除默认的 Apache 配置。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("a2dissite 000-default.conf\n")])])]),a("p",[t._v("现在，您应该复制下面文件的内容，将 "),a("code",[t._v("<domain>")]),t._v(" 替换为您使用的域名后，粘贴到名为 "),a("code",[t._v("pterodactyl.conf")]),t._v(" 的文件中，并将该文件放在 "),a("code",[t._v("/etc/apache2/sites-available")]),t._v(" 目录下， 或 — 如果在 CentOS 上，则为 "),a("code",[t._v("/etc/httpd/conf.d/")]),t._v("。")]),t._v(" "),a("p",[t._v("注意：使用 Apache 时，请确保您已安装 "),a("code",[t._v("libapache2-mod-php")]),t._v(" 包，否则 PHP 将不会显示在您的网络服务器上。")]),t._v(" "),a("div",{staticClass:"language-conf extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<VirtualHost *:80>\n  ServerName <domain>\n  \n  RewriteEngine On\n  RewriteCond %{HTTPS} !=on\n  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] \n</VirtualHost>\n\n<VirtualHost *:443>\n  ServerName <domain>\n  DocumentRoot "/var/www/pterodactyl/public"\n\n  AllowEncodedSlashes On\n  \n  php_value upload_max_filesize 100M\n  php_value post_max_size 100M\n\n  <Directory "/var/www/pterodactyl/public">\n    Require all granted\n    AllowOverride all\n  </Directory>\n\n  SSLEngine on\n  SSLCertificateFile /etc/letsencrypt/live/<domain>/fullchain.pem\n  SSLCertificateKeyFile /etc/letsencrypt/live/<domain>/privkey.pem\n</VirtualHost> \n')])])]),a("h3",{attrs:{id:"启用配置-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用配置-3"}},[t._v("#")]),t._v(" 启用配置")]),t._v(" "),a("p",[t._v("创建上面的文件后，只需运行以下命令。如果你在 CentOS 上_你不需要运行下面的命令！_你只需要运行 "),a("code",[t._v("systemctl restart httpd")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 你不需要在 CentOS 上运行这部分的任何命令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" a2enmod rewrite\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" a2enmod ssl\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart apache2\n")])])])]),t._v(" "),a("tab",{attrs:{name:"没有使用 SSL 的 Apache"}},[a("p",[t._v("首先，删除默认的 Apache 配置。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("a2dissite 000-default.conf\n")])])]),a("p",[t._v("现在，您应该复制下面文件的内容，将 "),a("code",[t._v("<domain>")]),t._v(" 替换为您使用的域名后，粘贴到名为 "),a("code",[t._v("pterodactyl.conf")]),t._v(" 的文件中，并将该文件放在 "),a("code",[t._v("/etc/apache2/sites-available")]),t._v(" 目录下， 或 — 如果在 CentOS 上，则为 "),a("code",[t._v("/etc/httpd/conf.d/")]),t._v("。")]),t._v(" "),a("p",[t._v("注意：使用 Apache 时，请确保您已安装 "),a("code",[t._v("libapache2-mod-php")]),t._v(" 包，否则 PHP 将不会显示在您的网络服务器上。")]),t._v(" "),a("div",{staticClass:"language-conf extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<VirtualHost *:80>\n  ServerName <domain>\n  DocumentRoot "/var/www/pterodactyl/public"\n  \n  AllowEncodedSlashes On\n  \n  php_value upload_max_filesize 100M\n  php_value post_max_size 100M\n  \n  <Directory "/var/www/pterodactyl/public">\n    AllowOverride all\n    Require all granted\n  </Directory>\n</VirtualHost>\n')])])]),a("h3",{attrs:{id:"启用配置-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用配置-4"}},[t._v("#")]),t._v(" 启用配置")]),t._v(" "),a("p",[t._v("创建上面的文件后，只需运行以下命令。如果你在 CentOS 上_你不需要运行下面的命令！_你只需要运行 "),a("code",[t._v("systemctl restart httpd")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 你不需要在 CentOS 上运行这部分的任何命令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" a2enmod rewrite\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart apache2\n")])])])])],1),t._v(" "),a("h4",{attrs:{id:"下一步-wings-后端-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下一步-wings-后端-安装"}},[t._v("#")]),t._v(" 下一步："),a("RouterLink",{attrs:{to:"/wings/installing.html"}},[t._v("Wings (后端) 安装")])],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);