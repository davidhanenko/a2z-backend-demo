module.exports = {
  //...
  settings: {
    cors: {
      origin: ['http://localhost:1337', 'http://localhost:7777'],
    },
    // 10 Mb max upload file size
    parser: {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 10 * 1024 * 1024
      },
    },
  },
};
