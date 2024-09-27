<script>
    // This variable will receive the posts from the load function in +page.server.js
    export let posts = [];
    console.log('Posts received in Svelte:', posts);
</script>

<h1>We love web Blog Posts</h1>
{#if posts.length > 0}
    {#each posts as post}
        <p>
            <a href="/blog/{post.slug}">{post.title}</a>
        </p>
    {/each}
{:else}
    <p>No posts available.</p>
{/if}