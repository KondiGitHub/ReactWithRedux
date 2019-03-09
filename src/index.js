import 'babel-polyfill';
import React from 'react';
import { render} from 'react-dom';
import  {Router , browserHistory} from 'react-router';
import {Provider} from "react-redux";
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';

let photoGallaryFor2009 = {
  year: 2009,
  nextIndex: 0,
  prevIndex: 0,
  maxIndex: 5
};
let photoGallaryFor2010 = {
  year: 2010,
  nextIndex: 0,
  prevIndex: 0,
  maxIndex: 5
};
let photoGallaryFor2011 = {
  year: 2011,
  nextIndex: 0,
  prevIndex: 0,
  maxIndex: 5
};
let photoGallaryFor2012 = {
  year: 2012,
  nextIndex: 0,
  prevIndex: 0,
  maxIndex: 5
};
let photoGallaryFor2013 = {
  year: 2013,
  nextIndex: 0,
  prevIndex: 0,
  maxIndex: 5
};
let photoGallaryFor2014 = {
  year: 2014,
  nextIndex: 0,
  prevIndex: 0,
  maxIndex: 5
};
let photoGallaryFor2015 = {
  year: 2015,
  nextIndex: 0,
  prevIndex: 0,
  maxIndex: 5
};
let photoGallaryFor2016 = {
  year: 2016,
  nextIndex: 0,
  prevIndex: 0,
  maxIndex: 5
};

const initialState = {
  photoGallarys: {
    galaries: [ photoGallaryFor2009,photoGallaryFor2010,photoGallaryFor2011,photoGallaryFor2012,photoGallaryFor2013,photoGallaryFor2014,
      photoGallaryFor2015,photoGallaryFor2016]
  }
};


const store = configureStore(initialState);


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

