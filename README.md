# Everyo

Send "Every X minutes/hours/days" style statistics to subscribers via Yo.

## How it Works

Let's start with a statistic. Every 28 hours a police officer or vigilante kills an unarmed black person in the United States. For this statistic, we create a Yo account, COPKILLSUNARMEDBLACK.

1. A user Yos this account. This adds the user to a list of subscribers.
2. Every 28 hours the account sends a Yo to all subscribers.
3. That's it.

## Setup

1. Setup any accounts necessary with the [Yo dev admin](http://dev.justyo.co/).
2. Install [mongo](http://www.mongodb.org/) (used by Agenda).
2. Copy `settings.example.json` to `settings.json`. Fill in values. If you are deploying to Heroku, set them as environment variables instead.
3. `npm install`
4. `npm start`

## Current Statistics

- COPKILLSUNARMEDBLACK: Every 28 hours a police officer or vigilante [kills an unarmed black person](http://mxgm.org/operation-ghetto-storm-2012-annual-report-on-the-extrajudicial-killing-of-313-black-people/) in the United States.
- AWOMANISASSAULTED: Every 9 seconds [a woman is battered](http://www.padv.org/documents/Statistics_DV.pdf) in the United States.

## Adding a Statistic

If you would like to add a statistic, please open an issue or make a pull request to this README. Do not create the account. Whether the statistic will be added or not is a matter of my own taste, but you're free to fork this project and run your own. Statistics will need a citation.

## License

The MIT License (MIT)

Copyright (c) 2014 Caleb Troughton

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
