'use strict';

var React = require('react');
var mui = require('mui');
var SvgIcon = mui.SvgIcon;

var ImageExposureNeg1 = React.createClass({
  displayName: 'ImageExposureNeg1',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z' })
    );
  }

});

module.exports = ImageExposureNeg1;