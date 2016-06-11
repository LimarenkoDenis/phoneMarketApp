import ng from 'angular';
import Header from './component';

export default ng.module('app.components.header', [])
  .component('header', Header)
  .name;
