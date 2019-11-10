---
path: "/plugins/media_warc"
title: "media_warc"
author: "Christo <christo@cryptodrunks.net>"
version: "0.31.2"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-media#readme"
tags: ["@sugarcube/plugin","data","exif","images","media","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# media_warc plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-media
```


## Usage

Archive media of type `url` as a gzipped [WARC](https://iipc.github.io/warc-specifications/) file.

**Configuration Options**:

-   `media.data_dir`: Archive all URL's into this directory. Defaults to `data`.
-   `media.warc_force_download`: Set this flag to `true` for force a archival of the URL, even if it already exists.
-   `media.warc_parallel`: Specify how many websites to archive at the same time. It defaults to 1 and can be set between 1 and 8.

**Example:**

```shell
$(npm bin)/sugarcube -q queries.json -c config.json -p http_import,media_warc
```

**Metrics:**

-   `total`: The total number of URLs archived.
-   `existing`: The number of URLs that already existed as an archive.
-   `fail`: The number of URLs that failed to archive.
-   `success`: The number of URL's that were successfully archived.
-   `new`: The number of new archives out of the number of successfully archived URL's.
