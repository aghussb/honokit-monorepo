import { hc } from "hono/client";
import type { ApiRoutes } from "@honokit-monorepo/api/routes"

// https://hono.dev/docs/guides/rpc#typescript-project-references
export type Client = ReturnType<typeof hc<ApiRoutes>>

export const hcWithType = (...args: Parameters<typeof hc>): Client =>
   hc<ApiRoutes>(...args)
