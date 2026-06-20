/**
 * ============================================
 * CYBERPATH DIGITAL - PORTFOLIO.JS
 * إدارة معرض الأعمال
 * ============================================
 */

(function() {
    'use strict';

    // ============================================
    // PORTFOLIO DATA
    // ============================================
    const portfolioData = [
        {
            id: 1,
            title: 'هوية شركة تقنية',
            category: 'branding',
            description: 'هوية بصرية متكاملة لشركة تقنية ناشئة',
            image: 'assets/images/portfolio/branding-1.jpg'
        },
        {
            id: 2,
            title: 'شعار علامة تجارية',
            category: 'logos',
            description: 'شعار مميز لعلامة تجارية في مجال الأزياء',
            image: 'assets/images/portfolio/logo-1.jpg'
        },
        {
            id: 3,
            title: 'حملة إعلانية رقمية',
            category: 'advertising',
            description: 'إعلانات رقمية مبتكرة لمنتج جديد',
            image: 'assets/images/portfolio/advertising-1.jpg'
        },
        {
            id: 4,
            title: 'تصميم وسائل التواصل',
            category: 'social',
            description: 'محتوى بصري لمنصات التواصل الاجتماعي',
            image: 'assets/images/portfolio/social-1.jpg'
        },
        {
            id: 5,
            title: 'بروشور شركة عقارية',
            category: 'brochures',
            description: 'بروشور احترافي لشركة عقارية',
            image: 'assets/images/portfolio/brochure-1.jpg'
        },
        {
            id: 6,
            title: 'تغليف منتج طبيعي',
            category: 'packaging',
            description: 'تغليف مبتكر لمنتجات طبيعية',
            image: 'assets/images/portfolio/packaging-1.jpg'
        },
        {
            id: 7,
            title: 'هوية مطعم فاخر',
            category: 'branding',
            description: 'هوية بصرية متكاملة لمطعم فاخر',
            image: 'assets/images/portfolio/branding-2.jpg'
        },
        {
            id: 8,
            title: 'شعار شركة استشارية',
            category: 'logos',
            description: 'شعار احترافي لشركة استشارية',
            image: 'assets/images/portfolio/logo-2.jpg'
        },
        {
            id: 9,
            title: 'إعلان تلفزيوني',
            category: 'advertising',
            description: 'إعلان تلفزيوني لعلامة تجارية مشهورة',
            image: 'assets/images/portfolio/advertising-2.jpg'
        },
        {
            id: 10,
            title: 'تصميم انستغرام',
            category: 'social',
            description: 'تصاميم جذابة لحساب انستغرام',
            image: 'assets/images/portfolio/social-2.jpg'
        },
        {
            id: 11,
            title: 'بروشور سياحي',
            category: 'brochures',
            description: 'بروشور سياحي لوجهة عالمية',
            image: 'assets/images/portfolio/brochure-2.jpg'
        },
        {
            id: 12,
            title: 'تغليف هدايا',
            category: 'packaging',
            description: 'تغليف فاخر للهدايا',
            image: 'assets/images/portfolio/packaging-2.jpg'
        },
        {
            id: 13,
            title: 'هوية علامة تجارية',
            category: 'branding',
            description: 'هوية بصرية متكاملة لعلامة تجارية',
            image: 'assets/images/portfolio/branding-3.jpg'
        },
        {
            id: 14,
            title: 'شعار نادي رياضي',
            category: 'logos',
            description: 'شعار مبتكر لنادي رياضي',
            image: 'assets/images/portfolio/logo-3.jpg'
        },
        {
            id: 15,
            title: 'إعلان مطبوع',
            category: 'advertising',
            description: 'إعلان مطبوع في مجلة',
            image: 'assets/images/portfolio/advertising-3.jpg'
        },
        {
            id: 16,
            title: 'تصميم فيسبوك',
            category: 'social',
            description: 'تصاميم مميزة لصفحة فيسبوك',
            image: 'assets/images/portfolio/social-3.jpg'
        },
        {
            id: 17,
            title: 'بروشور منتج',
            category: 'brochures',
            description: 'بروشور تسويقي لمنتج جديد',
            image: 'assets/images/portfolio/brochure-3.jpg'
        },
        {
            id: 18,
            title: 'تغليف مستحضرات تجميل',
            category: 'packaging',
            description: 'تغليف أنيق لمستحضرات تجميل',
            image: 'assets/images/portfolio/packaging-3.jpg'
        },
        {
            id: 19,
            title: 'هوية متجر إلكتروني',
            category: 'branding',
            description: 'هوية بصرية لمتجر إلكتروني',
            image: 'assets/images/portfolio/branding-4.jpg'
        },
        {
            id: 20,
            title: 'شعار منظمة غير ربحية',
            category: 'logos',
            description: 'شعار معبر لمنظمة غير ربحية',
            image: 'assets/images/portfolio/logo-4.jpg'
        },
        {
            id: 21,
            title: 'إعلان خارجي',
            category: 'advertising',
            description: 'لوحة إعلانية خارجية',
            image: 'assets/images/portfolio/advertising-4.jpg'
        },
        {
            id: 22,
            title: 'تصميم تويتر',
            category: 'social',
            description: 'تصاميم جذابة لتغريدات تويتر',
            image: 'assets/images/portfolio/social-4.jpg'
        },
        {
            id: 23,
            title: 'بروشور شركة تقنية',
            category: 'brochures',
            description: 'بروشور لشركة تقنية',
            image: 'assets/images/portfolio/brochure-4.jpg'
        },
        {
            id: 24,
            title: 'تغليف طعام',
            category: 'packaging',
            description: 'تغليف مبتكر لمنتجات غذائية',
            image: 'assets/images/portfolio/packaging-4.jpg'
        }
    ];

    // ============================================
    // DOM REFERENCES
    // ============================================
    const grid = document.getElementById('portfolioGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentFilter = 'all';
    let currentItems = portfolioData;
    let currentIndex = 0;

    // ============================================
    // RENDER PORTFOLIO
    // ============================================
    function renderPortfolio(filter = 'all') {
        if (!grid) return;
        
        const filtered = filter === 'all' 
            ? portfolioData 
            : portfolioData.filter(item => item.category === filter);
        
        currentItems = filtered;
        
        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="empty-portfolio">
                    <i class="fas fa-search"></i>
                    <p>لا توجد أعمال في هذا التصنيف</p>
                </div>
            `;
            return;
        }
        
        grid.innerHTML = '';
        
        filtered.forEach(function(item, index) {
            const div = document.createElement('div');
            div.className = 'portfolio-item';
            div.setAttribute('data-category', item.category);
            div.setAttribute('data-index', index);
            
            // Use placeholder image if real image not available
            const imgSrc = item.image || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%231A1A2E'/%3E%3Ctext x='50%25' y='50%25' font-family='Cairo' font-size='18' fill='%239CA3AF' text-anchor='middle' dy='.3em'%3E${item.title}%3C/text%3E%3C/svg%3E`;
            
            div.innerHTML = `
                <img src="${imgSrc}" alt="${item.title}" loading="lazy" />
                <div class="portfolio-info">
                    <span class="category">${getCategoryLabel(item.category)}</span>
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    <button class="btn btn-outline view-project" data-index="${index}">
                        <i class="fas fa-eye"></i> عرض المشروع
                    </button>
                </div>
            `;
            
            grid.appendChild(div);
        });
        
        // Attach click events to view buttons
        grid.querySelectorAll('.view-project').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const index = parseInt(this.dataset.index);
                openLightbox(index);
            });
        });
        
        // Attach click events to items
        grid.querySelectorAll('.portfolio-item').forEach(function(item) {
            item.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                if (!isNaN(index)) {
                    openLightbox(index);
                }
            });
        });
    }

    // ============================================
    // GET CATEGORY LABEL
    // ============================================
    function getCategoryLabel(category) {
        const labels = {
            'branding': 'الهوية البصرية',
            'logos': 'الشعارات',
            'advertising': 'الإعلانات',
            'social': 'وسائل التواصل',
            'brochures': 'البروشورات',
            'packaging': 'التغليف'
        };
        return labels[category] || category;
    }

    // ============================================
    // LIGHTBOX FUNCTIONS
    // ============================================
    function openLightbox(index) {
        if (!lightbox || !lightboxImg || !lightboxCaption) return;
        
        currentIndex = index;
        const item = currentItems[index];
        
        if (!item) return;
        
        const imgSrc = item.image || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%231A1A2E'/%3E%3Ctext x='50%25' y='50%25' font-family='Cairo' font-size='24' fill='%239CA3AF' text-anchor='middle' dy='.3em'%3E${item.title}%3C/text%3E%3C/svg%3E`;
        
        lightboxImg.src = imgSrc;
        lightboxImg.alt = item.title;
        lightboxCaption.innerHTML = `
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <span class="category">${getCategoryLabel(item.category)}</span>
        `;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Update navigation buttons
        updateLightboxNav();
    }

    function closeLightbox() {
        if (!lightbox) return;
        
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function navigateLightbox(direction) {
        if (!currentItems.length) return;
        
        currentIndex = (currentIndex + direction + currentItems.length) % currentItems.length;
        openLightbox(currentIndex);
    }

    function updateLightboxNav() {
        if (!lightboxPrev || !lightboxNext) return;
        
        lightboxPrev.style.display = currentItems.length > 1 ? 'flex' : 'none';
        lightboxNext.style.display = currentItems.length > 1 ? 'flex' : 'none';
    }

    // ============================================
    // FILTER FUNCTIONS
    // ============================================
    function setFilter(filter) {
        currentFilter = filter;
        
        filterButtons.forEach(function(btn) {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false
