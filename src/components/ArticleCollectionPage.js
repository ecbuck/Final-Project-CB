import React from "react";
import ArticleSearch from "./ArticleSearch";
import ArticleList from "./ArticleList";
import Navbar from "./Navbar";
import NewArticleModalForm from "./NewArticleModalForm";
import axios from "axios";
import MyForm from "./MyForm"; 
import './ArticleCollectionPage.css';

class ArticleCollectionPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleModelAction = this.handleModelAction.bind(this);
    this.handleDeleteArticle = this.handleDeleteArticle.bind(this);
    this.state = {
      isModalOpen: false,
      list: []
    };
  }

  fetchPosts() {
    axios
      .get("http://localhost:3000/api/posts")
      .then(response => {
        const newList = response.data;

        this.setState({
          list: newList
        });
      })
      .catch(error => {
        
      });
  }

  createPost(newArticle) {
    axios
      .post("http://localhost:3000/api/posts", newArticle)
      .then(response => {
          debugger
        this.fetchPosts();
      })
      .catch(error => {});
  }

  componentDidMount() {
    this.fetchPosts();
  }

  handleDeleteArticle(id) {
    axios.delete(`http://localhost:3000/api/posts/${id}`)
        .then((response) => {
            this.fetchPosts();
        })
        .catch((error) => {
            debugger;
        });
  }

  handleModelAction(id, action, newArticle) {
    if (id === "formModal" && action === "ADD") {
      // const listClone = [...this.state.list];

      // listClone.push(newArticle);

      // this.setState({
      //     list: listClone
      // });

      this.createPost(newArticle);
    }

    this.setState({
      isModalOpen: false
    });
  }

  render() {
    return (
      <div className="article-collection-page-container">
        <div className="header">  
            <img src="./yarn.jpg" alt="yarn"/>          
        </div>
        <h1 className="h1">Coding is The New Knitting</h1>
        {/* <img src="https://i.imgur.com/tFXlXAY.png" className="logo" alt="logo1"/> */}
        <div className="main">
            <div className="sidebar">
                <Navbar/>
            </div>
            <div className="content">
                <button onClick={() => this.setState({ isModalOpen: true })}>
                    Add Article
                </button>                
                {/* <ArticleSearch /> */}
                <ArticleList 
                    list={ this.state.list } 
                    handleDeleteArticle={ this.handleDeleteArticle }
                />
                { this.state.isModalOpen ? (
                <NewArticleModalForm
                    id="formModal"
                    handleAction={this.handleModelAction}
                />
                ) : null }
            </div>
        </div>
      </div>
    );
  }
}

export default ArticleCollectionPage;
