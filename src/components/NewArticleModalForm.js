import React from "react";
import "./NewArticleModalForm.css";

class NewArticleModalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      author: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    if (e.target === e.currentTarget) {
      this.props.handleAction(this.props.id, "CANCEL");
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const newArticle = {
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      publishDate: new Date()
    };

    this.props.handleAction(this.props.id, "ADD", newArticle);
  }

  render() {
    return (
      <div className="modal-container" onClick={this.handleClick}>
        <div className="modal-content">
          <h3>New Blog</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                required
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
              />
            </label>
            <label>
              Body
              <textarea 
                className="body"
                required
                value={this.state.body}
                onChange={e => this.setState({ body: e.target.value })}
              ></textarea>
              {/* <input
                type="text"
                required
                value={this.state.body}
                onChange={e => this.setState({ body: e.target.value })}
              /> */}
            </label>
            <label>
              Author
              <input
                type="name"
                required
                value={this.state.author}
                onChange={e => this.setState({ author: e.target.value })}
              />
            </label>
            <br/>
            <button className="add-article">Add</button>
          </form>
          <div className="actions">
            <button onClick={() => this.props.handleAction(this.props.id, "CANCEL")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewArticleModalForm;
