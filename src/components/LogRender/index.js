import { Component } from 'react';
import { logger } from 'csssr-school-utils';

export class LogRender extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    logger.call(
      this.props.componentContext,
      this.props.componentContext.constructor.name,
      nextProps,
      nextState
    );
    return true;
  }

  render() {
    return null;
  }
}
