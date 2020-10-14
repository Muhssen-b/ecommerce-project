import React from 'react';
import MenuItem from '../Menu-item/Menu-item'

import './directory.scss'

class Directory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sections: [{
                title: 'hats' ,
                imageUrl: 'https://images.asos-media.com/products/kangol-rain-hat-in-black/21934535-1-black?$n_640w$&wid=634&fit=constrain',
                id : 1

            },
            {
                title: 'Jackets',
                imageUrl: 'https://images.asos-media.com/products/bershka-peanuts-varsity-bomber-jacket-in-tan-ecru/21191838-1-beige?$XXL$&wid=513&fit=constrain',
                id: 2
            }, 
            {
                title: 'Sneakers',
                imageUrl: 'https://images.asos-media.com/products/adidas-originals-vegan-stan-smith-trainers-in-white-and-green/14675168-1-green?$XXL$&wid=513&fit=constrain',
                id : 3
            },
            {
                title: 'Womens',
                imageUrl: 'https://images.asos-media.com/products/yas-midaxi-dress-with-tiered-skirt-and-puff-sleeves-in-floral-print/14977395-1-pinkfloral?$n_640w$&wid=634&fit=constrain',
                id: 4,
                size: 'large'
            },
            {
                title: 'Mens',
                imageUrl: 'https://images.asos-media.com/products/asos-design-oversized-denim-jacket-in-black/20120969-1-black?$n_640w$&wid=634&fit=constrain',
                id: 5,
                size: 'large',
            }
        ]
        }
    }
    render() {
    return (
        <div className='directory-menu'>
            {
                this.state.sections.map(({title, imageUrl, id, size }) => (
                    <MenuItem key={id} title={title} imageUrl = {imageUrl} size={size} />
                ))
            }
        </div>

    )
    }

}

export default Directory

