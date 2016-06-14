import 'bootstrap/less/bootstrap.less';

import ng from 'angular';
import ngRoute from 'angular-route';
import Components from './components';
ng.module('app', [ngRoute, Components]);
