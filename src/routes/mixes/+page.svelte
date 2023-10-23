<script lang="ts">
	import type { Mix, Collection } from '$lib/types';

	let mixes = [] as Mix[];

	async function roll() {
		const response = await fetch('/api/mixes');
		const mixList: Collection = await response.json();
		mixes = mixList.collection;
		console.log(mixes);
	}

	function formatDuration(duration: number) {
		const date = new Date(duration);
		const hours = date.getUTCHours().toString().padStart(2, '0');
		const minutes = date.getUTCMinutes().toString().padStart(2, '0');
		const seconds = date.getUTCSeconds().toString().padStart(2, '0');
		return parseInt(hours) > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
	}
</script>

<button class="btn btn-accent" on:click={roll}>Get Mixes</button>

{#each mixes as mix}
	<div class="collapse collapse-arrow bg-base-200">
		<input type="radio" name="my-accordion-1" checked="checked" />

		<div class="text-xl font-medium">
			<figure class="flex items-center">
				<img src={mix?.track?.artwork_url} class="rounded-t-lg" alt={mix?.track?.title} />
				<figcaption class="p-4">
					<div class="text-xl font-medium">
						<a href={mix?.track?.permalink_url} target="_blank" rel="noopener"
							>{mix?.track?.title}</a
						>
					</div>
					<div class="text-gray-500">{mix?.track?.user?.username}</div>
					<div class="text-gray-500">{formatDuration(mix?.track?.duration)}</div>
				</figcaption>
			</figure>
		</div>
	</div>
	<div class="divider" />
{/each}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
