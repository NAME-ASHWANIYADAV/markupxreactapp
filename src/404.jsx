import React from 'react';
import './global.css';
import './markupxlanding.css';

const NotFoundPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>404 Not Found</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Brigends+Expanded:wght@400&display=swap"
        />
        <style>
          {`
            .not-found {
              text-align: center;
              padding: 50px;
            }
            .not-found h1 {
              font-size: 3em;
              margin-bottom: 20px;
            }
            .not-found p {
              font-size: 1.5em;
              margin-bottom: 20px;
            }
            .not-found a {
              font-size: 1.2em;
              color: #007BFF;
              text-decoration: none;
            }
            .not-found a:hover {
              text-decoration: underline;
            }
          `}
        </style>
      </head>
      <body>
        <div className="not-found">
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <a href="index.html">Go back to Home</a>
        </div>
      </body>
    </html>
  );
};

export default NotFoundPage;
