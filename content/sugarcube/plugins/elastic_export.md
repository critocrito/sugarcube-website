---
path: "/sugarcube/plugins/elastic_export"
title: "elastic_export"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-elasticsearch#readme"
tags: ["data","data storage","elasticsearch","sugarcube","sugarcube-plugin","transformation"]
---
# elastic_export plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-elasticsearch
```


## Usage

Store data of the current envelope in Elasticsearch.

**Configuration Options:**

-   `elastic.host`: Set the hostname of the Elasticsearch server. Defaults to `localhost`.
-   `elastic.port`: Set the port of the Elasticsearch server. Defaults to `9200`.
-   `elastic.index`: Define the prefix to be used for index names. Defaults to `sugarcube`.
-   `elastic.omit_fields`: Omit those fields from being stored in Elasticsearch. Define multiple fields by separating them with a comma.
-   `elastic.mappings`: Supply a path to a JSON file that contains custom mapping definitions. Those custom mappings are merged into the default mappings, which can be found in [`./src/mappings.js`](./src/mappings.js).

**Example:**

```shell
sugarcube -Q ddg_search:Keith\ Johnstone -p ddg_search,elastic_export
```

To use custom mapping, write your mappings in a JSON file:

```json
{
  "cities": {"type": "nested"}
}
```

```shell
sugarcube -Q ddg_search:Keith\ Johnstone \
          -p ddg_search,elastic_export \
          --elastic.index dancers \
          --elastic.mappings mappings.json
```

Indices are created the first time an export happens. In order to change the mappings of an existing index see [this](https://www.elastic.co/blog/changing-mapping-with-zero-downtime), [this](https://www.elastic.co/blog/reindex-is-coming) and [this](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-reindex.html).

**Metrics:**

-   `total`: The total number of units exported.
-   `new`: The number of new units indexed.
-   `existing`: The number of existing units updated.
-   `fail`: The number of units that failed to export.
