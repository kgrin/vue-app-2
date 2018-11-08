<template>
	<div class="container mt-1">
		<b-nav pills>
    		<b-nav-item to="/" exact>Home</b-nav-item>
			<b-nav-item to="/blog">Blog</b-nav-item>
		</b-nav>
		<router-view class="p-3"></router-view>
	</div>
</template>

<script>
export default {
	name: 'app'
}
</script>
