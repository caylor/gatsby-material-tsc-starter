import * as React from 'react'
import { Card, CardActions, CardHeader, CardText, FlatButton } from 'material-ui'
import { MarkdownRemarkConnection } from '../../graphql-types'

interface PostListProps {
    data: {
        allMarkdownRemark: MarkdownRemarkConnection
    }
}

export default (props: PostListProps) => {
    return (
        <div>
            {props.data.allMarkdownRemark.edges.map(({ node }) => 
                <Card key={node.id} style={{marginBottom: '20px'}}>
                    <CardHeader
                        title={node.frontmatter.title}
                        subtitle={node.frontmatter.date}
                    />
                    <CardText>{node.excerpt}</CardText>
                    <CardActions>
                        <FlatButton 
                            label="read more"
                            href={node.fields.slug} 
                        />
                    </CardActions>
                </Card>
            )}
        </div>
    )   
}