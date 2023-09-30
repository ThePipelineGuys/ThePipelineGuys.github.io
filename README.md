# The Pipeline Guys

## Developing

Once you've created a project and installed dependencies with `yarn ci`, start a development server:

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

## Generate Images

```bash
git clone https://github.com/matfantinel/image-transmutation
cd image-transmutation
npm ci
node ./index.js --run --sourceFolder "../static/images-archive" --targetFolder "../static/images" --inputFormats "jpg" --inputFormats "jpeg" --inputFormats "png" --outputFormats "webp" --outputFormats "avif" --outputFormats "png"
cd ..
```

## Building

To create a production version of your app:

```bash
yarn build
```

You can preview the production build with `yarn preview`.

## Tools

### Conversion

```bash
for file in $(find . -name "*.mp4")
do
    echo $file;
    ffmpeg -i $file -b:a 64k  -minrate 64k  -maxrate 64k  -bufsize 64k -codec:a libmp3lame -vn -preset veryfast $file.mp3;
done
```
### Metadata

```bash
for file in $(find . -name "*.mp3" | sort)
do
    echo $file;
    mdls $file | grep Duration | awk '{ print $3 }' | cut -d '.' -f 1
    mdls $file | grep LogicalSize  | awk '{ print $3 }' | cut -d '.' -f 1
done
```
