import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { AUTHORS, TAGS, type AuthorKey, type TagKey } from './consts';

const authorKeys = Object.keys(AUTHORS) as [AuthorKey, ...AuthorKey[]];
const tagKeys = Object.keys(TAGS) as [TagKey, ...TagKey[]];

const blog = defineCollection({
	// `src/content/blog/` 폴더의 마크다운 파일을 글로 불러온다.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// 머리말(front matter) 형식 검증
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		authors: z.array(z.enum(authorKeys)).min(1),
		tags: z.array(z.enum(tagKeys)).default([]),
	}),
});

export const collections = { blog };
