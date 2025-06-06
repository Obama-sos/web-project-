document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeModals = document.querySelectorAll('.close-modal');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (signupBtn && signupModal) {
        signupBtn.addEventListener('click', function(e) {
            e.preventDefault();
            signupModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeModals) {
        closeModals.forEach(btn => {
            btn.addEventListener('click', function() {
                if (loginModal) loginModal.classList.remove('active');
                if (signupModal) signupModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }
    
    if (showSignup && loginModal && signupModal) {
        showSignup.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.classList.remove('active');
            signupModal.classList.add('active');
        });
    }
    
    if (showLogin && loginModal && signupModal) {
        showLogin.addEventListener('click', function(e) {
            e.preventDefault();
            signupModal.classList.remove('active');
            loginModal.classList.add('active');
        });
    }
    
    window.addEventListener('click', function(e) {
        if (loginModal && e.target === loginModal) {
            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (signupModal && e.target === signupModal) {
            signupModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail')?.value;
            const password = document.getElementById('loginPassword')?.value;
            const userType = document.querySelector('#loginForm input[name="userType"]:checked')?.value;
            
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            console.log('Login attempt with:', { 
                email, 
                password,
                userType 
            });
            
            switch(userType) {
                case 'student':
                    alert('Welcome student! Redirecting to student dashboard...');
                    break;
                case 'instructor':
                    alert('Welcome instructor! Redirecting to instructor portal...');
                    break;
                case 'parent':
                    alert('Welcome parent! Redirecting to parent view...');
                    break;
                default:
                    alert('Welcome! Redirecting to dashboard...');
            }
            
            loginForm.reset();
            if (loginModal) loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signupName')?.value;
            const email = document.getElementById('signupEmail')?.value;
            const password = document.getElementById('signupPassword')?.value;
            const confirmPassword = document.getElementById('signupConfirm')?.value;
            const userType = document.querySelector('#signupForm input[name="userType"]:checked')?.value || 'student';
            
            if (!name || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            console.log('Signup attempt with:', { 
                name, 
                email, 
                password,
                userType 
            });
            
            alert(`Account created successfully as ${userType}!`);
            
            signupForm.reset();
            if (signupModal) signupModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    const courses = [
        {
            title: "Web Development Bootcamp",
            category: "Development",
            instructor: "Sarah Johnson",
            price: "$100",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            videoId: "PkZNo7MFNFg"
        },
        {
            title: "Data Science Fundamentals",
            category: "Data Science",
            instructor: "Michael Chen",
            price: "$120",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            videoId: "ua-CiDNNj30"
        },
        {
            title: "UX/UI Design Masterclass",
            category: "Design",
            instructor: "Emma Rodriguez",
            price: "$80",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            videoId: "c9Wg6Cb_YlU"
        },
        {
            title: "Digital Marketing Course",
            category: "Marketing",
            instructor: "David Wilson",
            price: "$70",
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
            videoId: "7k7ETzq6kqk"
        }
    ];

    const categories = [
        { name: "Development", count: "1,200 Courses" },
        { name: "Business", count: "800 Courses" },
        { name: "Finance", count: "450 Courses" },
        { name: "Design", count: "1,000 Courses" },
        { name: "Music", count: "300 Courses" },
        { name: "Photography", count: "500 Courses" }
    ];

    const searchInput = document.getElementById('searchInput');
    const suggestionsContainer = document.getElementById('suggestions');
    let debounceTimer;

    if (searchInput && suggestionsContainer) {
        searchInput.addEventListener('input', function(e) {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const searchTerm = e.target.value.trim().toLowerCase();
                suggestionsContainer.innerHTML = '';
                
                if (searchTerm.length === 0) {
                    suggestionsContainer.style.display = 'none';
                    return;
                }

                const courseMatches = courses.filter(course => 
                    course.title.toLowerCase().includes(term) || 
                    course.category.toLowerCase().includes(term) ||
                    course.instructor.toLowerCase().includes(term)
                );
                
                const categoryMatches = categories.filter(category => 
                    category.name.toLowerCase().includes(term)
                );
                
                if (courseMatches.length === 0 && categoryMatches.length === 0) {
                    const noResults = document.createElement('div');
                    noResults.classList.add('suggestion-item');
                    noResults.textContent = 'No results found';
                    suggestionsContainer.appendChild(noResults);
                } else {
                    categoryMatches.forEach(category => {
                        const suggestionItem = document.createElement('div');
                        suggestionItem.classList.add('suggestion-item');
                        suggestionItem.innerHTML = category.name;
                        const subElement = document.createElement('div');
                        subElement.className = 'sub-text';
                        subElement.textContent = `Category: ${category.count}`;
                        suggestionItem.appendChild(subElement);
                        suggestionsContainer.appendChild(suggestionItem);
                    });

                    courseMatches.forEach(course => {
                        const suggestionItem = document.createElement('div');
                        suggestionItem.classList.add('suggestion-item');
                        suggestionItem.innerHTML = course.title;
                        const subElement = document.createElement('div');
                        subElement.className = 'sub-text';
                        subElement.textContent = `Course: ${course.category} • ${course.instructor}`;
                        suggestionItem.appendChild(subElement);
                        suggestionsContainer.appendChild(suggestionItem);
                    });
                }
                
                suggestionsContainer.style.display = 'block';
            }, 300);
        });

        document.addEventListener('click', function(e) {
            if (e.target !== searchInput && !suggestionsContainer.contains(e.target)) {
                suggestionsContainer.style.display = 'none';
            }
        });
    }

    const courseGrid = document.querySelector('.course-grid');
    if (courseGrid) {
        courses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.setAttribute('data-video-id', course.videoId);
            
            courseCard.innerHTML = `
                <div class="course-img">
                    <img src="${course.image}" alt="${course.title}">
                </div>
                <div class="course-info">
                    <span class="course-category">${course.category}</span>
                    <h3 class="course-title">${course.title}</h3>
                    <p class="course-instructor">By ${course.instructor}</p>
                    <div class="course-meta">
                        <span class="course-price">${course.price}</span>
                        <span class="course-rating">
                            <i class="fas fa-star"></i> ${course.rating}
                        </span>
                    </div>
                </div>
            `;
            
            courseCard.addEventListener('click', function() {
                const videoId = this.getAttribute('data-video-id');
                if (videoId) {
                    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
                }
            });
            
            courseGrid.appendChild(courseCard);
        });
    }

    function initUserTypeSelectors() {
        const userTypeSelectors = document.querySelectorAll('.user-type-options');
        
        userTypeSelectors.forEach(selector => {
            const radioButtons = selector.querySelectorAll('input[type="radio"]');
            
            radioButtons.forEach(radio => {
                radio.addEventListener('change', function() {
                    const slider = selector.querySelector('.selection-slider');
                    if (this.id.includes('student')) {
                        slider.style.transform = 'translateX(0)';
                    } else if (this.id.includes('instructor')) {
                        slider.style.transform = 'translateX(100%)';
                    } else if (this.id.includes('parent')) {
                        slider.style.transform = 'translateX(200%)';
                    }
                    
                    const labels = selector.querySelectorAll('.user-type-label');
                    labels.forEach(label => label.style.color = '');
                    this.nextElementSibling.style.color = 'white';
                });
            });
        });
    }
    
    initUserTypeSelectors();
});