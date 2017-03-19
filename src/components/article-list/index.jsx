

import React from 'react';
import Request from 'superagent';

import Article from '../article';

export default class ArticleList extends React.Component {
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
      <div>
        {this.state.articles.map(({title, date, content}) =>
          <Article
            title={title}
            key={title}
            date={date}
            content={content}
            onClick={this.props.onClickArticle}
          />
        )}
      </div>
    );
  }
}
