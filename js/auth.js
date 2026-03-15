// js/auth.js

// دالة تسجيل الخروج (مع رسالة تأكيد)
async function logout() {
    // استخدمنا await confirm عشان تطلع النافذة الجميلة اللي صممناها
    if (await confirm("هل أنت متأكد أنك تريد تسجيل الخروج من النظام؟")) {
        localStorage.clear();
        window.location.href = "index.html";
    }
}

// حماية الصفحات: إذا لم يكن مسجل الدخول، اطرده لصفحة اللوقن
if (localStorage.getItem("login") !== "true") {
    if (!window.location.href.includes("index.html")) {
        window.location.href = "index.html";
    }
}

// منع الكاشير من دخول لوحة القيادة (Dashboard)
const userRole = localStorage.getItem("user_role");
if (userRole !== "admin" && window.location.href.includes("dashboard.html")) {
    alert("عذراً ✋، هذه الصفحة مخصصة لمدير النظام فقط.");
    window.location.href = "pos.html"; // توجيهه للكاشير
}

// دالة جاهزة يمكن استدعاؤها في شاشة المنتجات والعملاء لإخفاء أزرار الحذف عن الكاشير
function hideAdminFeatures() {
    if (userRole !== "admin") {
        const deleteBtns = document.querySelectorAll('.action-btn[title="حذف"]');
        deleteBtns.forEach(btn => btn.style.display = 'none');
    }
}


// دالة فتح وإغلاق القائمة الجانبية
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.style.display = 'none';
    } else {
        sidebar.classList.add('open');
        overlay.style.display = 'block';
        
        // تحديث اسم المستخدم من الـ localStorage
        const name = localStorage.getItem('username') || 'إسماعيل';
        if(document.getElementById('side-user-name')) {
            document.getElementById('side-user-name').innerText = name;
        }
    }
}

// تحديد الرابط النشط تلقائياً في القائمة السفلية - تم التعديل لاستخدام DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split("/").pop();
    const navItems = document.querySelectorAll('.b-nav-item');
    navItems.forEach(item => {
        if(item.getAttribute('href') === currentPage) {
            item.classList.add('active');
            item.style.color = "#3498db";
            item.style.fontWeight = "bold";
        }
    });
});




// js/auth.js (إضافة هذه الدوال)
// إخفاء أزرار التعديل والحذف إذا كان المستخدم كاشير
function applyRoleBasedVisibility() {
    const userRole = localStorage.getItem("user_role");
    if (userRole !== "admin") {
        // إخفاء جميع الأزرار التي تحمل class "action-btn" (تعديل وحذف)
        document.querySelectorAll('.action-btn').forEach(btn => btn.style.display = 'none');
        //也可以在必要的时候隐藏 statement-btn 或其它 admin 按钮
    }
}
// دالة hideAdminFeatures القديمة يمكن أن تستدعي applyRoleBasedVisibility
function hideAdminFeatures() {
    applyRoleBasedVisibility();
}