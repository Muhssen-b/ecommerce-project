import React from 'react'
import ShopData from './Shop.Data'

import CollectionPreview from '../Preview-Collection-Component/Preview-Collection'
class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections : ShopData
        }
    }
    render() {
        const {collections} = this.state
    return (
        <div className="shop-page">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
        </div>);
    
    }
}

export default ShopPage;