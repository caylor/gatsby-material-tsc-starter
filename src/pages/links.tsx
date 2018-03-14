import * as React from 'react'
import { Avatar, Chip } from 'material-ui'
import links from '../data/links'

export default () => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                links.map((link: any, index: number) => 
                    <Chip 
                        key={index} 
                        labelStyle={style.chipLabel}
                        style={style.chip}
                        onClick={() => window.location.href=link.link || ''} 
                    >
                        <Avatar src={link.avatar} style={style.chipIcon} />
                        {link.name}
                    </Chip>
                )
            }
        </div>
    )
}

const style = {
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
}