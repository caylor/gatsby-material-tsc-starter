"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_helmet_1 = require("react-helmet");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
const Nav_1 = require("../components/Nav");
require("./index.css");
exports.default = (props) => (React.createElement(MuiThemeProvider_1.default, null,
    React.createElement("div", null,
        React.createElement(react_helmet_1.default, { title: props.data.site.siteMetadata.title, meta: [
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ] }),
        React.createElement(Nav_1.default, null),
        React.createElement("div", { style: {
                margin: '0 auto',
                maxWidth: 900,
                paddingTop: '100px',
            } }, props.children()))));
exports.query = graphql `
    query LayoutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
//# sourceMappingURL=index.js.map