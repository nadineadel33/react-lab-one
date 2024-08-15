import React from 'react';

function Home() {
  const articles = [
    { title: 'first', content: 'This is the first article' },
    { title: 'second', content: 'This is the second article' },
  ];

  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          {article.title === 'first' ? (
            <>
              <h2>{article.content}</h2>
              <img src="../images/hand.jpg" alt="First Article" />
              <a href="#">Read more</a>
            </>
          ) : (
            <p>{article.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Home;
