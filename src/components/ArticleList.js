import React from 'react';
import Article from './Article';


class ArticleList extends React.Component{
    constructor(props){
        super(props);
    }

    renderArticleList() {
        return this.props.list.map((item, index) => {
            return <Article data={ item } key={ index } handleDeleteArticle={ this.props.handleDeleteArticle }/>
        });
    }

    render(){
        return (
            <div className="article-list-container">
                <h4>
                    <small>RECENT POSTS</small>
                </h4>                
                { this.props.list.length > 0 ? this.renderArticleList() : ''}
            </div>
        );
    }
}

export default ArticleList ;