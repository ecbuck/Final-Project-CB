import React from "react";
import moment from "moment";
import './Article.css';

class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="article-container">
        <div className="row content">
          <div className="col-md-12">
            <h2>{this.props.data.title}</h2>
            <h5>
              <span className="glyphicon glyphicon-time"></span> Post by{" "}
              {this.props.data.author}
              <br />
              {moment(this.props.data.publishDate).format("MMM DD, YYYY")}
            </h5>
            <h5>
              <span className="label label-danger">Final</span>{" "}
              <span className="label label-primary">Project</span>
            </h5>
            <br />
            <p>{this.props.data.body}</p>
          </div>
          <button onClick={ () => this.props.handleDeleteArticle(this.props.data._id) }>Delete</button>
        </div>
      </div>
    );
  }
}

export default Article;
