import React from 'react';
const Dateoptions = { year: 'numeric', month: 'long', day: 'numeric' };

const Article = props => (
    <article className="article">
        <h1>{props.title}</h1>
        <div className="article-publisher">{props.displayName}</div>
        <div>{new Date(props.createdAt).toLocaleDateString('en-US', Dateoptions)}</div>
        <p>{props.summary}</p>
        <div> {props.likesCount} Likes</div>
    </article>
)

export default Article; 

