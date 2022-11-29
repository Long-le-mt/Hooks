import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [typeTab, setTypeTab] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((posts) => setPosts(posts));
  //   }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${typeTab}`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, [typeTab]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    // memory leak
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("unmouted");
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.val)}
      />
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            typeTab === tab ? { color: "#fff", backgroundColor: "#333" } : {}
          }
          onClick={(e) => setTypeTab(tab)}
        >
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>

      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
        >
          Go to top
        </button>
      )}
    </div>
  );
}

export default Content;
