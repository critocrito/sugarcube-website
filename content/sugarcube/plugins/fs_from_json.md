---
path: "/sugarcube/plugins/fs_from_json"
title: "fs_from_json"
author: "Christo <christo@cryptodrunks.net>"
version: "0.41.0"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-fs#readme"
tags: ["data","sugarcube","sugarcube-plugin","transformation"]
---
# fs_from_json plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-fs
```


## Usage

The query type is `glob_pattern`. It expands the glob pattern and import each file as a JSON file. The contents of the JSON files are imported as units of data.

**Example:**

```shell
sugarcube -Q glob_pattern:path/to/files/*.json -p fs_from_json
```

**Configuration:**

This plugin offers no configuration.

**Metrics:**

-   `total`: The total number of units imported.
-   `fail`: The number of files that failed to import.
-   `success`: The number of units that succeeded to import.
