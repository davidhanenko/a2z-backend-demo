module.exports = {
  //...
  settings: {
    cors: {
      origin: [
        'https://a2z-frontend-demo.vercel.app',
        'https://a2z-demo.herokuapp.com',
        'http://localhost:1337',
        'http://localhost:7777',
      ],
    },
    // 10 Mb max upload file size
    parser: {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 10 * 1024 * 1024,
      },
    },
  },
};
