import { publicProcedure, router } from './trpc'

export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => {
    return 'Hello TRPC!'
  }),
})

export type AppRouter = typeof appRouter
