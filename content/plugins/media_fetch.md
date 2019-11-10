---
path: "/plugins/media_fetch"
title: "media_fetch"
author: "Christo <christo@cryptodrunks.net>"
version: "0.31.2"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-media#readme"
tags: ["@sugarcube/plugin","data","exif","images","media","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# media_fetch plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-media
```


## Usage

Fetch images and documents from `_sc_media`. Downloaded targets are added to the `_sc_downloads` collection. To fetch videos use the `media_youtubedl` plugin.

**Configuration Options**:

-   `media.data_dir`: Specify the target download directory. Defaults to `./data`.
-   `media.fetch_types`: Fetch files of this media type. Separate different types using a comma. Defaults to "image,document".

**Metrics:**

-   `total`: The total number of files fetched.
-   `existing`: The number of files that were already previously fetched.
-   `success`: The number of files that were successfully fetched.
-   `fail`: The number of files that failed to fetch.
-   `new`: The number of new files out of the number of successfully fetched files.
