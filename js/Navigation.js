// Navigation.js
// ==================== الشريط السفلي المطابق لـ base.html ====================
const currentPath = window.location.pathname.split("/").pop() || 'dashboard.html';
// تحديد العنصر النشط بناءً على الصفحة الحالية
const isActive = (href) => href === currentPath ? 'active' : '';
// محتوى الشريط السفلي
const navContent = `
<nav class="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-lg z-30 no-print" style="box-shadow: 0 -5px 20px rgba(0,0,0,0.1);">
    <div class="flex justify-around items-center h-20">
        <a href="dashboard.html" class="bottom-nav-item flex flex-col items-center text-gray-600 hover:text-blue-600 transition px-3 py-2 ${isActive('dashboard.html')}">
            <span class="text-2xl"><i class="fas fa-home"></i></span>
            <span class="text-xs mt-1 font-medium">الرئيسية</span>
        </a>
        <a href="pos.html" class="bottom-nav-item flex flex-col items-center text-gray-600 hover:text-blue-600 transition px-3 py-2 ${isActive('pos.html')}">
            <span class="text-2xl"><i class="fas fa-cash-register"></i></span>
            <span class="text-xs mt-1 font-medium">نقطة البيع</span>
        </a>
        <a href="orders.html" class="bottom-nav-item flex flex-col items-center text-gray-600 hover:text-blue-600 transition px-3 py-2 relative ${isActive('orders.html')}">
            <span class="text-2xl"><i class="fas fa-file-invoice"></i></span>
            <span class="text-xs mt-1 font-medium">الطلبات</span>
        </a>
        <a href="reports.html" class="bottom-nav-item flex flex-col items-center text-gray-600 hover:text-blue-600 transition px-3 py-2 ${isActive('reports.html')}">
            <span class="text-2xl"><i class="fas fa-chart-bar"></i></span>
            <span class="text-xs mt-1 font-medium">التقارير</span>
        </a>
    </div>
</nav>
`;
// إدراج الشريط السفلي في الصفحة إذا كان العنصر موجوداً
if (document.getElementById('nav-placeholder')) {
    document.getElementById('nav-placeholder').innerHTML = navContent;
}

