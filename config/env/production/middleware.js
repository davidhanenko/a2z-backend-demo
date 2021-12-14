module.exports = {
  settings: {
    load: {
      before: ['responseTime', 'logger', 'cors', 'responses'],
      after: ['parser', 'router'],
    },
    cors: {
      origin: [
        'https://a2z-frontend-demo.vercel.app',
        'https://a2z-demo.herokuapp.com',
        'http://localhost:1337',
        'http://localhost:7777',
      ],
    },
  },
};
