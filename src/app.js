import 'bootstrap/dist/css/bootstrap.css';
import './style.less';

import ng from 'angular';
import ngRoute from 'angular-route';
import Components from './components';

ng.module('app', [ngRoute, Components]);
