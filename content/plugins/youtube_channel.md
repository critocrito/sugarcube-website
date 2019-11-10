---
path: "/plugins/youtube_channel"
title: "youtube_channel"
author: "Christo <christo@cryptodrunks.net>"
version: "0.31.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-youtube#readme"
tags: ["data","sugarcube","sugarcube plugin","sugarcube-plugin","transformation","youtube"]
---
# youtube_channel plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-youtube
```


## Usage

Fetch a list of videos from a channel. A query must be configured to supply one or more channel ids.

```json
[{
  type: "youtube_channel",
  term: "UCJkMlOu7faDgqh4PfzbpLdg"
}, {
  type: "youtube_channel",
  term: "https://www.youtube.com/channel/UC_QIfHvN9auy2CoOdSfMWDw/featured"
}]
```

The channel query can be provided either as an id (e.g. `UC_QIfHvN9auy2CoOdSfMWDw`) or as the full URL to the channel (e.g. `https://www.youtube.com/channel/UC_QIfHvN9auy2CoOdSfMWDw/featured`). The last segment of the channel URL (in this case `featured`) is optional. The relevant part is the `/channel/<channel-id>` part of the URL.

The Youtube API key must be set as well. You can do this by setting the `youtube.api_key` config option:

```shell
--youtube.api_key <key>
```

or setting it in the JSON configuration file:

```json
{
  "youtube": {
    "api_key": "<key>"
  }
}
```

Other Possible config values are:

```json
{
  "youtube": {
    "published_before": "2017-06-22",
    "published_after": "2017-06-22",
    "past_days": 30,
  }
}
```

Setting any of these increases performance, but is capped at around 500 video results.

The following example fetches a Youtube channel and downloads all available
videos. It uses the `media_youtubedl` plugin.

```shell
$(npm bin)/sugarcube -c config.json \
                     -q channels.json \
                     -p youtube_channel,media_youtubedl
```

**Metrics:**

-   `total`: The total number of Youtube channels queried.
-   `fail`: The number of channels that failed.
-   `success`: The number of channels that succeeded to download.
-   `fetched`: The number of videos that are fetched from the channels.
