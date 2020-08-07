---
path: "/sugarcube/plugins/mongodb_fetch_units"
title: "mongodb_fetch_units"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-mongodb#readme"
tags: ["data","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# mongodb_fetch_units plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-mongodb
```


## Usage

Fetch units by `_sc_id_hash` from the database. Supply the query type
`mongodb_unit` that specifies the id hash of the unit.

```shell
sugarcube -d -Q mongodb_unit:06b11b54d8c7c62af2c058d8c1f814cac5415bf149b790d447f0b34280f625d6 -p mongodb_fetch_units,tap_printf
```

**Configuration:**

-   `mongodb.uri`: The database connection string (defaults to `mongodb://localhost/sugarcube`).
