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
