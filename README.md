# keycloak-cordova-example

A sample ionic/cordova application showing a bug in the cordova implementation of the keycloak.js adapter 

## Prerequisites

|Tool | min Version |
|-|-|
|node|11.0.0|
|npm|6.9.0|
|ionic-cli|4.12.0|
|cordova|9.0.0|

## Build

* Add `http://localhost/*` to the "Valid Redirect URIs" of your keycloak client 
* In `src/app/app-init.ts` change the keycloak config according to your own server configuration (url should be in the form `<protocol>://<host>/auth`)

/!\ You need a distant keycloak server so it works on remote devices (you can't use a local hosted keycloak server to test this as it will not be accessible to android or ios device)

* `npm install`
* `ionic cordova platform add android` (or `ios`)
* `ionic cordova run android`  (or `ios`)

! The adapter does not work with cordova browser ! 

