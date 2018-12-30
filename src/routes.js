import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import PhotosPage from './components/photos/PhotoPage';
import VideoPage from './components/videos/VideoPage';

export default (
<Route path="/" component={App}>
  <IndexRoute component={HomePage} />
  <Route path="photos" component={PhotosPage} />
  <Route path="videos" component={VideoPage} />
</Route>
);
