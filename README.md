# cra-template-rescript-parcel

[![npm](https://img.shields.io/npm/v/cra-template-rescript-parcel)](https://npm.im/cra-template-rescript-parcel)
[![npm downloads per month](https://img.shields.io/npm/dm/cra-template-rescript-parcel)](https://npm.im/cra-template-rescript-parcel)

ReScript + React + Parcel template for Create React App

## Usage

use with npx

```sh
npx create-react-app --template=rescript-parcel my-rescript-parcel-app
```

or with yarn

```sh
yarn create react-app --template=rescript-parcel my-rescript-parcel-app
```

## Scripts

```shell
# Run app with builds and hot reload
npm start

# Start rescript app with watch
npm run start:re

# Run app without builds
npm run start:pa

# Build parcel and rescript app
npm run build

# Build rescript app with dependencies
npm run build:re

# Build parcel with --no-cache flag by default
npm run build:pa

# Clear rescript lib folder 
npm run clean
```

## Tests
This template does not include a test runner by default.

## Settings included

- ReScript syntax (`*.res`)
- Parcel configuration
- Prettier
