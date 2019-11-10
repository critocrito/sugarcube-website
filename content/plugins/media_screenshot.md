---
path: "/plugins/media_screenshot"
title: "media_screenshot"
author: "Christo <christo@cryptodrunks.net>"
version: "0.31.2"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-media#readme"
tags: ["@sugarcube/plugin","data","exif","images","media","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# media_screenshot plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-media
```


## Usage

Take a screenshot of every URL in `_sc_media` and populate the `_sc_downloads` field with the location of the images. The format of the screenshot is JPEG. Screenshots are stored in `<data_dir>/<unit id>/screenshot/screenshot-<media id>.jpg`.

**Configuration Options:**

-   `media.data_dir`: Store all screenshots into this directory. Defaults to `data`.
-   `media.force`: Force a new screenshot, even if one already exists at the target location.
-   `media.parallel`: Specify how many screenshots to take at the same time. It defaults to 1 and can be set between 1 and 8.

**Example:**

Import some websites and take screenshots of them.

```shell
$(npm bin)/sugarcube -q queries.json -p http_import,media_screenshot
```

**Metrics:**

-   `total`: The total number of screenshots taken.
-   `existing`: The number of screenshots that already exist.
-   `fail`: The number of screenshots that failed.
-   `success`: The number of screenshots that were successfully taken.
-   `new`: The number of new screenshots out of the number of successfully taken screenshots.
