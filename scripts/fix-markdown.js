import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 指定 Markdown 文件所在的目录
const NOTES_DIR = path.join(__dirname, '../src/content/notes');

// 读取目录下的所有 .md 文件
fs.readdir(NOTES_DIR, (err, files) => {
    if (err) {
        console.error('读取目录失败:', err);
        return;
    }

    files.filter(file => file.endsWith('.md')).forEach(file => {
        const filePath = path.join(NOTES_DIR, file);
        
        // 读取文件内容
        fs.readFile(filePath, 'utf8', (err, content) => {
            if (err) {
                console.error(`读取文件 ${file} 失败:`, err);
                return;
            }

            // 处理内容
            const newContent = content
                .replace(/\n\n/g, '\n<DOUBLE_NEWLINE>')
                .replace(/\n/g, '\n\n')
                .replace(/\n<DOUBLE_NEWLINE>/g, '\n\n')
                .replace(/\n\n\n+/g, '\n\n');

            // 写回文件
            fs.writeFile(filePath, newContent, 'utf8', err => {
                if (err) {
                    console.error(`写入文件 ${file} 失败:`, err);
                    return;
                }
                console.log(`成功处理文件: ${file}`);
            });
        });
    });
}); 