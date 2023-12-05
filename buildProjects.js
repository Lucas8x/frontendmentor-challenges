import { execSync } from 'child_process';
import { projects } from './projects.js';

projects.forEach((p) => {
  const command = `npm run build -w ${p.id}`;

  console.log(`Building ${p.id} ...`);
  execSync(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o comando npx: ${error}`);
      return;
    }
    stdout && console.log(`Saída padrão: ${stdout}`);
    stderr && console.error(`Saída de erro: ${stderr}`);
  });
});
