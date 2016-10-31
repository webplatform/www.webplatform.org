# WebPlatform static site NGINX configuration

Add the following files to into NGINX.

Assuming that this folder is in `/srv/webapps/www/webplatform/www/config/nginx/`;

    for i in `ls -1`; do ln -s /srv/webapps/www/webplatform/www/config/nginx/$i /etc/nginx/sites-enabled/$1; done
