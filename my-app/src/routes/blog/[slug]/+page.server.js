import path from 'path';
import fs from 'fs';
import { marked } from 'marked';
import grayMatter from 'gray-matter';
import { error } from '@sveltejs/kit';

function getPostBySlug(slug) {
    const filesPath = 'src/lib/posts';
    const files = fs.readdirSync(filesPath).filter(file => file.endsWith('.md'));

    for (const file of files) {
        const postContent = fs.readFileSync(path.resolve(filesPath, file), 'utf-8');
        const { data, content } = grayMatter(postContent);
        
        if (data.slug === slug) {
            const html = marked(content);
            return {
                html,
                ...data,
            };
        }
    }
    return null;
}

export function load({ params }) {
    const { slug } = params;

    const post = getPostBySlug(slug);

    if (!post) {
        throw error(404, `Post not found: ${slug}`);
    }

    return {
        post,
    };
}