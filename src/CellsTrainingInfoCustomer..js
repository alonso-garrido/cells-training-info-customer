import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsTrainingInfoCustomer-styles.js';
import '@bbva-web-components/bbva-web-form-select/bbva-web-form-select.js';
import '@bbva-web-components/bbva-web-form-text/bbva-web-form-text.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-training-info-customer></cells-training-info-customer>
```

##styling-doc

@customElement cells-training-info-customer
*/
export class CellsTrainingInfoCustomer extends LitElement {
  static get is() {
    return 'cells-training-info-customer';
  }

  // Declare properties
  static get properties() {
    return {
      customer: { type: Object, },
      title: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-training-info-customer-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
    <bbva-web-form-text 
    id=""
    label="Nombre y Apellido" value="${this.customer.name}"></bbva-web-form-text>
    
    <bbva-web-form-select label="Numero Telefonico" required>
      ${this.customer.phones.map(i => html`
      <bbva-web-form-option>${i}</bbva-web-form-option>`)}
    </bbva-web-form-select>
    
    <bbva-web-form-select label="Correo Electronico" required>
      ${this.customer.emails.map(i => html`
      <bbva-web-form-option>${i}</bbva-web-form-option>`)}
    </bbva-web-form-select>
    `;
  }
}
