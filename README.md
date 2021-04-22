# covidkashmir-resources

Frontend code of [Resources Tracker - CovidKashmir](https://resources.covidkashmir.org). Written in NextJS & TailwindCSS, deployed on Netlify.

This website deals with Jammu & Kashmir region only. If needed, you can fork this repo and deploy similar sites for other regions.

---

## Features

* Offline Capable
* Lightweight
---
## Future Additions
* Twitter Search URL Generator
* Card to Image (Share to other apps)


---
## How it works

On every build, the `fetchData` function in [`lib/lib.js`](/lib/lib.js) fetches a CSV from Google Sheets (URL defined in `API_URL` environment variable), and provides it to every Resource page.

The Resource Pages are also generated during build (see [`pages/[page].js`](/pages/[page].js) and `getPaths` function in [`lib/lib.js`](/lib/lib.js))  
The CSV is formatted like this:

|Title|Subtitle|Contact|Notes|Source Title|Source Link|Tags|Type|
|-|-|-|-|-|-|-|-|

---
## How to fork
Create a fork, and define an environment variable `API_URL` that points to your source CSV
You can also replace the login in `fetchData` function in [`lib/lib.js`](/lib/lib.js) to connect to your data source and output the data in an Array of Objects which have the following format: 

```json
    [
        {
            "title": "...",
            "subtitle":"...",
            "contact":"...",
            "notes":"...",
            "sourcetitle":"...",
            "sourcelink":"",
            "tags":"",
            "type":""
        },
        {
            "title": "...",
            "subtitle":"...",
            "contact":"...",
            "notes":"...",
            "sourcetitle":"...",
            "sourcelink":"",
            "tags":"",
            "type":""
        },
        .
        .
        .
        .
    ]
```