/**
 * ============================================
 * CYBERPATH DIGITAL - FILTERS.JS
 * تصفية وعرض الأعمال حسب التصنيف
 * ============================================
 */

(function() {
    'use strict';

    // ============================================
    // FILTER SYSTEM
    // ============================================
    class PortfolioFilter {
        constructor() {
            this.filterButtons = document.querySelectorAll('.filter-btn');
            this.portfolioItems = document.querySelectorAll('.portfolio-item');
            this.activeFilter = 'all';
            
            this.init();
        }
        
        init() {
            if (!this.filterButtons.length) return;
            
            this.filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const filter = button.dataset.filter;
                    this.setFilter(filter);
                });
            });
        }
        
        setFilter(filter) {
            this.activeFilter = filter;
            
            // Update active button
            this.filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
                if (btn.dataset.filter === filter) {
                    btn.classList.add('active');
                    btn.setAttribute('aria-selected', 'true');
                }
            });
            
            // Filter items
            this.portfolioItems.forEach(item => {
                const category = item.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    // Add animation
                    item.style.animation = 'none';
                    requestAnimationFrame(() => {
                        item.style.animation = 'fadeInScale 0.4s ease forwards';
                    });
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Update portfolio count
            this.updateCount();
        }
        
        updateCount() {
            const visibleItems = document.querySelectorAll('.portfolio-item[style*="display: block"]');
            const countElement = document.querySelector('.portfolio-count');
            
            if (countElement) {
                countElement.textContent = visibleItems.length;
            }
        }
        
        // Get current filter
        getCurrentFilter() {
            return this.activeFilter;
        }
    }

    // ============================================
    // INIT
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        const filter = new PortfolioFilter();
        
        // Expose for debugging
        window.PortfolioFilter = filter;
    });

})();
