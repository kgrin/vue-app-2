<template>
	<div class="blog-post">
		<b-card
			v-if="post"
			:title="post.title"
			:img-src="post.image"
			img-alt="BlogPost Image"
			img-bottom
			class="mb-2"
		>
			<span class="card-text" v-html="post.body"></span>
		</b-card>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'BlogPost',
	props: {
		post: Object
	},
	mounted () {
		axios
			.get('/posts.json')
			.then(response => {
				this.post = response.data.find(v => {
					return v.id == this.$route.params.id
				})
			})
			.catch(error => console.log(error));
	}
}
</script>
