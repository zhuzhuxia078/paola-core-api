const bodyParser = require('body-parser');
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const apiRouter = require('./apiRouter');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client/dist`));

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
  console.log('pong');
  res.json('pong');
});

app.post('/', async (req, res) => {
  console.log(req.body);
  const { challenge } = req.body;
  console.log('Paola: Hello Anthony!');

  // POST https://slack.com/api/chat.postMessage
  // Content-type: application/json
  // Authorization: Bearer xoxb-your-token
  // {
  //   "channel": "YOUR_CHANNEL_ID",
  //   "text": "Hello world :tada:"
  // }

  const headers = {
    // Authorization: `Bearer ${process.env.LEARN_TOKEN}`,
    Authorization: 'Bearer xoxb-1077694166082-1357225549973-Ln0sYN2oAtROKdWMfFTJBrCe',
    'Content-Type': 'application/json',
  };

  const body = {
    channel: 'C011UU8USQ7',
    text: 'Update the event URL when you close ngrok stupid! :facepalm:',
  };

  try {
    const response = await fetch(
      // `${LEARN_API_COHORTS}/${cohortId}/users`,
      'https://slack.com/api/chat.postMessage',
      { method: 'POST', body: JSON.stringify(body), headers },
    );
    const json = await response.json();
    console.log(json);
    // if (json.error || json.message) throw new Error(json.error || json.message);
    // return json.status;
  } catch (err) {
    // return error.message;
    console.log(err);
  }

  res.setHeader('content-type', 'application/json');
  res.status(200);
  res.json({ challenge });
});

app.post('/ping', async (req, res) => {
  console.log('Paola: Hello Anthony!');

  // POST https://slack.com/api/chat.postMessage
  // Content-type: application/json
  // Authorization: Bearer xoxb-your-token
  // {
  //   "channel": "YOUR_CHANNEL_ID",
  //   "text": "Hello world :tada:"
  // }

  const headers = {
    // Authorization: `Bearer ${process.env.LEARN_TOKEN}`,
    Authorization: 'Bearer xoxb-1077694166082-1357225549973-Ln0sYN2oAtROKdWMfFTJBrCe',
    'Content-Type': 'application/json',
  };

  const body = {
    channel: 'C011UU8USQ7',
    text: 'Update the event URL when you close ngrok stupid! :facepalm:',
  };

  try {
    const response = await fetch(
      // `${LEARN_API_COHORTS}/${cohortId}/users`,
      'https://slack.com/api/chat.postMessage',
      { method: 'POST', body: JSON.stringify(body), headers },
    );
    const json = await response.json();
    console.log(json);
    // if (json.error || json.message) throw new Error(json.error || json.message);
    // return json.status;
  } catch (err) {
    // return error.message;
    console.log(err);
  }

  res.setHeader('content-type', 'application/json');
  res.status(200);
  // res.json({ challenge });
  res.sendStatus(200);
});



// app.post('/bot/ping', (req, res) => {
//   console.log('Paolo: "Hello Precourse!"');
//   res.json('Paolo: "Hello Precourse!"');
// });

module.exports = app;
