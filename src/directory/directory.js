import React from 'react';
import MenuItem from '../Menu-item/Menu-item'

import './directory.scss'

class Directory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sections: [{
                title: 'hats' ,
                imageUrl: 'https://images.asos-media.com/products/tommy-hilfiger-bucket-hat-in-navy-with-tarten-logo/21422443-1-desertsky?$XXL$&wid=513&fit=constrain',
                id : 1,
                linkUrl: 'shop'

            },
            {
                title: 'Jackets',
                imageUrl: 'https://images.asos-media.com/products/asos-design-oversized-denim-jacket-in-washed-black/20121286-1-washedblack?$n_640w$&wid=634&fit=constrain',
                id: 2,
                linkUrl: ''
                
                
            }, 
            {
                title: 'Sneakers',
                imageUrl: 'https://images.asos-media.com/products/adidas-originals-vegan-stan-smith-trainers-in-white-and-green/14675168-1-green?$XXL$&wid=513&fit=constrain',
                id : 3,
                linkUrl: ''

            },
            {
                title: 'Womens',
                imageUrl: 'https://images.asos-media.com/products/yas-midaxi-dress-with-tiered-skirt-and-puff-sleeves-in-floral-print/14977395-1-pinkfloral?$n_640w$&wid=634&fit=constrain',
                id: 4,
                size: 'large',
                linkUrl: ''

            },
            {
                title: 'Mens',
                imageUrl: 'https://images.asos-media.com/products/asos-design-oversized-denim-jacket-in-black/20120969-1-black?$n_640w$&wid=634&fit=constrain',
                id: 5,
                size: 'large',
                linkUrl: ''

            }
        ]
        }
    }
    render() {
    return (
        <div className='directory-menu'>
            {
                this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))
            }
        </div>

    )
    }

}

export default Directory

