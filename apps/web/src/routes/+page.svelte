<script lang="ts">
	import { hcWithType } from '@honokit-monorepo/api-client';

	async function test() {
		const response = await hcWithType('/')
			.api.test.$get()
			.then((res: Response) => res.text());

		return response;
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<br />

{#await test()}
	<p>waiting for the promise to resolve...</p>
{:then value}
	<p>The value is {value}</p>
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
