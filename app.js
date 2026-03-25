class SurchargeApp {
    constructor() {
        this.currentTab = 'comparison';
        this.searchTerm = '';
        this.data = SURCHARGE_DATA;
        
        this.elements = {
            navBtns: document.querySelectorAll('.nav-btn'),
            tabContent: document.getElementById('tab-content'),
            searchInput: document.getElementById('main-search')
        };

        this.init();
    }

    init() {
        // Tab switching
        this.elements.navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.switchTab(btn.dataset.tab);
            });
        });

        // Search
        this.elements.searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.render();
        });

        this.render();
    }

    switchTab(tabId) {
        this.currentTab = tabId;
        this.elements.navBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabId);
        });
        this.render();
    }

    render() {
        this.elements.tabContent.innerHTML = '';
        
        if (this.currentTab === 'comparison') {
            this.renderComparison();
        } else if (this.currentTab === 'calculator') {
            this.renderCalculator();
        } else {
            this.renderCarrierTab(this.currentTab);
        }
    }

    renderComparison() {
        let html = `
            <div class="header-section">
                <h2>Comprehensive Comparison</h2>
                <p class="section-desc">Full 2026 surcharge matrix categorized by service type.</p>
            </div>
        `;

        const categories = ["Standard", "Handling", "Admin", "Customs", "Special"];
        
        categories.forEach(cat => {
            html += `
                <div class="category-block" style="margin-top: 40px;">
                    <h3 style="color: var(--primary); margin-bottom: 16px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em;">${cat} Surcharges</h3>
                    <div class="table-container glass" style="border-radius: 16px; overflow: hidden;">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th style="width: 25%">Surcharge Name</th>
                                    <th style="width: 25%">DHL Express</th>
                                    <th style="width: 25%">FedEx</th>
                                    <th style="width: 25%">UPS</th>
                                </tr>
                            </thead>
                            <tbody>
            `;

            // Get unique surcharge names in this category across all carriers
            const names = new Set();
            Object.values(this.data.carriers).forEach(c => {
                c.surcharges.filter(s => s.category === cat).forEach(s => names.add(s.name));
            });

            Array.from(names).sort().forEach(name => {
                html += `<tr><td><strong>${name}</strong></td>`;
                ['dhl', 'fedex', 'ups'].forEach(cid => {
                    const surcharge = this.data.carriers[cid].surcharges.find(s => s.name === name);
                    if (surcharge) {
                        html += `<td>${surcharge.rate}${surcharge.min ? `<br><small style="color:var(--text-muted)">Min: ${surcharge.min}</small>` : ''}</td>`;
                    } else {
                        html += `<td style="color: var(--text-muted); font-style: italic;">N/A</td>`;
                    }
                });
                html += `</tr>`;
            });

            html += `</tbody></table></div></div>`;
        });

        // Search results if searchTerm exists
        if (this.searchTerm) {
            html += this.renderSearchResults();
        }

        this.elements.tabContent.innerHTML = html;
    }

    renderCalculator() {
        let html = `
            <div class="header-section">
                <h2>Quick Calculator</h2>
                <p class="section-desc">Check which surcharges apply to your shipment.</p>
            </div>
            <div class="calculator-container glass" style="margin-top: 32px; padding: 32px; border-radius: 20px;">
                <div class="calc-inputs" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                    <div class="calc-group">
                        <label style="display: block; font-size: 12px; margin-bottom: 8px; color: var(--text-muted);">Weight (kg)</label>
                        <input type="number" id="calc-weight" class="glass-input" placeholder="0" style="width: 100%; border-radius: 8px; padding: 12px; background: rgba(255,255,255,0.05); color: white; border: 1px solid var(--glass-border);">
                    </div>
                    <div class="calc-group">
                        <label style="display: block; font-size: 12px; margin-bottom: 8px; color: var(--text-muted);">Longest Side (cm)</label>
                        <input type="number" id="calc-length" class="glass-input" placeholder="0" style="width: 100%; border-radius: 8px; padding: 12px; background: rgba(255,255,255,0.05); color: white; border: 1px solid var(--glass-border);">
                    </div>
                    <div class="calc-group">
                        <label style="display: block; font-size: 12px; margin-bottom: 8px; color: var(--text-muted);">L + (2W + 2H) Girth (cm)</label>
                        <input type="number" id="calc-girth" class="glass-input" placeholder="0" style="width: 100%; border-radius: 8px; padding: 12px; background: rgba(255,255,255,0.05); color: white; border: 1px solid var(--glass-border);">
                    </div>
                </div>
                <div id="calc-results" style="margin-top: 32px;">
                    <!-- Results injected here -->
                </div>
            </div>
        `;
        this.elements.tabContent.innerHTML = html;

        ['weight', 'length', 'girth'].forEach(id => {
            document.getElementById(`calc-${id}`).addEventListener('input', () => this.runCalculation());
        });
    }

    runCalculation() {
        const w = parseFloat(document.getElementById('calc-weight').value) || 0;
        const l = parseFloat(document.getElementById('calc-length').value) || 0;
        const g = parseFloat(document.getElementById('calc-girth').value) || 0;
        const resultDiv = document.getElementById('calc-results');

        if (w === 0 && l === 0 && g === 0) {
            resultDiv.innerHTML = '<p style="color: var(--text-muted)">Enter dimensions to see results.</p>';
            return;
        }

        let html = '<div class="card-grid">';
        
        const dhlHits = [];
        if (w > 70) dhlHits.push("Overweight Piece (IDR 1,750,000)");
        if (l > 100) dhlHits.push("Oversize Piece (IDR 367,500)");
        
        const fedexHits = [];
        if (w > 25) fedexHits.push("Additional Handling - Weight (IDR 431,000)");
        if (l > 243 || (l + g) > 330 || w > 50) fedexHits.push("Oversize Charge (IDR 1,072,000)");

        const upsHits = [];
        if (w > 70 || l > 274) upsHits.push("Over Maximum Limits (High Fee)");
        if ((l + g) > 300) upsHits.push("Large Package Surcharge (Approx. IDR 3.5M)");

        [
            { id: 'dhl', name: 'DHL', items: dhlHits },
            { id: 'fedex', name: 'FedEx', items: fedexHits },
            { id: 'ups', name: 'UPS', items: upsHits }
        ].forEach(res => {
            const c = this.data.carriers[res.id];
            html += `
                <div class="surcharge-card" style="border-top: 4px solid ${c.color}">
                    <h3 style="color: ${c.color}">${res.name}</h3>
                    <div style="margin-top: 16px;">
                        ${res.items.length > 0 
                            ? res.items.map(i => `<div style="color: #ef4444; font-size: 14px; margin-bottom: 8px;">● ${i}</div>`).join('')
                            : '<div style="color: #10b981; font-size: 14px;">✓ No Handling Surcharges</div>'}
                    </div>
                </div>
            `;
        });

        html += '</div>';
        resultDiv.innerHTML = html;
    }

    renderCarrierTab(carrierId) {
        const c = this.data.carriers[carrierId];
        let html = `
            <div class="header-section" style="border-left: 4px solid ${c.color}; padding-left: 20px; margin-bottom: 32px;">
                <h2 style="color: ${c.color}">${c.name}</h2>
                <p class="section-desc">Detailed view of all applicable fees for ${c.name}.</p>
            </div>
            <div class="card-grid">
        `;

        const filtered = c.surcharges.filter(s => 
            s.name.toLowerCase().includes(this.searchTerm) || 
            (s.description && s.description.toLowerCase().includes(this.searchTerm))
        );

        filtered.forEach(s => {
            html += `
                <div class="surcharge-card">
                    <span class="card-tag" style="background: ${c.color}22; color: ${c.color}">${s.category}</span>
                    <h3 class="card-title">${s.name}</h3>
                    <div class="card-rate">${s.rate}</div>
                    ${s.min ? `<div class="card-min">Minimum: ${s.min}</div>` : ''}
                    ${s.description ? `<p class="card-desc">${s.description}</p>` : ''}
                </div>
            `;
        });

        html += `</div>`;
        this.elements.tabContent.innerHTML = html;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new SurchargeApp();
});
