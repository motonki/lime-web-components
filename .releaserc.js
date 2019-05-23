module.exports = {
    extends: "semantic-release-monorepo",
    monorepo: {
        analyzeCommits: [ "@semantic-release/commit-analyzer" ],
        generateNotes: [ "@semantic-release/release-notes-generator" ],
    },
    verifyConditions: [
    ],
    verifyRelease: [
        "@semantic-release/changelog",
        "@semantic-release/npm",
        "@semantic-release/git",
        "@semantic-release/github",
    ]
        .map(require)
        .map(x => x.verifyConditions),
    prepare: [
        "@semantic-release/changelog",
        "@semantic-release/npm",
        "@semantic-release/git",
    ],
    publish: [
        "@semantic-release/npm",
        "@semantic-release/github",
        [
            "@semantic-release/exec",
            { publishCmd: "cd .. && npm run docz:publish -- --v=${nextRelease.version} --dryRun=${options.dryRun}" },
        ],
    ],
    success: [ "@semantic-release/github" ],
    fail: [ "@semantic-release/github" ],
    branch: "master",
    npmPublish: true,
    repository: {
        type: "git",
        url: "https://github.com/Lundalogik/lime-web-components.git",
    },
};
