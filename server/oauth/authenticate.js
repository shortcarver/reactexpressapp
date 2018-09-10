import oauthServer from 'oauth2-server';
import oauth from './oauth';

export default (options = {}) => {
  return (req, res, next) => {
    console.log('authenticate');
    const request = new oauthServer.Request({
      headers: { authorization: req.headers.authorization },
      method: req.method,
      query: req.query,
      body: req.body,
    });
    const response = new oauthServer.Response(res);

    oauth.authenticate(request, response, options)
      .then((token) => {
        // Request is authorized.
        req.user = token;
        next();
      })
      .catch((err) => {
        // Request is not authorized.
        res.status(err.code || 500).json(err);
      });
  };
};
