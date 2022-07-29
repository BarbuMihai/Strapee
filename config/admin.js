module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8c637ba18a2bb053627f5bd2120fcc55'),
  },
});
