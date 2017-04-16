

import React from 'react'
import Request from 'superagent'

import {Article} from '../article'

const ArticleList = (props) => (
  <div>
    {props.articles.map((article) =>
      <Article
        {...article}
        key={article.title}
      />
    )}
  </div>
)

class ArticleListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {articles: []};
  }

  componentDidMount() {
    Request.get('/api/articles')
      .then(data => data.body.articles)
      .then(articles => this.setState({articles}));
  }

  render() {
    return (
      <ArticleList {...this.state}/>
    );
  }
}

export {ArticleListContainer as default, ArticleList}
