import React,{ useEffect,useState } from 'react';

const App = () => {
  const [repo,setRepo] = useState([{}]);
  useEffect(() => {
    //https://api.github.com/users/hamzaali81/repos"
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then(response => response.json())
    // .then(json => 
    //   {
    //     setData(json);
    //   }
    //   )hamzaali81
    async function callbackTest(){
      const api = await fetch('https://api.github.com/users/hamzaali81/repos');
      const data = await api.json();
      console.log('data',data);
      setRepo(data)
    }
    callbackTest()
  }, []);
  
  console.log('data repo',repo);
  return (
    <div>
      <h1>Api Work</h1>
    <ul>
      {
        repo.slice(0,10).map((elem, i) => (<li key={i}>{elem.name}</li>))
      }
    </ul>
    </div>
  );
}

export default App;
