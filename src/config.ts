const config = {
  destinationRootPath: 'path/to/your/destination/folder',
  blackListPath: ['some','path','to','blacklist'],
  // Higher the value is, longer the folder name will be.
  // e.g: path1/path2/file.txt will output a folder "path1_path2/file.txt"
  // e.g2: path1/path2/path3/path4/file.txt will output a folder "path1_path2_path3_path4/file.txt"
  numberOfNestedFolderNameToKeep: 2,
}

export default config
