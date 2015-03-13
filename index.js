/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-skycon',
  included: function (app) {
    app.import("vendor/skycons.js");
  }
};
