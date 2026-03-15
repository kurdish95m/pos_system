class UserManager {
    constructor() {
        this.username = localStorage.getItem("username") || "مستخدم";
        this.role = localStorage.getItem("user_role") || "cashier";
        this.init();
    }

    init() {
        // إنشاء الـ HTML الخاص بالنافذة المنبثقة مرة واحدة عند الاستدعاء
        if (!document.getElementById('user-modal')) {
            this.createModalHTML();
        }
        this.renderBadge();
    }

    renderBadge() {
        const greetingElement = document.getElementById('user-greeting');
        if (greetingElement) {
            const icon = this.role === 'admin' ? '👨‍💼' : '🧑‍💻';
            greetingElement.innerHTML = `<span>${icon}</span> <span>${this.username}</span>`;
            greetingElement.className = 'user-badge';
            greetingElement.onclick = () => this.toggleModal(true);
        }
    }

    createModalHTML() {
        const modalHTML = `
            <div id="user-modal-overlay" class="user-modal-overlay"></div>
            <div id="user-modal" class="user-modal">
                <div style="font-size:40px; margin-bottom:10px;">👤</div>
                <h3 style="margin:5px 0;">${this.username}</h3>
                <p style="color:gray; font-size:14px;">${this.role === 'admin' ? 'المدير العام' : 'كاشير النظام'}</p>
                <button class="logout-btn" id="logout-action">🚪 تسجيل الخروج</button>
                <p id="close-user-modal" style="margin-top:15px; cursor:pointer; color:#95a5a6; font-size:12px;">إغلاق</p>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // ربط الأحداث
        document.getElementById('user-modal-overlay').onclick = () => this.toggleModal(false);
        document.getElementById('close-user-modal').onclick = () => this.toggleModal(false);
        document.getElementById('logout-action').onclick = () => this.logout();
    }

    toggleModal(show) {
        const modal = document.getElementById('user-modal');
        const overlay = document.getElementById('user-modal-overlay');
        if (show) {
            overlay.style.display = 'block';
            modal.classList.add('open');
        } else {
            modal.classList.remove('open');
            setTimeout(() => overlay.style.display = 'none', 200);
        }
    }

    logout() {
        if (confirm("هل تريد تسجيل الخروج؟")) {
            localStorage.clear();
            window.location.href = "index.html";
        }
    }
}