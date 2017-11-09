const interests = [
  {
    title: 'PhysicsSims',
    imageURL: '/images/physics.jpg',
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
    imageURL: '/images/gw2invsearch.png',
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
    imageURL: '/images/greenest.png',
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
    imageURL: '/images/sentiment.png',
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
    imageURL: '/images/whiteboard.png',
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
    imageURL: '/images/pewpewpew.png',
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

const work = [
  {
    title: 'Step-By-Step Ordering System for WooCommerce',
    imageURL: '/images/wc-step-by-step-ordering.png',
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
    imageURL: '/images/accesscremation.jpg',
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
    imageURL: '/images/pacificfamilydental.png',
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
    imageURL: '/images/csunjazz.png',
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
    imageURL: '/images/dannyboyseeds.png',
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


/************
*
* Components
*
*************/
const {Component} = React;

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

const NavBar = props => {
  return (
    <nav id="navbar" role="navigation">
      <ul className="nav nav-pills">
        <li className={props.activePage === 'About' ? 'active' : null} role="presentation" id="About" onClick={props.onNavClick}>About</li>
        <li className={props.activePage === 'Work' ? 'active' : null} role="presentation" id="Work" onClick={props.onNavClick}>Work</li>
        <li className={props.activePage === 'Interests' ? 'active' : null} role="presentation" id="Interests" onClick={props.onNavClick}>Interests</li>
      </ul>
    </nav>
  );
}

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {activePage: 'About'};
    this.onNavClick = this.onNavClick.bind(this);
  }

  onNavClick(e) {
    this.setState({activePage: e.target.id});
  }

  renderMainContent() {
    switch(this.state.activePage) {
      case 'About':
        return <AboutMe />;
        break;
      case 'Work':
        return <ProjectList projects={work} />;
        break;
      case 'Interests':
        return <ProjectList projects={interests} />;
        break;
      default:
        return <ProjectList projects={projects} />;
        break;
    }
  }

  render() {
    return (
      <div>
        <NavBar activePage={this.state.activePage} onNavClick={this.onNavClick} />
        {this.renderMainContent()}
      </div>
    );
  }
}

const AboutMe = () => {
  return (
    <div className="container">
      <h2>About Me</h2>
      <p>I'm a web developer.</p>
    </div>
  );
}

const ProjectList = props => {
  const projectList = props.projects.map((project, index) => {
    return (
      <ProjectListItem
        key={index}
        project={project}
        className="list-inline-item"
      />
    );
  });

  return (
    <div id="portfolio" className="container-fluid">
      {projectList}
    </div>
  );
}

const ProjectListItem = props => {
  const {project: {
    title, imageURL, dates, website, github, tech, description
  }} = props;

  const techList = tech.map((each, index) => {
    return (
      <li className="list-inline-item">
        {each}
      </li>
    );
  });

  return (
    <div className="clearfix project-entry">

      <div className='col-sm-6'>
        <img className="img-responsive img-thumbnail" src={imageURL} />
      </div>

      <div className='col-sm-6'>
        {website ? <h2><a href={website} target="_blank">{title}</a></h2> : <h2>{title}</h2>}
        {github ? <a href={github} target="_blank"><small>GitHub</small></a> : null}
        <p>{dates}</p>
        {description}
        <ul className="list-inline">
          {techList}
        </ul>
      </div>

    </div>
  );
}

const Footer = () => {
  return (
    <div id='footer' className="container text-center">
      <a className="btn btn-social-icon btn-github" href="https://github.com/chinibi" target="_blank" rel="noopener noreferrer"><span className="fa fa-github"></span></a>
      <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/trevorpham" target="_blank" rel="noopener noreferrer"><span className="fa fa-linkedin"></span></a>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
