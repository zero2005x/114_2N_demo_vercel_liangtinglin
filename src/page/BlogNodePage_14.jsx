import { FaGlobe } from "react-icons/fa";
import { FaMugSaucer } from "react-icons/fa6";

import Blog_14 from "../components/Blog_14";
import { useState, useEffect } from "react";

const api_url = "http://localhost:3000/api/blogs_14";

const BlogNodePage_14 = () => {
  const [name, setName] = useState("liangtinglin");
  const [id, setID] = useState(913410014);
  const [blogs_14, setBlogs_14] = useState([]);

  const fetchBlogFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log("data from node server", data);
      setBlogs_14(data);
    } catch (error) {
      console.log("fetchBlogFromNodeServer error", error);
    }
  };

  useEffect(() => {
    fetchBlogFromNodeServer();
  }, []);

  return (
    <>
      <section className="blogs">
        <div className="section-title">
          <h2>
            Blog from Node Page -- {name}, {id}
          </h2>
        </div>
        <div className="blogs-center">
          {blogs_14.map((item) => {
            const { id, img, category, title, desc } = item;
            return (
              <Blog_14
                key={id}
                id={id}
                img={img}
                category={category}
                title={title}
                desc={desc}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BlogNodePage_14;
