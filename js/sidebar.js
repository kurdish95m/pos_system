// sidebar.js
// ==================== تحديد تفاصيل الصفحة الحالية ====================
function getPageDetails() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || 'index.html';

    const pages = {
        'pos.html': { title: 'نقطة البيع', icon: 'fa-cash-register' },
        'orders.html': { title: 'سجل الطلبات', icon: 'fa-file-invoice-dollar' },
        'reports.html': { title: 'التقارير', icon: 'fa-chart-bar' },
        'products.html': { title: 'إدارة المنتجات', icon: 'fa-box' },
        'categories.html': { title: 'إدارة الأصناف', icon: 'fa-layer-group' },
        'customers.html': { title: 'إدارة العملاء', icon: 'fa-users' },
        'users.html': { title: 'إدارة الموظفين', icon: 'fa-user-shield' },
        'settings.html': { title: 'الإعدادات', icon: 'fa-cog' },
        'dashboard.html': { title: 'لوحة التحكم', icon: 'fa-chart-pie' }
    };

    return {
        ...(pages[page] || { title: 'لوحة التحكم', icon: 'fa-home' }),
        slug: page
    };
}

const pageDetails = getPageDetails();

// ==================== بناء محتوى الهيدر والسايدبار ====================
const sidebarContent = `
<header class="bg-slate-800 text-white p-3 flex justify-between items-center sticky top-0 z-[1000] shadow-md" " >
    <div class="flex items-center gap-4">
        <button onclick="toggleSidebar()" class="text-2xl hover:bg-slate-700 w-10 h-10 rounded-full transition-all flex items-center justify-center">
            <i class="fas fa-bars"></i>
        </button>
        <h2 class="text-lg font-bold flex items-center gap-2">
            <i class="fas ${pageDetails.icon} text-blue-400"></i> ${pageDetails.title}
        </h2>
    </div>

    ${pageDetails.slug === 'pos.html' ? `
        <div class="relative">
            <button onclick="window.location.href='cart.html'" class="bg-slate-700 p-2 rounded-xl relative hover:bg-slate-600 transition">
                <i class="fas fa-shopping-basket text-xl text-blue-400"></i>
                <span id="cart-count" class="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-slate-800">0</span>
            </button>
        </div>
    ` : `
        <div id="header-actions"></div>
    `}
</header>

<div id="sidebar-overlay" class="fixed inset-0 bg-black/50 hidden z-[1040] backdrop-blur-sm" onclick="toggleSidebar()"></div>

<div id="sidebar" class="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[1050] transition-transform duration-300 translate-x-full overflow-y-auto" >
    <div class="bg-slate-800 p-6 text-white text-center">
        <div class="relative inline-block">
            <div class="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl shadow-inner border-2 border-slate-600">
                <i class="fas fa-user-tie"></i>
            </div>
            <span class="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <h3 id="side-user-name" class="text-lg font-bold">جاري التحميل...</h3>
        <p id="side-user-role" class="text-xs text-green-400 font-medium tracking-wider mt-1 underline-offset-4 underline decoration-green-400/30"></p>
    </div>

    <div class="p-4 space-y-1">
        <p class="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-4 mb-2">العمليات اليومية</p>
        
        <a href="pos.html" class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all font-medium">
            <i class="fas fa-cash-register w-6 text-center text-blue-500"></i> نقطة البيع
        </a>
        <a href="orders.html" class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all font-medium">
            <i class="fas fa-file-invoice-dollar w-6 text-center text-blue-500"></i> الطلبات
        </a>
        <a href="reports.html" class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all font-medium">
            <i class="fas fa-chart-bar w-6 text-center text-blue-500"></i> التقارير
        </a>

        <div class="my-4 border-t border-gray-100"></div>

        <p class="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-4 mb-2">إدارة البيانات</p>
        
        <a href="products.html" class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all font-medium">
            <i class="fas fa-box w-6 text-center"></i> المنتجات
        </a>
        <a href="categories.html" class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all font-medium">
            <i class="fas fa-layer-group w-6 text-center"></i> الأصناف
        </a>
        <a href="customers.html" class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all font-medium">
            <i class="fas fa-users w-6 text-center"></i> العملاء
        </a>
        <a href="users.html" class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all font-medium">
            <i class="fas fa-user-shield w-6 text-center"></i> الموظفين
        </a>
        
        <div class="my-4 border-t border-gray-100"></div>
        
        <a href="settings.html" class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all font-medium">
            <i class="fas fa-cog w-6 text-center"></i> الإعدادات
        </a>
        
        <button onclick="logout()" class="w-full flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all font-bold mt-4">
            <i class="fas fa-sign-out-alt w-6 text-center"></i> تسجيل الخروج
        </button>
    </div>
</div>
`;

