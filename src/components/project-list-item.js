var ProjectListItem = React.createClass({

  render: function() {
    var project     = this.props.project;
    var title       = project.title;
    var imageURL    = project.imageURL;
    var dates       = project.dates;
    var website     = project.website;
    var github      = project.github;
    var tech        = project.tech;
    var description = project.description;

    return (
      <div className="clearfix project-entry">

        <div className='col-sm-6'>
          <img className="img-responsive img-thumbnail" src={imageURL} />
        </div>

        <div className='col-sm-6'>
          <a href={website} target="_blank"><h2>{title}</h2></a>
          <a href={github} target="_blank"><small>GitHub</small></a>
          <p>{dates}</p>
          <p>{description}</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              {tech}
            </li>
          </ul>
        </div>

      </div>
    );
  }

});
