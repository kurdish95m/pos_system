class UserManager {
    constructor() {
        this.username = localStorage.getItem("username") || "مستخدم";
        this.role = localStorage.getItem("user_role") || "cashier";
        this.init();
    }

    async init() {
        if (!document.getElementById('user-modal')) this.createModalHTML();
        await this.waitForElement('#user-greeting');
        this.renderBadge();
        await this.waitForElement('#side-user-name');
        this.updateSidebar();
    }

    renderBadge() {
        const greeting = document.getElementById('user-greeting');
        if (greeting) {
            const icon = this.role === 'admin' ? 'fa-user-tie' : 'fa-user';
            greeting.innerHTML = `
                <i class="fas ${icon} text-blue-400 text-sm"></i>
                <span class="text-sm font-medium">${this.username}</span>
            `;
            greeting.onclick = () => this.toggleModal(true);
        }
    }

    updateSidebar() {
        const sideName = document.getElementById('side-user-name');
        const sideRole = document.getElementById('side-user-role');
        if (sideName) sideName.textContent = this.username;
        if (sideRole) sideRole.textContent = `● ${this.role === 'admin' ? 'مدير النظام' : 'كاشير المحل'}`;
    }

    createModalHTML() {
        const modalHTML = `
            <div id="user-modal-overlay" class="fixed inset-0 bg-black/60 z-[2000] hidden backdrop-blur-sm transition-opacity duration-300" onclick="userManager.toggleModal(false)"></div>
            <div id="user-modal" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-white rounded-2xl shadow-2xl z-[2001] hidden transform transition-all duration-300 scale-95 opacity-0">
                <div class="p-8 text-center">
                    <div class="w-20 h-20 bg-blue-100 text-blue-600 rounded-full mx-auto flex items-center justify-center text-3xl mb-4">
                        <i class="fas fa-user-circle"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800">${this.username}</h3>
                    <p class="text-gray-500 mb-6">${this.role === 'admin' ? 'المشرف العام' : 'موظف مبيعات'}</p>
                    
                    <button onclick="userManager.logout()" class="w-full bg-red-500 text-white py-3 rounded-xl font-bold hover:bg-red-600 transition-colors shadow-lg shadow-red-200 mb-4">
                        <i class="fas fa-sign-out-alt ml-2"></i> تسجيل الخروج
                    </button>
                    
                    <button onclick="userManager.toggleModal(false)" class="text-gray-400 text-sm font-medium hover:text-gray-600">إغلاق النافذة</button>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    toggleModal(show) {
        const modal = document.getElementById('user-modal');
        const overlay = document.getElementById('user-modal-overlay');
        if (show) {
            overlay.classList.remove('hidden');
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.add('scale-100', 'opacity-100');
            }, 10);
        } else {
            modal.classList.remove('scale-100', 'opacity-100');
            setTimeout(() => {
                overlay.classList.add('hidden');
                modal.classList.add('hidden');
            }, 300);
        }
    }

logout() {
    Swal.fire({
        title: 'تسجيل الخروج',
        text: 'هل أنت متأكد من تسجيل الخروج؟',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'نعم',
        cancelButtonText: 'إلغاء'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            window.location.href = "index.html";
        }
    });
}

    waitForElement(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) return resolve();
            const observer = new MutationObserver(() => {
                if (document.querySelector(selector)) { observer.disconnect(); resolve(); }
            });
            observer.observe(document.body, { childList: true, subtree: true });
        });
    }
}