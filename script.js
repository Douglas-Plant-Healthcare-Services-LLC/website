document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. INJECT HEADER (Top Bar + Navbar)
    // =========================================
    const headerPlaceholder = document.getElementById('global-header');
    
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
            <div class="top-bar">
                <div class="container">
                    <span><i class="fas fa-phone-alt"></i> 732-732-2712</span>
                    <span>Serving Monmouth and Ocean County, NJ <i class="fas fa-map-marker-alt"></i></span>
                </div>
            </div>

            <nav class="navbar">
                <div class="container">
                    <a href="index.html" class="logo">
                        <img src="Images/logo_crop.png" alt="Douglas Plant Healthcare Services">
                    </a>
                    <div class="menu-toggle" id="mobile-menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    <ul class="nav-menu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="guardian.html">Guardian Program</a></li>
                        <li class="dropdown">
                            <a href="services.html">Services <i class="fas fa-caret-down"></i></a>
                            <ul class="dropdown-content">
                                <li><a href="services.html#diagnosis">Plant Health Diagnosis</a></li>
                                <li><a href="services.html#fertilization">Fertilization & Soil Rx</a></li>
                                <li><a href="services.html#insects">Insect & Disease Treatment</a></li>
                                <li><a href="services.html#tick">Tick & Mosquito Control</a></li>
                                <li><a href="services.html#deer">Deer Repellant Programs</a></li>
                                <li><a href="services.html#pruning">Expert Tree Pruning</a></li>
                            </ul>
                        </li>
                        <li><a href="commercial.html">Commercial</a></li>
                        <li><a href="portal.html">Customer Portal</a></li>
                        <li><a href="portal.html" class="btn-nav">Get a Quote</a></li>
                    </ul>
                </div>
            </nav>
        `;
    }

    // =========================================
    // 2. HIGHLIGHT CURRENT PAGE
    // =========================================
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('#')[0];
        if (linkPath === currentPath) {
            link.style.color = '#2e7d32'; 
            link.style.fontWeight = 'bold';
        }
    });

    // =========================================
    // 3. MOBILE MENU LOGIC
    // =========================================
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
        });
    }

    // =========================================
    // 4. LINEAR SHRINK FUNCTION (SMOOTH)
    // =========================================
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        // Configuration
        const topBarHeight = 45;   // Wait until this scrolls away
        const shrinkDistance = 90; // Pixels to scroll to complete the shrink
        
        const maxNavHeight = 110;
        const minNavHeight = 60;
        
        const maxLogoHeight = 90;
        const minLogoHeight = 50;

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;

            // 1. If we are still seeing the top bar, keep max size
            if (scrollY <= topBarHeight) {
                document.documentElement.style.setProperty('--nav-current-height', `${maxNavHeight}px`);
                document.documentElement.style.setProperty('--logo-current-height', `${maxLogoHeight}px`);
            }
            // 2. If we are past top bar but not fully shrunk -> Interpolate (Linear Math)
            else if (scrollY > topBarHeight && scrollY < (topBarHeight + shrinkDistance)) {
                
                // Calculate percentage (0.0 to 1.0)
                const progress = (scrollY - topBarHeight) / shrinkDistance;

                // Calculate current values
                const currentNav = maxNavHeight - (progress * (maxNavHeight - minNavHeight));
                const currentLogo = maxLogoHeight - (progress * (maxLogoHeight - minLogoHeight));

                // Apply to CSS variables
                document.documentElement.style.setProperty('--nav-current-height', `${currentNav}px`);
                document.documentElement.style.setProperty('--logo-current-height', `${currentLogo}px`);
            }
            // 3. If we are way down the page -> Keep min size
            else {
                document.documentElement.style.setProperty('--nav-current-height', `${minNavHeight}px`);
                document.documentElement.style.setProperty('--logo-current-height', `${minLogoHeight}px`);
            }
        });
    }
});