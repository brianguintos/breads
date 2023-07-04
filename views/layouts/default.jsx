const React = require('react')

// function Default(html) {
//   return (
//     <html lang="en">
//     <head>
//       <title>Default</title>
//     </head>
//     <body>
//       <h1>HTML Rendered!</h1>
//       <div className="container">
//         {html.children}
//       </div>
//     </body>
//     </html>
//   )
// }

function Default(html) {
    return (
      <html>
      <head>
        <title>{html.title || 'Default'}</title>
      </head>
      <body>
        <h1>HTML Rendered!</h1>
        {html.children}
      </body>
      </html>
    )
  }
  

module.exports = Default


