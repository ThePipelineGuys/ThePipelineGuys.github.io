import type { ItemOptions } from 'podcast';
import podcast, { site } from '$lib/podcast';

export type Episode = ItemOptions & {
	metadata?: unknown | undefined;
	default?: unknown | undefined;
	html?: string;
	css?: unknown;
	head?: string;
	spotifyId?: string;
};

const files: Record<string, Episode> = import.meta.glob('./episodes/*.md', { eager: true });

const episodes: Episode[] = [];
for (const path in files) {
	const file = files[path];
	if (file) {
		const rendered = file.default.render();
		episodes.push({
			...file.metadata,
			...rendered,
			guid: path,
			content: rendered.html,
			author: file.metadata?.author ?? podcast.author,
			itunesAuthor: file.metadata?.author ?? podcast.author,
			itunesSubtitle: 'Just another Episode',
			itunesSummary: file.metadata?.description ?? 'Just another Episode',
			itunesTitle: file.metadata.title,
			enclosure: {
				type: 'audio/mpeg',
				...file.metadata.enclosure,
				url: `${site.cdnUrl}episodes/${file.metadata.enclosure.file}`
			}
		});
	}
}

export default episodes;
