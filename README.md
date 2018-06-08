# Slack Bot @jokebot
Simple intro to working with Slack Bots. Followed guide from Traversy Media https://www.youtube.com/watch?v=nyyXTIL3Hkw&t=1720s

### Dependencies
- slack-bot-api - https://github.com/mishk0/slack-bot-api
- axios - https://github.com/axios/axios

```js
npm install
```

### Configure Slack Bot dependency
```js
const SlackBot = require('slackbots');

const bot = new SlackBot({
  token: '<TOKEN>',  //Bot User OAuth Access Token
  name: '<APP_NAME>' // App name
});
```

 Posting message to Slack Channel
```js
  bot.postMessageToChannel(
    'general',
    'Get Ready to laugh with @jokebot!',
    params
  );
```
