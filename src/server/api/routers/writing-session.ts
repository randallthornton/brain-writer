import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const writtingSessionRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ title: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.writingSession.create({
        data: {
          title: input.title,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getUserSessions: protectedProcedure.query(({ ctx }) => {
    return ctx.db.writingSession.findMany({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),
});
