/**
 * ZEELOT INNOVATION LIMITED - Multi-Template Engine & Switcher
 * Manages dynamic switching between Template 1 (Z1 Industrial Tech),
 * Template 2 (Z2 Modern Enterprise), and Template 3 (Z3 Hyper Robotics).
 */

const TemplateEngine = {
  currentTemplate: 'z1',

  templates: {
    z1: {
      id: 'z1',
      name: 'Template 1 (Z1)',
      tagline: 'Industrial & Automation (Screenshot 1 Match)',
      themeClass: 'theme-z1-industrial'
    },
    z2: {
      id: 'z2',
      name: 'Template 2 (Z2)',
      tagline: 'Next-Gen Enterprise Portal',
      themeClass: 'theme-z2-enterprise'
    },
    z3: {
      id: 'z3',
      name: 'Template 3 (Z3)',
      tagline: 'Cybernetic Robotics Studio',
      themeClass: 'theme-z3-cyber'
    }
  },

  init() {
    const saved = localStorage.getItem('zeelot_active_template');
    if (saved && this.templates[saved]) {
      this.currentTemplate = saved;
    }
    this.renderSwitcherUI();
    this.applyTemplate(this.currentTemplate);
  },

  renderSwitcherUI() {
    const existing = document.getElementById('floatingTemplateSwitcher');
    if (existing) existing.remove();

    const switcher = document.createElement('div');
    switcher.id = 'floatingTemplateSwitcher';
    switcher.className = 'floating-template-switcher';

    switcher.innerHTML = `
      <div class="switcher-dropdown-panel" id="switcherDropdown">
        <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 6px; font-weight: 700;">
          Select Template Layout
        </div>
        <div class="switcher-option ${this.currentTemplate === 'z1' ? 'active' : ''}" data-target-template="z1">
          <div class="switcher-option-info">
            <h5>Z1: Industrial Red & Black</h5>
            <p>Screenshot 1 Layout • High Impact</p>
          </div>
          <span class="switcher-tag">ACTIVE</span>
        </div>
        <div class="switcher-option ${this.currentTemplate === 'z2' ? 'active' : ''}" data-target-template="z2">
          <div class="switcher-option-info">
            <h5>Z2: Modern Digital SaaS Agency</h5>
            <p>Screenshot 2 Layout • Clean Blue & Cards</p>
          </div>
          <span class="switcher-tag">Z2</span>
        </div>
      </div>
      
      <button class="switcher-pill-btn" id="toggleSwitcherBtn" title="Switch between Z1, Z2, Z3 layouts">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M4 6h16M4 12h16M4 18h7"/>
        </svg>
        <span>SWITCH TEMPLATE</span>
        <span class="active-badge" id="currentTemplateBadge">${this.currentTemplate.toUpperCase()}</span>
      </button>
    `;

    document.body.appendChild(switcher);

    // Toggle dropdown
    const toggleBtn = document.getElementById('toggleSwitcherBtn');
    const dropdown = document.getElementById('switcherDropdown');
    
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!switcher.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });

    // Options click
    switcher.querySelectorAll('.switcher-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const target = opt.getAttribute('data-target-template');
        this.applyTemplate(target);
        dropdown.classList.remove('open');
      });
    });
  },

  applyTemplate(templateId) {
    this.currentTemplate = templateId;
    localStorage.setItem('zeelot_active_template', templateId);

    // Update body classes
    document.body.classList.remove('theme-z1-industrial', 'theme-z2-enterprise', 'theme-z3-cyber');
    document.body.classList.add(this.templates[templateId].themeClass);

    // Update badge in floating button
    const badge = document.getElementById('currentTemplateBadge');
    if (badge) badge.textContent = templateId.toUpperCase();

    // Update options in dropdown
    document.querySelectorAll('.switcher-option').forEach(opt => {
      if (opt.getAttribute('data-target-template') === templateId) {
        opt.classList.add('active');
        opt.querySelector('.switcher-tag').textContent = 'ACTIVE';
      } else {
        opt.classList.remove('active');
        opt.querySelector('.switcher-tag').textContent = opt.getAttribute('data-target-template').toUpperCase();
      }
    });

    // Re-render template views
    if (window.ZeelotApp && typeof window.ZeelotApp.renderActiveTemplate === 'function') {
      window.ZeelotApp.renderActiveTemplate(templateId);
    }
  }
};

window.TemplateEngine = TemplateEngine;
