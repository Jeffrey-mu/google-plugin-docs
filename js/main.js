// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 导航栏滚动效果
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        // 向下滚动
        header.style.transform = 'translateY(-100%)';
    } else {
        // 向上滚动
        header.style.transform = 'translateY(0)';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// 代码高亮效果（可以根据需要添加代码高亮库）
document.querySelectorAll('pre code').forEach(block => {
    block.innerHTML = block.innerHTML.trim();
}); 
