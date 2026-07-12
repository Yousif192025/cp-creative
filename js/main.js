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
        initContactForm();
    });

    // ============================================
    // NAVIGATION
    // ============================================
    function initNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (!navToggle || !navMenu) return;

        // Create the overlay/backdrop dynamically so every page gets it
        // without needing to edit 14 HTML files individually.
        const overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        overlay.setAttribute('aria-hidden', 'true');
        document.body.appendChild(overlay);

        let scrollPosition = 0;

        function openMenu() {
            navToggle.classList.add('active');
            navMenu.classList.add('active');
            overlay.classList.add('active');
            navToggle.setAttribute('aria-expanded', 'true');

            // Body scroll lock (position:fixed pattern - the only approach
            // that reliably blocks background scroll/rubber-banding on iOS Safari)
            scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            document.body.style.top = `-${scrollPosition}px`;
            document.body.classList.add('nav-open');
        }

        function closeMenu() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');

            document.body.classList.remove('nav-open');
            document.body.style.top = '';
            window.scrollTo(0, scrollPosition);
        }

        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = navMenu.classList.contains('active');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close when a nav link is clicked (page links and in-page anchors alike)
        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });

        // Close when clicking/tapping the overlay (outside the menu panel)
        overlay.addEventListener('click', closeMenu);

        // Close on outside click/tap anywhere that isn't the menu or toggle
        document.addEventListener('click', function(e) {
            if (!navMenu.classList.contains('active')) return;
            if (navMenu.contains(e.target) || navToggle.contains(e.target)) return;
            closeMenu();
        });

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
                navToggle.focus();
            }
        });

        // Auto-close if the viewport is resized past the desktop breakpoint
        // while the menu happens to be open (CSS handles show/hide of the
        // toggle itself - this only guards against a stale open state).
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        // ----------------------------------------
        // Active page highlighting
        // ----------------------------------------
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        navMenu.querySelectorAll('a').forEach(function(link) {
            const linkPath = link.getAttribute('href').split('/').pop();
            if (linkPath === currentPath) {
                link.classList.add('active');
            }
        });
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
    // CONTACT FORM (mailto submission - no backend on this static site)
    // ============================================
    function initContactForm() {
        const form = document.getElementById('contactForm');
        const status = document.getElementById('contactFormStatus');

        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            const name = form.querySelector('#contact-name').value.trim();
            const email = form.querySelector('#contact-email').value.trim();
            const subject = form.querySelector('#contact-subject').value;
            const message = form.querySelector('#contact-message').value.trim();

            const mailSubject = `${subject} - ${name}`;
            const mailBody = `الاسم: ${name}\nالبريد الإلكتروني: ${email}\n\nالرسالة:\n${message}`;

            const mailtoLink = `mailto:info@cyberpath.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

            if (status) {
                status.style.display = 'block';
                status.style.color = '#10B981';
                status.textContent = 'جاري فتح برنامج البريد الإلكتروني...';
            }

            window.location.href = mailtoLink;
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

// ============================================
// CUSTOM CURSOR
// ============================================
(function() {
    'use strict';

    // إنشاء عنصر المؤشر
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    // إنشاء دائرة التتبع
    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursorDot);

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;

    // تحديث موقع المؤشر
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // حركة سلسة للدائرة الصغيرة
    function animateDot() {
        dotX += (mouseX - dotX) * 0.15;
        dotY += (mouseY - dotY) * 0.15;

        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';

        requestAnimationFrame(animateDot);
    }
    animateDot();

    // تكبير المؤشر عند المرور فوق الروابط والأزرار
    const interactiveElements = document.querySelectorAll('a, button, .btn, .filter-btn, .service-card, .portfolio-item, .case-card, .nav-menu a, .logo-link');

    interactiveElements.forEach(function(el) {
        el.addEventListener('mouseenter', function() {
            cursor.classList.add('cursor-hover');
            cursorDot.classList.add('cursor-dot-hover');
        });

        el.addEventListener('mouseleave', function() {
            cursor.classList.remove('cursor-hover');
            cursorDot.classList.remove('cursor-dot-hover');
        });
    });

    // إخفاء المؤشر عند مغادرة الصفحة
    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
        cursorDot.style.opacity = '0';
    });

    document.addEventListener('mouseenter', function() {
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
    });

})();
