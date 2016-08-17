## Project Overview

This is a breakdown of the top level functionality for building the Feedr application.

* Our reader will pull feeds from various API's such as Mashable, Reddit & Digg

* The user will be able to filter the feeds via a dropdown

* The user will be able to filter the current feeds using search terms

* Clicking an article will render a modal with more info

## Additional Libraries

* jQuery: https://jquery.com/

* Handlebars: http://handlebarsjs.com/

## JSON Data Keys

###Mashable
* **Title** - new.title (returns string)
* **Tags** - new.channel (returns string)
* **Image** - new.responsive_images[0].image (returns string)
* **Summary** - new.content.plain
* **Ranking** - new.shares.total (returns number)
* **URL** - new.link
* **Date** - new.post_date_rfc (returns string)

###Reddit
* **Title** - data.children.data.title (returns string)
* **Tags** - data.children.data.subreddit (returns string)
* **Image** - data.children.data.preview.images.source.url (returns string)
* **Summary** - data.children.data.title (retuns string) note:reddit doesn't offer a summary
* **Ranking** - data.children.data.score (returns number)
* **URL** - data.children.data.url (returns string)
* **Date** - data.children[i].data (returns number)

###Dig
* **Title** - data.feed.content.title_alt (returns string)
* **Tags** - data.feed.content.tags (returns array of objects, each tag key is 'display')
* **Image** - data.feed.content.media.images[0].original_url (returns string)
* **Summary** - data.feed.content.description
* **Ranking** - data.feed.content.digg_score (returns number)
* **URL** - data.feed.content.original_url
* **Date** - data.feed[i].date (returns number)

## jQuery Functional Requirements

## Change Log

## Issues and Resolutions

This section will contain a list of all issues encountered and their resolution

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier
**RESOLUTION**: Missing comma after first object in sources {} object



**ERROR**: app.js:35 Uncaught ReferenceError: Handlebars is not defined
**RESOLUTION**: Moved the handlebars source code above the app.js code




