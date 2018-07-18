import React, { Component } from 'react';
import ProductRow from './ProductRow';
import ProductFood from './ProductFood';
import ProductPlastic from './ProductPlastic';
import ProductMetal from './ProductMetal';
import ProductElectronics from './ProductElectronics';
import ProductFabric from './ProductFabric';
import ProductBatteries from './ProductBatteries';
import ProductLightbulbs from './ProductLightbulbs';
import ProductWood from './ProductWood';
import ProductPaint from './ProductPaint';
import ProductPaper from './ProductPaper';
import ProductToothpaste from './ProductToothpaste';
import ProductOther from './ProductOther';

class ProductMatrix extends Component {
  render() {
    let authed = !!this.props.client.authedId()
    if (!authed) {
      return(<div></div>);
    }
    return (
      <div>
        <ProductRow>
          <ProductFood/>
          <ProductPlastic/>
          <ProductMetal/>
        </ProductRow>
        <ProductRow>
          <ProductElectronics/>
          <ProductFabric/>
          <ProductBatteries/>
        </ProductRow>
        <ProductRow>
          <ProductLightbulbs/>
          <ProductWood/>
          <ProductPaint/>
        </ProductRow>
        <ProductRow>
          <ProductPaper/>
          <ProductToothpaste/>
          <ProductOther/>
        </ProductRow>
      </div>
    )
  }
}

export default ProductMatrix;