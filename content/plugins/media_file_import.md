---
path: "/plugins/media_file_import"
title: "media_file_import"
author: "Christo <christo@cryptodrunks.net>"
version: "0.31.2"
bugs: "https://github.com/critocrito/sugarcube/issues"
license: "GPL-3.0"
homepage: "https://github.com/critocrito/sugarcube/tree/master/packages/plugin-media#readme"
tags: ["@sugarcube/plugin","data","exif","images","media","sugarcube","sugarcube plugin","sugarcube-plugin","transformation"]
---
# media_file_import plugin

```toc
from-heading: 2
to-heading: 2
```

## Installation

```shell
npm install --save @sugarcube/plugin-media
```


## Usage

Import media files into the data collection. This plugin works with the `fs_import` plugin.

**Configuration Options:**

-   `media.data_dir`: Import all videos into this directory. Defaults to `data`.
-   `media.import_video_format`: Import videos in this video format. Defaults to `mp4`.
-   `media.ffmpeg_cmd`: The path to the `ffmpeg` command which is used to import videos. Defaults to `ffmpeg`, with no specific path supplied.
-   `media.import_parallel`: Specify how many files to import at the same time. It defaults to 1 and can be set between 1 and 8.
-   `media.force_import`: Set this flag to `true` for force an import of the file, even if it already exists.
-   `media.keep_original`: If set to true, make a copy of the original file as well. The original is copied as is, without any transformation. Defaults to `false`.

**Example:**

```shell
$(npm bin)/sugarcube -Q glob_pattern:~/files/* -p fs_import,media_file_import
```

**Metrics:**

-   `total`: The total number of files imported.
-   `existing`: The number of files that already existed.
-   `fail`: The number of files that failed to import.
-   `success`: The number of files that were successfully imported.
-   `new`: The number of new files out of the number of successfully imported files.
