---
path: "/plugins/mongodb_query_units"
title: "mongodb_query_units"
author: "Christo <christo@cryptodrunks.net>"
version: "0.31.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-mongodb#readme"
tags: ["data","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# mongodb_query_units plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-mongodb
```


## Usage

Fetch all units based on a MongoDB query string. The query string is defined
as a SugarCube query, e.g.:

```json
[{
  "type": "mongodb_query_units",
  "term": {}
}, {
  "type": "mongodb_query_units",
  "term": {"_sc_source": "twitter_feed"}
}, {
  "type": "mongodb_query_units",
  "term": {"_sc_markers": {"$elemMatch": {"$in": ["BJUwmvnsg", "S14uPDnog"]}}}
}]
```

**Configuration:**

-   `mongodb.uri`: The database connection string (defaults to `mongodb://localhost/sugarcube`).
