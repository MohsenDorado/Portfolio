import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TechnologySumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict();

export const TechnologySumAggregateInputObjectSchema = Schema;
