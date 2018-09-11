/**
 * Created by Manjesh on 14-05-2016.
 */
import oauthServer from 'oauth2-server';
import oauth from './oauth';
import model from './model';

export default (app) => {
  app.all('/oauth/token', (req, res) => {
    req.headers['content-type'] = 'application/x-www-form-urlencoded';
    const request = new oauthServer.Request(req);
    const response = new oauthServer.Response(res);

    oauth
      .token(request, response)
      .then((token) => {
        // Todo: remove unnecessary values in response
        return res.json(token);
      }).catch((err) => {
        return res.status(500).json(err);
      });
  });

  app.post('/authorise', (req, res) => {
    const request = new oauthServer.Request(req);
    const response = new oauthServer.Response(res);

    return oauth.authorize(request, response).then((success) => {
      //  if (req.body.allow !== 'true') return callback(null, false);
      //  return callback(null, true, req.user);
      res.json(success);
    }).catch((err) => {
      res.status(err.code || 500).json(err);
    });
  });

  app.get('/authorise', (req, res) => {
    const client = model.getClient(req.query.client_id, req.query.client_secret);

    if (!client) return res.status(404).json({ error: 'Invalid Client' });
    return res.json(client);
  });
};
