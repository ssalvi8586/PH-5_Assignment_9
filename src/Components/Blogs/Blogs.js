import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="shadow-lg p-3 rounded-lg m-5">
        <h4 className="text-2xl font-semibold text-center">
          What is Context api
        </h4>
        <p>
          React uses unidirectoinal data flow. In this manner, to pass a data
          from a parent to a child, we can use props. But if we want to send
          data form a higher level parent to a lower level child, every
          component in between this levels will get this data if we use props.
          In short we can say it props drilling. To avoid it, we can create a
          context api and pass the data and the specific child can receive it
          without sharing with other components by props.
        </p>
      </div>
      <div className="shadow-lg p-3 rounded-lg m-5">
        <h4 className="text-2xl font-semibold text-center">
          What is Semantic tag
        </h4>
        <p>
          Semantic tags describe the purpose of element more accurately than
          non-semantic tags. Programmers still uses non-semantic tags like div,
          to make their design layout. Semantic tags like header, article, main,
          footer etc acts more likely same as div but it becomes more easy to
          identify the purpose of the tag if we use semantic tags. It makes code
          easier to read. It also gives better performance to the user, search
          engines, screen readers etc and leads to consistent code.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
