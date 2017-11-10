import React from 'react';

const AboutMe = () => {
  return (
    <div className="container about-me-container">
      <h2 id="about-me-title" className="text-center">About Me</h2>
      <div className="about-me-body">
      	<p>
      		I'm a freelance web developer who began his career in July 2016 after attending a code camp in Los Angeles.  I graduated with a physics degree, and decided to apply the analytical approach to problem-solving I learned from it to programming.  Web development is a rapidly expanding field with lots of demand for programmers, so it was a good place to jump in.
      	</p>
      	<p>
      		In my ideal world I would do everything in JavaScript, following the rise of full-stack JS technologies like Node.js.  I take particular interest in React for its popularity and it being able to run in both server and client-side.  In reality I'll just learn whatever's thrown at me.  My first PHP project was the first time I had been exposed to the language at all and I had to learn as fast as I could in order to meet the deadline.  I don't mind adapting to new things and I think it's important that web developers be adaptable enough to learn new things.  There's a million web libraries existing now and new ones are available every day.
      	</p>
      	<p>
      		I like to use my development skills to pursue personal interests and hobbies.  In my spare time I write web apps for physics and video games, which you can see under the "Interests" tab.
      	</p>
      	<p>
      		If you'd like to chat with me about development or projects or the like, you can email me at <a href="mailto:trevor.dt.pham@gmail.com">trevor.dt.pham@gmail.com</a>.
      	</p>
      </div>
    </div>
  );
}

export default AboutMe;