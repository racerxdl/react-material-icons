'use strict';

var React = require('react');
var mui = require('mui');
var SvgIcon = mui.SvgIcon;

var DeviceSignalWifi4Bar = React.createClass({
  displayName: 'DeviceSignalWifi4Bar',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z' })
    );
  }

});

module.exports = DeviceSignalWifi4Bar;