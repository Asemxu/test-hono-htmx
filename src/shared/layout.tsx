import { html } from "hono/html"
import type { FC } from 'hono/jsx'
const Layout: FC = (props) => html`
<html>
<head>
  <meta charset="UTF-8">
  <title>Full Stack App Hone HTMX</title>
  <meta name="description" content="Description">
  <head prefix="og: http://ogp.me/ns#">
  <meta property="og:type" content="article">
  <meta property="og:title" content="Full Stack App Hone HTMX">
  <link rel="icon" type="image/jpeg" href="/static/img/test.jpeg">
  <link rel="stylesheet" href="/static/styles/tailwind.css">
  <script src="/static/scripts/htmx.min.js"></script>
</head>
<body>
  ${props.children}
</body>
</html>
`

export default Layout