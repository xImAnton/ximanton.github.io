---
layout: post
title: "Crawling Moodle"
author: Anton Vogelsang
---

Homeoffice Time: Video conferences can take place everytime
and if your school uses some unorganized platform like moodle, which
only has video conferences from an integration of BigBlueButton, I 
would be very surprised if that offers features like notifications -
Of course, it doesn't.

So how could we manage our conferences schedule?  
Since I was hanging out on discord with friends the whole day anyway,
It would be very handy to have a discord bot, that just tells
you when a conference is starting.

## The Plan
The bot has to log in to moodle, lets say, every half hour. After that it has
to crawl all pending conferences, send discord notifications for every added and
delete the messages when a conference is over.

## How to crawl this thing?
Since I couldn't find complete docs for the moodle login procedure and calendar,
I used a browser automation tool in the early development.
But I never liked these techniques, it just feels bad for me.  
So how could we get that information anyways?  
I was lucky there is a moodle app. I was even more lucky, this app also 
runs on Windows 10. **App = API**!

I installed fiddler, opened the moodle app and logged in. From there on it was
easy to reverse-engineer the login procedure and other useful API calls.

I wrote an extensible python wrapper for the part that I was interested in.
You can find in on my [GitHub](https://github.com/xImAnton/moodlecrawler).
Feel free to extend it and open a PR, if you need another part of the API covered.

## Notifications
I created a new discord bot, installed the API wrapper (`pip install -i https://test.pypi.org/simple/ moodle-xImAnton`).

The wrapper now logs in to moodle every 30 minutes, fetches all conferences for 
the next 30 days, computes the differences between
the new and previous data using set operations, deletes the messages for conferences
that are no longer present (or ended), edits the messages for conferences whose
time has changed and sends new messages when a new conference was discovered.

In action, that looks like this:
![Discord Screenshot](/assets/img/posts/moodle_discord.png)

5 Minutes before the start of a conference it pings a role and sends a link to the
conference.
