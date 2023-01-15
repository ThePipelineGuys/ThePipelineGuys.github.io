<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<article class="prose lg:prose-xl mx-auto">
	<h1>{data.title}</h1>
	<p class="text-sm">{data.readingTime}</p>
	{@html data.html}
</article>
