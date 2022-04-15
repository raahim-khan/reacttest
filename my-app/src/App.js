import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1> Hello World </h1>
      <p>{location.pathname}</p>
      <p>{new URLSearchParams(location.search).get('name')}</p>
    </div>
  );
}

export default App;
