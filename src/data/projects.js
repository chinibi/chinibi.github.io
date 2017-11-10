import React from 'react';

let projects = {};

projects.interests = [
  {
    title: 'PhysicsSims',
    imageURL: '/dist/images/physics.jpg',
    dates: 'November 2017',
    github: 'http://github.com/chinibi/physics-sims',
    tech: ['JavaScript', 'Canvas'],
    description: (
      <div>
        <p>PhysicsSims is a collection of 2D physics simulations for aiding high school students, undergraduates, or the curious layman in learning physics.  By translating equations to real-time simlations with interactive controls, students can gain a deeper grasp of how the universe works without needing to obtain supplies to perform experiments.</p>
        <p>The source code is open-source and is under active development. You can track my progress through <a href="http://github.com/chinibi/physics-sims" rel="noopener noreferrer" target="_blank">the GitHub repository</a>.</p>
      </div>
    )
  },
  {
    title: 'Guild Wars 2 Inventory Search',
    imageURL: '/dist/images/gw2invsearch.png',
    dates: 'June 2016',
    website: 'http://gw2-inventory-search.herokuapp.com',
    github: 'http://github.com/chinibi/gw2-inventory-search',
    tech: ['Node.js', 'Express', 'AngularJS', 'lodash', 'Bootstrap'],
    description: (
      <p>For players of Guild Wars 2, an online multiplayer
      role-playing game.  This app searches through your account for the
      specified item and tells you which of your characters is holding that
      item.  Yes that's a real API key in the screenshot.  The Guild Wars 2 API
      doesn't contain sensitive account information and is read-only so there's
      little harm in sharing it.</p>
    )
  },
  {
    title: 'The Greenest Badges Ever',
    imageURL: '/dist/images/greenest.png',
    dates: 'May 2016',
    github: 'http://github.com/chinibi/the-greenest-badges',
    tech: ['Node.js', 'Express', 'MongoDB', 'AngularJS', 'Bootstrap', 'jwt'],
    description: (
      <div>
        <p style={{fontSize: '1.2em'}}>This website is now offline.</p>
        <p>Change your lifestyle and go green by completing a set of
        challenges every week.  Completing a set awards a shiny internet badge.
        Link with friends to compare how many badges you all have.</p>
      </div>
    )
  },
  {
    title: 'SENTiment',
    imageURL: '/dist/images/sentiment.png',
    dates: 'May 2016',
    website: 'http://sentiment-ga.herokuapp.com',
    github: 'http://github.com/chinibi/sentiment',
    tech: ['Node.js', 'Express', 'MongoDB', 'ejs', 'Bootstrap'],
    description: (
      <div>
        <p>
          Update: As of December 2016 the website is now nonfunctional
          as I have unsubscribed from the IBM Watson API. It is unfortunately not free.
        </p>
        <p>
          This website grabs your tweets from the Twitter API and
          feeds them through a sentiment analyzer run by IBM Watson.  Users can
          select a date range to pull their tweets and share their results through
          Twitter or Facebook.
        </p>
      </div>
    )
  },
  {
    title: 'Whiteboard',
    imageURL: '/dist/images/whiteboard.png',
    dates: 'April 2016',
    github: 'http://github.com/chinibi/whiteboard',
    tech: ['Ruby on Rails', 'HTML5 Canvas', 'Bootstrap', 'erb', 'jQuery',
           'SCSS', 'PostgreSQL'],
    description: (
      <div>
        <p style={{fontSize: '1.2em'}}>This website is now offline.</p>
        <p>Whiteboard is an imageboard forum where users can draw on
          their posts. Users can create accounts, threads, and comments.
          The backend is run on Rails.</p>
      </div>
    )
  },
  {
    title: 'pewpewpew',
    imageURL: '/dist/images/pewpewpew.png',
    dates: 'March 2016',
    website: 'http://chinibi.github.io/pewpewpew',
    github: 'http://github.com/chinibi/pewpewpew',
    tech: ['JavaScript', 'HTML5 Canvas', 'jQuery'],
    description: (
      <p>This Canvas game is inspired by turn-based artillery games
     like Scorched Earth and Worms.  Two players each control a tank and
     compete to hit more targets than the other. Pewpewpew makes heavy use of
     Object constructors to create each entity in the game and has its own
     custom engine for handling physics and collision detection.</p>
    )
  }
];

projects.work = [
  {
    title: 'Step-By-Step Ordering System for WooCommerce',
    imageURL: '/dist/images/wc-step-by-step-ordering.png',
    dates: 'July 2017',
    website: 'http://stepbystepsys.com',
    github: 'https://github.com/chinibi/wc-step-by-step-ordering-free',
    tech: ['PHP', 'WordPress', 'JavaScript', 'WooCommerce'],
    description: (
      <div>
        <p>Created a step-by-step ordering plugin that extends the WooCommerce WordPress library.
          Customers are guided through a store by progressing through a number of steps each showing different types of products.
        </p>
        <p>Process includes guiding the customer through different categories of
          products and services.  Website admins can customize the ordering process
          with a drag-and-drop sortable list interface.  Created preset color schemes
          and navbar shapes to provide customizable visual elements for non-developers.
        </p>
      </div>
    )
  },
  {
    title: 'Access Cremation',
    imageURL: '/dist/images/accesscremation.jpg',
    dates: 'February 2017',
    tech: ['PHP', 'WordPress', 'JavaScript', 'WooCommerce'],
    description: (
      <div>
        <p style={{fontSize: '1.2em'}}>This website is not yet online.</p>
        <p>Created an e-commerce store for a California cremation service.  The
          store takes users through a number of steps in a guided ordering process.</p>
      </div>
    )
  },
  {
    title: 'Pacific Family Dental',
    imageURL: '/dist/images/pacificfamilydental.png',
    dates: 'January 2017',
    tech: ['JavaScript', 'Node.js', 'PostgreSQL', 'React', 'Redux'],
    description: (
      <div>
        <p style={{fontSize: '1.2em'}}>This website is not yet online.</p>
        <p>
          An Orange County family dentistry site where patients can schedule their
          appointments online.  This is a React SPA with a Node and Postgres API backend.
          You may view the demo site by clicking the link above.
        </p>
      </div>
    )
  },
  {
    title: 'CSUN Jazz Studies',
    imageURL: '/dist/images/csunjazz.png',
    dates: 'September 2016',
    website: 'http://csunjazz.com',
    tech: ['Wordpress', 'jQuery'],
    description: (
      <div>
        <p>
          Collaborated with Electronic Methods to redesign CSU Northridge's
          Jazz Studies website.  Replaced images that served as simple backgrounds, borders,
          and section dividers with CSS to greatly reduce page size.  Rendered the site
          mobile-responsive with CSS media queries and jQuery.  Transplanted a
          slideshow from another project to the site's front page.
        </p>
      </div>
    )
  },
  {
    title: 'Danny Boy Consulting',
    imageURL: '/dist/images/dannyboyseeds.png',
    dates: 'July 2016',
    website: 'http://dannyboyseeds.com',
    tech: ['Materialize'],
    description: (
      <p>
        Danny Boy Consulting provides services to farmers and vegetable seed dealers both domestic and international.
      </p>
    )
  }
];

export default projects;