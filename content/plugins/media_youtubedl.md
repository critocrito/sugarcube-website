---
path: "/plugins/media_youtubedl"
title: "media_youtubedl"
author: "Christo <christo@cryptodrunks.net>"
version: "0.31.2"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-media#readme"
tags: ["@sugarcube/plugin","data","exif","images","media","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# media_youtubedl plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-media
```


## Usage

Download all videos of type `video` that are stored in `_sc_media`. SHA256 and MD5 sums are calculated for those downloads. It also downloads thumbnails and subtitle files if available. The plugin uses the external `youtube-dl` program to actually download. This makes it [compatible](https://rg3.github.io/youtube-dl/supportedsites.html) with a variety of websites.

**Configuration Options**:

-   `media.data_dir`: Download all videos into this directory. Defaults to `data`.
-   `media.download_format`: Download videos in this video format. Defaults to `mp4`.
-   `media.youtubedl_cmd`: The path to the `youtube-dl` command. Defaults to `youtube-dl`, with no specific path supplied.
-   `media.youtubedl_parallel`: Specify how many videos to fetch at the same time. It defaults to 1 and can be set between 1 and 8.
-   `media.youtubedl_force_download`: Set this flag to `true` for force a download of the video, even if it already exists.
-   `media.youtubedl_delay`: Wait between invocations of youtube-dl for `DELAY <= N < 2xDELAY` seconds. Defaults to 0 seconds.
-   `media.youtubedl_source_addresses`: Bind `youtube-dl` to the one or more source IP address. If there are more than one addresses, balance in a round robin fashion. Defaults to the default route of the host.

```json
{
  "media": {
    "youtubedl_source_addresses": ["192.168.2.100", "192.168.2.101"]
  }
}
```

**Example:**

```shell
$(npm bin)/sugarcube -q queries.json -c config.json -p twitter_feed,media_youtubedl
```

**Metrics:**

-   `total`: The total number of videos downloaded.
-   `existing`: The number of videos that already existed.
-   `fail`: The number of videos that failed to download.
-   `success`: The number of videos that were successfully downloaded.
