---
root: "/docs"
title: Writing a plugin
parents: ["Development"]
---

import Synopsis from "../../src/components/Synopsis"
import Note from "../../src/components/Note"

<Synopsis>
<li>This tutorial takes you through the process of developing a new plugin for Sugarcube.</li>
<li>By developing new plugins you can extend the functionality of Sugarcube and support specific needs of your data investigation.</li>
</Synopsis>

# Writing a new Plugin

Functionalities of Sugarcube are stored and distributed using plugins. Without any plugin, Sugarcube doesn't really do much. When installing `@sugarcube/sugarcube` a whole bunch of plugins are getting installed already. But often you need additional functionality that doesn't come out of the box. Writing your own plugin is the way to go here.

<Note>
In order to write a plugin you need to write code. If you have never done so, you can ask someone else to write it for you or learn enough coding yourself to write the functionality you require. See <a href="https://github.com/vioan/nodejs-learning-resources">this website</a> for various ressources on learning coding and NodeJS.
</Note>
