import React, { Component } from 'react';
import { logger } from 'csssr-school-utils';

export const logRender = WrappedComponent =>
  class extends Component {
    shouldComponentUpdate(nextProps, nextState) {
      logger.call(WrappedComponent, WrappedComponent.name, nextProps, nextState);
      return true;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
