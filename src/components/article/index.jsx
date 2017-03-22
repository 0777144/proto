

import React from 'react'
import s from './article.scss'
import {markdown} from '../../styles/markdown.scss'

import Link from '../link'

function createMarkup(html) {return {__html: html}}

const Article = ({title, content, url, date, onClick}) => (
  <article className={s.article}>
    <header className={s.header}>
      <h2 className={s.title}>
        <Link to={`/article/${title}`} className={s.link} onClick={onClick}>{title}</Link>
      </h2>
      <aside className={s.date}>{date}</aside>
    </header>
    <section className={markdown} dangerouslySetInnerHTML={createMarkup(content)} />
  </article>
);

export default Article
