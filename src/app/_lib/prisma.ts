import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"

// This helps prevent creating too many PrismaClient instances in development
// due to Next.js's hot-reloading feature.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Initialize the Prisma Client, extending it with Accelerate
const prisma =
  globalForPrisma.prisma ?? new PrismaClient().$extends(withAccelerate())

// Export the single instance
export default prisma

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
