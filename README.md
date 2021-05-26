# Companion Scripts

Monorepo for [Companion Studio](https://www.companion.studio/) script packages. Inpsired by [`react-scripts`](https://github.com/react-workspaces/create-react-app/tree/master/packages/react-scripts) and [`kcd-scripts`](https://github.com/kentcdodds/kcd-scripts)
This just helps set up a project quicker and more consistently, be enforcing the same `eslint`, `prettier` configs and then using `husky` to make sure they're actually used in a project.

## Authors

- [Josh Ellis](https://github.com/joshuaellis)

## Packages

We've got:

- [`@studiocompanion/scripts`](/packages/scripts)
- [`@studiocompanion/eslint-config`](/packages/eslint-config)
- [`@studiocompanion/prettier`](/packages/prettier)

If you've got an idea for a new one we'd find useful, why not submit a PR!

## Developing

### Built With

- ESLint
- Husky
- Prettier

### Prerequisites

- Node 15.14.0

### Setting up Dev

There isn't much of a setup right now, maybe as the repo expands why might want to include some tests. To keep it up to date, we have dependabot!

### Building

The project is largely dev tools and thus doesn't require any transpiling as of yet.

## Deploying / Publishing

We have `changesets` installed to handle versioning and publishing:

```shell
yarn changeset:add
```

Follow the prompt to flag which packages need to update although we keep all our packages at the same version.

Then you'll run:

```shell
yarn vers
```

This will update all the packages correctly according to what version you just set with the `add` script & possibly update the deps within those packages.

Finally:

```shell
yarn release
```

This will build the packages, publish them & push the tags to github to signify a new release. Please then update the `releases` on github.
