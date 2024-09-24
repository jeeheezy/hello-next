import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  const timestamp = new Date().toLocaleString();
  console.log("test")

  return (
    <html lang="en">
      <body>
        {children}
        <footer>Page rendered on {timestamp}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
