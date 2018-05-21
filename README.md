# KODI IP driver for NEEO.

This will be a full featured kodi driver for NEEO. This driver is in an early alpha stage and won't work with the current NEEO version or the current SDK version.

## Features

* Discovering KODI instances
* Wake on Lan as POWER ON command.
* Browse through movies and recent Movies. (add the <Directory> Movie Library as shortcut).
* Browse through TV Shows and recent episodes. (add the <Directory> TV Shows Library as shortcut)
* All known API commands are exposed as buttons.
* Button to update Audio Library.
* Button to update Video Library.
* Content aware buttons.

## Caviats

- Kodi password must be set to nothing. Username/Password is not handled.
- Code Spagetti. Code needs to be cleaned but should work as intended.
- Browsing Library PVR and Music have to be fully rewritten (like i did with Movies.)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.


### Prerequisites

You will need a copy of Node.js (v6) installed, see http://nodejs.org
On windows you need either Bonjour SDK or iTunes installed for MDNS discovery.


### Installing

Download or clone the github files to a directory of your choosing.
Extract the files.
Use your computers console and go to the path where the files are extracted and Install the package using NPM.

```
npm install
```


## Running the driver

Use your computers console and go to the path where the files are extracted, Start the index.js file with node.

```
node index.js
```

## KODI Settings

In Kodi make sure to enable the following settings: 
  * "Announce services to other systems", 
  * "Allow remote control via HTTP",
  * "Allow remote control from applications on other systems". 

## Usefull links

* [NEEO](https://neeo.com/) - Official NEEO website.
* [Planet NEEO](https://planet.neeo.com/) - Official NEEO community website.
* [KODI](https://kodi.tv/) - Official KODI website.
* [NEEO-SDK](https://github.com/NEEOInc/neeo-sdk) - NEEO SDK github.
* [NEEO-SDK Docs](https://neeoinc.github.io/neeo-sdk/) - Detailed SDK documentation.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Niels de Klerk** - *Initial work* - [Github](https://github.com/nklerk/)
* **NEEO** - *SDK* - [Website](https://neeo.com/)


## License

This project is licensed under the MIT License

## Releases

### Version 1.0.7
- Changed the way to obtain the MAC address.

### Version 1.0.6
- Added content aware controlls. i.e. using cursor in movie to skip.

### Version 1.0.5
- Added Discovery logging to troubleshoot.
- removed IP in index.
- restructuring code.... (Still ongoing, could take a while)
- Starting to implement content aware buttons to behave like normal ir Remote or Key's

### Version 1.0.4
- Fixed "ENTER" -> "CURSOR ENTER"
- Fixed Button controlls.
- Added Connection banner in KODI.
- Added Offline discovery.
- Automatically reconnect.
- Rewritten WOL, (POWER ON)
- Automatically connect to KODI instance when POWER ON command is send. (maximum boot duration supported is 5 Minutes).
- Manual connect to KODI instance when any command is send. (Command is not queued except for Power ON and Power Off).
- restructured Commands.
- Cleaned NEEO Controller.
- Added logo_NEEO_Twitter to images.
- Removed discovery from browserService-Movie.
- Removed discovery from browserService-TVShow.
- Added timer configuration in KODI Controller.

### Version 1.0.3
- Rewritten BrowserService for TV Shows

### Version 1.0.2
- Restructured discovery process.
- Restructured controller for Kodi.
- Rewritten BrowserService for Movies.
- Added BrowserService for music
- Added BrowserService for pvr
- Added BrowserService for TV Shows
