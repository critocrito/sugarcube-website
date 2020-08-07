---
path: "/sugarcube/plugins/twitter_tweet"
title: "twitter_tweet"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-twitter#readme"
tags: ["data","sugarcube","sugarcube plugin","sugarcube-plugin","transformation","twitter"]
---
# twitter_tweet plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-twitter
```


## Usage

Fetch individual tweets by the Tweet ID.

**Configuration:**

-   `twitter.consumer_key`
-   `twitter.consumer_secret`
-   `twitter.access_token_key`
-   \`twitter.access_token_secret\*\*

**Metrics:**

-   `total`: The total number of tweets queried.
-   `fail`: The number of tweets that failed to download.
-   `success`: The number tweets that succeeded to download.
