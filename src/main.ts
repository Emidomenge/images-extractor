import config from './config';
import FileHelper from './helpers/fileHelper';

const existingFolders: string[] = [];

const isBlacklisted = (path: string) => {
	return config.blackListPath.some((blacklistedPath) => path.includes(blacklistedPath));
};

FileHelper.processLineByLine(undefined, (line) => {
	if (isBlacklisted(line) || line.length < 2) return;

	const completePath = line;
	const levels = completePath.split('/');

	const fileName = levels[levels.length - 1];
	levels.pop();

	// keep the two last index and concat them in a string
	const folderPath = levels
		.slice(levels.length - 2)
		.map((path) => {
			// escape spaces with a backslash and lower case
			return path.toLowerCase();
		})
		.join('_');

	if (!existingFolders.includes(folderPath)) {
		console.log('creating folder ' + folderPath);
		FileHelper.createFolder(config.destinationRootPath + folderPath);

		existingFolders.push(folderPath);
	}

	// copy file
	FileHelper.copyFile(line, config.destinationRootPath + '/' + folderPath + '/' + fileName);
});
