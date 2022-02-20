---
layout: post
title: "Flexible Minecraft Backups"
author: Anton Vogelsang
image: https://ximanton.github.io/assets/img/posts/flexbackup_interface.png
---

We had the struggle a few times on our Minecraft Server: 
Some people destroyed buildings or messed with the world in other ways.
Sometimes we didn't even have backups, but when we had some,
the rollback would wipe all the progress that was made in the time
since the backup was created.

To fix this issue, I wanted to create a tool, that lets you only roll back
the chunks where the destruction happened. Since I had the idea to integrate
this into [Semoxy]({% post_url 2021-08-28-Semoxy %}) later, this should
be a Web Application.

## The Server
First I needed a server that creates the backups, serves the world to the browser
and restores the chunks when requested.

As backend framework, I used [Sanic](https://sanicframework.org/en/), like I did in Semoxy.
For the Minecraft world I/O handling, I decided to write my own python implementation
of the Minecraft world format.  
If you want to use this for yourself, you can install
it with `pip install worldtools`. You can find the source code [on GitHub](https://github.com/xImAnton/WorldTools), Documentation may follow.

The server offers a config file for setting up backup intervals and location, and
a python API for creating user accounts.

**Disclaimer:** *I don't recommend using this on a public accessible server, since
I coded the auth in like 5 minutes. (Don't worry, the passwords are hashed and salted anyway)*

The server operates entirely over a WebSocket interface.
There are actions for requesting chunk data, getting a list of backups, manually
creating backups and patching specific chunks of a specific backup into the target world.

## The Client
The world is displayed in the browser on an HTML Canvas Element, which
was the most obvious option for me.
Since the canvas (and my wonderful code)
comes with performance issues, a better solution might have been using SVGs or
rendering the chunks on the server like Dynmap *(a Minecraft plugin for observing the world in the browser in real-time)* does.

This is what the interface looks like:
![FlexBackup Interface](/assets/img/posts/flexbackup_interface.png)
*Not a design wonder, but it works..*

You can select chunks by clicking on them, which turns them blue.
When there are selected chunks, it displays a list of all available backups.
By clicking on one backup in the list, it will be restored for the selected
chunks.

Navigation in the world is done by dragging with the mouse. You can control some
rendering settings, like chunk borders and the crosshair, with the buttons above.
The mouse wheel can be used to zoom in and out, but I recommend not zooming out
so far as it causes a lot of lag.

BTW: The black areas are there, because Minecraft is very uncertain about
saving height maps, and I'm too lazy to generate my own.

**GitHub:** [https://github.com/xImAnton/FlexBackup](https://github.com/xImAnton/FlexBackup)
