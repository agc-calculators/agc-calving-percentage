
import { Component } from '@stencil/core';


@Component({
    tag: 'agc-calving-percentage-results-placeholder'
})
export class AgcCalvingPercentageResultsPlaceholder {

    

    render() {
        const placeholder = () => <span><i class="mark"></i> <i class="mark"></i> <i class="mark"></i> <i class="mark"></i></span>

        return (
            <section>
                <ul class="agc-results-placeholder">
                    <li>
                        <h2 data-i18n="results.calving-percentage">Calving Percentage</h2>
                        {placeholder()}
                    </li>                                      
                </ul>
            </section>
        );
    }
}