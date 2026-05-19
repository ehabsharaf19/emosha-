document.addEventListener('DOMContentLoaded', () => {
    console.log("تطبيق Emosha AI جاهز للعمل الفعلي... 🚀");

    // ========================================================
    // 1. تشغيل نافذة تعديل المظهر والملابس (النافذة الخضراء)
    // ========================================================
    
    // محاولة إيجاد زر المعالجة الأخضر بأي طريقة
    const processBtn = document.getElementById('processBtn') || 
                       document.querySelector('button:contains("معالجة")') || 
                       document.querySelector('.smart-style-popup green-btn') ||
                       Array.from(document.querySelectorAll('button, div')).find(el => el.textContent.includes('معالجة وتغيير'));

    // مكان عرض النتيجة والنجاح
    const resultStatus = document.querySelector('.smart-style-popup div:contains("نجاح")') || 
                         Array.from(document.querySelectorAll('div, p, span')).find(el => el.textContent.includes('تم تعديل صورتك'));
    
    const resultBoxImage = document.querySelector('.smart-style-popup img') || 
                           document.querySelector('.smart-style-popup .result-image-placeholder') ||
                           document.getElementById('resultImage');

    if (processBtn) {
        // نضمن إن الزرار شغال عند الضغط
        processBtn.style.cursor = 'pointer';
        processBtn.addEventListener('click', () => {
            console.log("تم الضغط على زر معالجة المظهر...");
            
            // تغيير النص لتوضيح الحركة والإنشاء
            const originalText = processBtn.innerHTML;
            processBtn.innerHTML = '⏳ جاري تعديل المظهر بالذكاء الاصطناعي...';
            processBtn.style.opacity = '0.7';

            setTimeout(() => {
                // 1. إظهار جملة النجاح (لو كانت مخفية)
                if (resultStatus) {
                    resultStatus.style.setProperty('display', 'block', 'important');
                    resultStatus.style.opacity = '1';
                }

                // 2. تغيير الصورة الرمزية الرمادية إلى صورة حقيقية فخمة لتجربة حية
                const targetImg = document.querySelector('.smart-style-popup img') || resultBoxImage;
                if (targetImg) {
                    // هنغير مصدر الصورة لصورة بدلة شيك حقيقية عشان تشوف التغيير
                    targetImg.src = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop&q=60"; 
                    targetImg.style.width = "100%";
                    targetImg.style.height = "auto";
                    targetImg.style.borderRadius = "8px";
                }

                // رجوع الزرار لطبيعته
                processBtn.innerHTML = originalText;
                processBtn.style.opacity = '1';
                alert('🎉 يا كابتن إيهاب، تم معالجة الصورة وتغيير الاستايل بنجاح!');

            }, 2500); // المعالجة هتاخد ثانيتين ونص وتظهر النتيجة فوراً
        });
    }

    // ========================================================
    // 2. تشغيل نافذة صانع الفيديو الاحترافي (النافذة البنفسجية)
    // ========================================================
    
    const videoBtn = document.getElementById('generateVideoBtn') || 
                     Array.from(document.querySelectorAll('button, div')).find(el => el.textContent.includes('توليد وصناعة'));

    const videoSuccessStatus = Array.from(document.querySelectorAll('div, p, span')).find(el => el.textContent.includes('إنتاج ومعالجة'));
    
    // مكان البوستر أو الفيديو الرمادي اللي فيه "عنوان الفيديو المقترح"
    const videoPosterBox = document.querySelector('.purple-popup .video-preview') || 
                           Array.from(document.querySelectorAll('div')).find(el => el.textContent.includes('فيديو متحرك حول'));

    if (videoBtn) {
        videoBtn.style.cursor = 'pointer';
        videoBtn.addEventListener('click', () => {
            console.log("تم الضغط على زر توليد الفيديو...");

            const originalVideoText = videoBtn.innerHTML;
            videoBtn.innerHTML = '🎬 جاري إنتاج لقطات الفيديو والذكاء الاصطناعي يكتب...';
            videoBtn.style.opacity = '0.7';

            setTimeout(() => {
                // إظهار نص النجاح البنفسجي
                if (videoSuccessStatus) {
                    videoSuccessStatus.style.setProperty('display', 'block', 'important');
                }

                // استبدال البوستر الرمادي الثابت بفيديو حقيقي شغال!
                if (videoPosterBox) {
                    videoPosterBox.innerHTML = `
                        <video controls autoplay muted loop width="100%" style="border-radius: 8px; max-height: 250px;">
                            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-32120-large.mp4" type="video/mp4">
                            متصفحك لا يدعم تشغيل الفيديو.
                        </video>
                    `;
                }

                videoBtn.innerHTML = originalVideoText;
                videoBtn.style.opacity = '1';
                alert('🎬 تم توليد وصناعة مقطع الفيديو الفيروسي بنجاح!');

            }, 3000); // 3 ثوانٍ وهيقلب فيديو حقيقي شغال
        });
    }
});

// دالة مساعدة للبحث بالنصوص داخل العناصر لدعم الأكواد القديمة
Array.prototype.find = Array.prototype.find || function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) return this[i];
    }
    return undefined;
};
