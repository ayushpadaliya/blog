import React from 'react';
import './Home.css';
import back from'./back.jpg'

function BlogIntro() {
  const backgroundStyle = {
    backgroundImage:`url(${back})`, // Replace 'background.jpg' with your image file
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="background-container" style={backgroundStyle}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 mb-4 text-weight-bold" style={{color:'black',fontWeight:'bold'}}>Welcome to Our Blog</h1>
            
            <p className="text-dark txt-2">
              Discover <span className="highlight">captivating stories</span>, thought-provoking articles, and expert insights on a wide range of topics.
              Our diverse community of writers brings you a rich tapestry of perspectives and experiences.
            </p>
            <p className="text-dark txt-2">
              Whether you're seeking <span className="highlight">practical advice</span>, <span className="highlight">creative inspiration</span>, or a deeper understanding of the world,
              our blog has something for everyone. Dive into our carefully curated content and embark on a journey
              of <span className="highlight">discovery and enlightenment</span>.
            </p>
            <p className="text-dark txt-2">
              Join us in the pursuit of knowledge and the joy of storytelling. Let's embark on this adventure together.
            </p>
            {/* <button className="btn btn-primary btn-lg" >Start Exploring</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogIntro;
