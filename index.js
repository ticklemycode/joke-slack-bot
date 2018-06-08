const SlackBox = require('slackbots');
const axios = require('axios');

const bot = new SlackBox({
  token: 'xoxb-377892006181-377655545683-W4II5yAoame49qLsd8B9bF9I', //Bot User OAuth Access Token
  name: 'jokebot' // App name
});

bot.on('start', () => {
  const params = {
    icon_emoji: ':cat:'
  };

  bot.postMessageToChannel(
    'general',
    'Get Ready to laugh with @jokebot!',
    params
  );
});

// Error Handler
bot.on('error', (err) => {
  console.log(err);
});

// Message Handler
bot.on('message', (data) => {
  if(data.type !== 'message') {
    return;
  }

  handleMessage(data.text);
});

// Repspond to data
function handleMessage(message) {
  if(message.includes(' chucknorris')) {
    chuckJoke();
  } else if (message.includes(' yomama')){
    yoMamaJoke();
  } else if(message.includes( 'random')){
    randomJoke();
  }

}


// Tell a Chuck Norris joke
function chuckJoke(){
  axios.get('http://api.icndb.com/jokes/random')
    .then((response) => {
      const joke = response.data.value.joke;

      const params = {
        icon_emoji: ':laughing:'
      }

      bot.postMessageToChannel(
        'general',
        `Chuck Norris: ${joke}`,
        params
      );
    })
}


// Tell a Yo Mama joke
function yoMamaJoke(){
  axios.get('http://api.yomomma.info')
    .then((response) => {
      const joke = response.data.joke;

      const params = {
        icon_emoji: ':laughing:'
      }

      bot.postMessageToChannel(
        'general',
        `${joke}`,
        params
      );
    })
}

// Tell and Random Joke
function randomJoke() {
  const rand = Math.floor(Math.random() * 2);
}