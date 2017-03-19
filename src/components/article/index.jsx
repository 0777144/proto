

import React from 'react'
import s from './article.scss'
import {markdown} from '../../styles/markdown.scss'

import Link from '../link'

function createMarkup(html) {return {__html: html}}

const Article = ({title, content, url, date, onClick}) => (
  <article className={`${s.article} ${markdown}`}>
    <header className={s.header}>
      <h2 className={s.title}>
        <Link to={`/article/${title}`} onClick={onClick}>{title}</Link>
      </h2>
      <aside className={s.date}>{date}</aside>
    </header>
    <section dangerouslySetInnerHTML={createMarkup(content)} />
  </article>
);

export default Article
