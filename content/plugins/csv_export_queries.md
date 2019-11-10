---
path: "/plugins/csv_export_queries"
title: "csv_export_queries"
author: "Christo <christo@cryptodrunks.net>"
version: "0.31.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-csv#readme"
tags: ["csv","data","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# csv_export_queries plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-csv
```


## Usage

Export the queries of an envelope to a file.

**Configuration**:

-   `csv.delimiter` (defaults to `,`)

    Specify the csv delimiter.

-   `csv.queries_filename` (defaults to `out.csv`). Specify the target queries file.

```shell
$(npm bin)/sugarcube -c config.json \
                     -p sheets_queries,csv_export_queries \
                     --csv.queries_filename queries.csv
```
