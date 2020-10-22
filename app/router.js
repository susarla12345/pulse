import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pulse', { path: '/' });
  this.route('feedback', { path: '/feedback' })
  this.route('metrics', { path: '/metrics' })
  this.route('impact', { path: 'impact/' })
});

export default Router;
