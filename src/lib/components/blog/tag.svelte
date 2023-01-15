<script>
	export let color = 'primary';
</script>

<div
	class="flex items-center justify-center gap-2 px-4 py-2
    rounded-md w-fit whitespace-nowrap
    font-medium text-sm
    {color}=='primary' ? text-blue-500
    {color}=='primary' ? bg-blue-50
"
>
	<slot />
</div>
