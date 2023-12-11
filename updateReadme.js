import fs from 'node:fs';
import { projects } from './projects.js';

const mainSite = 'https://lucas8x.github.io/frontendmentor-challenges/';
const MD_FILE_PATH = './README.md';
const TABLE_START = '| - | - |';

try {
  console.log('Updating README ...');

  const markdown = fs
    .readFileSync(MD_FILE_PATH, {
      encoding: 'utf-8',
    })
    .split('\n');

  const projectsTable = projects.map((p, i) => {
    const name = p.id.split('-').join(' ').replace('main', '').trim();
    return `| ${i + 1}. [${name}](${new URL(
      p.liveURL,
      mainSite,
    )}) | [Repository](${p.repoURL}) |`;
  });

  const tableStartIndex = markdown.indexOf(TABLE_START);
  const tableEndIndex =
    markdown.slice(tableStartIndex).indexOf('') + tableStartIndex;

  const updatedMarkdown = [
    ...markdown.slice(0, tableStartIndex + 1),
    ...projectsTable,
    ...markdown.slice(tableEndIndex),
  ].join('\n');

  fs.writeFileSync(MD_FILE_PATH, updatedMarkdown, {
    encoding: 'utf-8',
  });

  console.log('Successfully Updated README.');
} catch (error) {
  console.error("Couldn't Update README.");
}
