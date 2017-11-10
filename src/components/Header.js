import React from 'react';

const Header = () => {
  return (
    <div className="jumbotron text-center">
      <div className="container">
        <h2>Hello! My name is Trevor and I'm a web developer.</h2>
      </div>

      <div id="header-links" className="container">
        <a className="btn btn-social-icon btn-github" href="https://github.com/chinibi" target="_blank"><span className="fa fa-github"></span></a>
        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/trevorpham" target="_blank"><span className="fa fa-linkedin"></span></a>
      </div>
    </div>
  );
}

export default Header;