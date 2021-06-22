import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { logger } from 'csssr-school-utils';

export const withLogRender = WrappedComponent =>
  class extends Component {
    shouldComponentUpdate(nextProps, nextState) {
      if (shallowCompare(WrappedComponent, nextProps, nextState)) {
        logger.call(WrappedComponent, WrappedComponent.name, nextProps, nextState);
        return true;
      }

      return false;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
