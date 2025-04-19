document.addEventListener('DOMContentLoaded', function() {
    // Show more techniques button
    const showMoreTechniquesBtn = document.getElementById('showMoreTechniques');
    const moreTechniquesSection = document.getElementById('moreTechniques');
    
    if (showMoreTechniquesBtn && moreTechniquesSection) {
        showMoreTechniquesBtn.addEventListener('click', function() {
            if (moreTechniquesSection.classList.contains('hidden')) {
                moreTechniquesSection.classList.remove('hidden');
                showMoreTechniquesBtn.innerHTML = `
                    收起更多技术
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M18 15l-6-6-6 6"/></svg>
                `;
            } else {
                moreTechniquesSection.classList.add('hidden');
                showMoreTechniquesBtn.innerHTML = `
                    查看更多技术
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M6 9l6 6 6-6"/></svg>
                `;
                
                // Scroll back to techniques section
                const techniquesSection = document.getElementById('techniques');
                if (techniquesSection) {
                    const offsetTop = techniquesSection.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
    
    // Show advanced levels button
    const showMoreLevelsBtn = document.getElementById('showMoreLevels');
    const advancedLevelsSection = document.getElementById('advancedLevels');
    
    if (showMoreLevelsBtn && advancedLevelsSection) {
        showMoreLevelsBtn.addEventListener('click', function() {
            if (advancedLevelsSection.classList.contains('hidden')) {
                advancedLevelsSection.classList.remove('hidden');
                showMoreLevelsBtn.innerHTML = `
                    收起高级和精英阶段
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M18 15l-6-6-6 6"/></svg>
                `;
            } else {
                advancedLevelsSection.classList.add('hidden');
                showMoreLevelsBtn.innerHTML = `
                    查看高级和精英阶段
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M6 9l6 6 6-6"/></svg>
                `;
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = 72; // Adjust based on your header height
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to technique cards when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.technique-card').forEach(card => {
        observer.observe(card);
    });
});
