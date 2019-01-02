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
  year: '2009',
  nextIndex: '6',
  prevIndex: '0',
  photos : ['img_9903.jpg','img_9904.jpg','img_9905.jpg','img_9906.jpg','img_9910.jpg']
};
let photoGallaryFor2010 = {
  year: '2010',
  nextIndex: '6',
  prevIndex: '0',
  photos : ['img_9911.jpg','img_9912.jpg','img_9913.jpg','img_9914.jpg','img_9917.jpg']
};
let photoGallaryFor2011 = {
  year: '2011',
  nextIndex: '6',
  prevIndex: '0',
  photos : ['img_9919.jpg','img_9920.jpg','img_9921.jpg','img_9922.jpg','img_9923.jpg']
};
let photoGallaryFor2012 = {
  year: '2012',
  nextIndex: '6',
  prevIndex: '0',
  photos : ['img_9924.jpg','img_9926.jpg','img_9927.jpg','img_9928.jpg','img_9929.jpg']
};
let photoGallaryFor2013 = {
  year: '2013',
  nextIndex: '6',
  prevIndex: '0',
  photos : ['img_9930.jpg','img_9931.jpg','img_9932.jpg','img_9933.jpg','img_9934.jpg']
};
let photoGallaryFor2014 = {
  year: '2014',
  nextIndex: '6',
  prevIndex: '0',
  photos : ['img_9935.jpg','img_9936.jpg','img_9938.jpg','img_9939.jpg','img_9940.jpg']
};
let photoGallaryFor2015 = {
  year: '2015',
  nextIndex: '6',
  prevIndex: '0',
  photos : ['img_9941.jpg','img_9944.jpg','img_9945.jpg','img_9958.jpg','img_9966.jpg']
};
let photoGallaryFor2016 = {
  year: '2016',
  nextIndex: '6',
  prevIndex: '0',
  photos : ['img_9967.jpg','img_9979.jpg','img_9981.jpg','img_9906.jpg','img_9910.jpg']
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

