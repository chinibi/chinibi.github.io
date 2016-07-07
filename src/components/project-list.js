var ProjectList = React.createClass({
  render: function() {

    var projectList = this.props.projects.map(function(project, index) {
      return (
        <Project
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
});
