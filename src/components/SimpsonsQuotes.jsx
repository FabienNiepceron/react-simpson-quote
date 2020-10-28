import React from 'react';

function SimpsonsQuotes({ simpsons }) {
    return (
    <figure className="QuoteCard">
      <img src={simpsons.image} alt={simpsons.character} />
      <figcaption>
        <blockquote>{simpsons.quote}</blockquote>
        <cite>{simpsons.character}</cite>
      </figcaption>
    </figure>
  );
}

export default SimpsonsQuotes;