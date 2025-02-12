
import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import Loader from "../Loader";

const BlogPage = () => {
    
  const [loading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const observer = useRef();

  const fetchBlogs = async (page) => {

    setIsLoading(true);
    try {
      const url = `https://imaginxp.com/wp-json/wp/v2/posts?page=${page}&per_page=3`;
      const res = await axios.get(url);
      if (res && res.data) {
        setBlogs((prevBlogs) => [...prevBlogs, ...res.data]);
        // Extract total number of posts from the headers
        const total = parseInt(res.headers["x-wp-total"], 10);
        setTotalBlogs(total);
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {

    let str = 'abc';
    console.log(str.slice()); // Output: "abcabcabc"

    fetchBlogs(page);
  }, [page]);

  const lastBlogElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && blogs.length < totalBlogs) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, blogs, totalBlogs]
  );

  const truncateContent = (content, wordLimit) => {
    const words = content.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : content;
  };

  return (
    <div className="container mt-4">
      <h6>Blog Update</h6>
      <hr />
      {blogs.length === 0 && !loading && <p>No posts found!</p>}
      {blogs.map((blog, index) => {
        if (blogs.length === index + 1) {
          return (
            <div className="card mb-3" key={blog.id} ref={lastBlogElementRef}>
              <div className="row no-gutters">
                <div className="col-md-12">
                  <div className="card-body">
                    <h5 iftext--
                      dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
                    ></h5>
                    <p
                      className="card-text"
                      dangerouslySetInnerHTML={{
                        __html: truncateContent(blog.content.rendered, 30),
                      }}
                    ></p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="card mb-3" key={blog.id}>
              <div className="row no-gutters">
                <div className="col-md-12">
                  <div className="card-body">
                    <h5 elsetext--
                      dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
                    ></h5>
                    <p
                      className="card-text"
                      dangerouslySetInnerHTML={{
                        __html: truncateContent(blog.content.rendered, 30),
                      }}
                    ></p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
      {loading && <Loader />}
    </div>
  );
};

export default BlogPage;
