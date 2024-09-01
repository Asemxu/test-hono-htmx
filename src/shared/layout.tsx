import { html } from "hono/html"

const Layout = () => html`
<html>
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <meta name="description" content="Description">
  <head prefix="og: http://ogp.me/ns#">
  <meta property="og:type" content="article">
  <!-- More elements slow down JSX, but not template literals. -->
  <meta property="og:title" content="Title">
  <link rel="icon" type="image/jpeg" href="/static/img/test.jpeg">
</head>
<body>
  <h1>Hola</h1>
</body>
</html>
`

export default Layout