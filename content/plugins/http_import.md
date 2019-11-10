---
path: "/plugins/http_import"
title: "http_import"
author: "Christo <Christo@cryptodrunks.net>"
version: "0.31.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-http#readme"
tags: ["data","http","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# http_import plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-http
```


## Usage

Import queries of query type `http_url` as Sugarcube units. The unit only contains the URL as `location` field. The MIME type of the url is determined and set in `_sc_media` so that other plugins can do further transformations on the unit.

**Metrics:**

-   `total`: The total number of queries imported.
-   `success`: The number of URLs that were successfully imported.
-   `fail`: The number of URLs that failed to import.
