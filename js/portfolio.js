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
        {
            id: 1,
            title: 'هوية شركة تقنية ناشئة',
            category: 'branding',
            description: 'شعار بمفهوم بصري يجمع بين النمو والتقنية، ضمن نظام هوية متكامل لشركة ناشئة في القطاع الرقمي',
            icon: '🏢',
            image: 'assets/images/portfolio/branding-1.jpg'
        },
        {
            id: 2,
            title: 'شعار لشركة تصميم وطباعة',
            category: 'logos',
            description: 'شعار بلمسة فنية تعبيرية (بصمة يد ملوّنة) لشركة متخصصة في التصميم والطباعة',
            icon: '⭐',
            image: 'assets/images/portfolio/logo-1.jpg'
        },
        {
            id: 3,
            title: 'حملة إعلانية لوكالة سفر وسياحة',
            category: 'advertising',
            description: 'تصميم إعلان لعرض رحلات سياحية وباقات شهر عسل، مع عرض شعارات شركات الطيران الشريكة',
            icon: '📢',
            image: 'assets/images/portfolio/advertising-1.jpg'
        },
        {
            id: 4,
            title: 'تصميم ترويجي لشركة أثاث وديكور',
            category: 'social',
            description: 'تصميم بصري يعرض منتجات الأثاث والديكور المنزلي بأسلوب عصري جذاب',
            icon: '📸',
            image: 'assets/images/portfolio/social-1.jpg'
        },
        {
            id: 5,
            title: 'بروشور معرض سيارات وآليات ثقيلة',
            category: 'brochures',
            description: 'تصميم بروشور تعريفي لمعرض متخصص في بيع السيارات والمعدات الثقيلة',
            icon: '📄',
            image: 'assets/images/portfolio/brochure-1.jpg'
        },
        {
            id: 6,
            title: 'تصميم ملصق تعبئة لمنتج غذائي',
            category: 'packaging',
            description: 'تصميم ملصق منتج غذائي (ملح مزوّد باليود) بمعايير تعبئة واضحة وثنائية اللغة',
            icon: '📦',
            image: 'assets/images/portfolio/packaging-1.jpg'
        },
        {
            id: 7,
            title: 'هوية منتج غذائي',
            category: 'branding',
            description: 'تصميم ملصق وهوية بصرية لمنتج زبدة الفول السوداني بطابع تسويقي جذاب',
            icon: '🍽️',
            image: 'assets/images/portfolio/branding-2.jpg'
        },
        {
            id: 8,
            title: 'شعار علامة عطور فاخرة',
            category: 'logos',
            description: 'شعار بخط عربي كلاسيكي فاخر لعلامة تجارية متخصصة في العطور',
            icon: '💼',
            image: 'assets/images/portfolio/logo-2.jpg'
        },
        {
            id: 9,
            title: 'إعلان حجز رحلات بحرية',
            category: 'advertising',
            description: 'تصميم إعلاني لخدمة حجز تذاكر بواخر سياحية لوكالة سفر وسياحة',
            icon: '📺',
            image: 'assets/images/portfolio/advertising-2.jpg'
        },
        {
            id: 10,
            title: 'منشور سوشيال ميديا لعرض سياحي',
            category: 'social',
            description: 'منشور ترويجي لعرض رحلة سياحية لوكالة سفر وسياحة',
            icon: '📱',
            image: 'assets/images/portfolio/social-2.jpg'
        },
        {
            id: 11,
            title: 'بروشور تعريفي لوكالة سفر وسياحة',
            category: 'brochures',
            description: 'غلاف بروشور تعريفي بمفهوم بصري عالمي (معالم سياحية وحقيبة سفر) لوكالة سياحة',
            icon: '✈️',
            image: 'assets/images/portfolio/brochure-2.jpg'
        },
        {
            id: 12,
            title: 'تغليف هدايا فاخر',
            category: 'packaging',
            description: 'تغليف هدايا بلمسة أنيقة تجمع بين الألوان الداكنة والتفاصيل الطبيعية',
            icon: '🎁',
            image: 'assets/images/portfolio/packaging-2.jpg'
        },
        {
            id: 13,
            title: 'هوية شركة معدات زراعية',
            category: 'branding',
            description: 'تصميم مطبوعة تعريفية لشركة جرارات ومعدات زراعية بهوية وطنية واضحة',
            icon: '✨',
            image: 'assets/images/portfolio/branding-3.jpg'
        },
        {
            id: 14,
            title: 'شعار نادي رياضي',
            category: 'logos',
            description: 'شعار دائري بعناصر نخيل ودرع رياضي لنادي كرة قدم',
            icon: '⚽',
            image: 'assets/images/portfolio/logo-3.jpg'
        },
        {
            id: 15,
            title: 'إعلان لتطبيق مصرفي',
            category: 'advertising',
            description: 'تصميم إعلاني للترويج لتطبيق جوال تابع لمصرف زراعي تجاري',
            icon: '📰',
            image: 'assets/images/portfolio/advertising-3.jpg'
        },
        {
            id: 16,
            title: 'منشور خدمات صيانة كهرباء',
            category: 'social',
            description: 'منشور ترويجي لخدمات صيانة كهربائية منزلية بعمالة مدرّبة',
            icon: '👍',
            image: 'assets/images/portfolio/social-3.jpg'
        },
        {
            id: 17,
            title: 'تصميم ترويجي لعلامة قهوة',
            category: 'brochures',
            description: 'تصميم ترويجي لمنتج بن فاخر بنسبة نقاء عالية، بأسلوب بصري دافئ',
            icon: '📋',
            image: 'assets/images/portfolio/brochure-3.jpg'
        },
        {
            id: 18,
            title: 'كيس تسوق لعلامة عطور',
            category: 'packaging',
            description: 'تصميم كيس تسوّق فاخر بخامة وطباعة ذهبية لعلامة عطور راقية',
            icon: '💄',
            image: 'assets/images/portfolio/packaging-3.jpg'
        },
        {
            id: 19,
            title: 'هوية فاخرة لعلامة عطور',
            category: 'branding',
            description: 'تطبيق شعار العلامة على قطعة معدنية ذهبية بلمسة Premium',
            icon: '🛒',
            image: 'assets/images/portfolio/branding-4.jpg'
        },
        {
            id: 20,
            title: 'تصميم شعار مهرجان بطابع تراثي',
            category: 'logos',
            description: ' تصميم شعار مهرجان محلي تراثي — مهرجان دنقلا الاول للسياحة ',
            icon: '🤝',
            image: 'assets/images/portfolio/logo-4.jpg'
        },
        {
            id: 21,
            title: 'إعلان عرض سياحي لوجهة شاطئية',
            category: 'advertising',
            description: 'إعلان ترويجي لرحلات إلى وجهة شاطئية ضمن باقات شهر العسل لوكالة سفر وسياحة',
            icon: '🏙️',
            image: 'assets/images/portfolio/advertising-4.jpg'
        },
        {
            id: 22,
            title: 'منشور خدمات صيانة تكييف',
            category: 'social',
            description: 'منشور ترويجي لخدمات صيانة أجهزة التكييف بعمالة مدرّبة',
            icon: '🐦',
            image: 'assets/images/portfolio/social-4.jpg'
        },
        {
            id: 23,
            title: 'بروشور شركة طاقة شمسية',
            category: 'brochures',
            description: 'تصميم بروشور تعريفي لشركة متخصصة في أنظمة الطاقة الشمسية ومعداتها',
            icon: '💻',
            image: 'assets/images/portfolio/brochure-4.jpg'
        },
        {
            id: 24,
            title: 'ملصق منتج غذائي (طحينية)',
            category: 'packaging',
            description: 'ملصق تعبئة لمنتج طحينية بمعلومات تصنيع وتغليف واضحة',
            icon: '🍕',
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
// ============================================
// RENDER PORTFOLIO - نسخة محسّنة
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
        
        // إضافة كلاس خاص للعناصر المميزة (اختياري)
        if (index % 3 === 0) {
            div.classList.add('featured');
        }
        
        div.setAttribute('data-category', item.category);
        div.setAttribute('data-index', index);
        
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
    
    // أحداث الأزرار
    grid.querySelectorAll('.view-project').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const index = parseInt(this.dataset.index);
            openLightbox(index);
        });
    });
    
    grid.querySelectorAll('.portfolio-item').forEach(function(item) {
        item.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            if (!isNaN(index)) openLightbox(index);
        });
    });
}
