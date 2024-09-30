<script>
    // This variable will receive the posts from the load function in +page.server.js
    export let data = [];
    console.log('Posts received in Svelte:', data);
</script>

<h1>We love web Blog Posts</h1>
{#if data.posts && data.posts.length > 0}
    {#each data.posts as post}
        <p>
            <a href="/blog/{post.slug}">{post.title}</a>
        </p>
    {/each}
{:else}
    <p>No posts available.</p>
{/if}