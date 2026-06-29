// 웹 명함 & 이력서 전환 스크립트

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    const cardSection = document.getElementById('cardSection');
    const resumeSection = document.getElementById('resumeSection');

    // 상태 관리 (기본값: 명함 화면)
    let isResumeVisible = false;

    toggleBtn.addEventListener('click', () => {
        isResumeVisible = !isResumeVisible;

        if (isResumeVisible) {
            // 이력서 화면으로 전환
            cardSection.classList.remove('active');
            resumeSection.classList.add('active');

            // 버튼 텍스트 변경 (이력서 → 명함 보기)
            toggleBtn.innerHTML = `
                <span class="btn-text">📇 명함 보기</span>
                <span class="btn-arrow">→</span>
            `;
        } else {
            // 명함 화면으로 전환
            resumeSection.classList.remove('active');
            cardSection.classList.add('active');

            // 버튼 텍스트 변경 (명함 → 이력서 보기)
            toggleBtn.innerHTML = `
                <span class="btn-text">📄 이력서 보기</span>
                <span class="btn-arrow">→</span>
            `;
        }

        // 화면 전환 후 스크롤을 맨 위로 이동
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
