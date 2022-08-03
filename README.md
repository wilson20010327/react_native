---
title: React Native Day 01
tags: react native
description: Build the environment which is required to run the project
---

# React Native 01
Why using Expo platform ?
1. Let the writer can focus on Javascript, don't need to deel with Native
2. Provide some useful API in it's library
3. Build the project and test it on phones(Android or IOS) in realtime with the app(expo go) on phones
4. Can release the app in .apk or .ipa ,without open neither XCode nor Android Studio
## Install 
* [Node.js](https://nodejs.org/zh-tw/download/)
* [Expo CLI](https://docs.expo.dev/get-started/installation/)
## Set up

```shell=
expo init 
```
![](https://i.imgur.com/5GMXGNg.png)
* You can init your own project name(default is my-app)
```shell=
? Choose a template: » - Use arrow-keys. Return to submit.
    ----- Managed workflow -----
>   blank               a minimal app as clean as an empty canvas
    blank (TypeScript)  same as blank but with TypeScript configuration
    tabs (TypeScript)   several example screens and tabs using react-navigation and TypeScript
    ----- Bare workflow -----
    minimal             bare and minimal, just the essentials to get you started
```
* You can choose some sample project (I choose the first one), after init the project done
```shell=
cd my-app
expo start
```
![](https://i.imgur.com/vc35IWJ.png)
* click the website 
![](https://i.imgur.com/Y4fEmWm.png)

* Download app Expo Go on phone and scan the Qrcode with phone, the project will build on the phone, bellow is the init project after build
![](https://i.imgur.com/s3dPajA.png =250x)
