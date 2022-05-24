import fs from 'fs';
import readline from 'readline';

class FileHelper {
   static async processLineByLine (
    path = 'files/input.txt',
    callbackLine: (line: string) => void,
  ):Promise<void> {
    const fileStream = fs.createReadStream(path);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.
      callbackLine(line);
    }
  }

  static async createFolder(path: string): Promise<void> {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  }

  static async copyFile(source: string, destination: string): Promise<void> {
    fs.copyFileSync(source, destination);
  }
}

export default FileHelper
