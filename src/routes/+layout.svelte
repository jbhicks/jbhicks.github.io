<script>
	import '../app.css';
	import { Icon } from '@daisyui/svelte';
</script>

<header class="bg-gray-800 text-white">
	<div class="container mx-auto flex items-center py-4">
		<nav>
			<ul class="flex">
				<li>
					<a href="/" class="flex items-center px-4 py-2 hover:bg-gray-700">
						<Icon name="home" class="w-5 h-5 mr-2" />
						Home
					</a>
				</li>
				<li>
					<a href="/mixes" class="px-4 py-2 hover:bg-gray-700">
						<Icon name="music" class="w-5 h-5 mr-2" />
						Mixes
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
