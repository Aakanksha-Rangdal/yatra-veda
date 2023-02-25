import { AddPhotos } from "./Components/addphotos/AddPhotos";
import { AddPost } from "./Components/AddPost";
import { Search } from "./Components/Search";
function App() {
  return (
    <div className="App">
      <AddPost />
      <hr />
      <hr />
      <br />
      <AddPhotos />
      <hr />
      <hr />
      <br />
      <Search />
    </div>
  );
}

export default App;
