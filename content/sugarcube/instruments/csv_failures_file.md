---
path: "/sugarcube/instruments/csv_failures_file"
title: "csv_failures_file"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-csv#readme"
tags: ["csv","data","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# csv_failures_file instrument

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-csv
```


## Usage

Export failures to a CSV file. The name of the file is `<data-dir>/failed-stats-<marker>.csv`. If the `label` is configured, the filename is `<data-dir>/failed-stats-<label>-<marker>.csv`.

**Configuration:**

-   `csv.delimiter`: Specify the csv delimiter. Defaults to `,`.
-   `csv.data_dir`: Specify the directory location to write the file to. Defaults to `./data`.
-   `csv.label`: Specify an additional label to add to the file name of the exported CSV file.
-   `csv.append`: Append failures to a CSV file if that file already exists. The
    default behavior is to overwrite any CSV file if it has the same name.

**Example:**

```shell
sugarcube -I csv_failures_file --csv.data_dir ./csv -p youtube_channel -c config.json
```

```json
{
  "instruments": ["csv_failures_file"],
  "plugins": ["youtube_channel"],
  "csv": {
    "data_dir": "./csv"
  },
  "queries": [{"type": "youtube_channel", "term": "non-existing"}]
}
```
