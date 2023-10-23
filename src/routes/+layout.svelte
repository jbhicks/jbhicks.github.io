<script>
	import '../app.css';
</script>

<header class="bg-gray-800 text-white">
	<div class="navbar bg-base-500">
		<nav>
			<ul class="flex">
				<li>
					<a href="/" class="flex items-center px-4 rounded py-2 hover:bg-gray-700"> Home </a>
				</li>
				<li>
					<a href="/mixes" class="flex items-center rounded px-4 py-2 hover:bg-gray-700"> Mixes </a>
				</li>
			</ul>
		</nav>
	</div>
</header>
<slot />
