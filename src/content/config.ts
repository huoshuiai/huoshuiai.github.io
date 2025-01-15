import { defineCollection, z } from 'astro:content';

const notesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
    })
});

const designsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        website: z.string(),
        coverImage: z.string(),
        tags: z.array(z.string()).optional(),
        description: z.string(),
    })
});

const memoriesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        author: z.string()
    })
});

export const collections = {
    notes: notesCollection,
    designs: designsCollection,
    memories: memoriesCollection,
}; 