// حقن المحتوى في الصفحة
if (document.getElementById('sidebar-placeholder')) {
    document.getElementById('sidebar-placeholder').innerHTML = sidebarContent;
}

// تمييز الرابط النشط
function highlightActiveLink() {
    const path = window.location.pathname.split("/").pop() || 'index.html';
    const links = document.querySelectorAll('#sidebar a');
    links.forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('bg-blue-50', 'text-blue-600', 'font-bold');
            link.classList.remove('text-gray-700', 'font-medium');
            const icon = link.querySelector('i');
            if (icon) icon.classList.replace('text-gray-400', 'text-blue-500');
        }
    });
}

// دالة فتح/إغلاق السايدبار
window.toggleSidebar = function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (!sidebar || !overlay) return;
    const isOpen = !sidebar.classList.contains('translate-x-full');
    if (isOpen) {
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    } else {
        sidebar.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
    }
};

// إغلاق السايدبار عند النقر خارج الروابط
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (!sidebar || !overlay) return;
    if (e.target.closest('.nav-link') && !e.target.closest('#sidebar-overlay')) {
        if (!sidebar.classList.contains('translate-x-full')) {
            sidebar.classList.add('translate-x-full');
            overlay.classList.add('hidden');
        }
    }
});

// إغلاق السايدبار بالضغط على ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if (sidebar && !sidebar.classList.contains('translate-x-full')) {
            sidebar.classList.add('translate-x-full');
            overlay.classList.add('hidden');
        }
    }
});

// ==================== جلب بيانات المستخدم من localStorage وتحديث السايدبار ====================
function updateSidebarUser() {
    const username = localStorage.getItem('username') || 'مستخدم';
    const role = localStorage.getItem('user_role') || 'cashier';
    const sideName = document.getElementById('side-user-name');
    const sideRole = document.getElementById('side-user-role');
    if (sideName) sideName.textContent = username;
    if (sideRole) sideRole.textContent = `● ${role === 'admin' ? 'مدير النظام' : 'كاشير'}`;

    // إخفاء قسم الإدارة إذا لم يكن مدير
    const adminSection = document.querySelector('#admin-section');
    if (adminSection) {
        if (role !== 'admin') adminSection.style.display = 'none';
        else adminSection.style.display = 'block';
    }
}

// ==================== جلب إحصائيات سريعة للسايدبار ====================
async function loadSidebarStats() {
    try {
        // مبيعات اليوم
        const today = new Date().toISOString().split('T')[0];
        const { data: todaySales } = await supabaseClient
            .from('orders')
            .select('total_amount')
            .gte('created_at', today);
        const totalSales = todaySales ? todaySales.reduce((s, o) => s + (o.total_amount || 0), 0) : 0;
        const salesEl = document.getElementById('sidebar-today-sales');
        if (salesEl) salesEl.textContent = formatCurrencyPrice(totalSales);

        // عدد المنتجات
        const { count: productsCount } = await supabaseClient
            .from('products')
            .select('*', { count: 'exact', head: true });
        const productsEl = document.getElementById('sidebar-total-products');
        if (productsEl) productsEl.textContent = productsCount || 0;
    } catch (err) {
        console.error('خطأ في تحميل إحصائيات السايدبار:', err);
    }
}

// ==================== دالة تسجيل الخروج ====================
window.logout = async function() {
    const result = await Swal.fire({
        title: 'تسجيل الخروج',
        text: 'هل أنت متأكد من تسجيل الخروج؟',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'نعم',
        cancelButtonText: 'إلغاء'
    });
    if (result.isConfirmed) {
        localStorage.clear();
        window.location.href = 'index.html';
    }
};

// ==================== تهيئة السايدبار ====================
if (document.getElementById('sidebar-placeholder')) {
    updateSidebarUser();
    highlightActiveLink();
    loadSidebarStats();

    // تحديث عداد السلة إذا كانت الصفحة pos.html
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('pos_cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountSpan = document.getElementById('cart-count');
        if (cartCountSpan) cartCountSpan.textContent = totalItems;
    }
    if (pageDetails.slug === 'pos.html') {
        updateCartCount();
        window.addEventListener('storage', updateCartCount);
    }
}