/**
 * Created by Manjesh on 15-05-2016.
 */

import oauthServer from 'oauth2-server';
import model from './model';

const oauth = new oauthServer({
  model,
  grants: ['password'],
});

export default oauth;
