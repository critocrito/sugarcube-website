---
path: "/sugarcube/plugins/twitter_filter_failing"
title: "twitter_filter_failing"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-twitter#readme"
tags: ["data","sugarcube","sugarcube plugin","sugarcube-plugin","transformation","twitter"]
---
# twitter_filter_failing plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-twitter
```


## Usage

This plugin verifies against the Twitter API that each unit that is a Tweet
exists, and returns all failing Tweets as units in the envelope.

This plugin doesn't collect missing tweets as failures, but it counts the metric.

**Configuration:**

-   `twitter.consumer_key`
-   `twitter.consumer_secret`
-   `twitter.access_token_key`
-   `twitter.access_token_secret`

**Metrics:**

-   `total`: The total number of Twitter tweets queried.
-   `fail`: The number of tweets that failed. This metric is tracked continuously
    as it is detected.
-   `success`: The number of tweets that exist.
-   `missing`: The number of tweets that failed. This metric is emitted once at
    the end of the plugin containing the total number of failed tweets.
