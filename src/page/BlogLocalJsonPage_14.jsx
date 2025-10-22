import { FaGlobe } from "react-icons/fa";
import { FaMugSaucer } from "react-icons/fa6";
import blogsData_14 from "../assets/data/blogData.json";
import Blog_14 from "../components/Blog_14";
import Wrapper from "../assets/wrappers/BlogsWrapper_14";
import { useState } from "react";

const BlogLocalJsonPage_14 = () => {
  const [name, setName] = useState("liangtinglin");
  const [id, setID] = useState(913410014);
  const [blogs_14, setBlogs_14] = useState(blogsData_14);

  return (
    <>
      {" "}
      <Wrapper>
        <section className="blogs">
          <div className="section-title">
            <h2>
              Blog from local json -- {name}, {id}
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
      </Wrapper>
    </>
  );
};

export default BlogLocalJsonPage_14;
