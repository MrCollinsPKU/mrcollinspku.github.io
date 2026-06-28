const fs = require('fs');
const path = require('path');

const PAGES = [
    { id: 'index',     title: '主页 | Home' },
    { id: 'artwork',   title: '作品 | Artwork' },
    { id: 'reviews',   title: '乐评 | Reviews' },
    { id: 'jam-tracks',title: '即兴伴奏 | Jam Tracks' },
    { id: 'resources', title: '资源 | Resources' },
];

const shell = fs.readFileSync('templates/shell.html', 'utf8');

for (const { id, title } of PAGES) {
    const content = fs.readFileSync(`pages/${id}.html`, 'utf8');
    const html = shell
        .replace('{{PAGE_TITLE}}', title)
        .replace('{{CONTENT}}', content);
    fs.writeFileSync(`${id}.html`, html);
    console.log(`[√] built ${id}.html`);
}