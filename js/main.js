/**
 * ============================================
 * CYBERPATH DIGITAL - MAIN.JS
 * الوظائف الرئيسية للموقع
 * ============================================
 */

(function() {
    'use strict';

    // ============================================
    // DOM READY
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        initNavigation();
        initScrollReveal();
        initHeaderScroll();
        initSmoothScroll();
        initMobileMenu();
    });

    // ============================================
    // NAVIGATION
    // ============================================
    function initNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                navMenu.classList.toggle('active');
                
                const isOpen = navMenu.classList.contains('active');
                this.setAttribute('aria-expanded', isOpen);
            });
            
            // Close menu on link click
            navMenu.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', function() {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                });
            });
        }
    }

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    function initHeaderScroll() {
        const header = document.querySelector('.header');
        let lastScroll = 0;
        
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        }, { passive: true });
    }

    // ============================================
    // SCROLL REVEAL
    // ============================================
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal');
        
        if (revealElements.length === 0) return;
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(function(el) {
            observer.observe(el);
        });
    }

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ============================================
    // MOBILE MENU DETECTION
    // ============================================
    function initMobileMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        
        if (window.innerWidth > 768 && navToggle) {
            navToggle.style.display = 'none';
        }
        
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navToggle) {
                navToggle.style.display = 'none';
                document.querySelector('.nav-menu').classList.remove('active');
                navToggle.classList.remove('active');
            } else if (window.innerWidth <= 768 && navToggle) {
                navToggle.style.display = 'flex';
            }
        });
    }

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================
    
    /**
     * Debounce function for performance
     */
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
        };
    }

    /**
     * Throttle function for performance
     */
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const context = this;
            const args = arguments;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(function() {
                    inThrottle = false;
                }, limit);
            }
        };
    }

    /**
     * Check if element is in viewport
     */
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // ============================================
    // EXPOSE UTILITIES GLOBALLY
    // ============================================
    window.CyberPath = {
        debounce: debounce,
        throttle: throttle,
        isInViewport: isInViewport
    };

})();
