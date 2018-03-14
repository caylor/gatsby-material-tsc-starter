"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostList_1 = require("../components/PostList");
exports.default = PostList_1.default;
exports.pageQuery = graphql `
    query ArchiveQuery($archive: String) {
        allMarkdownRemark(
            filter: {
                frontmatter: {
                    date: { eq: $archive }
                }
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
//# sourceMappingURL=archive-page.js.map