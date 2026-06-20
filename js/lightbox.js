/**
 * ============================================
 * CYBERPATH DIGITAL - LIGHTBOX.JS
 * نظام معاينة الصور المتقدم
 * ============================================
 */

(function() {
    'use strict';

    // ============================================
    // LIGHTBOX CLASS
    // ============================================
    class Lightbox {
        constructor(options = {}) {
            this.options = {
                overlay: options.overlay || '#lightbox',
                image: options.image || '#lightboxImg',
                caption: options.caption || '#lightboxCaption',
                closeBtn: options.closeBtn || '#lightboxClose',
                prevBtn: options.prevBtn || '#lightboxPrev',
                nextBtn: options.nextBtn || '#lightboxNext',
                ...options
            };
            
            this.images = [];
            this.currentIndex = 0;
            this.isOpen = false;
            
            this.init();
        }
        
        init() {
            this.overlay = document.querySelector(this.options.overlay);
            this.image = document.querySelector(this.options.image);
            this.caption = document.querySelector(this.options.caption);
            this.closeBtn = document.querySelector(this.options.closeBtn);
            this.prevBtn = document.querySelector(this.options.prevBtn);
            this.nextBtn = document.querySelector(this.options.nextBtn);
            
            if (!this.overlay) return;
            
            this.bindEvents();
            this.bindKeyboard();
        }
        
        bindEvents() {
            // Close button
            if (this.closeBtn) {
                this.closeBtn.addEventListener('click', () => this.close());
            }
            
            // Click on overlay
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) {
                    this.close();
                }
            });
            
            // Previous button
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.prev();
                });
            }
            
            // Next button
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.next();
                });
            }
        }
        
        bindKeyboard() {
            document.addEventListener('keydown', (e) => {
                if (!this.isOpen) return;
                
                switch(e.key) {
                    case 'Escape':
                        this.close();
                        break;
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.prev();
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.next();
                        break;
                }
            });
        }
        
        open(index = 0) {
            if (!this.images.length) return;
            
            this.currentIndex = index;
            this.isOpen = true;
            
            this.updateImage();
            this.updateNavigation();
            
            this.overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        close() {
            this.isOpen = false;
            this.overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        next() {
            if (this.images.length <= 1) return;
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            this.updateImage();
            this.updateNavigation();
        }
        
        prev() {
            if (this.images.length <= 1) return;
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
            this.updateImage();
            this.updateNavigation();
        }
        
        updateImage() {
            const item = this.images[this.currentIndex];
            if (!item) return;
            
            this.image.src = item.src || item.image;
            this.image.alt = item.title || item.alt || '';
            
            if (this.caption) {
                this.caption.innerHTML = `
                    <h4>${item.title || ''}</h4>
                    <p>${item.description || ''}</p>
                    ${item.category ? `<span class="category">${item.category}</span>` : ''}
                `;
            }
        }
        
        updateNavigation() {
            if (this.prevBtn) {
                this.prevBtn.style.display = this.images.length > 1 ? 'flex' : 'none';
            }
            if (this.nextBtn) {
                this.nextBtn.style.display = this.images.length > 1 ? 'flex' : 'none';
            }
        }
        
        setImages(images) {
            this.images = images;
            this.currentIndex = 0;
        }
        
        addImage(image) {
            this.images.push(image);
        }
        
        clearImages() {
            this.images = [];
        }
    }

    // ============================================
    // INIT
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        const lightbox = new Lightbox();
        
        // Expose for use in other scripts
        window.Lightbox = lightbox;
    });

})();
