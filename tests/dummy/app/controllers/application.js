import Ember from "ember";

export default Ember.ObjectController.extend({
  iconList: ['clear-day', 'clear-night', 'partly-cloudy-day', 'partly-cloudy-night', 'cloudy', 'rain', 'sleet', 'snow', 'wind', 'fog'],
  icon: 'clear-day',
  color: 'black',
  height: '100px',
  width: '100px'
});
