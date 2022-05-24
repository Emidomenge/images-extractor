# images-extractor

## What is it ? 🤔

This project is born after I was looking in the internet for a way to extract images from a hard drive disk.

My family had very old laptops which contains a lot of pictures.

I took off the hard drive from the laptop, then plugin it in my computer, so that I only need to execute this project and I'm able to extract everything within an hour (max 😉).

## Getting Started 🚀

### Step 1: Clone the project and install node modules

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

```
git clone https://github.com/Emidomenge/images-extractor.git images-extractor \
cd images-extractor \
yarn
```

### Step 2: Execute in the terminal

**Note**: Only work for Linux and Mac OS X.

```sh
find /path/to/disk -type f -print0 | xargs -0 file --mime-type | grep -i image | cut -f 1 -d : > /path/to/files/input.txt

```

- `/path/to/disk` is the location where you want to start to search for images

- `/path/to/files/input.txt` is the absolute path where it should go `files/input.txt` of this repository.

### Step 3: Init the `src/config.ts` file

Only `destinationRootPath` attribute is mandatory.

The other ones are up to your convenience.

### Step 4: Execute `yarn start`

You will see in the logs, folder created.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.domenge.fr/"><img src="https://avatars0.githubusercontent.com/u/15636263?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Emilien Domenge</b></sub></a><br /><a href="https://github.com/abtasty/flagship-js-sdk/commits?author=Emidomenge" title="Code">💻</a> <a href="https://github.com/abtasty/flagship-js-sdk/commits?author=Emidomenge" title="Documentation">📖</a> <a href="#example-Emidomenge" title="Examples">💡</a> <a href="#maintenance-Emidomenge" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
