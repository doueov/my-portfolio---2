document.addEventListener('DOMContentLoaded', function() {
    const options = {
        threshold: 0.6 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 감지 후 관찰 X
            }
        });
    }, options);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        observer.observe(element);
    });

    // '프로젝트' 링크 클릭 시 'PROJECT' 섹션으로 스크롤
    document.getElementById('item-2').addEventListener('click', function() {
        const projectSection = document.getElementById('project-section');
        projectSection.scrollIntoView({ behavior: 'smooth' });
    });
});
