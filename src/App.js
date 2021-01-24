import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    //state를 사용할 때 모든 것을 미리 default를 설정해두지 않아도 됨!
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
  };
  async componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
