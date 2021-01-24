import React from 'react';

class App extends React.Component {
  state = {
    //state를 사용할 때 모든 것을 미리 default를 설정해두지 않아도 됨!
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
