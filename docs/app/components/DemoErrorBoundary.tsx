import { Component, ReactElement } from 'react';

type Props = {
  onRendered?: (error?: Error) => void;
  children: ReactElement;
};
type State = {
  children?: ReactElement;
  previousChildren?: ReactElement;
  error?: Error;
};
export class DemoErrorBoundary extends Component<Props, State> {
  private isInErroredState?: boolean;
  private lastSuccessfulRenderedChildren?: ReactElement;
  state: Readonly<State> = {};

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  static getDerivedStateFromProps(props: Readonly<Props>, state: Readonly<State>) {
    if (props.children !== state.children) {
      return { error: undefined, children: props.children };
    }
    return state;
  }

  componentDidCatch() {
    this.isInErroredState = true;
  }

  render() {
    return this.state.error ? this.lastSuccessfulRenderedChildren : this.props.children;
  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>) {
    if (!nextState.error) {
      this.isInErroredState = false;
    }
    return nextProps.children !== this.props.children || nextState.error !== this.state.error;
  }

  componentDidUpdate() {
    this.props.onRendered?.(this.state.error);
    if (!this.isInErroredState) {
      this.lastSuccessfulRenderedChildren = this.props.children;
    }
  }
}
