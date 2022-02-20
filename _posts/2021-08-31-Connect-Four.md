---
layout: post
title: "Connect Four"
author: Anton Vogelsang
image: https://ximanton.github.io/assets/img/posts/connect_4.JPG
---

What it says is what it is.  
You can play Multiplayer or against the Computer.
For the virtual opponent I implemented the MiniMax algorithm and
the online Multiplayer required a simple Network Protocol
for Communication between Client and Server.  
I used the pygame library for rendering.

Here you can see the game window:
![Four in a row interface](/assets/img/posts/connect_4.JPG)
The graphics are not the best, but
the rendering is responsive, so the board is always centered and
fits it size to the size of the screen.
The items that led to the win are highlighted by a black line.

This was one of my earliest programming projects.
