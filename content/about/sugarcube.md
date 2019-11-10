---
title: "Sugarcube"
---

# Sugarcube

## Makes data-based investigations more effective

Sugarcube is a tool designed to suport journalists, non-profits, academic researchers, human rights organisations and others with investigations using online, publicly-available sources (e.g.tweets, videos, public databases, websites, online databases).

## Expands the scope of what you are able to do

- **Free up human brainpower and time**: At the moment, many research tasks (e.g. finding tweets containing a certain keyword) are being done manually. Sugarcube automates the tasks that can be automated, which frees up people to do the things that people are best at (verification, interpretation, etc).

- **Get more data _and_ more capacity to make sense of it.** Sugarcube allows you to go through large amounts of information, and collect, organise and and analyse it

- **Rinse, repeat and remember** Sugarcube allows you to set up a regular process (e.g. a simple search for x every day, or an entire sequence of tasks). Your computer will also keep an automatic record of everything you've done, so you can always go back and check or repeat it.

- **Automatically document your work** Your computer will keep an automatic record of what you have done, so you can always go back and repeat it.

## Flexible and adaptable (or, how Sugarcube works)

Sugarcube is a modular tool. It is made up of lots of individual tasks, carried out through a small piece of code Sugarcube calls a "Plugin". Plugins can be configured to your needs (e.g. a DuckDuckGo search plugin can be configured to do a search for a specific term or list of terms), which you can string together in an automated sequence - Sugarcube calls this a "Pipeline".

Each task in the Pipeline pruduces information, or data (e.g. a list of search results or screenshots of tweets), which is then sent to the next Plugin in the Pipeline, and so on. What comes out at each stage depends on how you have set up the pipeline - search results, for example, could be automatically put into a  text file, a csv file, or a Google spreadsheet. Thiscould then be put into a database, or compared against previous results, etc.

[plugin1] -> output -> [plugin2] -> output -> [plugin3] -> output

Once you've configured your Pipeline, it becomes an automated, repeatable workflow. One command sets the whole thing in motion.

## Makes use of effective existing tools

Sugarcube has some powerful functions of its own, but it also harnesses the power of effective tools that already exist (e.g. DuckDuckGo Search, Google Sheets) - there is nothing to be gained in reinventing the wheel here.


## You don't need to be able to code

To set up your pipeline initially, you will need the support of someone who has some understanding of how code works (and possibly also some understanding of how databases work, depending on your project). This person should be able to support you in looking through the options of what Sugarcube can do. See some example workflows below, and have a look at the (list of Sugarcube plugins)[link] for the details and technical options), and match this to what _you_ want to do. Together, you can configure a pipeline that fits what you want to do.

Once a Sugarcube pipeline has been configured and the tool set up on your machine, it's fairly straightforward to use. You will probably need to run a couple of lines of code through the Command Line Interface (CLI) of your computer - most computer users are able to do this if given a short but adequate introduction to this tool.

## Developed in collaboration with civil society organisations

Sugarcube was developed in close collaboration with a number of organisations, academics and activist in order to refine the tool and adapt it to the needs of those actively conducting data-based investigations. These include:

- [Syrian Archive](https://syrianarchive.org/en). Uses Sugarcube to monitor and archive video evidence of human rights violations in Syria. The systems and workflows developed with Syrian Archive are now being expanded to do similar work in Yemen, Sudan and others.

- Data Justice Lab, [Data Scores](https://data-scores.org/) project. Built using Sugarcube, the Data Scores investigation tool provided evidence and insights for research into how data analytics and data-driven "scoring" were being used in the public sector of the UK to make decisions.

- Work involving scanning large numbers of public databases (e.g. registers of companies active in a certain sector) to monitor any changes (this can be a tip-off for further investigation).


## What you can add to your pipelines

To get a better sense of what a Sugarcube pipeline actually looks like, it helps to do the <a href="/docs/tutorial">Tutorial</a> - this takes you through setting up Sugarcube and actually running your first few simple pipelines. From there you can build up complexity.

It's also useful to have a look at the list of Plugins, since these are the building blocks of any pipeline you want to create.

Below is a brief summary of the types of things you can use Sugarcube to do:

- Scrape large amounts of evidence (e.g. from Twitter, YouTube, websites).
- Preserve what you find in a way that is organised, retains the content, and avoids avoids duplication when you add new content.
- Monitor online ressources for changes and get a regular overview of those changes.
- Detect content (e.g. social media posts) that were taken down.

## Example pipelines

Example of a simple Twitter-based pipeline:

1. Collect tweets with x keyword in x area from x dates
2. Take screenshots of collected tweets and store them in a folder
3. Put tweet texts into a spreadsheet

Rinse and Repeat (Sugarcube will make sure there are no duplicated entries).

Example of a simple search-based pipeline:

1. Create a spreadsheet of the top 20 results of searches on 5 specific keywords.
2. From those links, download the text of each page of the text results.
3. Now you have a specific pool of content that you can run different searches on to fnd what you need.
