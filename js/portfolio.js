/**
 * ============================================
 * CYBERPATH DIGITAL - PORTFOLIO.JS
 * إدارة معرض الأعمال مع SVG Placeholders احترافية
 * ============================================
 */

(function() {
    'use strict';

    // ============================================
    // SVG PLACEHOLDER GENERATOR (محسّن للأمان)
    // ============================================
    function generateSVGPlaceholder(title, category, icon) {
        // ألوان كل تصنيف
        const colors = {
            'branding': '6C3CE1',
            'logos': 'EC4899',
            'advertising': 'F59E0B',
            'social': '10B981',
            'brochures': '3B82F6',
            'packaging': '8B5CF6'
        };
        
        const categoryLabels = {
            'branding': 'الهوية البصرية',
            'logos': 'الشعارات',
            'advertising': 'الإعلانات',
            'social': 'وسائل التواصل',
            'brochures': 'البروشورات',
            'packaging': 'التغليف'
        };
        
        const color = colors[category] || '6C3CE1';
        const categoryLabel = categoryLabels[category] || category;
        
        // SVG آمن باستخدام encodeURIComponent
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
            <defs>
                <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#${color};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#${color}66;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#${color};stop-opacity:0.3" />
                    <stop offset="100%" style="stop-color:#${color}22;stop-opacity:0.1" />
                </linearGradient>
            </defs>
            <rect width="600" height="400" fill="#1A1A2E" />
            <circle cx="80" cy="80" r="150" fill="url(#g2)" />
            <circle cx="520" cy="320" r="120" fill="url(#g2)" />
            <circle cx="300" cy="160" r="85" fill="url(#g1)" opacity="0.12" />
            <g transform="translate(300, 150)">
                <rect x="-50" y="-50" width="100" height="100" rx="20" fill="url(#g1)" opacity="0.9" />
                <text x="0" y="8" font-family="Arial, sans-serif" font-size="44" text-anchor="middle" dominant-baseline="middle">${icon || '🎨'}</text>
            </g>
            <text x="300" y="250" font-family="Cairo, Arial, sans-serif" font-size="22" font-weight="700" fill="#FFFFFF" text-anchor="middle">${title}</text>
            <text x="300" y="282" font-family="Cairo, Arial, sans-serif" font-size="14" fill="rgba(255,255,255,0.5)" text-anchor="middle">${categoryLabel}</text>
            <line x1="180" y1="305" x2="420" y2="305" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
            <rect x="235" y="320" width="130" height="30" rx="15" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
            <text x="300" y="340" font-family="Cairo, Arial, sans-serif" font-size="12" font-weight="600" fill="#${color}" text-anchor="middle">${categoryLabel}</text>
            <text x="30" y="385" font-family="Arial, sans-serif" font-size="11" fill="rgba(255,255,255,0.08)" text-anchor="start">© CyberPath Digital</text>
        </svg>`;
        
        // تحويل SVG إلى Data URI آمن
        return 'data:image/svg+xml,' + encodeURIComponent(svg);
    }

    // ============================================
    // PORTFOLIO DATA - جميع الصور بصيغة JPG
    // ============================================
    const portfolioData = [
        // ===== BRANDING (1-4) =====
        {
            id: 1,
            title: 'هوية شركة تقنية',
            category: 'branding',
            description: 'هوية بصرية متكاملة لشركة تقنية ناشئة',
            icon: '🏢',
            image: 'assets/images/portfolio/branding-1.jpg'
        },
        {
            id: 2,
            title: 'هوية علامة تجارية للعود والعطور',
            category: 'branding',
            description: 'هوية بصرية تعكس الأصالة والفخامة',
            icon: '🏢',
            image: 'assets/images/portfolio/branding-2.jpg'
        },
        {
            id: 3,
            title: 'هوية وكالة سفر وسياحة',
            category: 'branding',
            description: 'هوية بصرية تعكس الثقة والتميز في قطاع السياحة',
            icon: '🏢',
            image: 'assets/images/portfolio/branding-3.jpg'
        },
        {
            id: 4,
            title: 'هوية متجر إلكتروني للزهور والهدايا',
            category: 'branding',
            description: 'هوية بصرية جذابة تعكس الطبيعة والجمال',
            icon: '🏢',
            image: 'assets/images/portfolio/branding-4.jpg'
        },

        // ===== LOGOS (5-8) =====
        {
            id: 5,
            title: 'شعار علامة تجارية للعود والعطور',
            category: 'logos',
            description: 'شعار يعكس الفخامة والأصالة في عالم العطور',
            icon: '⭐',
            image: 'assets/images/portfolio/logo-1.jpg'
        },
        {
            id: 6,
            title: 'شعار شركة تقنية',
            category: 'logos',
            description: 'شعار يعبر عن الابتكار والريادة في عالم التقنية',
            icon: '⭐',
            image: 'assets/images/portfolio/logo-2.jpg'
        },
        {
            id: 7,
            title: 'شعار نادي رياضي',
            category: 'logos',
            description: 'شعار يعكس القوة والتميز في عالم الرياضة',
            icon: '⭐',
            image: 'assets/images/portfolio/logo-3.jpg'
        },
        {
            id: 8,
            title: 'شعار منظمة غير ربحية',
            category: 'logos',
            description: 'شعار يعبر عن العطاء والأمل في المجتمع',
            icon: '⭐',
            image: 'assets/images/portfolio/logo-4.jpg'
        },

        // ===== ADVERTISING (9-12) =====
        {
            id: 9,
            title: 'حملة إعلانية لمنتجات الذكاء الاصطناعي',
            category: 'advertising',
            description: 'حملة إعلانية رقمية متكاملة لمنتج تقني جديد',
            icon: '📢',
            image: 'assets/images/portfolio/advertising-1.jpg'
        },
        {
            id: 10,
            title: 'إعلان تلفزيوني لوكالة سفر وسياحة',
            category: 'advertising',
            description: 'إعلان تلفزيوني يعكس روحانية الحج والعمرة',
            icon: '📢',
            image: 'assets/images/portfolio/advertising-2.jpg'
        },
        {
            id: 11,
            title: 'إعلان مطبوع لعلامة تجارية للعطور',
            category: 'advertising',
            description: 'إعلان مطبوع فاخر يستهدف شريحة راقية من العملاء',
            icon: '📢',
            image: 'assets/images/portfolio/advertising-3.jpg'
        },
        {
            id: 12,
            title: 'لوحة إعلانية لمتجر هدايا',
            category: 'advertising',
            description: 'لوحة إعلانية خارجية في موقع استراتيجي',
            icon: '📢',
            image: 'assets/images/portfolio/advertising-4.jpg'
        },

        // ===== SOCIAL MEDIA (13-16) =====
        {
            id: 13,
            title: 'حملة إطلاق علامة تجارية للعطور',
            category: 'social',
            description: 'حملة إطلاق متكاملة على منصة إنستغرام',
            icon: '📸',
            image: 'assets/images/portfolio/social-1.jpg'
        },
        {
            id: 14,
            title: 'محتوى إنستغرام لمتجر الزهور والهدايا',
            category: 'social',
            description: 'محتوى بصري جذاب يعكس جمال الزهور والهدايا',
            icon: '📸',
            image: 'assets/images/portfolio/social-2.jpg'
        },
        {
            id: 15,
            title: 'محتوى تفاعلي لنادي رياضي',
            category: 'social',
            description: 'محتوى تفاعلي وتحديات رياضية لزيادة التفاعل',
            icon: '📸',
            image: 'assets/images/portfolio/social-3.jpg'
        },
        {
            id: 16,
            title: 'محتوى تويتر لشركة تقنية',
            category: 'social',
            description: 'محتوى بصري يعكس الابتكار والتقنية',
            icon: '📸',
            image: 'assets/images/portfolio/social-4.jpg'
        },

        // ===== BROCHURES (17-20) =====
        {
            id: 17,
            title: 'بروشور شركة تقنية',
            category: 'brochures',
            description: 'بروشور احترافي يعرض الحلول والخدمات التقنية',
            icon: '📄',
            image: 'assets/images/portfolio/brochure-1.jpg'
        },
        {
            id: 18,
            title: 'بروشور سياحي لوكالة سفر',
            category: 'brochures',
            description: 'بروشور سياحي غني بالصور والتفاصيل الجذابة',
            icon: '📄',
            image: 'assets/images/portfolio/brochure-2.jpg'
        },
        {
            id: 19,
            title: 'بروشور تسويقي لعلامة تجارية للعطور',
            category: 'brochures',
            description: 'بروشور تسويقي فاخر لمجموعة عطور جديدة',
            icon: '📄',
            image: 'assets/images/portfolio/brochure-3.jpg'
        },
        {
            id: 20,
            title: 'بروشور تسويقي للهدايا والمناسبات',
            category: 'brochures',
            description: 'بروشور تسويقي للهدايا في المناسبات المختلفة',
            icon: '📄',
            image: 'assets/images/portfolio/brochure-4.jpg'
        },

        // ===== PACKAGING (21-24) =====
        {
            id: 21,
            title: 'تغليف منتجات عطور فاخرة',
            category: 'packaging',
            description: 'تغليف فاخر يعكس جودة العطور ورفاهيتها',
            icon: '📦',
            image: 'assets/images/portfolio/packaging-1.jpg'
        },
        {
            id: 22,
            title: 'تغليف هدايا فاخر',
            category: 'packaging',
            description: 'تغليف مستوحى من الطبيعة يعكس جمال الهدايا',
            icon: '📦',
            image: 'assets/images/portfolio/packaging-2.jpg'
        },
        {
            id: 23,
            title: 'تغليف مستحضرات تجميل طبيعية',
            category: 'packaging',
            description: 'تغليف أنيق يعكس الطبيعة والنقاء',
            icon: '📦',
            image: 'assets/images/portfolio/packaging-3.jpg'
        },
        {
            id: 24,
            title: 'تغليف منتجات غذائية عضوية',
            category: 'packaging',
            description: 'تغليف صديق للبيئة يعكس الجودة والطبيعة',
            icon: '📦',
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
    // GET IMAGE SOURCE (with fallback to SVG placeholder)
    // ============================================
    function getImageSource(item) {
        // توليد SVG placeholder كاحتياطي
        const placeholder = generateSVGPlaceholder(item.title, item.category, item.icon || '🎨');
        
        // إذا كان هناك مسار صورة، استخدمه، وإلا استخدم placeholder
        if (item.image && item.image !== '') {
            return item.image;
        }
        return placeholder;
    }

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
            
            // الحصول على مصدر الصورة مع fallback
            const imgSrc = getImageSource(item);
            const placeholder = generateSVGPlaceholder(item.title, item.category, item.icon || '🎨');
            
            div.innerHTML = `
                <img src="${imgSrc}" alt="${item.title}" loading="lazy" 
                     onerror="this.onerror=null; this.src='${placeholder}'" />
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
        
        const imgSrc = getImageSource(item);
        const placeholder = generateSVGPlaceholder(item.title, item.category, item.icon || '🎨');
        
        lightboxImg.src = imgSrc;
        lightboxImg.alt = item.title;
        lightboxImg.onerror = function() {
            this.onerror = null;
            this.src = placeholder;
        };
        
        lightboxCaption.innerHTML = `
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <span class="category">${getCategoryLabel(item.category)}</span>
        `;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
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
            btn.setAttribute('aria-selected', 'false');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
            }
        });
        
        renderPortfolio(filter);
    }

    // ============================================
    // EVENT LISTENERS
    // ============================================
    
    filterButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            setFilter(filter);
        });
    });
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', function(e) {
            e.stopPropagation();
            navigateLightbox(-1);
        });
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', function(e) {
            e.stopPropagation();
            navigateLightbox(1);
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                navigateLightbox(-1);
                break;
            case 'ArrowRight':
                e.preventDefault();
                navigateLightbox(1);
                break;
        }
    });

    // ============================================
    // INIT
    // ============================================
    renderPortfolio('all');

    // ============================================
    // EXPOSE FUNCTIONS
    // ============================================
    window.Portfolio = {
        render: renderPortfolio,
        setFilter: setFilter,
        openLightbox: openLightbox,
        closeLightbox: closeLightbox,
        generateSVGPlaceholder: generateSVGPlaceholder
    };

})();
