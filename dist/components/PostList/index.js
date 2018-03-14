"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_ui_1 = require("material-ui");
exports.default = ({ children, data }) => {
    return (react_1.default.createElement("div", null, data.allMarkdownRemark.edges.map(({ node }) => react_1.default.createElement(material_ui_1.Card, { key: node.id, style: { marginBottom: '20px' } },
        react_1.default.createElement(material_ui_1.CardHeader, { title: node.frontmatter.title, subtitle: node.frontmatter.date }),
        react_1.default.createElement(material_ui_1.CardText, null, node.excerpt),
        react_1.default.createElement(material_ui_1.CardActions, null,
            react_1.default.createElement(material_ui_1.FlatButton, { label: "read more", href: node.fields.slug }))))));
};
//# sourceMappingURL=index.js.map