import * as React from 'react'
import Helmet from 'react-helmet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Nav from '../components/Nav'
import './index.css'

interface LayoutProps {
    data: {
        site: {
            siteMetadata: {
                title: string
            }
        }
    }
    children: any
}

export default (props: LayoutProps) => (
    <MuiThemeProvider>
        <div>
            <Helmet
                title={props.data.site.siteMetadata.title}
                meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                ]}
            />
            <Nav />
            <div
                style={{
                  margin: '0 auto',
                  maxWidth: 900,
                  paddingTop: '100px',
                }}
            >
                {props.children()}
            </div>
        </div>
    </MuiThemeProvider>
)

export const query = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
