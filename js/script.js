// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Toggle citation box
function toggleCitation() {
    const box = document.getElementById('citation-box');
    if (box.style.display === 'none') {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
}

// Copy citation to clipboard
function copyToClipboard() {
    const citation = `@article{yang2025spatially,
  title={Spatially-Enhanced Recurrent Memory for Long-Range Mapless Navigation via End-to-End Reinforcement Learning},
  author={Yang, Fan and Frivik, Per and Hoeller, David and Wang, Chen and Cadena, Cesar and Hutter, Marco},
  journal={International Journal of Robotics Research},
  year={2025},
  archivePrefix={arXiv},
  eprint={2506.05997},
  primaryClass={cs.RO}
}`;

    navigator.clipboard.writeText(citation).then(() => {
        alert('Citation copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy citation');
    });
}

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.style.color = 'var(--text-dark)';
            });
            const activeLink = document.querySelector(`.nav-menu a[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.style.color = 'var(--primary-color)';
            }
        }
    });
});