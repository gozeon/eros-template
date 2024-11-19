# dev

创建 docker 镜像

```docker
docker build . -t eros
```

启动环境

```docker
docker run --rm -it -p 4000:8080 -v $PWD:/app -w /app eros /bin/sh
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
