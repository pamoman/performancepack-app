/*
 * Navigation Tree
 */

/*
 * Split path into array segments
 */
const pathToArray = (path = "") => {
    const cleanPath = path.replace(/^\/|\/$/g, '');
    const arr = cleanPath.split("/");

    return arr;
};

/*
 * Find the next branch in the tree,
 * either from an existing branch or creating a new one
 */
const getNextBranch = (branch, node) => {
    const existing = branch.findIndex(link => link.node === node);

    if (existing !== -1) {
        return branch[existing].children;
    } else {
        const child = {
            label: node.charAt(0).toUpperCase() + node.slice(1),
            path: null,
            icon: null,
            node,
            children: []
        };

        branch.push(child);

        const lastChild = branch.length - 1;
    
        return branch[lastChild].children;
    }
};

/*
 * Add the current link to the tree, in the correct position
 * relative to its parents if itself is not a parent branch
 * otherwise find the parent branch and give it a child (WTF!)
 */
const addToTree = (link, branch) => {
    const { label, path, icon } = link;

    const nodes = pathToArray(path);

    nodes.forEach((node, i) => {
        const isChild = nodes.length - 1 === i;

        if (isChild) {
            const child = {
                label,
                path,
                icon,
                node,
                children: []
            };

            branch.push(child);
        } else {
            branch = getNextBranch(branch, node);
        }
    });
};

/*
 * Cleanup the current links
 */
const createLinkList = (links) => {
    return links.map(link => {
        const { label, path, icon } = link.attributes;

        const pathList = pathToArray(path);

        return {
            label,
            path,
            icon,
            node: pathList.slice(-1)[0],
        }
    });
};

/*
 * Create an empty tree and fill the branches with links
 */
const createNavTree = (links = []) => {
    const listLinks = createLinkList(links);

    let tree = [];
  
    listLinks.forEach(link => {
        addToTree(link, tree);
    });

    return tree;
};

export default createNavTree;