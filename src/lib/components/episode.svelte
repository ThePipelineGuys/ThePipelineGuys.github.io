<script>
	export let episode;
</script>

<h2 class="text-2xl font-bold">{episode.title}</h2>
<iframe
	title={episode.title}
	width="100%"
	height="152"
	frameborder="0"
	allowfullscreen=""
	allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
	src="https://open.spotify.com/embed/episode/{episode.spotifyId}?utm_source=generator"
/>
<a href="https://open.spotify.com/show/528EvxMPW9pk5DdCT7iyDb">The Pipeline Guys</a>
{@html episode.html}
