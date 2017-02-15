

import React from 'react';
import {article, header} from  './article.scss';

export default class Article extends React.Component {
    render() {
        return <article className={article}>
            <header className={header}>
                <h2>Flexbox: The definitive guide</h2>
                <aside>
                    <header>
                        <h3>About the author: Wes McSilly</h3>
                        <p><a href="./wes-mcsilly/">Contact him! (Why would you?)</a></p>
                    </header>
                    <p>Expert in nothing but Flexbox. Talented circus sideshow.</p>
                </aside>
            </header>

            <p><ins>The guide about Flexbox was supposed to be here, but it
                turned out Wes wasn’t a Flexbox expert either.</ins></p>

            {/*{this.props.children}*/}
        </article>
    }
}
