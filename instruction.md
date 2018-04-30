At the following url (http://np-ec2-nytimes-com.s3.amazonaws.com/dev/test/nyregion.js), you'll find a jsonp file that gives you a list of stories, headlines, summaries and photos about New York. Your task is to create a static webpage that does the following:


Performs a client side request to fetch the contents of this JSONP file.

Lay out the stories in a simple list with the information you think should display for each article. Extra points for making a beautiful, "Timesian" presentation of the list.

Make sure the page is responsive, with designs accommodating a 960+ web breakpoint, a 768 pixel tablet breakpoint, and a 320 pixel mobile breakpoint. (Images of layouts start on the next page)

Create the ability to toggle between English and a fake Martian language that follows these rules:

every word three characters or less is left alone

every word more than three characters is replaced with boinga.

maintain the same capitalization and punctuation in the English and Martian Versions.

Please use git to track changes while you work and include your .git file in your submission.

Write up a quick README.md that explains how to get the project up and running, including installing any necessary dependencies.

For your test, please use vanilla Javascript, not any compiled-to-JS languages such as coffeescript. You may use whatever server-side language you decide is necessary. You are free to use whatever frameworks and libraries you think are necessary, but be careful. We’ll be looking for an over-reliance on unnecessarily bulky frameworks for this exercise.