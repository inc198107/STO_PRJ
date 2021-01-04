import  React,{ Component } from 'react';
import ErrorPage from '../Pages/errorPage/errorPage';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error,info){
    console.group(['RENDER ERROR'])
    console.log(info.componentStack)
    console.groupEnd()
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage/>
      )
    }
    return this.props.children;
  }
}
