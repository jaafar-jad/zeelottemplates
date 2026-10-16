/**
 * ZEELOT INNOVATION LIMITED - Interactive Auto-Overflow Carousel Controller
 * Implements automated horizontal card scrolling with pause-on-touch/hover and manual override.
 * Satisfies the requirement: cards overflow-x auto and auto-advance like someone is nexting them,
 * pausing immediately when touched, clicked, or scrolled manually.
 */

class ZeelotCarousel {
  constructor(containerElement, options = {}) {
    this.container = containerElement;
    this.intervalMs = options.interval || 3200;
    this.resumeDelayMs = options.resumeDelay || 4500;
    this.timer = null;
    this.resumeTimeout = null;
    this.isPaused = false;
    this.direction = 1;

    this.init();
  }

  init() {
    if (!this.container) return;

    // Attach interaction listeners to pause auto-advancing
    this.container.addEventListener('mouseenter', () => this.pause('hover'));
    this.container.addEventListener('mouseleave', () => this.scheduleResume());

    this.container.addEventListener('touchstart', () => this.pause('touch'), { passive: true });
    this.container.addEventListener('touchend', () => this.scheduleResume(), { passive: true });
    this.container.addEventListener('touchcancel', () => this.scheduleResume(), { passive: true });

    this.container.addEventListener('pointerdown', () => this.pause('pointer'));
    this.container.addEventListener('pointerup', () => this.scheduleResume());

    // Listen to manual scroll events
    let manualScrollTimer;
    this.container.addEventListener('scroll', () => {
      if (!this.isAutoScrolling) {
        this.pause('manual-scroll');
        clearTimeout(manualScrollTimer);
        manualScrollTimer = setTimeout(() => this.scheduleResume(), this.resumeDelayMs);
      }
    }, { passive: true });

    // Start auto scroll
    this.startAutoScroll();
  }

  getCards() {
    return Array.from(this.container.querySelectorAll('.carousel-card, .service-card, .project-card, .insight-card, .team-card'));
  }

  startAutoScroll() {
    this.clearIntervals();
    this.timer = setInterval(() => {
      if (!this.isPaused) {
        this.nextSlide();
      }
    }, this.intervalMs);
  }

  clearIntervals() {
    if (this.timer) clearInterval(this.timer);
    if (this.resumeTimeout) clearTimeout(this.resumeTimeout);
  }

  pause(reason = '') {
    this.isPaused = true;
    this.container.setAttribute('data-scroll-state', 'paused');
  }

  scheduleResume() {
    clearTimeout(this.resumeTimeout);
    this.resumeTimeout = setTimeout(() => {
      this.isPaused = false;
      this.container.setAttribute('data-scroll-state', 'auto');
    }, this.resumeDelayMs);
  }

  nextSlide() {
    const cards = this.getCards();
    if (cards.length <= 1) return;

    const containerWidth = this.container.clientWidth;
    const scrollLeft = this.container.scrollLeft;
    const maxScroll = this.container.scrollWidth - containerWidth;

    // Find current card and next card
    const firstCard = cards[0];
    const cardWidth = firstCard.offsetWidth + parseInt(window.getComputedStyle(firstCard).marginRight || 16, 10);

    let targetScroll = scrollLeft + cardWidth;

    // If near the end, loop smoothly back to beginning
    if (scrollLeft >= maxScroll - 20) {
      targetScroll = 0;
    }

    this.isAutoScrolling = true;
    this.container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });

    setTimeout(() => {
      this.isAutoScrolling = false;
    }, 450);
  }

  prevSlide() {
    const cards = this.getCards();
    if (cards.length <= 1) return;

    const containerWidth = this.container.clientWidth;
    const scrollLeft = this.container.scrollLeft;
    const firstCard = cards[0];
    const cardWidth = firstCard.offsetWidth + parseInt(window.getComputedStyle(firstCard).marginRight || 16, 10);

    let targetScroll = scrollLeft - cardWidth;
    if (targetScroll < 0) {
      targetScroll = this.container.scrollWidth - containerWidth;
    }

    this.isAutoScrolling = true;
    this.container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });

    setTimeout(() => {
      this.isAutoScrolling = false;
    }, 450);
  }
}

// Global Carousel Manager
const ZeelotCarouselManager = {
  instances: [],

  initAll() {
    // Destroy previous instances if any
    this.instances.forEach(inst => inst.clearIntervals());
    this.instances = [];

    const carousels = document.querySelectorAll('.auto-overflow-carousel');
    carousels.forEach(el => {
      const interval = parseInt(el.getAttribute('data-interval') || 3400, 10);
      const instance = new ZeelotCarousel(el, { interval });
      this.instances.push(instance);
    });

    // Wire external prev/next arrows if present
    document.querySelectorAll('[data-carousel-target]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetId = btn.getAttribute('data-carousel-target');
        const direction = btn.getAttribute('data-carousel-dir');
        const container = document.getElementById(targetId);
        if (!container) return;

        const inst = ZeelotCarouselManager.instances.find(i => i.container === container);
        if (inst) {
          inst.pause('manual-click');
          if (direction === 'prev') {
            inst.prevSlide();
          } else {
            inst.nextSlide();
          }
          inst.scheduleResume();
        }
      });
    });
  }
};

window.ZeelotCarouselManager = ZeelotCarouselManager;
