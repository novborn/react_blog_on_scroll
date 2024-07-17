import React from "react";
import BodyLeft from '../components/blog/BodyLeft.jsx'
import BodyRight from '../components/blog/BodyRight.jsx'


const BlogView = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-9"><BodyLeft/></div>  
        <div className="col-md-3"><BodyRight/></div>
      </div>  
    </div>
      
    </>
  );
};

export default BlogView;
