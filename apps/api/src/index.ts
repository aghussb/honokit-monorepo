import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
   .basePath("/api")
   .get('/', (c) => {
      return c.text('Hello Hono API!')
   })
   .get('/test', (c) => {
      return c.text('Hello HonoKit Monorepo!')
   })

export type ApiRoutes = typeof app

serve({
   fetch: app.fetch,
   port: 3000
})
