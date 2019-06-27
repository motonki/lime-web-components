const fs = require('fs');

traverseFileSystem('doc/api');

function traverseFileSystem(path) {
    let files = fs.readdirSync(path);

    for (let file of files) {
        let filepath = path + '/' + file;
        let stats = fs.statSync(filepath);

        if (stats.isFile()) {
            transformFile(filepath);
        } else if (stats.isDirectory()) {
            traverseFileSystem(filepath);
        }
    }
}

function transformFile(filepath) {
    let data = fs.readFileSync(filepath, 'utf8');

    // Remove first line, it contains a breadcrumb
    let regex = /.+?\n/;
    data = data.replace(regex, '');

    // Remove all links since they are broken
    // TODO: Maybe fix them so they work
    regex = /\[(.+?)]\(.+?\)/g;
    data = data.replace(regex, '$1');

    // Fix title, remove "Interface: "
    data = data.replace('# Interface:', '# ');

    // Fix title, remove "Class: "
    data = data.replace('# Class:', '# ');

    // Fix title, remove "Enumeration: "
    data = data.replace('# Enumeration:', '# ');

    // Remove hierarchy section
    regex = new RegExp('Hierarchy.+?##', 'gs');
    data = data.replace(regex, '');

    // Remove globals section
    regex = new RegExp('Globals\\s\\/.+\\/\\n', 'gs');
    data = data.replace(regex, '');

    // Remove index section
    regex = new RegExp(
        '##\\s#\\sIndex\\s*####\\s(Methods|Properties).+?(##\\s(Methods|Properties))',
        'gs'
    );
    data = data.replace(regex, '---\n\n$2');

    // Make anchors single-tags
    regex = /(<a.+?)><\/a>/g;
    data = data.replace(regex, '$1/>');

    // Remove all titles and have them in
    // the mdx files instead
    data = data.replace(/^# (.*)$/gm, '');

    fs.writeFileSync(filepath, data, 'utf8');
}
