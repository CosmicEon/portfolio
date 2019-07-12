import React, { useState, useEffect } from "react";

import "./Blog.scss";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import content from "../../services/content";

const Blog: React.FC = () => {
  const blogPostsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState(content.blogPosts);

  useEffect(() => {
    if (currentPage < 1) setCurrentPage(1);
    if (currentPage > numPages()) setCurrentPage(numPages());

    const startId = (currentPage - 1) * blogPostsPerPage;
    const endId = currentPage * blogPostsPerPage;
    const pagedBlogPosts = content.blogPosts.slice(startId, endId);
    setBlogPosts(pagedBlogPosts);
  }, [currentPage]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < numPages()) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = (page: number) => {
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    setCurrentPage(page);
  };

  function numPages() {
    return Math.ceil(content.blogPosts.length / blogPostsPerPage);
  }

  return (
    <>
      <Header title="Blog" />
      <section className="section">
        <div className="container">
          <div className="section-body">
            {blogPosts.map(blog => (
              <article className="columns blog-item" key={blog.id}>
                <div className="column is-3">
                  <ul className="blog-info">
                    <li>
                      <i className="far fa-calendar" />
                      <span>{blog.date}</span>
                    </li>
                    <li>
                      <i className="far fa-eye" />
                      <span>{blog.views} Views</span>
                    </li>
                    <li>
                      <i className="far fa-comment" />
                      <span>{blog.comments.length} Comments</span>
                    </li>
                  </ul>
                </div>

                <div className="column is-9 blog-post">
                  <div
                    className="image"
                    style={{
                      backgroundImage: `url(${blog.imgSrc})`
                    }}
                  />
                  <div className="blog-details">
                    <a href={`blog/${blog.id}`}>
                      <h2>{blog.title}</h2>
                    </a>
                    <p>{blog.content[0]}</p>
                    <a href={`blog/${blog.id}`} className="button primary-btn">
                      <span>View More</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}

            <nav className="blog-pagination">
              <ul className="pagination">
                <li className="page-item" onClick={prevPage}>
                  <i className="fas fa-chevron-left" />
                </li>
                {Array.from(Array(numPages())).map((_, i) => (
                  <li
                    onClick={() => changePage(i + 1)}
                    className={`page-item ${
                      i + 1 === currentPage ? "active" : null
                    }`}
                    key={i}
                  >
                    {i + 1}
                  </li>
                ))}
                <li className="page-item" onClick={nextPage}>
                  <i className="fas fa-chevron-right" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
