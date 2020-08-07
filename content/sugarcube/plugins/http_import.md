---
path: "/sugarcube/plugins/http_import"
title: "http_import"
author: "Christo <Christo@cryptodrunks.net>"
version: "0.41.0"
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

Import of regular websites are done using a browser session (based on the [Adapting the Hypercube Model to Archive Deferred Representations and Their Descendants](https://arxiv.org/abs/1601.05142) paper by Justin F. Brunelle, Michele C. Weigle and Michael L. Nelson). Imports of other types (e.g. documents) are done using simple HTTP requests.

**Configuration:**

-   `http.import_parallel`: Specify how many HTTP URL's to import at the same time. It defaults to 1 and can be set between 1 and 8.

**Example:**

The following example imports a website and extracts the contents from it. Any images found are fetched as well and finally it creates a WARC archive and takes a screenshot.

```shell
$(npm bin)/sugarcube -p http_import,media_fetch,media_warc,media_screenshot \
                     -Q http_url:'https://mwatana.org/en/airstrike-on-detention-center/' \
                     --http.import_parallel 2
```

**Metrics:**

-   `total`: The total number of queries imported.
-   `success`: The number of URLs that were successfully imported.
-   `fail`: The number of URLs that failed to import.
