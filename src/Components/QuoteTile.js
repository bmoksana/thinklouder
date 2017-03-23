import React from 'react';

export default function QuoteTile({ quote }) {
  console.log(quote);
  return(
    <div>
      title: {quote.title}
      author: {quote.author}
    </div>
  )
}
