import React, {Component} from 'react';

import NavBar from './NavBar';
import AboutMe from './AboutMe';
import ProjectList from './ProjectList';
import projects from '../data/projects';

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
        return <ProjectList projects={projects.work} />;
        break;
      case 'Interests':
        return <ProjectList projects={projects.interests} />;
        break;
      default:
        return <ProjectList projects={projects.work} />;
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

export default MainContainer;