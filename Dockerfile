
# Etapa 2: Servidor Nginx
FROM nginx:alpine
COPY ./dist/browser /usr/share/nginx/html

#Usa este archivo para definir cómo responder a las peticiones que lleguen al servidor.
COPY nginx.conf /etc/nginx/conf.d/default.conf

#CMD ["nginx", "-g", "daemon off;"]