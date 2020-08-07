---
path: "/sugarcube/plugins/youtube_filter_failing"
title: "youtube_filter_failing"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-youtube#readme"
tags: ["data","sugarcube","sugarcube plugin","sugarcube-plugin","transformation","youtube"]
---
# youtube_filter_failing plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-youtube
```


## Usage

This plugin verifies against the Youtube API that each unit that is a Youtube video exists, and returns all failing videos as units in the envelope. It is meant as the first step in a two step process to verify the number of videos that were taken down by Youtube. The output of this plugin can be send straight to the `media_youtubedl_check` plugin for a more detailed check.

This plugin doesn't collect missing videos as failures, but it counts the metric.

**Configuration:**

-   `youtube.api_key`: The API key for Youtube.com. This option is required.

**Example:**

```json
{
  "plugins": [
    "elastic_import",
    "youtube_filter_failing",
    "media_youtubedl_check"
  ],
  "youtube": {
    "api_key": "<key>"
  },
  "queries": [
    {"type": "glob_pattern", "term": "./es-queries/all-youtube-videos.json"}
  ]
}
```

**Metrics:**

-   `total`: The total number of Youtube videos queried.
-   `fail`: The number of videos that failed. This metric is tracked continuously
    as it is detected.
-   `success`: The number of videos that exist.
-   `missing`: The number of videos that failed. This metric is emitted once at
    the end of the plugin containing the total number of failed videos.
