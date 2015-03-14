/* globals Skycons */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'canvas',
  attributeBindings: ['height', 'width'],
  icon: '',
  height: '24px',
  width: '24px',
  color: 'black',
  setupSkycon: function () {
    console.log("draw");
    var $this = this.$(),
      skycons = new Skycons({color: this.get('color')});

    skycons.add($this[0], this.get('icon'));
    skycons.play();
  }.observes('icon', 'color').on('willInsertElement')
});
