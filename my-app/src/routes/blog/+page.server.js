import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';

function getAllPosts(filesPath) {
    const posts = fs.readdirSync(filesPath)
        .filter(file => file.endsWith('.md'))
        .map((fileName) => {
            const post = fs.readFileSync(path.resolve(filesPath, fileName), 'utf-8');
            const { data } = grayMatter(post);
            return {
                ...data,
            };
        });

    return posts;
}

export async function load() {
    const posts = getAllPosts('src/lib/posts');
    return {
        posts
    };
}
