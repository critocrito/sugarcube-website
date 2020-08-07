---
path: "/sugarcube/plugins/media_youtubedl_check"
title: "media_youtubedl_check"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-media#readme"
tags: ["@sugarcube/plugin","data","exif","images","media","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# media_youtubedl_check plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-media
```


## Usage

Check any video in \`\_sc_media\*\* if it is still available.

**Configuration Options:**

-   `media.youtubedl_cmd`: The path to the `youtube-dl` command. Defaults to `youtube-dl`, with no specific path supplied.
-   `media.youtubedl_parallel`: Specify how many videos to fetch at the same time. It defaults to 1 and can be set between 1 and 8.
-   `media.youtubedl_delay`: Wait between invocations of youtube-dl for `DELAY <= N < 2xDELAY` seconds. Defaults to 0 seconds.
-   `media.youtubedl_source_addresses`: Bind `youtube-dl` to the one or more source IP address. If there are more than one addresses, balance in a round robin fashion. Defaults to the default route of the host. Set it to an array of IP addresses in a JSON config file.

```json
{
  "media": {
    "youtubedl_source_addresses": ["192.168.2.100", "192.168.2.101"]
  }
}
```

**Metrics:**

-   `total`: The total number of videos checked.
-   `fail`: The number of videos that failed to check.
-   `success`: The number of videos that were successfully checked.
