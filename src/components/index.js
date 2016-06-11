import ng from 'angular';

import Header from './header';
import CardList from './card-list';
import Card from './card';

export default ng.module('app.components', [Header,  CardList, Card])
  .name;
