/*! Built with http://stenciljs.com */
import { h } from '../agc-calving-percentage.core.js';

class AgcCalvingPercentageResultsPlaceholder {
    render() {
        const placeholder = () => h("span", null,
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }));
        return (h("section", null,
            h("ul", { class: "agc-results-placeholder" },
                h("li", null,
                    h("h2", { "data-i18n": "results.calving-percentage" }, "Calving Percentage"),
                    placeholder()))));
    }
    static get is() { return "agc-calving-percentage-results-placeholder"; }
}

export { AgcCalvingPercentageResultsPlaceholder };
