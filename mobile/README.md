## FastFeet Mobile

Antes de subir o emulador de Android / iOS, tenha o backend rodando:
```sh
$ docker-compose up
```

Agora suba o Emulador Android / iOS e depois rode os seguintes comandos:

```sh
yarn
react-native start
react-native run-android
```

### Debugging with Reactotron
```sh
# first open Reactotron
$ react-native start
$ react-native run-android
$ adb reverse tcp:9090 tcp:9090 # wait Android Emulator open before run this command
# now Reload app with "react-native start": press "r"
```

<h1 align="center">
  <img src=".github/mobile/login.png" />
  <img src=".github/mobile/deliveries.png" />
  <img src=".github/mobile/details.png" />
  <img src=".github/mobile/perfil.png" />
  <img src=".github/mobile/confirm.png" />
  <img src=".github/mobile/problems.png" />
  <img src=".github/mobile/new_problem.png" />
</h1>
