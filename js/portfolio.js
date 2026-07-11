/**
 * ============================================
 * CYBERPATH DIGITAL - PORTFOLIO.JS
 * إدارة معرض الأعمال مع بيانات العملاء الحقيقية
 * ============================================
 */

(function() {
    'use strict';

    // ============================================
    // SVG PLACEHOLDER GENERATOR
    // ============================================
    function generateSVGPlaceholder(title, category, icon) {
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
        
        return 'data:image/svg+xml,' + encodeURIComponent(svg);
    }

    // ============================================
    // PORTFOLIO DATA - مع أسماء العملاء الحقيقية
    // ============================================
    const portfolioData = [
        // ===== BRANDING (1-4) =====
        {
            id: 1,
            title: 'هوية شركة جياد للتقنية',
            category: 'branding',
            description: 'هوية بصرية متكاملة لشركة تقنية رائدة في الذكاء الاصطناعي',
            icon: '🏢',
            image: 'assets/images/portfolio/branding-1.jpg',
            client: 'شركة جياد للتقنية',
            sector: 'التقنية',
            year: '2024',
            challenge: 'شركة جياد بحاجة لهوية تعكس الريادة في الذكاء الاصطناعي والثقة التقنية.',
            result: 'جذب استثمارات جديدة وزيادة الوعي بالعلامة بنسبة 200%.',
            testimonial: '"الهوية غيرت شكل الشركة بالكامل وأعطتنا ثقة جديدة في السوق."'
        },
        {
            id: 2,
            title: 'هوية عبق الياسمين للعود',
            category: 'branding',
            description: 'هوية بصرية لعلامة تجارية متخصصة في العود والعطور العربية',
            icon: '🏢',
            image: 'assets/images/portfolio/branding-2.jpg',
            client: 'عبق الياسمين للعود والعطور',
            sector: 'العطور والرفاهية',
            year: '2024',
            challenge: 'علامة جديدة بحاجة لهوية تعكس الأصالة والفخامة في عالم العطور العربية.',
            result: 'دخول السوق بقوة وحصة سوقية 25% في السنة الأولى.',
            testimonial: '"الهوية تعكس روح علامتنا — عمل فني متكامل."'
        },
        {
            id: 3,
            title: 'هوية وكالة العبير للسفر',
            category: 'branding',
            description: 'هوية بصرية لوكالة سفر وسياحة رائدة',
            icon: '🏢',
            image: 'assets/images/portfolio/branding-3.jpg',
            client: 'وكالة العبير للسفر والسياحة',
            sector: 'السياحة والسفر',
            year: '2023',
            challenge: 'وكالة سفر بحاجة لهوية تعكس الثقة والتميز في قطاع السياحة.',
            result: 'زيادة الحجوزات بنسبة 50% وارتفاع الوعي بالعلامة.',
            testimonial: '"الهوية جعلت عملاءنا يشعرون بالثقة في خدماتنا."'
        },
        {
            id: 4,
            title: 'هوية متجر زهور الريف',
            category: 'branding',
            description: 'هوية بصرية لمتجر إلكتروني متخصص في الزهور والهدايا',
            icon: '🏢',
            image: 'assets/images/portfolio/branding-4.jpg',
            client: 'متجر زهور الريف',
            sector: 'التجزئة الإلكترونية',
            year: '2024',
            challenge: 'متجر إلكتروني بحاجة لهوية جذابة تعكس الطبيعة والجمال.',
            result: 'ارتفاع المبيعات 180% خلال 6 أشهر.',
            testimonial: '"الهوية جعلت متجرنا يبدو وكأنه علامة عالمية."'
        },

        // ===== LOGOS (5-8) =====
        {
            id: 5,
            title: 'شعار عبق الياسمين للعود',
            category: 'logos',
            description: 'شعار يعكس الفخامة والأصالة في عالم العطور العربية',
            icon: '⭐',
            image: 'assets/images/portfolio/logo-1.jpg',
            client: 'عبق الياسمين للعود والعطور',
            sector: 'العطور والرفاهية',
            year: '2024',
            challenge: 'شعار يعكس الفخامة والجودة ويجذب شريحة راقية من العملاء.',
            result: 'ارتفاع التعرف على العلامة بنسبة 90% في السوق.',
            testimonial: '"شعارنا أصبح أيقونة في عالم العطور."'
        },
        {
            id: 6,
            title: 'شعار شركة جياد للتقنية',
            category: 'logos',
            description: 'شعار يعبر عن الابتكار والريادة في عالم التقنية',
            icon: '⭐',
            image: 'assets/images/portfolio/logo-2.jpg',
            client: 'شركة جياد للتقنية',
            sector: 'التقنية',
            year: '2023',
            challenge: 'شعار يعبر عن الابتكار والثقة للشركة.',
            result: 'زيادة الثقة بالعلامة وجذب شراكات استراتيجية.',
            testimonial: '"الشعار يعكس تماماً رؤيتنا التقنية."'
        },
        {
            id: 7,
            title: 'شعار نادي الرواد الرياضي',
            category: 'logos',
            description: 'شعار يعكس القوة والتميز في عالم الرياضة',
            icon: '⭐',
            image: 'assets/images/portfolio/logo-3.jpg',
            client: 'نادي الرواد الرياضي',
            sector: 'الرياضة واللياقة',
            year: '2024',
            challenge: 'شعار يعكس القوة والحركة ويجذب الشباب.',
            result: 'ارتفاع التسجيل في النادي بنسبة 55%.',
            testimonial: '"الشعار أعطانا هوية مميزة في سوق الأندية الرياضية."'
        },
        {
            id: 8,
            title: 'شعار مؤسسة نماء الخيرية',
            category: 'logos',
            description: 'شعار يعبر عن العطاء والأمل في المجتمع',
            icon: '⭐',
            image: 'assets/images/portfolio/logo-4.jpg',
            client: 'مؤسسة نماء الخيرية',
            sector: 'القطاع غير الربحي',
            year: '2023',
            challenge: 'شعار يعبر عن الأمل والعطاء ويجذب المتبرعين.',
            result: 'ارتفاع التبرعات بنسبة 80% بعد إطلاق الهوية.',
            testimonial: '"الشعار أصبح رمزاً للأمل في المجتمع."'
        },

        // ===== ADVERTISING (9-12) =====
        {
            id: 9,
            title: 'حملة جياد للإعلان عن الذكاء الاصطناعي',
            category: 'advertising',
            description: 'حملة إعلانية متكاملة لمنتجات الذكاء الاصطناعي',
            icon: '📢',
            image: 'assets/images/portfolio/advertising-1.jpg',
            client: 'شركة جياد للتقنية',
            sector: 'التقنية',
            year: '2024',
            challenge: 'إطلاق منتج جديد للذكاء الاصطناعي في السوق.',
            result: 'زيادة المبيعات بنسبة 180% في الربع الأول.',
            testimonial: '"الحملة كانت نقطة تحول في نجاح منتجنا."'
        },
        {
            id: 10,
            title: 'إعلان العبير للحج والعمرة',
            category: 'advertising',
            description: 'إعلان تلفزيوني لوكالة سفر وسياحة رائدة',
            icon: '📢',
            image: 'assets/images/portfolio/advertising-2.jpg',
            client: 'وكالة العبير للسفر والسياحة',
            sector: 'السياحة والسفر',
            year: '2024',
            challenge: 'زيادة الوعي بخدمات الوكالة في موسم الحج والعمرة.',
            result: 'ارتفاع الحجوزات بنسبة 65%.',
            testimonial: '"الإعلان لمس قلوب العملاء وزاد ثقتهم بنا."'
        },
        {
            id: 11,
            title: 'إعلان عبق الياسمين في مجلات الرفاهية',
            category: 'advertising',
            description: 'إعلان مطبوع في مجلات الرفاهية',
            icon: '📢',
            image: 'assets/images/portfolio/advertising-3.jpg',
            client: 'عبق الياسمين للعود والعطور',
            sector: 'العطور والرفاهية',
            year: '2023',
            challenge: 'الوصول إلى شريحة راقية من العملاء.',
            result: 'ارتفاع المبيعات في الفئة المستهدفة بنسبة 100%.',
            testimonial: '"الإعلان كان بوابة دخولنا لعالم الفخامة."'
        },
        {
            id: 12,
            title: 'لوحة زهور الريف الإعلانية',
            category: 'advertising',
            description: 'لوحة إعلانية خارجية في موقع استراتيجي',
            icon: '📢',
            image: 'assets/images/portfolio/advertising-4.jpg',
            client: 'متجر زهور الريف',
            sector: 'التجزئة',
            year: '2024',
            challenge: 'زيادة الوعي بالمتجر في المنطقة.',
            result: 'ارتفاع الزيارات للمتجر بنسبة 120%.',
            testimonial: '"اللوحة جعلت الجميع يتحدثون عن متجرنا."'
        },

        // ===== SOCIAL MEDIA (13-16) =====
        {
            id: 13,
            title: 'حملة إطلاق عبق الياسمين',
            category: 'social',
            description: 'حملة إطلاق متكاملة على منصة إنستغرام',
            icon: '📸',
            image: 'assets/images/portfolio/social-1.jpg',
            client: 'عبق الياسمين للعود والعطور',
            sector: 'العطور والرفاهية',
            year: '2024',
            challenge: 'بناء حضور قوي على إنستغرام قبل إطلاق المنتج.',
            result: '10,000 متابع في الشهر الأول.',
            testimonial: '"المحتوى البصري خلق ضجة حول منتجنا."'
        },
        {
            id: 14,
            title: 'محتوى زهور الريف على إنستغرام',
            category: 'social',
            description: 'محتوى بصري جذاب لحساب إنستغرام',
            icon: '📸',
            image: 'assets/images/portfolio/social-2.jpg',
            client: 'متجر زهور الريف',
            sector: 'التجزئة الإلكترونية',
            year: '2024',
            challenge: 'جذب متابعين جدد وزيادة المبيعات عبر إنستغرام.',
            result: 'زيادة المتابعين 300% وارتفاع المبيعات.',
            testimonial: '"المحتوى البصري زاد من تفاعل عملائنا معنا."'
        },
        {
            id: 15,
            title: 'محتوى نادي الرواد التفاعلي',
            category: 'social',
            description: 'محتوى تفاعلي لصفحة فيسبوك',
            icon: '📸',
            image: 'assets/images/portfolio/social-3.jpg',
            client: 'نادي الرواد الرياضي',
            sector: 'الرياضة واللياقة',
            year: '2024',
            challenge: 'زيادة التفاعل مع متابعي صفحة النادي.',
            result: 'تفاعل 200% ومشاركات واسعة.',
            testimonial: '"المحتوى جعل صفحتنا تتفاعل بشكل غير مسبوق."'
        },
        {
            id: 16,
            title: 'محتوى شركة جياد على تويتر',
            category: 'social',
            description: 'محتوى بصري جذاب لتغريدات تويتر',
            icon: '📸',
            image: 'assets/images/portfolio/social-4.jpg',
            client: 'شركة جياد للتقنية',
            sector: 'التقنية',
            year: '2024',
            challenge: 'تعزيز حضور الشركة في تويتر (إكس).',
            result: 'ارتفاع المتابعين والمشاركات.',
            testimonial: '"المحتوى البصري جعل تغريداتنا أكثر تأثيراً."'
        },

        // ===== BROCHURES (17-20) =====
        {
            id: 17,
            title: 'بروشور شركة جياد التقني',
            category: 'brochures',
            description: 'بروشور احترافي لشركة تقنية رائدة',
            icon: '📄',
            image: 'assets/images/portfolio/brochure-1.jpg',
            client: 'شركة جياد للتقنية',
            sector: 'التقنية',
            year: '2024',
            challenge: 'تصميم بروشور يعكس ريادة الشركة في التقنية.',
            result: 'زيادة استفسارات العملاء بنسبة 80%.',
            testimonial: '"البروشور ساعدنا في تقديم خدماتنا بشكل احترافي."'
        },
        {
            id: 18,
            title: 'بروشور العبير السياحي',
            category: 'brochures',
            description: 'بروشور سياحي لوجهات عالمية',
            icon: '📄',
            image: 'assets/images/portfolio/brochure-2.jpg',
            client: 'وكالة العبير للسفر والسياحة',
            sector: 'السياحة والسفر',
            year: '2023',
            challenge: 'تصميم بروشور يجذب المسافرين لوجهات جديدة.',
            result: 'ارتفاع الحجوزات للوجهات الجديدة بنسبة 60%.',
            testimonial: '"البروشور ألهم عملاءنا للسفر."'
        },
        {
            id: 19,
            title: 'بروشور عبق الياسمين التسويقي',
            category: 'brochures',
            description: 'بروشور تسويقي لمجموعة عطور جديدة',
            icon: '📄',
            image: 'assets/images/portfolio/brochure-3.jpg',
            client: 'عبق الياسمين للعود والعطور',
            sector: 'العطور والرفاهية',
            year: '2024',
            challenge: 'تقديم مجموعة عطور جديدة بشكل مميز.',
            result: 'نجاح المجموعة الجديدة ومبيعات قياسية.',
            testimonial: '"البروشور جعل منتجنا يبدو فخماً."'
        },
        {
            id: 20,
            title: 'بروشور زهور الريف للهدايا',
            category: 'brochures',
            description: 'بروشور تسويقي للهدايا والزهور',
            icon: '📄',
            image: 'assets/images/portfolio/brochure-4.jpg',
            client: 'متجر زهور الريف',
            sector: 'التجزئة الإلكترونية',
            year: '2024',
            challenge: 'تسويق هدايا الزهور للمناسبات المختلفة.',
            result: 'ارتفاع الطلبات للمناسبات بنسبة 90%.',
            testimonial: '"البروشور ساعدنا في زيادة مبيعات المناسبات."'
        },

        // ===== PACKAGING (21-24) =====
        {
            id: 21,
            title: 'تغليف عبق الياسمين الفاخر',
            category: 'packaging',
            description: 'تغليف فاخر لمجموعة عطور جديدة',
            icon: '📦',
            image: 'assets/images/portfolio/packaging-1.jpg',
            client: 'عبق الياسمين للعود والعطور',
            sector: 'العطور والرفاهية',
            year: '2024',
            challenge: 'تصميم تغليف يعكس فخامة العطور.',
            result: 'ارتفاع المبيعات بنسبة 150%.',
            testimonial: '"التغليف جعل منتجنا لا يُقاوم."'
        },
        {
            id: 22,
            title: 'تغليف هدايا زهور الريف',
            category: 'packaging',
            description: 'تغليف فاخر للهدايا والزهور',
            icon: '📦',
            image: 'assets/images/portfolio/packaging-2.jpg',
            client: 'متجر زهور الريف',
            sector: 'التجزئة الإلكترونية',
            year: '2024',
            challenge: 'تصميم تغليف يعكس جمال الهدايا.',
            result: 'ارتفاع مبيعات الهدايا بنسبة 130%.',
            testimonial: '"التغليف خلق تجربة لا تُنسى لعملائنا."'
        },
        {
            id: 23,
            title: 'تغليف مستحضرات الطبيعة للتجميل',
            category: 'packaging',
            description: 'تغليف أنيق لمستحضرات تجميل طبيعية',
            icon: '📦',
            image: 'assets/images/portfolio/packaging-3.jpg',
            client: 'مصنع الطبيعة لمستحضرات التجميل',
            sector: 'مستحضرات التجميل',
            year: '2023',
            challenge: 'تصميم تغليف يعكس الطبيعة والنقاء.',
            result: 'دخول أسواق جديدة وزيادة المبيعات.',
            testimonial: '"التغليف يعكس تماماً فلسفة منتجاتنا."'
        },
        {
            id: 24,
            title: 'تغليف مزرعة الريف العضوي',
            category: 'packaging',
            description: 'تغليف مبتكر لمنتجات غذائية عضوية',
            icon: '📦',
            image: 'assets/images/portfolio/packaging-4.jpg',
            client: 'مزرعة الريف للمنتجات العضوية',
            sector: 'المنتجات الغذائية',
            year: '2024',
            challenge: 'تصميم تغليف يعكس الجودة والطبيعة.',
            result: 'ارتفاع المبيعات وثقة العملاء.',
            testimonial: '"التغليف ساعدنا في التميز في سوق المنتجات العضوية."'
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
    // GET IMAGE SOURCE
    // ============================================
    function getImageSource(item) {
        const placeholder = generateSVGPlaceholder(item.title, item.category, item.icon || '🎨');
        if (item.image && item.image !== '') {
            return item.image;
        }
        return placeholder;
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
            
            const imgSrc = getImageSource(item);
            const placeholder = generateSVGPlaceholder(item.title, item.category, item.icon || '🎨');
            
            div.innerHTML = `
                <img src="${imgSrc}" alt="${item.title}" loading="lazy" 
                     onerror="this.onerror=null; this.src='${placeholder}'" />
                <div class="portfolio-info">
                    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:4px;">
                        <span class="category">${getCategoryLabel(item.category)}</span>
                        <span class="client-name">${item.client || ''}</span>
                        ${item.year ? `<span class="project-year">${item.year}</span>` : ''}
                    </div>
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    ${item.result ? `<p style="font-size:0.85rem;color:var(--color-primary-light);"><i class="fas fa-chart-line"></i> ${item.result}</p>` : ''}
                    <button class="btn btn-outline view-project" data-index="${index}">
                        <i class="fas fa-eye"></i> عرض التفاصيل
                    </button>
                </div>
            `;
            
            grid.appendChild(div);
        });
        
        // Attach click events
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
                if (!isNaN(index)) {
                    openLightbox(index);
                }
            });
        });
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
            <p style="color:var(--color-primary-light);">${item.client || ''} ${item.year ? '— ' + item.year : ''}</p>
            <p>${item.description}</p>
            ${item.challenge ? `<p><strong>التحدي:</strong> ${item.challenge}</p>` : ''}
            ${item.result ? `<p><strong>النتيجة:</strong> ${item.result}</p>` : ''}
            ${item.testimonial ? `<p style="font-style:italic;color:var(--color-gray-light);">"${item.testimonial}"</p>` : ''}
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
            setFilter(this.dataset.filter);
        });
    });
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) closeLightbox();
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
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') { e.preventDefault(); navigateLightbox(-1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); navigateLightbox(1); }
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
