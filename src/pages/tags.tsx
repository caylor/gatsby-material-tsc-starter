import * as React from 'react'
import { navigateTo } from 'gatsby-link'
import { compact, uniq, kebabCase } from 'lodash'
import { MarkdownRemarkConnection } from '../graphql-types'

interface TagsProps {
    data: {
        allMarkdownRemark: MarkdownRemarkConnection
    }
}

export default class Tags extends React.PureComponent<TagsProps, void> {

    componentDidMount() {
        const wordcloud = require('wordcloud')
        const tagsCloud = this.props.data.allMarkdownRemark.edges
            .reduce((tags: string[], { node }) => 
                compact(uniq(tags.concat(node.frontmatter.tags)))
            , [])
            .reduce((cloud: any[], item: string) => {
                cloud.push([item, Math.floor(Math.random() * 11 + 40)])
                return cloud
            }, [])

        wordcloud(
            document.getElementById('tagsCloud'), 
            { 
                fontFamily: 'Finger Paint, cursive, sans-serif',
                list: tagsCloud,
                click: (item: string) => navigateTo(`/tags/${kebabCase(item[0])}`) 
            }
        );
    }

    render() {
        return(
            <canvas id="tagsCloud" width="900" height="500" /> 
        )
    }
}

export const query = graphql`
    query TagsQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        tags
                    }
                }
            }
        }
    }
`