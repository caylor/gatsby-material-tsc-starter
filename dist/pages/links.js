"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const material_ui_1 = require("material-ui");
const links_1 = require("../data/links");
exports.default = () => {
    return (React.createElement("div", { style: style.wrapper }, links_1.default.map((link, index) => React.createElement(material_ui_1.Chip, { key: index, labelStyle: style.chipLabel, style: style.chip, onClick: () => window.location.href = link.link || '' },
        React.createElement(material_ui_1.Avatar, { src: link.avatar, style: style.chipIcon }),
        link.name))));
};
const style = {
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        backgroundColor: '#fff',
        border: '1px solid #D3D3D3',
        borderRadius: 0,
        width: 280,
        margin: '0 20px 24px 0'
    },
    chipIcon: {
        height: 50,
        width: 50,
        borderRadius: 0
    },
    chipLabel: {
        fontSize: '20px',
        lineHeight: '50px',
        margin: '0 auto'
    }
};
//# sourceMappingURL=links.js.map