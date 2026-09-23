// =====================================================================
// Tea Ceremony Core Interface Logic (script.js)
// =====================================================================

/**
 * មុខងារពន្លាត ឬបង្រួមបង្ហាញកម្មវិធីពិធីផឹកតែលម្អិត (Bilingual Program Toggle)
 * Toggles the visibility of the Tea Ceremony schedule and updates text/ARIA attributes.
 */
function toggleProgram() {
    const timeline = document.getElementById('weddingTimeline');
    const toggleBtn = document.querySelector('.btn-program-toggle');

    if (!timeline) return;

    const isCollapsed = timeline.classList.contains('collapsed');

    if (isCollapsed) {
        // ពន្លាតបង្ហាញកម្មវិធី / Expand Timeline View
        timeline.classList.remove('collapsed');

        if (toggleBtn) {
            toggleBtn.setAttribute('aria-expanded', 'true');
            toggleBtn.innerHTML = `📋 សូមចុចទីនេះដើម្បីបិទកម្មវិធីវិញ<br><small style="font-weight: normal; font-size: 12px;">(Click to Hide Tea Ceremony Schedule)</small>`;
        }
    } else {
        // បង្រួមលាក់កម្មវិធី / Collapse Timeline View
        timeline.classList.add('collapsed');

        if (toggleBtn) {
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.innerHTML = `📋 សូមចុចទីនេះដើម្បីមើលកម្មវិធីពិធីផឹកតែលម្អិត<br><small style="font-weight: normal; font-size: 12px;">(Click to View Detailed Tea Ceremony Schedule)</small>`;
        }
    }
}

/**
 * មុខងារគ្រប់គ្រងការបង្ហាញប៊ូតុង "ត្រឡប់ទៅកំពូល" នៅពេលទាញ Scroll ចុះក្រោម
 * Listens to page scroll events and toggles visibility of the Back-To-Top button.
 */
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        // បើ Scroll ចុះក្រោមលើសពី 300px នឹងបង្ហាញប៊ូតុង / Show button after 300px scroll
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }
}

/**
 * មុខងាររុញទំព័រត្រឡប់ទៅផ្នែកខាងលើបង្អស់ដោយរលូន (Smooth Scroll to Top)
 * Smoothly scrolls the window frame back to the top of the page.
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
