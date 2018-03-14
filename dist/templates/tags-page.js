"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostList_1 = require("../components/PostList");
exports.default = PostList_1.default;
exports.pageQuery = graphql `
    query CategoryQuery($tag: String) {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: {
                frontmatter: {
                    tags: { in: [$tag] }
                },
            }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    id
                    frontmatter {
                        title
                        date
                    }
                    excerpt
                }
            }
        }
    }
`;
//# sourceMappingURL=tags-page.js.map