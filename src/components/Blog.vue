<template>
	<div class="blog">
		<b-card
			v-for="post in posts"
			:key="post.id"
			:title="post.title"
			:img-src="post.image"
			img-alt="BlogPost Image"
			img-top
			class="mb-2"
		>
			<b-button :to="'/blog/post/' + post.id" variant="primary" class="float-right">More...</b-button>
		</b-card>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Blog',
	data () {
		return {
			posts: Array
		}
	},
	mounted () {
		axios
			.get('/posts.json')
			.then(response => {
				this.posts = response.data
			})
			.catch(error => console.log(error));
	}
}
</script>
