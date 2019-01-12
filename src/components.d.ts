/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AgcCalvingPercentageInputs {
    'socket': string;
  }
  interface AgcCalvingPercentageInputsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcCalvingPercentageProgress {
    'socket': string;
  }
  interface AgcCalvingPercentageProgressAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcCalvingPercentageResultsPlaceholder {}
  interface AgcCalvingPercentageResultsPlaceholderAttributes extends StencilHTMLAttributes {}

  interface AgcCalvingPercentageResults {
    'socket': string;
  }
  interface AgcCalvingPercentageResultsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcCalvingPercentage {
    'mode': 'full' | 'step';
    'socket': string;
    'tract': string;
  }
  interface AgcCalvingPercentageAttributes extends StencilHTMLAttributes {
    'mode'?: 'full' | 'step';
    'onAgcCalculated'?: (event: CustomEvent) => void;
    'onAgcStepChanged'?: (event: CustomEvent) => void;
    'socket'?: string;
    'tract'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AgcCalvingPercentageInputs': Components.AgcCalvingPercentageInputs;
    'AgcCalvingPercentageProgress': Components.AgcCalvingPercentageProgress;
    'AgcCalvingPercentageResultsPlaceholder': Components.AgcCalvingPercentageResultsPlaceholder;
    'AgcCalvingPercentageResults': Components.AgcCalvingPercentageResults;
    'AgcCalvingPercentage': Components.AgcCalvingPercentage;
  }

  interface StencilIntrinsicElements {
    'agc-calving-percentage-inputs': Components.AgcCalvingPercentageInputsAttributes;
    'agc-calving-percentage-progress': Components.AgcCalvingPercentageProgressAttributes;
    'agc-calving-percentage-results-placeholder': Components.AgcCalvingPercentageResultsPlaceholderAttributes;
    'agc-calving-percentage-results': Components.AgcCalvingPercentageResultsAttributes;
    'agc-calving-percentage': Components.AgcCalvingPercentageAttributes;
  }


  interface HTMLAgcCalvingPercentageInputsElement extends Components.AgcCalvingPercentageInputs, HTMLStencilElement {}
  var HTMLAgcCalvingPercentageInputsElement: {
    prototype: HTMLAgcCalvingPercentageInputsElement;
    new (): HTMLAgcCalvingPercentageInputsElement;
  };

  interface HTMLAgcCalvingPercentageProgressElement extends Components.AgcCalvingPercentageProgress, HTMLStencilElement {}
  var HTMLAgcCalvingPercentageProgressElement: {
    prototype: HTMLAgcCalvingPercentageProgressElement;
    new (): HTMLAgcCalvingPercentageProgressElement;
  };

  interface HTMLAgcCalvingPercentageResultsPlaceholderElement extends Components.AgcCalvingPercentageResultsPlaceholder, HTMLStencilElement {}
  var HTMLAgcCalvingPercentageResultsPlaceholderElement: {
    prototype: HTMLAgcCalvingPercentageResultsPlaceholderElement;
    new (): HTMLAgcCalvingPercentageResultsPlaceholderElement;
  };

  interface HTMLAgcCalvingPercentageResultsElement extends Components.AgcCalvingPercentageResults, HTMLStencilElement {}
  var HTMLAgcCalvingPercentageResultsElement: {
    prototype: HTMLAgcCalvingPercentageResultsElement;
    new (): HTMLAgcCalvingPercentageResultsElement;
  };

  interface HTMLAgcCalvingPercentageElement extends Components.AgcCalvingPercentage, HTMLStencilElement {}
  var HTMLAgcCalvingPercentageElement: {
    prototype: HTMLAgcCalvingPercentageElement;
    new (): HTMLAgcCalvingPercentageElement;
  };

  interface HTMLElementTagNameMap {
    'agc-calving-percentage-inputs': HTMLAgcCalvingPercentageInputsElement
    'agc-calving-percentage-progress': HTMLAgcCalvingPercentageProgressElement
    'agc-calving-percentage-results-placeholder': HTMLAgcCalvingPercentageResultsPlaceholderElement
    'agc-calving-percentage-results': HTMLAgcCalvingPercentageResultsElement
    'agc-calving-percentage': HTMLAgcCalvingPercentageElement
  }

  interface ElementTagNameMap {
    'agc-calving-percentage-inputs': HTMLAgcCalvingPercentageInputsElement;
    'agc-calving-percentage-progress': HTMLAgcCalvingPercentageProgressElement;
    'agc-calving-percentage-results-placeholder': HTMLAgcCalvingPercentageResultsPlaceholderElement;
    'agc-calving-percentage-results': HTMLAgcCalvingPercentageResultsElement;
    'agc-calving-percentage': HTMLAgcCalvingPercentageElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
