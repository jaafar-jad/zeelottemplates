/**
 * ZEELOT INNOVATION LIMITED - Application Controller
 * Handles dynamic rendering from siteData.js, project filtering, modal popups,
 * and seamless coordination with carousels and template switcher.
 */

const ZeelotApp = {
  currentFilter: 'all',

  init() {
    this.renderActiveTemplate(TemplateEngine.currentTemplate);
    this.attachGlobalListeners();
  },

  renderActiveTemplate(templateId) {
    const mainContainer = document.getElementById('templateMountPoint');
    if (!mainContainer) return;

    if (templateId === 'z1') {
      this.renderTemplate1(mainContainer);
    } else if (templateId === 'z2') {
      this.renderTemplate2(mainContainer);
    } else if (templateId === 'z3') {
      this.renderTemplate3(mainContainer);
    }

    // Initialize carousels after DOM injection
    setTimeout(() => {
      ZeelotCarouselManager.initAll();
      this.wireFilterTabs();
      this.wireModals();
    }, 50);
  },

  // =========================================================================
  // TEMPLATE 1: INDUSTRIAL RED & BLACK (MATCHING SCREENSHOT 1)
  // =========================================================================
  renderTemplate1(container) {
    const d = siteData;

    container.innerHTML = `
      <!-- TOP BAR -->
      <div class="top-bar">
        <div class="container">
          <div class="top-bar-left">
            <div class="top-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              <span>${d.company.headquarters}</span>
            </div>
            <div class="top-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>${d.company.contactEmail}</span>
            </div>
            <div class="top-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>${d.company.phone}</span>
            </div>
          </div>
          <div class="top-bar-right">
            <div class="social-links">
              <a href="#" class="social-link" title="LinkedIn">in</a>
              <a href="#" class="social-link" title="Twitter / X">𝕏</a>
              <a href="#" class="social-link" title="Instagram">ig</a>
              <a href="#" class="social-link" title="YouTube">yt</a>
            </div>
          </div>
        </div>
      </div>

      <!-- MAIN HEADER & NAVIGATION -->
      <header class="main-header" id="mainHeader">
        <div class="container">
          <a href="#hero" class="brand-logo">
            <div class="logo-icon">Z</div>
            <div class="logo-text">
              <div class="logo-title">ZEELOT<span>.</span></div>
              <div class="logo-subtitle">INNOVATION LIMITED</div>
            </div>
          </a>

          <ul class="nav-menu" id="navMenu">
            <li class="drawer-header-item">
              <div class="drawer-header-row">
                <span class="drawer-header-title">ZEELOT MENU</span>
                <button class="drawer-close-btn" id="drawerCloseT1" aria-label="Close menu">✕</button>
              </div>
            </li>
            ${d.navLinks.map(link => `<li><a href="${link.href}" class="nav-link">${link.label}</a></li>`).join('')}
          </ul>

          <div class="header-actions">
            <a href="#contact" class="btn btn-primary btn-sm">REQUEST DEMO</a>
            <button class="mobile-toggle" id="mobileNavToggle" aria-label="Toggle Navigation">
              ☰
            </button>
          </div>
        </div>
      </header>
      <div class="drawer-backdrop" id="drawerBackdrop"></div>

      <!-- HERO SECTION (WITH HIGH-RES UNPLASH ROBOTICS BACKGROUND) -->
      <section class="hero-section" id="hero">
        <div class="hero-background-art" style="background-image: linear-gradient(90deg, rgba(11, 12, 16, 0.94) 0%, rgba(11, 12, 16, 0.8) 55%, rgba(11, 12, 16, 0.45) 100%), url('${d.mediaImages.heroIndustrial}'); background-size: cover; background-position: center;"></div>
        <div class="hero-overlay"></div>
        <div class="container">
          <div class="hero-content">
          
            <h1 class="hero-title">
              MAKE YOUR ENTERPRISE <span>INNOVATE BOLDER</span>
            </h1>
            <p class="hero-desc">
              Zeelot Innovation Limited bridges intelligent robotics, cutting-edge smart devices, and custom software systems—transforming operational efficiency across Nigeria and Africa.
            </p>
            <div class="hero-actions">
              <a href="#robotics" class="btn btn-primary">EXPLORE ROBOTICS</a>
              <a href="#software" class="btn btn-outline-white">SOFTWARE SOLUTIONS</a>
              <a href="#about" class="btn btn-dark">STRATEGY BRIEF</a>
            </div>
          </div>
        </div>
      </section>

      <!-- SIGNATURE ANGLED RED NOTIFICATION RIBBON -->
      <div class="angled-ribbon-bar">
        <div class="container">
          <div class="ribbon-info">
            <div class="ribbon-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div>
              <div class="ribbon-heading">STRATEGIC INNOVATION & BUSINESS EXPANSION</div>
              <div class="ribbon-subtext">Pioneering robotics, enterprise digital software, and technology distribution for Africa.</div>
            </div>
          </div>
          <div class="ribbon-actions">
            <a href="#pillars" class="btn btn-dark btn-sm">OUR PILLARS</a>
            <a href="#contact" class="btn btn-outline-white btn-sm">CONTACT LEADERSHIP</a>
          </div>
        </div>
      </div>

      <!-- ABOUT & EXECUTIVE OVERVIEW SECTION (LIGHT THEME MATCHING SCREENSHOT) -->
      <section class="about-section" id="about">
        <div class="container">
          <div class="about-grid">
            <div class="about-text">
              <span class="section-tag light-theme">EXECUTIVE OVERVIEW</span>
              <h2 class="section-title dark-text">Pioneering Intelligent Technology & Digital Solutions</h2>
              <p class="lead-paragraph">
                Zeelot Innovation Limited presents a generational opportunity to build a technology-driven company positioned at the intersection of robotics, digital solutions, technology products, and emerging innovations.
              </p>

              <!-- MISSION & VISION CARDS (EXPLICITLY REQUESTED) -->
              <div class="mission-vision-grid">
                <div class="mv-card">
                  <div class="mv-card-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
                    <h4>OUR MISSION</h4>
                  </div>
                  <p>${d.company.mission}</p>
                </div>
                <div class="mv-card">
                  <div class="mv-card-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    <h4>OUR VISION</h4>
                  </div>
                  <p>${d.company.vision}</p>
                </div>
              </div>

              <!-- RED CIRCULAR STAT COUNTERS (EXACT MATCH TO SCREENSHOT) -->
              <div class="about-stats-row">
                <div class="stat-circle-card">
                  <div class="stat-circle">100%</div>
                  <div class="stat-circle-info">
                    <span class="stat-circle-val">Innovation Focus</span>
                    <span class="stat-circle-lbl">African Market Robotics</span>
                  </div>
                </div>
                <div class="stat-circle-card">
                  <div class="stat-circle">03</div>
                  <div class="stat-circle-info">
                    <span class="stat-circle-val">Strategic Pillars</span>
                    <span class="stat-circle-lbl">Robotics, Gadgets & Digital</span>
                  </div>
                </div>
                <div class="stat-circle-card">
                  <div class="stat-circle">12+</div>
                  <div class="stat-circle-info">
                    <span class="stat-circle-val">Client Sectors</span>
                    <span class="stat-circle-lbl">SMEs, Gov & Industry</span>
                  </div>
                </div>
              </div>

              <p style="font-size: 0.9rem; color: #5B6575; line-height: 1.6; margin-bottom: 24px;">
                <strong>Strategic Synergy:</strong> Robotics remains our primary long-term innovation focus. Software solutions and technology products serve as practical entry points and complementary revenue streams, allowing Zeelot to establish market presence and cashflows while systematically building robotics capabilities.
              </p>

              <a href="#pillars" class="btn btn-primary">EXPLORE STRATEGIC ROADMAP</a>
            </div>

            <!-- RIGHT SHOWCASE CARD (DUAL PHOTO COLLAGE MATCHING SCREENSHOT 1) -->
            <div class="about-visual-col">
              <div class="about-dual-collage">
                <div class="about-floating-badge">
                  ⚡ STRATEGIC EXPANSION 2026
                </div>
                <div class="about-photo-top">
                  <img src="${d.mediaImages.aboutRoboticsArm}" alt="Industrial Robotics Engineering" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80';" />
                </div>
                <div class="about-photo-bottom">
                  <img src="${d.mediaImages.aboutSoftwareWorkspace}" alt="Software & Systems Innovation" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80';" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- STRATEGIC FOCUS AREAS & PROJECTS (DARK THEME WITH AUTO-OVERFLOW CAROUSEL) -->
      <section class="projects-section" id="pillars">
        <div class="container">
          <div class="carousel-section-wrapper">
            <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; margin-bottom: 24px;">
              <div>
                <span class="section-tag">PORTFOLIO & PROJECTS</span>
                <h2 class="section-title light-text">Our Strategic Deployments & Focus Areas</h2>
                <p class="section-subtitle">Real-world technological initiatives driving Zeelot's industrial automation and digital expansion.</p>
              </div>
              
              <div class="carousel-controls-bar" style="margin-bottom: 0;">
                <div class="carousel-status-pill">
                  <span class="pulse-dot"></span>
                  <span class="status-text">Auto-Advancing • Pause on Touch</span>
                </div>
                <div class="carousel-nav-arrows">
                  <button class="arrow-btn" data-carousel-target="projectsCarousel" data-carousel-dir="prev" aria-label="Previous">❮</button>
                  <button class="arrow-btn" data-carousel-target="projectsCarousel" data-carousel-dir="next" aria-label="Next">❯</button>
                </div>
              </div>
            </div>

            <!-- FILTER TABS -->
            <div class="filter-tabs-row">
              <button class="filter-tab active" data-filter="all">ALL DEPLOYMENTS</button>
              <button class="filter-tab" data-filter="Robotics">ROBOTICS & AUTOMATION</button>
              <button class="filter-tab" data-filter="Software">SOFTWARE SOLUTIONS</button>
              <button class="filter-tab" data-filter="Gadgets">SMART GADGETS</button>
              <button class="filter-tab" data-filter="Training">EDUCATION & STEM</button>
            </div>

            <!-- AUTO-OVERFLOW HORIZONTAL CAROUSEL (USER PRIORITY) -->
            <div class="auto-overflow-carousel" id="projectsCarousel" data-interval="3400">
              ${d.projectsShowcase.map(proj => `
                <div class="carousel-card project-card" data-category="${proj.tags.join(' ')}">
                  <div class="project-thumb">
                    <img src="${proj.imageUrl}" alt="${proj.title}" class="project-img-cover" loading="lazy" />
                    <span class="project-badge">${proj.tags[0]}</span>
                  </div>
                  <div class="project-body">
                    <span class="project-category">${proj.category}</span>
                    <h3 class="project-title">${proj.title}</h3>
                    <p class="project-desc">${proj.desc}</p>
                    <div class="project-footer">
                      <span><strong>Target:</strong> ${proj.clientType}</span>
                      <a href="#contact" class="text-red" style="font-weight: 700;">Inquire →</a>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- CORE CAPABILITIES / SERVICES (WHITE BACKGROUND WITH 6 SERVICE BOXES IN SCREENSHOT) -->
      <section class="services-section" id="robotics">
        <div class="container">
          <div style="text-align: center; max-width: 720px; margin: 0 auto 50px auto;">
            <span class="section-tag light-theme" style="justify-content: center;">ROBOTICS & INTELLIGENT TECH</span>
            <h2 class="section-title dark-text">Our Core Capabilities & Services</h2>
            <p class="section-subtitle dark-sub" style="margin: 0 auto;">
              Developing and deploying robotics solutions engineered specifically for the Nigerian and wider African market.
            </p>
          </div>

          <!-- CAROUSEL CONTROLS FOR MOBILE & DESKTOP -->
          <div class="carousel-controls-bar">
            <div class="carousel-status-pill">
              <span class="pulse-dot"></span>
              <span class="status-text">Auto-Scrolling Cards • Swipe to Pause</span>
            </div>
            <div class="carousel-nav-arrows">
              <button class="arrow-btn" data-carousel-target="servicesCarousel" data-carousel-dir="prev" aria-label="Previous">❮</button>
              <button class="arrow-btn" data-carousel-target="servicesCarousel" data-carousel-dir="next" aria-label="Next">❯</button>
            </div>
          </div>

          <div class="auto-overflow-carousel" id="servicesCarousel" data-interval="3100">
            ${d.strategicPillars[0].areas.map((area, idx) => `
              <div class="carousel-card service-card">
                <div class="service-icon-box">
                  <span>${['⚙', '🛡', '🤖', '👁', '🏠', '🎓'][idx] || '⚙'}</span>
                </div>
                <h3 class="service-title">${area.name}</h3>
                <p class="service-desc">${area.desc}</p>
                <a href="#contact" class="service-learn-more">
                  <span>SPECIFICATIONS</span>
                  <span>→</span>
                </a>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- SOFTWARE SOLUTIONS & DIGITAL SERVICES SECTION -->
      <section class="projects-section" id="software" style="background-color: #0E1016;">
        <div class="container">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; margin-bottom: 30px;">
            <div>
              <span class="section-tag">DIGITAL EMPOWERMENT</span>
              <h2 class="section-title light-text">Software & Digital Solutions</h2>
              <p class="section-subtitle">Helping African organisations solve operational and business bottlenecks through bespoke software.</p>
            </div>
            <div class="carousel-nav-arrows">
              <button class="arrow-btn" data-carousel-target="softwareCarousel" data-carousel-dir="prev">❮</button>
              <button class="arrow-btn" data-carousel-target="softwareCarousel" data-carousel-dir="next">❯</button>
            </div>
          </div>

          <div class="auto-overflow-carousel" id="softwareCarousel" data-interval="3500">
            ${d.strategicPillars[2].potentialServices.map(srv => `
              <div class="carousel-card project-card">
                <div style="padding: 24px; border-bottom: 1px solid var(--border-dark); background: rgba(229,25,32,0.06);">
                  <span style="font-size: 0.75rem; color: var(--primary-red); font-weight: 800; letter-spacing: 1px;">ENTERPRISE SOLUTION</span>
                  <h3 style="font-size: 1.15rem; font-weight: 800; color: #FFFFFF; margin-top: 6px;">${srv.name}</h3>
                </div>
                <div class="project-body">
                  <p class="project-desc">${srv.desc}</p>
                  <div style="margin-top: auto; padding-top: 14px; border-top: 1px solid var(--border-dark); font-size: 0.8rem; color: var(--primary-red); font-weight: 700;">
                    High Scalability • Cloud Ready
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- GADGETS & HARDWARE DISTRIBUTION PIPELINE -->
      <section class="services-section" id="gadgets" style="background-color: #F8F9FA;">
        <div class="container">
          <div style="text-align: center; max-width: 720px; margin: 0 auto 40px auto;">
            <span class="section-tag light-theme" style="justify-content: center;">GADGETS & SMART HARDWARE</span>
            <h2 class="section-title dark-text">Commercial Tech Hardware & Procurement</h2>
            <p class="section-subtitle dark-sub" style="margin: 0 auto;">
              Sale, wholesale distribution, corporate supply, and technical installation of premium smart devices.
            </p>
          </div>

          <div class="carousel-controls-bar">
            <div class="carousel-status-pill">
              <span class="pulse-dot"></span>
              <span class="status-text">Revenue Pipeline: Sales → Supply → Support</span>
            </div>
            <div class="carousel-nav-arrows">
              <button class="arrow-btn" data-carousel-target="gadgetsCarousel" data-carousel-dir="prev">❮</button>
              <button class="arrow-btn" data-carousel-target="gadgetsCarousel" data-carousel-dir="next">❯</button>
            </div>
          </div>

          <div class="auto-overflow-carousel" id="gadgetsCarousel" data-interval="3300">
            ${d.strategicPillars[1].potentialProducts.map(prod => `
              <div class="carousel-card service-card" style="text-align: left; align-items: flex-start;">
                <div style="width: 44px; height: 44px; background: var(--primary-red); color: #FFF; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-weight: 900; margin-bottom: 16px;">
                  ✓
                </div>
                <h3 class="service-title" style="text-align: left;">${prod.name}</h3>
                <p class="service-desc" style="text-align: left;">${prod.desc}</p>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-dark); background: #EFEFEF; padding: 4px 10px; border-radius: 3px; margin-top: auto;">
                  Corporate Supply & Warranty
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- MILESTONE / METRICS BAR (EXACT ACCENT FROM SCREENSHOT) -->
      <div class="milestones-bar">
        <div class="container">
          <div class="milestones-grid">
            <div class="milestone-item">
              <div class="milestone-icon">🤖</div>
              <div class="milestone-content">
                <div class="milestone-number">15<span>+</span></div>
                <div class="milestone-label">Robotics Concepts & Prototypes</div>
              </div>
            </div>
            <div class="milestone-item">
              <div class="milestone-icon">🌍</div>
              <div class="milestone-content">
                <div class="milestone-number">100<span>%</span></div>
                <div class="milestone-label">African Market Dedication</div>
              </div>
            </div>
            <div class="milestone-item">
              <div class="milestone-icon">💻</div>
              <div class="milestone-content">
                <div class="milestone-number">09<span>+</span></div>
                <div class="milestone-label">Digital Solution Domains</div>
              </div>
            </div>
            <div class="milestone-item">
              <div class="milestone-icon">⚡</div>
              <div class="milestone-content">
                <div class="milestone-number">24<span>/7</span></div>
                <div class="milestone-label">Deployment & Engineering SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- LEADERSHIP & TEAM SECTION (MATCHING SCREENSHOT) -->
      <section class="team-section" id="team">
        <div class="container">
          <div style="text-align: center; max-width: 720px; margin: 0 auto 40px auto;">
            <span class="section-tag light-theme" style="justify-content: center;">EXPERTISE & VISION</span>
            <h2 class="section-title dark-text">Meet The Innovation & Strategy Team</h2>
            <p class="section-subtitle dark-sub" style="margin: 0 auto;">
              Led by strategic business development and seasoned robotics & software engineers.
            </p>
          </div>

          <div class="carousel-controls-bar">
            <div class="carousel-status-pill">
              <span class="pulse-dot"></span>
              <span class="status-text">Leadership Team • Swipe to explore</span>
            </div>
            <div class="carousel-nav-arrows">
              <button class="arrow-btn" data-carousel-target="teamCarousel" data-carousel-dir="prev">❮</button>
              <button class="arrow-btn" data-carousel-target="teamCarousel" data-carousel-dir="next">❯</button>
            </div>
          </div>

          <div class="auto-overflow-carousel" id="teamCarousel" data-interval="3600">
            ${d.leadership.map(member => `
              <div class="carousel-card team-card">
                <div class="team-photo">
                  <img src="${member.imageUrl}" alt="${member.name}" class="team-img-cover" loading="lazy" />
                  <span class="team-badge">${member.badge}</span>
                </div>
                <div class="team-body">
                  <h3 class="team-name">${member.name}</h3>
                  <div class="team-role">${member.role}</div>
                  <p class="team-bio">${member.bio}</p>
                  <div style="font-size: 0.75rem; color: var(--text-muted-dark); border-top: 1px solid var(--border-light); padding-top: 10px;">
                    ${member.department}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- STRATEGIC INSIGHTS & ARTICLES (MATCHING SCREENSHOT) -->
      <section class="insights-section" id="insights">
        <div class="container">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; margin-bottom: 30px;">
            <div>
              <span class="section-tag light-theme">THOUGHT LEADERSHIP</span>
              <h2 class="section-title dark-text">Latest Strategic Insights & Tech Notes</h2>
              <p class="section-subtitle dark-sub">Analysis and publications from the Zeelot Business Development Department.</p>
            </div>
            <div class="carousel-nav-arrows">
              <button class="arrow-btn" data-carousel-target="insightsCarousel" data-carousel-dir="prev">❮</button>
              <button class="arrow-btn" data-carousel-target="insightsCarousel" data-carousel-dir="next">❯</button>
            </div>
          </div>

          <div class="auto-overflow-carousel" id="insightsCarousel" data-interval="3700">
            ${d.insights.map((item, idx) => `
              <div class="carousel-card insight-card">
                <div class="insight-thumb">
                  <img src="${item.imageUrl}" alt="${item.title}" class="insight-img-cover" loading="lazy" />
                </div>
                <div class="insight-body">
                  <div class="insight-meta">
                    <span>${item.date}</span>
                    <span>•</span>
                    <span>${item.category}</span>
                  </div>
                  <h3 class="insight-title">${item.title}</h3>
                  <p class="insight-desc">${item.summary}</p>
                  <div class="insight-footer">
                    <span>By ${item.author}</span>
                    <a href="#contact" class="text-red">Read Article →</a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- TESTIMONIALS & PROSPECTIVE CLIENT IMPACT (DARK IN SCREENSHOT) -->
      <section class="testimonials-section" id="clients">
        <div class="container">
          <div style="text-align: center; max-width: 720px; margin: 0 auto 40px auto;">
            <span class="section-tag" style="justify-content: center;">STRATEGIC VALIDATION</span>
            <h2 class="section-title light-text">What Prospective Partners & Clients Say</h2>
            <p class="section-subtitle" style="margin: 0 auto;">
              Stakeholders across manufacturing, education, and institutional governance evaluate Zeelot's proposed expansion.
            </p>
          </div>

          <div class="auto-overflow-carousel" id="testimonialsCarousel" data-interval="3900">
            ${d.testimonials.map(t => `
              <div class="carousel-card testimonial-card">
                <div class="quote-icon-badge">“</div>
                <p class="testimonial-quote">“${t.quote}”</p>
                <div class="testimonial-author-block">
                  <div class="author-avatar" style="background-image: url('${t.avatarUrl}');"></div>
                  <div class="author-meta">
                    <span class="author-name">${t.author}</span>
                    <span class="author-role">${t.title}, ${t.company}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- PARTNER & ECOSYSTEM LOGO MARQUEE (EXACT MATCH TO SCREENSHOT) -->
      <div class="partners-section">
        <div class="partners-track">
          ${[...d.ecosystemPartners, ...d.ecosystemPartners].map(p => `
            <div class="partner-logo-item">
              <span class="dot"></span>
              <span>${p.name.toUpperCase()}</span>
              <span style="font-size: 0.65rem; color: #888;">[${p.tag}]</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- RED NEWSLETTER & INQUIRY BAR (MATCHING SCREENSHOT) -->
      <div class="newsletter-bar" id="newsletter">
        <div class="container">
          <div class="newsletter-text">
            <div class="newsletter-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <div style="font-size: 1.15rem; font-weight: 800; text-transform: uppercase;">SUBSCRIBE TO ZEELOT TECH HORIZONS</div>
              <div style="font-size: 0.85rem; opacity: 0.9;">Receive executive briefs on Nigerian robotics expansion and software breakthroughs.</div>
            </div>
          </div>
          <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Thank you for subscribing to Zeelot Innovation Limited!');">
            <input type="email" class="newsletter-input" placeholder="Enter your official corporate email..." required />
            <button type="submit" class="newsletter-btn">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <!-- CONTACT & STRATEGIC ENGAGEMENT -->
      <section class="about-section" id="contact" style="background-color: #F8F9FA;">
        <div class="container">
          <div class="about-grid">
            <div>
              <span class="section-tag light-theme">ENGAGE WITH ZEELOT</span>
              <h2 class="section-title dark-text">Initiate a Strategic Partnership or Technology Inquiry</h2>
              <p class="lead-paragraph">
                Whether you represent an industrial manufacturing facility seeking robotic automation, a school desiring automated management systems, or a corporate procurement department, our team is ready to collaborate.
              </p>
              
              <div style="margin-top: 24px; display: flex; flex-direction: column; gap: 14px;">
                <div class="footer-contact-item" style="color: var(--text-dark);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                  <div>
                    <strong>Locations:</strong><br/>
                    ${d.company.headquarters}
                  </div>
                </div>
                <div class="footer-contact-item" style="color: var(--text-dark);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <div>
                    <strong>Direct Inquiries:</strong><br/>
                    ${d.company.contactEmail}
                  </div>
                </div>
                <div class="footer-contact-item" style="color: var(--text-dark);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <div>
                    <strong>Direct Phone:</strong><br/>
                    ${d.company.phone}
                  </div>
                </div>
              </div>
            </div>

            <!-- CONTACT FORM CARD -->
            <div style="background: #FFFFFF; border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 36px; box-shadow: var(--shadow-md);">
              <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-dark); margin-bottom: 20px; text-transform: uppercase;">
                Request Consultation / Proposal Brief
              </h3>
              <form onsubmit="event.preventDefault(); alert('Inquiry successfully submitted to Praise Bassey (Business Development Department)!');" style="display: flex; flex-direction: column; gap: 16px;">
                <div>
                  <label style="display: block; font-size: 0.775rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted-dark); margin-bottom: 6px;">Your Name / Organisation</label>
                  <input type="text" style="width: 100%; padding: 12px; border: 1px solid #D0D5DD; border-radius: 4px; font-size: 0.875rem;" placeholder="e.g. Dangote Group / St. Jude College" required />
                </div>
                <div>
                  <label style="display: block; font-size: 0.775rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted-dark); margin-bottom: 6px;">Corporate Email</label>
                  <input type="email" style="width: 100%; padding: 12px; border: 1px solid #D0D5DD; border-radius: 4px; font-size: 0.875rem;" placeholder="name@company.com" required />
                </div>
                <div>
                  <label style="display: block; font-size: 0.775rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted-dark); margin-bottom: 6px;">Primary Interest Area</label>
                  <select style="width: 100%; padding: 12px; border: 1px solid #D0D5DD; border-radius: 4px; font-size: 0.875rem; background: #FFF;">
                    <option>Robotics & Industrial Automation</option>
                    <option>Custom Software Development & Cloud ERP</option>
                    <option>School / Hotel Management Portals</option>
                    <option>Gadgets, Laptops & Hardware Procurement</option>
                    <option>Strategic Investment & Partnership</option>
                  </select>
                </div>
                <div>
                  <label style="display: block; font-size: 0.775rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted-dark); margin-bottom: 6px;">Project Outline / Requirements</label>
                  <textarea rows="3" style="width: 100%; padding: 12px; border: 1px solid #D0D5DD; border-radius: 4px; font-size: 0.875rem;" placeholder="Tell us about your operations or automation goals..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 8px;">
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- COMPREHENSIVE FOOTER (RED & BLACK INDUSTRIAL THEME) -->
      <footer class="main-footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <div class="brand-logo" style="margin-bottom: 16px;">
                <div class="logo-icon">Z</div>
                <div class="logo-text">
                  <div class="logo-title">ZEELOT<span>.</span></div>
                  <div class="logo-subtitle">INNOVATION LIMITED</div>
                </div>
              </div>
              <p class="footer-desc">
                ${d.company.overview}
              </p>
              <div style="font-size: 0.75rem; color: var(--primary-red); font-weight: 700;">
                DATE OF PROPOSAL: ${d.company.documentDate}
              </div>
            </div>

            <div>
              <h4 class="footer-col-title">Strategic Pillars</h4>
              <ul class="footer-links">
                <li><a href="#robotics">Robotics & Intelligent Tech</a></li>
                <li><a href="#gadgets">Gadgets & Smart Devices</a></li>
                <li><a href="#software">Custom Software & Web Apps</a></li>
                <li><a href="#robotics">Industrial Automation</a></li>
                <li><a href="#robotics">Surveillance Robotics</a></li>
                <li><a href="#robotics">STEM Robotics Academies</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-col-title">Digital Solutions</h4>
              <ul class="footer-links">
                <li><a href="#software">Enterprise ERP & Inventory</a></li>
                <li><a href="#software">School Management Portals</a></li>
                <li><a href="#software">Booking & Reservation Engines</a></li>
                <li><a href="#software">E-Commerce & Payment Gateways</a></li>
                <li><a href="#software">Mobile Apps (iOS & Android)</a></li>
                <li><a href="#software">Government Digital Portals</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-col-title">Contact & Presence</h4>
              <div class="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                <span>${d.company.headquarters}</span>
              </div>
              <div class="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>${d.company.contactEmail}</span>
              </div>
              <div class="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>${d.company.phone}</span>
              </div>
            </div>
          </div>

         

          <div class="footer-bottom">
            <div>
              © 2026 <strong>ZEELOT INNOVATION LIMITED</strong>. All Rights Reserved.
            </div>
            <div>
              Presented by <strong>${d.company.presentedBy}</strong> • ${d.company.department}
            </div>
          </div>
        </div>
      </footer>
    `;
  },

  // =========================================================================
  // TEMPLATE 2: MODERN DIGITAL SAAS & HIGH-TECH AGENCY (SCREENSHOT 2 MATCH)
  // =========================================================================
  renderTemplate2(container) {
    const d = siteData;
    container.innerHTML = `
      <!-- T2 TOP BAR -->
      <div class="t2-topbar">
        <div class="container">
          <div class="t2-top-info">
            <span>📍 ${d.company.headquarters}</span>
            <span>✉️ ${d.company.contactEmail}</span>
            <span>📞 ${d.company.phone}</span>
          </div>
          <div class="t2-socials">
            <a href="#" class="t2-social-btn" title="LinkedIn">LinkedIn</a>
            <a href="#" class="t2-social-btn" title="Twitter / X">Twitter</a>
            <a href="#" class="t2-social-btn" title="Instagram">Instagram</a>
          </div>
        </div>
      </div>

      <!-- T2 MAIN HEADER -->
      <header class="t2-header">
        <div class="container">
          <a href="#t2-hero" class="t2-brand">
            <div class="t2-brand-symbol">Z</div>
            <div>
              <div class="t2-brand-name">ZEELOT</div>
              <div class="t2-brand-sub">INNOVATION LIMITED</div>
            </div>
          </a>

          <ul class="t2-nav" id="t2NavMenu">
            <li class="drawer-header-item">
              <div class="t2-drawer-header-row">
                <span class="t2-drawer-header-title">ZEELOT MENU</span>
                <button class="t2-drawer-close-btn" id="drawerCloseT2" aria-label="Close menu">✕</button>
              </div>
            </li>
            <li><a href="#t2-hero" class="t2-nav-link active">Home</a></li>
            <li><a href="#t2-about" class="t2-nav-link">About Us</a></li>
            <li><a href="#t2-features" class="t2-nav-link">Capabilities</a></li>
            <li><a href="#t2-team" class="t2-nav-link">Team</a></li>
            <li><a href="#t2-portfolio" class="t2-nav-link">Portfolio</a></li>
            <li><a href="#t2-faq" class="t2-nav-link">FAQ</a></li>
            <li><a href="#t2-blog" class="t2-nav-link">Insights</a></li>
            <li><a href="#t2-contact" class="t2-nav-link">Contact</a></li>
          </ul>

          <div style="display: flex; align-items: center; gap: 14px;">
            <a href="#t2-contact" class="btn-t2-primary" style="padding: 10px 20px; font-size: 0.8rem;">GET IN TOUCH</a>
            <button class="t2-mobile-toggle" id="t2MobileNavToggle" aria-label="Toggle Navigation">☰</button>
          </div>
        </div>
      </header>
      <div class="drawer-backdrop" id="t2DrawerBackdrop"></div>

      <!-- T2 HERO SECTION (MATCHING SCREENSHOT 2 WITH UNPLASH HERO BACKGROUND) -->
      <section class="t2-hero" id="t2-hero">
        <div class="t2-hero-bg" style="background-image: linear-gradient(135deg, rgba(11, 15, 25, 0.94) 0%, rgba(13, 20, 36, 0.88) 100%), url('${d.mediaImages.heroMeeting}'); background-size: cover; background-position: center; opacity: 1;"></div>
        <div class="container">
          <div class="t2-hero-grid">
            <!-- LEFT: INTERACTIVE PLAY BUTTON (FROM SCREENSHOT 2) -->
            <div class="t2-video-play-col">
              <div class="t2-play-btn" onclick="alert('Zeelot Innovation Limited Strategy Video Brief - Presented by Praise Bassey (Business Development Department)');" title="Play Strategic Overview">
                ▶
              </div>
            </div>

            <!-- RIGHT: HERO HEADLINE & PITCH -->
            <div class="t2-hero-text">
              
              <h1 class="t2-hero-title">
                WE ENGINEER ROBOTICS & DIGITAL <span>THE WAY YOU WANT FOR AFRICA</span>
              </h1>
              <p class="t2-hero-desc">
                Zeelot Innovation Limited positions Nigerian and African enterprise at the intersection of robotics, custom digital software, and smart distributed hardware.
              </p>
              <div class="t2-hero-btns">
                <a href="#t2-about" class="btn-t2-primary">GET STARTED</a>
                <a href="#t2-features" class="btn-t2-outline">OUR ROADMAP</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4 OVERLAPPING FLOATING FEATURE CARDS (DIRECT MATCH TO SCREENSHOT 2) -->
      <div class="container t2-features-wrapper" id="t2-features">
        <div class="auto-overflow-carousel" id="t2TopFeaturesCarousel" data-interval="3100">
          ${d.template2Features.map(feat => `
            <div class="carousel-card t2-feature-card">
              <div class="t2-feat-icon">
                ${feat.icon === 'telemetry' ? '⚙️' : feat.icon === 'code' ? '💻' : feat.icon === 'hardware' ? '📱' : '🎓'}
              </div>
              <h3 class="t2-feat-title">${feat.title}</h3>
              <p class="t2-feat-desc">${feat.desc}</p>
              <div style="margin-top: auto; padding-top: 14px; font-size: 0.75rem; font-weight: 700; color: #E51920;">
                ${feat.badge} →
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- ABOUT SECTION (STACKED PHOTOS + AWARD BADGE MATCHING SCREENSHOT 2) -->
      <section class="t2-about-section" id="t2-about">
        <div class="container">
          <div class="t2-about-grid">
            <!-- LEFT: 2 PHOTOS COLLAGE WITH AWARD BADGE -->
            <div class="t2-about-media">
              <div class="t2-photo-tall">
                <img src="${d.mediaImages.aboutRoboticsArm}" alt="Robotics Innovation" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" />
              </div>
              <div class="t2-photo-short">
                <img src="${d.mediaImages.aboutSoftwareWorkspace}" alt="Software Engineering" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" />
              </div>
              <div class="t2-award-badge">
                <div style="font-size: 1.5rem; font-weight: 900;">100%</div>
                <div>AFRICAN ROBOTICS<br/>INNOVATION FOCUS</div>
              </div>
            </div>

            <!-- RIGHT: ABOUT CONTENT & CHECKLIST -->
            <div class="t2-about-content">
              <span class="t2-tag">ABOUT ZEELOT INNOVATION</span>
              <h2 class="t2-about-title">We Are Pioneering Africa's Autonomous & Digital Future</h2>
              <p class="t2-about-desc">
                Zeelot Innovation Limited presents a generational opportunity to build a technology-driven company positioned at the intersection of robotics, digital solutions, technology products, and emerging innovations.
              </p>

              <div class="t2-bullet-list">
                <div class="t2-bullet-item">
                  <div class="t2-bullet-icon">✓</div>
                  <div class="t2-bullet-text">
                    <strong>Dual-Track Commercial Strategy</strong>
                    <span>Software solutions and smart hardware provide practical entry points and steady cashflow while gradually engineering indigenous robotics capabilities.</span>
                  </div>
                </div>
                <div class="t2-bullet-item">
                  <div class="t2-bullet-icon">✓</div>
                  <div class="t2-bullet-text">
                    <strong>On-Ground Deployment & Engineering SLA</strong>
                    <span>Dedicated technical presence in Lagos and Abuja ensuring rapid prototyping, equipment procurement, and 24/7 client support.</span>
                  </div>
                </div>
              </div>

              <a href="#t2-portfolio" class="btn-t2-primary">EXPLORE OUR PORTFOLIO</a>
            </div>
          </div>
        </div>
      </section>

      <!-- DARK TEAM SECTION (DIRECT MATCH TO SCREENSHOT 2) -->
      <section class="t2-team-section" id="t2-team">
        <div class="container">
          <div class="t2-team-grid">
            <!-- LEFT: TEAM PITCH -->
            <div class="t2-team-pitch">
              <span style="font-size: 0.8rem; font-weight: 800; color: #FF4D52; text-transform: uppercase; letter-spacing: 2px;">TEAM MEMBERS</span>
              <h2 style="font-size: 2.5rem; font-weight: 900; margin: 10px 0 16px 0; color: #FFFFFF;">OUR TEAM</h2>
              <p style="color: #94A3B8; font-size: 0.95rem; line-height: 1.6; margin-bottom: 26px;">
                Meet the strategic business leaders and robotics engineers spearheading Zeelot Innovation Limited's market entry across West Africa.
              </p>
              <a href="#t2-contact" class="btn-t2-primary">CONNECT WITH TEAM</a>
            </div>

            <!-- RIGHT: TEAM CARDS AUTO-OVERFLOW SLIDER -->
            <div class="auto-overflow-carousel" id="t2TeamCardsCarousel" data-interval="3400">
              ${d.leadership.slice(0, 3).map(m => `
                <div class="carousel-card t2-team-card">
                  <div class="t2-team-img">
                    <img src="${m.imageUrl}" alt="${m.name}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" />
                  </div>
                  <div class="t2-team-info">
                    <h3 class="t2-team-name">${m.name}</h3>
                    <div class="t2-team-role">${m.role}</div>
                    <div class="t2-team-socials">
                      <a href="#" class="t2-t-soc" title="LinkedIn">in</a>
                      <a href="#" class="t2-t-soc" title="Twitter">𝕏</a>
                      <a href="#" class="t2-t-soc" title="Email">✉</a>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- GRADIENT MILESTONES BANNER (EXACT TO SCREENSHOT 2) -->
      <div class="t2-gradient-banner">
        <div class="container">
          <div class="t2-metrics-row">
            ${d.metricsT2.map(met => `
              <div class="t2-metric-box">
                <div class="t2-m-icon">⚡</div>
                <div>
                  <div class="t2-m-num">${met.number}</div>
                  <div class="t2-m-lbl">${met.label}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- PORTFOLIO / "OUR EXCEPTIONAL QUALITY WORK" (SCREENSHOT 2) -->
      <section class="t2-portfolio-section" id="t2-portfolio">
        <div class="container">
          <span style="font-size: 0.8rem; font-weight: 800; color: #E51920; text-transform: uppercase; letter-spacing: 2px;">PROVEN SOLUTIONS</span>
          <h2 style="font-size: 2.4rem; font-weight: 900; color: #0F172A; margin: 10px 0;">Our Exceptional Quality Work</h2>
          <p style="color: #64748B; max-width: 650px; margin: 0 auto 30px auto; font-size: 0.95rem;">
            A showcase of bespoke robotics deployments, IoT smart devices, and high-uptime software platforms engineered for African enterprise.
          </p>

          <div class="auto-overflow-carousel" id="t2PortfolioCarousel" data-interval="3300">
            ${d.projectsShowcase.map(proj => `
              <div class="carousel-card t2-port-card">
                <img src="${proj.imageUrl}" alt="${proj.title}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" />
                <div class="t2-port-overlay">
                  <span>${proj.category}</span>
                  <h4>${proj.title}</h4>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- SPLIT: "WHY CHOOSE US" & "FAQ ACCORDION" (MATCHING SCREENSHOT 2) -->
      <section class="t2-why-faq-section" id="t2-faq">
        <div class="container">
          <div class="t2-why-faq-grid">
            <!-- LEFT: WHY CHOOSE US -->
            <div class="t2-why-col">
              <div class="t2-why-img">
                <img src="${d.mediaImages.whyChooseUs}" alt="Why Choose Zeelot" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" />
              </div>
              <h3 style="font-size: 1.5rem; font-weight: 900; color: #0F172A; margin-bottom: 18px;">
                ${d.whyChooseUs.heading}
              </h3>
              ${d.whyChooseUs.points.map(pt => `
                <div class="t2-why-point">
                  <h4>${pt.title}</h4>
                  <p>${pt.desc}</p>
                </div>
              `).join('')}
            </div>

            <!-- RIGHT: FREQUENTLY ASK QUESTION ACCORDION -->
            <div>
              <span style="font-size: 0.8rem; font-weight: 800; color: #E51920; text-transform: uppercase; letter-spacing: 2px;">QUESTIONS & CLARIFICATIONS</span>
              <h3 style="font-size: 1.8rem; font-weight: 900; color: #0F172A; margin: 10px 0 24px 0;">
                Frequently Ask Question
              </h3>

              <div class="t2-accordion" id="t2Accordion">
                ${d.faqs.map((faq, idx) => `
                  <div class="t2-faq-item ${idx === 0 ? 'active' : ''}">
                    <div class="t2-faq-header" onclick="ZeelotApp.toggleFaq(this)">
                      <span>${faq.question}</span>
                      <span class="faq-arrow">${idx === 0 ? '▲' : '▼'}</span>
                    </div>
                    <div class="t2-faq-body" style="${idx === 0 ? 'display: block;' : 'display: none;'}">
                      <p>${faq.answer}</p>
                      ${faq.bullets && faq.bullets.length > 0 ? `
                        <ul>
                          ${faq.bullets.map(b => `<li>${b}</li>`).join('')}
                        </ul>
                      ` : ''}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TESTIMONIALS (SPLIT RED BOX + WHITE CARDS MATCHING SCREENSHOT 2) -->
      <section class="t2-testimonials-section" id="t2-testimonials">
        <div class="container">
          <div class="t2-testi-wrapper">
            <!-- LEFT: RED INTRO BOX -->
            <div class="t2-testi-intro-box">
              <span style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; opacity: 0.9;">TESTIMONIALS</span>
              <h3>What Our Clients Say</h3>
              <p style="font-size: 0.95rem; opacity: 0.9; margin-top: 14px; line-height: 1.6;">
                Hear how Nigerian business leaders and institutions perceive Zeelot Innovation Limited's dual-track robotics & software roadmap.
              </p>
            </div>

            <!-- RIGHT: TESTIMONIAL CARDS AUTO-OVERFLOW -->
            <div class="auto-overflow-carousel" id="t2TestimonialsCarousel" data-interval="3600">
              ${d.testimonials.map(t => `
                <div class="carousel-card t2-review-card">
                  <div class="t2-stars">★★★★★</div>
                  <p class="t2-rev-quote">“${t.quote}”</p>
                  <div class="t2-rev-author">
                    <div class="t2-rev-avatar" style="background-image: url('${t.avatarUrl}'); background-size: cover; background-position: center; border: 2px solid #E51920;"></div>
                    <div>
                      <strong style="color: #0F172A; font-size: 0.9rem; display: block;">${t.author}</strong>
                      <span style="color: #64748B; font-size: 0.75rem;">${t.title}, ${t.company}</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- RECENT POSTS / BLOG (MATCHING SCREENSHOT 2) -->
      <section class="t2-blog-section" id="t2-blog">
        <div class="container">
          <span style="font-size: 0.8rem; font-weight: 800; color: #E51920; text-transform: uppercase; letter-spacing: 2px;">OUR BLOG</span>
          <h2 style="font-size: 2.3rem; font-weight: 900; color: #0F172A; margin: 10px 0 34px 0;">Recent Posts</h2>

          <div class="auto-overflow-carousel" id="t2BlogCarousel" data-interval="3700">
            ${d.insights.map((item, idx) => `
              <div class="carousel-card t2-blog-card">
                <div class="t2-blog-thumb">
                  <img src="${item.imageUrl}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" />
                  <span class="t2-blog-badge">${item.category}</span>
                </div>
                <div class="t2-blog-body">
                  <div style="font-size: 0.75rem; color: #64748B; margin-bottom: 8px;">${item.date} • By ${item.author}</div>
                  <h3 class="t2-blog-title">${item.title}</h3>
                  <p class="t2-blog-desc">${item.summary}</p>
                  <a href="#t2-contact" class="t2-blog-link">Read More →</a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FULL-WIDTH NEWSLETTER BANNER (MATCHING SCREENSHOT 2) -->
      <div class="t2-newsletter-banner">
        <div class="container">
          <h3 style="font-size: 1.8rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5px;">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>
          <p style="font-size: 0.95rem; opacity: 0.9; margin-top: 6px;">
            Stay ahead with official executive memos, robotics patents, and digital enterprise case studies.
          </p>
          <form class="t2-nl-form" onsubmit="event.preventDefault(); alert('Subscribed to Zeelot Innovation newsletter!');">
            <input type="email" class="t2-nl-input" placeholder="Enter your corporate email address..." required />
            <button type="submit" class="t2-nl-btn">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <!-- T2 FOOTER (MATCHING SCREENSHOT 2) -->
      <footer class="t2-footer" id="t2-contact">
        <div class="container">
          <div class="t2-footer-grid">
            <div class="t2-f-col">
              <div style="font-size: 1.4rem; font-weight: 900; color: #FFF; margin-bottom: 14px;">
                ZEELOT<span style="color: #E51920;">.</span>
              </div>
              <p style="line-height: 1.6; font-size: 0.85rem; color: #94A3B8; margin-bottom: 18px;">
                ${d.company.overview}
              </p>
              <div style="display: flex; gap: 10px;">
                <a href="#" class="t2-t-soc" style="background: #1E293B;">in</a>
                <a href="#" class="t2-t-soc" style="background: #1E293B;">𝕏</a>
                <a href="#" class="t2-t-soc" style="background: #1E293B;">ig</a>
              </div>
            </div>

            <div class="t2-f-col">
              <h4>Services</h4>
              <ul class="t2-f-links">
                <li><a href="#t2-features">Robotics Automation</a></li>
                <li><a href="#t2-features">Surveillance Rovers</a></li>
                <li><a href="#t2-features">Custom Software</a></li>
                <li><a href="#t2-features">Enterprise ERP</a></li>
                <li><a href="#t2-features">Hardware Procurement</a></li>
              </ul>
            </div>

            <div class="t2-f-col">
              <h4>Pillars</h4>
              <ul class="t2-f-links">
                <li><a href="#t2-about">Robotics Long-Term</a></li>
                <li><a href="#t2-about">Gadgets & Devices</a></li>
                <li><a href="#t2-about">Digital Solutions</a></li>
                <li><a href="#t2-about">STEM Training</a></li>
              </ul>
            </div>

            <div class="t2-f-col">
              <h4>Company</h4>
              <ul class="t2-f-links">
                <li><a href="#t2-about">About Zeelot</a></li>
                <li><a href="#t2-team">Leadership Team</a></li>
                <li><a href="#t2-faq">Strategy FAQ</a></li>
                <li><a href="#t2-blog">Recent Posts</a></li>
              </ul>
            </div>

            <div class="t2-f-col">
              <h4>Contact Directly</h4>
              <p style="font-size: 0.85rem; color: #CBD5E1; margin-bottom: 8px;">
                📍 ${d.company.headquarters}
              </p>
              <p style="font-size: 0.85rem; color: #CBD5E1; margin-bottom: 8px;">
                ✉️ ${d.company.contactEmail}
              </p>
              <p style="font-size: 0.85rem; color: #CBD5E1;">
                📞 ${d.company.phone}
              </p>
            </div>
          </div>

          <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; font-size: 0.8rem;">
            <div>
              © 2026 <strong>ZEELOT INNOVATION LIMITED</strong>. All Rights Reserved.
            </div>
            <div>
              Strategy Proposal Presented by <strong>${d.company.presentedBy}</strong> (Business Development Department)
            </div>
          </div>
        </div>
      </footer>
    `;
  },

  // =========================================================================
  // TEMPLATE 3: CYBERNETIC ROBOTICS STUDIO (Z3 VARIANT)
  // =========================================================================
  renderTemplate3(container) {
    const d = siteData;
    container.innerHTML = `
      <!-- Z3 CYBER HEADER -->
      <header class="main-header" style="background: #050608; border-bottom: 1px solid #330A0C;">
        <div class="container">
          <div class="brand-logo">
            <div class="logo-icon" style="background: #FF001E; box-shadow: 0 0 20px #FF001E;">Z3</div>
            <div class="logo-text">
              <div class="logo-title" style="font-family: monospace;">ZEELOT_LABS</div>
              <div class="logo-subtitle">AUTONOMOUS HARDWARE ENGINE</div>
            </div>
          </div>
          <span style="font-family: monospace; font-size: 0.8rem; color: #00FF66;">[GRID_STATUS: ONLINE]</span>
        </div>
      </header>

      <!-- Z3 CYBER HERO -->
      <section style="padding: 100px 0; background: #06070A; border-bottom: 1px solid #222;">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
            <div>
              <div style="font-family: monospace; font-size: 0.8rem; color: #FF001E; margin-bottom: 12px;">>>> INITIATING PROTOCOL 2026-AUG-18</div>
              <h1 style="font-size: 3rem; font-weight: 900; line-height: 1.15; color: #FFF; text-transform: uppercase; margin-bottom: 20px;">
                ROBOTICS IS THE <span style="color: #FF001E; text-shadow: 0 0 15px rgba(255,0,30,0.5);">PRIMARY FRONTIER</span>
              </h1>
              <p style="color: #8E9AA8; font-size: 1.05rem; line-height: 1.6; margin-bottom: 30px;">
                ${d.company.corePhilosophy}
              </p>
              <div style="display: flex; gap: 16px;">
                <a href="#z3Carousel" class="btn btn-primary" style="box-shadow: 0 0 20px rgba(229,25,32,0.6);">LAUNCH LAB DEMO</a>
              </div>
            </div>
            <div>
              ${ZeelotGraphics.aboutShowcase()}
            </div>
          </div>
        </div>
      </section>

      <!-- Z3 CAROUSEL -->
      <section id="z3Carousel" style="padding: 80px 0; background: #090B10;">
        <div class="container">
          <div class="carousel-section-wrapper">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
              <h3 style="font-family: monospace; color: #FFF;">// ROBOTICS & SENSOR NODES (AUTO-SCROLL)</h3>
              <div class="carousel-nav-arrows">
                <button class="arrow-btn" data-carousel-target="z3AutoCarousel" data-carousel-dir="prev">❮</button>
                <button class="arrow-btn" data-carousel-target="z3AutoCarousel" data-carousel-dir="next">❯</button>
              </div>
            </div>
            
            <div class="auto-overflow-carousel" id="z3AutoCarousel" data-interval="2800">
              ${d.strategicPillars[0].areas.map(a => `
                <div class="carousel-card" style="background: #11141E; border: 1px solid #FF001E; padding: 24px; border-radius: 6px;">
                  <div style="color: #FF001E; font-family: monospace; font-size: 0.8rem; margin-bottom: 8px;">NODE_ID: ${a.name.substring(0, 3).toUpperCase()}</div>
                  <h4 style="font-size: 1.2rem; color: #FFF; margin-bottom: 10px;">${a.name}</h4>
                  <p style="font-size: 0.85rem; color: #8E9AA8; line-height: 1.5;">${a.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- NOTE FOR USER -->
      <div style="background: #050608; padding: 40px 0; border-top: 1px solid #222; text-align: center;">
        <div class="container">
          <p style="color: #718096; font-family: monospace; font-size: 0.85rem;">
            Ready to be populated with your <strong>third screenshot layout</strong>! Switch back to <strong class="text-red">Z1</strong> anytime.
          </p>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // INTERACTIVITY & LISTENERS
  // =========================================================================
  attachGlobalListeners() {
    const closeAllDrawers = () => {
      const menu1 = document.getElementById('navMenu');
      const toggle1 = document.getElementById('mobileNavToggle');
      const backdrop1 = document.getElementById('drawerBackdrop');
      if (menu1) menu1.classList.remove('open');
      if (toggle1) toggle1.textContent = '☰';
      if (backdrop1) backdrop1.classList.remove('open');

      const menu2 = document.getElementById('t2NavMenu');
      const toggle2 = document.getElementById('t2MobileNavToggle');
      const backdrop2 = document.getElementById('t2DrawerBackdrop');
      if (menu2) menu2.classList.remove('open');
      if (toggle2) toggle2.textContent = '☰';
      if (backdrop2) backdrop2.classList.remove('open');

      document.body.classList.remove('menu-open');
    };

    document.addEventListener('click', (e) => {
      // Template 1 Toggle
      const t1Toggle = e.target.closest('#mobileNavToggle');
      if (t1Toggle) {
        e.stopPropagation();
        const menu = document.getElementById('navMenu');
        const backdrop = document.getElementById('drawerBackdrop');
        const isOpen = menu && menu.classList.contains('open');

        if (isOpen) {
          closeAllDrawers();
        } else {
          closeAllDrawers();
          if (menu) menu.classList.add('open');
          if (backdrop) backdrop.classList.add('open');
          t1Toggle.textContent = '✕';
          document.body.classList.add('menu-open');
        }
        return;
      }

      // Template 2 Toggle
      const t2Toggle = e.target.closest('#t2MobileNavToggle');
      if (t2Toggle) {
        e.stopPropagation();
        const menu = document.getElementById('t2NavMenu');
        const backdrop = document.getElementById('t2DrawerBackdrop');
        const isOpen = menu && menu.classList.contains('open');

        if (isOpen) {
          closeAllDrawers();
        } else {
          closeAllDrawers();
          if (menu) menu.classList.add('open');
          if (backdrop) backdrop.classList.add('open');
          t2Toggle.textContent = '✕';
          document.body.classList.add('menu-open');
        }
        return;
      }

      // Dedicated close buttons inside drawer
      if (e.target.closest('#drawerCloseT1') || e.target.closest('#drawerCloseT2') || e.target.closest('.drawer-close-btn') || e.target.closest('.t2-drawer-close-btn')) {
        closeAllDrawers();
        return;
      }

      // Click on backdrop overlay
      if (e.target.closest('#drawerBackdrop') || e.target.closest('#t2DrawerBackdrop')) {
        closeAllDrawers();
        return;
      }

      // Click on any nav link
      if (e.target.closest('.nav-link, .t2-nav-link')) {
        closeAllDrawers();
        return;
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllDrawers();
      }
    });
  },

  toggleFaq(headerElement) {
    const parentItem = headerElement.closest('.t2-faq-item');
    if (!parentItem) return;

    const allItems = document.querySelectorAll('.t2-faq-item');
    const wasActive = parentItem.classList.contains('active');

    // Close all items
    allItems.forEach(item => {
      item.classList.remove('active');
      const body = item.querySelector('.t2-faq-body');
      if (body) body.style.display = 'none';
      const arrow = item.querySelector('.faq-arrow');
      if (arrow) arrow.textContent = '▼';
    });

    // Toggle current
    if (!wasActive) {
      parentItem.classList.add('active');
      const body = parentItem.querySelector('.t2-faq-body');
      if (body) body.style.display = 'block';
      const arrow = parentItem.querySelector('.faq-arrow');
      if (arrow) arrow.textContent = '▲';
    }
  },

  wireFilterTabs() {
    const tabs = document.querySelectorAll('.filter-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');
        this.currentFilter = filter;

        const cards = document.querySelectorAll('#projectsCarousel .project-card');
        cards.forEach(card => {
          if (filter === 'all') {
            card.style.display = 'flex';
          } else {
            const categories = card.getAttribute('data-category') || '';
            if (categories.toLowerCase().includes(filter.toLowerCase())) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  },

  wireModals() {
    // Optional hook for expanding card details
  }
};

window.ZeelotApp = ZeelotApp;
