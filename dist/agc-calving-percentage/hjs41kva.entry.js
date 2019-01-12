/*! Built with http://stenciljs.com */
const{h:e}=window.AgcCalvingPercentage,t=(e,t)=>{let a=e.querySelector(`[name="${t}"]`),s=e.querySelector(`[data-validates="${t}"`);return a.checkValidity()?(a.className=a.className.replace(" invalid",""),s.style.display="none",!0):(-1===a.className.indexOf("invalid")&&(a.className+=" invalid"),s.style.display="block",!1)},a=(e,t)=>+(Math.round(new Number(`${e}e+${t}`).valueOf())+"e-"+t);class s{constructor(){this.socket="",this.tract="",this.mode="step",this.currentStep=0,this.cache={},this.submitted=!1,this.results={}}render(){return e("div",null,e("form",{onSubmit:e=>e.preventDefault(),ref:e=>this.form=e,"data-wizard":"agc-calving-percentage","data-wizard-mode":this.mode,class:"agc-wizard"},e("slot",null),e("section",{"data-wizard-section":"1"},e("div",{class:"agc-wizard__field"},e("label",{"data-i18n":"fields.calves-born"},"Calves Born"),e("input",{name:"calvesBorn",type:"number",required:!0,min:"1",step:"1"}),e("p",{class:"agc-wizard__validation-message","data-i18n":"validation.calves-born.required-pos","data-validates":"calvesBorn"},"Please enter a whole number greater than one."),e("p",{"data-i18n":"hints.calves-born"},"⮤ Enter the number of calves that were born.")),e("div",{class:"agc-wizard__actions"},"step"===this.mode&&e("button",{class:"agc-wizard__actions-next","data-i18n":"actions.next",onClick:this.nextPrev.bind(this,1)},"Next 🠖"))),e("section",{"data-wizard-section":"2"},e("div",{class:"agc-wizard__field"},e("label",{"data-i18n":"fields.females-exposed"},"Females Exposed"),e("input",{name:"femalesExposed",type:"number",required:!0,min:"1",step:"1"}),e("p",{class:"agc-wizard__validation-message","data-i18n":"validation.females-exposed.required-pos","data-validates":"femalesExposed"},"Please enter a whole number greater than one."),e("p",{"data-i18n":"hints.females-exposed"},"⮤ Enter the number of females that were exposed to breeding.")),e("div",{class:"agc-wizard__actions"},"step"===this.mode&&[e("button",{class:"agc-wizard__actions-prev","data-i18n":"actions.prev",onClick:this.nextPrev.bind(this,-1)},"🠔 Back"),e("button",{class:"agc-wizard__actions-next","data-i18n":"actions.next",onClick:this.nextPrev.bind(this,1)},"Next 🠖")])),e("section",{"data-wizard-section":"3"},e("div",{class:"agc-wizard__field"},e("label",{"data-i18n":"fields.females-sold-died"},"Females Sold or Died"),e("input",{name:"femalesSoldDied",type:"number",required:!0,min:"0",step:"1"}),e("p",{class:"agc-wizard__validation-message","data-i18n":"validation.females-sold-died.required","data-validates":"femalesSoldDied"},"Please enter a whole number of zero or more."),e("p",{"data-i18n":"hints.females-sold-died"},"⮤ Enter the number of females that were sold or died after being exposed to breeding.")),e("div",{class:"agc-wizard__actions"},"step"===this.mode&&[e("button",{class:"agc-wizard__actions-prev","data-i18n":"actions.prev",onClick:this.nextPrev.bind(this,-1)},"🠔 Back"),e("button",{class:"agc-wizard__actions-next","data-i18n":"actions.next",onClick:this.nextPrev.bind(this,1)},"Next 🠖")])),e("section",{"data-wizard-section":"4"},e("div",{class:"agc-wizard__field"},e("label",{"data-i18n":"fields.females-purchased"},"Females Purchased"),e("input",{name:"femalesPurchased",type:"number",required:!0,min:"0",step:"1"}),e("p",{class:"agc-wizard__validation-message","data-i18n":"validation.females-purchased.required","data-validates":"femalesPurchased"},"Please enter a whole number of zero or more."),e("p",{"data-i18n":"hints.females-purchased"},"⮤ Enter the number of bred females that were purchased and added to the herd.")),e("div",{class:"agc-wizard__actions"},"step"===this.mode&&e("button",{class:"agc-wizard__actions-prev","data-i18n":"actions.prev",onClick:this.nextPrev.bind(this,-1)},"🠔 Back"),e("button",{class:"agc-wizard__actions-next","data-i18n":"actions.finish",onClick:this.nextPrev.bind(this,"step"===this.mode?1:4)},"Calculate 🠖"))),e("section",{"data-wizard-results":!0},e("slot",{name:"results"}))))}showTab(e){"step"===this.mode&&(this.cache.sections[e].style.display="block"),this.socket&&this.agcStepChanged.emit({socket:this.socket,tract:this.tract,step:this.currentStep})}reset(){this.currentStep=0,this.submitted=!1,this.showTab(0)}validateForm(){let e=!0;return 0!==this.currentStep&&"full"!==this.mode||t(this.form,"calvesBorn")||(e=!1),1!==this.currentStep&&"full"!==this.mode||t(this.form,"femalesExposed")||(e=!1),2!==this.currentStep&&"full"!==this.mode||t(this.form,"femalesSoldDied")||(e=!1),3!==this.currentStep&&"full"!==this.mode||t(this.form,"femalesPurchased")||(e=!1),e}nextPrev(e,t){if(t&&t.preventDefault(),"full"===this.mode){if(!this.validateForm())return!1}else if(1==e&&!this.validateForm())return!1;if("step"===this.mode&&(this.cache.sections[this.currentStep].style.display="none"),this.currentStep=this.currentStep+e,this.currentStep>=this.cache.sections.length)return this.submitted=!0,this.showResults.call(this),!1;this.showTab.call(this,this.currentStep)}showResults(){let e=parseInt(this.form.querySelector('[name="calvesBorn"').value),t=parseInt(this.form.querySelector('[name="femalesExposed"').value),s=parseInt(this.form.querySelector('[name="femalesSoldDied"').value),i=parseInt(this.form.querySelector('[name="femalesPurchased"').value),r=a(e/(t-s+i)*100,2),n={socket:this.socket,tract:this.tract,calvesBorn:e,femalesExposed:t,femalesSoldDied:s,femalesPurchased:i,calvingPercentage:r,calculated:new Date};this.socket&&this.agcCalculated.emit({socket:this.socket,tract:this.tract,results:Object.assign({},n)}),this.results=Object.assign({},n),this.cache.results.forEach(e=>{e.style.display="block"})}handleAction(e){"reset"===e.detail.action&&this.reset()}componentDidLoad(){var e=Array.from(this.form.querySelectorAll("[data-wizard-section]")).map(e=>e).map(e=>e),t=Array.from(this.form.querySelectorAll("[data-wizard-results]")).map(e=>e).map(e=>e);this.cache=Object.assign({},this.cache,{sections:e,results:t}),window.document.addEventListener("agcAction",this.handleAction.bind(this)),this.form.querySelector('[name="femalesSoldDied"]').defaultValue="0",this.form.querySelector('[name="femalesPurchased"]').defaultValue="0",this.showTab(0)}componentDidUnload(){window.document.removeEventListener("agcAction",this.handleAction)}static get is(){return"agc-calving-percentage"}static get properties(){return{cache:{state:!0},currentStep:{state:!0},mode:{type:String,attr:"mode"},results:{state:!0},socket:{type:String,attr:"socket"},submitted:{state:!0},tract:{type:String,attr:"tract"}}}static get events(){return[{name:"agcCalculated",method:"agcCalculated",bubbles:!0,cancelable:!0,composed:!0},{name:"agcStepChanged",method:"agcStepChanged",bubbles:!0,cancelable:!0,composed:!0}]}}export{s as AgcCalvingPercentage};