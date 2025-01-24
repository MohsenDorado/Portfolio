import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectsOnTechnologiesSumAggregateInputType> = z
  .object({
    projectId: z.literal(true).optional(),
    technologyId: z.literal(true).optional(),
  })
  .strict();

export const ProjectsOnTechnologiesSumAggregateInputObjectSchema = Schema;
