import * as React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui'
import { MarkdownRemark } from '../graphql-types'
import * as material1 from '../static/material-1.png'
import * as material2 from '../static/material-2.png'
import * as material3 from '../static/material-3.png'
import * as material4 from '../static/material-4.png'
import * as material5 from '../static/material-5.png'

interface BlogPostProps {
    data: {
        markdownRemark: MarkdownRemark
    }
}

export default (props: BlogPostProps) => {
    const { frontmatter, html } = props.data.markdownRemark;
    const materialRandom = [material1, material2, material3, material4, material5];
    const cover = frontmatter.cover ? frontmatter.cover.childImageSharp.resolutions.src :
        materialRandom[Math.floor(Math.random() * 4 + 1)]
    return (
        <Card>
            <CardMedia 
                overlay={<CardTitle title={frontmatter.title} />}
                overlayContentStyle={{background: 'none'}}
                style={{height: '280px'}}
            >
                <img src={cover} alt="" height="280"/>
            </CardMedia>
            <CardTitle 
                subtitle={frontmatter.date}
            />
            <CardText dangerouslySetInnerHTML={{ __html: html}} />
        </Card>
    );
};

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
                cover {
                    childImageSharp {
                        resolutions {
                            width
                            height
                            src
                            srcSet
                        }
                    }
                }
            }
            html
        }
    }
`;