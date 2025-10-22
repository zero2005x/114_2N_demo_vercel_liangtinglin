import { FaGlobe } from "react-icons/fa";
import { FaMugSaucer } from "react-icons/fa6";
import supabase from "../db/clientSupabase";
import Blog_14 from "../components/Blog_14";
import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/BlogsWrapper_14";

const BlogSupaPage_14 = () => {
  const [name, setName] = useState("liangtinglin");
  const [id, setID] = useState(913410014);
  const [blogs_14, setBlogs_14] = useState([]);

  const fetchBlogFromSupabasePage = async () => {
    let { data, error } = await supabase.from("blog_14").select("*");
    console.log("data:", data);
    if (error) {
      throw error;
    }
    setBlogs_14(data);
  };

  useEffect(() => {
    fetchBlogFromSupabasePage();
  }, []);

  return (
    <Wrapper>
      <section className="blogs">
        <div className="section-title">
          <h2>
            Blog from Supabase Page -- {name}, {id}
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
  );
};

export default BlogSupaPage_14;
