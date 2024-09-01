import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { html, raw  } from 'hono/html'
import { serveStatic } from '@hono/node-server/serve-static'
import  Layout from './shared/layout' 

const app = new Hono()
app.use('/static/*', serveStatic({ root: './src' }))

const Content = () => (
  <Layout>
    <h1>Hello World</h1>
  </Layout>
)


// app.get('/', (c) => {
//   return c.html(<Content />)
// })

app.get('/' , (c) => {
  return  c.json({
    "api_hono" : "Hello world"
  })
})

const port = process.env.PORT || 5000
console.log(`Server is running on port ${port}`)

serve(app)