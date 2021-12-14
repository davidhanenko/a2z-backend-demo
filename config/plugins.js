module.exports = ({ env }) => {
  return  {
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      breakpoints: {
        xsmall: 320,
      },
      actionOptions: {
        upload: {
          transformation: {
              "width": 1920
            },
          fetch_format: 'auto',
          quality: 'auto',
          resource_type: 'auto',
          folder: 'A2Z',
        },
        delete: {},
      },
    },
}};
