# Nx Template

## Package management

This project uses [pnpm](https://pnpm.io/) as the package manager. You can install it with the following command:

```sh
npm install -g pnpm
```

## Global dependencies

This project uses the following global dependencies:

```sh
npm install -g @commitlint/cli @commitlint/config-conventional @commitlint/config-nx-scopes eslint@~8.48.0 ts-node ts-jest lint-staged husky
```

## Running tasks

To execute tasks with Nx use the following syntax:

```bash
nx <target> <project> <...options>
```

You can also run multiple targets:

```sh
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```sh
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Explore the Project Graph

Run `nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/features/generate-code).
