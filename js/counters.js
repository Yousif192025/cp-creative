/**
 * ============================================
 * CYBERPATH DIGITAL - COUNTERS.JS
 * العدادت الرقمية المتحركة
 * ============================================
 */

(function() {
    'use strict';

    // ============================================
    // COUNTERS DATA
    // ============================================
    const counters = [
        { element: '.stat-number', target: 50, suffix: '+', label: 'هوية براند' },
        { element: '.stat-number', target: 200, suffix: '+', label: 'مشروع تصميم' },
        { element: '.stat-number', target: 100, suffix: '+', label: 'حملة تسويقية' },
        { element: '.stat-number', target: 95, suffix: '%', label: 'رضا العملاء' }
    ];

    // ============================================
    // DOM REFERENCES
    // ============================================
    const statElements = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    // ============================================
    // ANIMATE COUNTER
    // ============================================
    function animateCounter(element, target, suffix) {
        let current = 0;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let step = 0;
        
        const interval = setInterval(function() {
            step++;
            current += increment;
            
            if (step >= steps) {
                current = target;
                clearInterval(interval);
            }
            
            element.textContent = Math.floor(current) + suffix;
        }, duration / steps);
    }

    // ============================================
    // INIT COUNTERS ON SCROLL
    // ============================================
    function initCounters() {
        if (hasAnimated) return;
        
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    
                    statElements.forEach(function(el, index) {
                        const target = parseInt(el.dataset.count);
                        const suffix = el.dataset.count == '95' ? '%' : '+';
                        
                        if (!isNaN(target)) {
                            // Reset to 0 first
                            el.textContent = '0' + suffix;
                            animateCounter(el, target, suffix);
                        }
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(heroSection);
    }

    // ============================================
    // RESET COUNTERS (for testing)
    // ============================================
    function resetCounters() {
        hasAnimated = false;
        statElements.forEach(function(el) {
            const suffix = el.dataset.count == '95' ? '%' : '+';
            el.textContent = '0' + suffix;
        });
    }

    // ============================================
    // INIT
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        // Set initial values
        statElements.forEach(function(el) {
            const suffix = el.dataset.count == '95' ? '%' : '+';
            el.textContent = '0' + suffix;
        });
        
        // Start observing
        initCounters();
    });

    // ============================================
    // EXPOSE
    // ============================================
    window.Counters = {
        init: initCounters,
        reset: resetCounters
    };

})();
