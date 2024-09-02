import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { html, raw  } from 'hono/html'
import { serveStatic } from '@hono/node-server/serve-static'
import  Layout from './shared/layout' 
import { ComponentClass, FC, ReactElement } from 'hono/jsx'
import Home from './views/home'
const app = new Hono()
app.use('/static/*', serveStatic({ root: './src' }))

interface View{
  View: FC
}

const Content: FC<View> = ({ View }) => (
  <Layout>
    <View />
  </Layout>
)


app.get('/', (c) => {
  return c.html(<Content  View={Home} />)
})

app.get('/api' , (c) => {
  return  c.json({
    "api_hono" : "Hello world"
  })
})

const port = process.env.PORT || 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port 
})