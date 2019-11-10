---
path: "/plugins/twitter_feed"
title: "twitter_feed"
author: "Christo <christo@cryptodrunks.net>"
version: "0.31.2"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-twitter#readme"
tags: ["data","sugarcube","sugarcube plugin","sugarcube-plugin","transformation","twitter"]
---
# twitter_feed plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-twitter
```


## Usage

Fetch the tweets of a twitter user account.

**Configuration:**

-   `twitter.consumer_key`
-   `twitter.consumer_secret`
-   `twitter.access_token_key`
-   `twitter.access_token_secret`
-   `twitter.tweet_count`
-   \`twitter.retweets\*\*

**Metrics:**

-   `total`: The total number of feeds queried.
-   `fail`: The number of feeds that failed to query.
-   `success`: The number of feeds that succeeded.
-   `fetched`: The number of tweets that were fetched from all feeds.
