export const div = (attributes, parent, children = null) => {
    return tag('div', attributes, parent, children);
};

export const h1 = (attributes, parent, children = null) => {
    return tag('h1', attributes, parent, children);
};

export const h2 = (attributes, parent, children = null) => {
    return tag('h2', attributes, parent, children);
};

export const p = (attributes, parent, children = null) => {
    return tag('p', attributes, parent, children);
};

export const button = (attributes, parent, children = null) => {
    return tag('button', attributes, parent, children);
};

export const input = (attributes, parent, children = null) => {
    return tag('input', attributes, parent, children);
};

export const select = (attributes, parent, children = null) => {
    return tag('select', attributes, parent, children);
};

export const option = (attributes, parent, children = null) => {
    return tag('option', attributes, parent, children);
};

export const img = (attributes, parent, children = null) => {
    return tag('img', attributes, parent, children);
};

export const span = (attributes, parent, children = null) => {
    return tag('span', attributes, parent, children);
};

export const tag = (type, attributes, parent, children = null) => {
    let e = document.createElement(type);

    if (parent) parent.appendChild(e);

    if (children) {
        children.map((child) => {
            e.appendChild(child);
        });
    }

    for (const k in attributes) {
        e[k] = attributes[k];
    }

    return e;
};