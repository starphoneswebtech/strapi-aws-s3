export default () => ({
    upload: {
        s3Options: {
            config: {
              provider: 'aws-s3',
              providerOptions: {
                credentials: {
                  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                  secretAccessKey: process.env.AWS_ACCESS_SECRET,
                },
                region: process.env.AWS_REGION,
                baseUrl: `https://s3.${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_BUCKET_NAME}`, // This line sets the custom url format
                params: {
                  ACL: process.env.AWS_ACL || 'public-read',
                  signedUrlExpires: process.env.AWS_SIGNED_URL_EXPIRES || 15 * 60,
                  Bucket: process.env.AWS_BUCKET_NAME,
                },
              },
              actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
              },
            },
        }
    }
});
