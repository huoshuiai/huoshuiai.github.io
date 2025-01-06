import { defineCollection, z } from 'astro:content';

const notesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
    })
});

export const collections = {
    notes: notesCollection,
}; 