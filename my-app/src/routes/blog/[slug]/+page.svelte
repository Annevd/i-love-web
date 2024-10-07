<script>
    export let data;
</script>

<h1>{data.post.title}</h1>
<main>
    <div class="post-content">{@html data.post.html}</div>
</main>

<style>

h1 {
    text-align: center;
    /* margin-bottom: 3rem; */
}

main {
    display: flex;
    justify-content: center;
}

</style>