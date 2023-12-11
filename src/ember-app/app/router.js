import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-k-r-заказ-l');
  this.route('i-i-s-k-r-заказ-e',
  { path: 'i-i-s-k-r-заказ-e/:id' });
  this.route('i-i-s-k-r-заказ-e.new',
  { path: 'i-i-s-k-r-заказ-e/new' });
  this.route('i-i-s-k-r-запись-мат-l');
  this.route('i-i-s-k-r-запись-мат-e',
  { path: 'i-i-s-k-r-запись-мат-e/:id' });
  this.route('i-i-s-k-r-запись-мат-e.new',
  { path: 'i-i-s-k-r-запись-мат-e/new' });
  this.route('i-i-s-k-r-место-хран-l');
  this.route('i-i-s-k-r-место-хран-e',
  { path: 'i-i-s-k-r-место-хран-e/:id' });
  this.route('i-i-s-k-r-место-хран-e.new',
  { path: 'i-i-s-k-r-место-хран-e/new' });
  this.route('i-i-s-k-r-отпуск-мат-l');
  this.route('i-i-s-k-r-отпуск-мат-e',
  { path: 'i-i-s-k-r-отпуск-мат-e/:id' });
  this.route('i-i-s-k-r-отпуск-мат-e.new',
  { path: 'i-i-s-k-r-отпуск-мат-e/new' });
  this.route('i-i-s-k-r-сотрудники-l');
  this.route('i-i-s-k-r-сотрудники-e',
  { path: 'i-i-s-k-r-сотрудники-e/:id' });
  this.route('i-i-s-k-r-сотрудники-e.new',
  { path: 'i-i-s-k-r-сотрудники-e/new' });
  this.route('i-i-s-k-r-т-н-l');
  this.route('i-i-s-k-r-т-н-e',
  { path: 'i-i-s-k-r-т-н-e/:id' });
  this.route('i-i-s-k-r-т-н-e.new',
  { path: 'i-i-s-k-r-т-н-e/new' });
});

export default Router;
