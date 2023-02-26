import { AddPhotos } from "./Components/addphotos/AddPhotos";
import { AddPost } from "./Components/AddPost";
import { Search } from "./Components/Search";
import { NavBar } from "./Components/NavBar";
import { PostCard } from "./Components/PostCard";
import { PostBlog } from "./Components/cityPage/PostBlog";
// import { PostBlog } from "./Components/cityPage/PostBlog";
function App() {
  return (
    <div className="App w-10/12  m-auto ">
      <div className="">
        <NavBar />
      </div>
      <div className="my-10">
        <Search />
      </div>
      <div className="posts w-full grid grid-cols-3 gap-6">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}

export default App;
