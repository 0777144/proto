

import React from 'react';
import {article, header, title, date} from  './article.scss';

export default class Article extends React.Component {
    render() {
        return <article className={article}>
            <header className={header}>
                <h2 className={title}>{this.props.title}</h2>
                <aside className={date}>{this.props.date}</aside>
            </header>
            <section>{this.props.children}</section>
        </article>
    }
}
