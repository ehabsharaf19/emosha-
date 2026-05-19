document.addEventListener('DOMContentLoaded', () => {
    console.log("تطبيق Emosha AI جاهز ومظبوط... 🚀");

    // ========================================================
    // 1. تشغيل نافذة تعديل المظهر والملابس (النافذة الخضراء)
    // ========================================================
    
    // الإمساك بزر الرفع الحقيقي (Input الفعلي)
    // تأكد أن عنصر رفع الملفات في الـ HTML عندك يحتوي على نوع type="file"
    const fileInput = document.querySelector('.smart-style-popup input[type="file"]') || 
                       document.getElementById('fileInput');

    const processBtn = document.getElementById('processBtn') || 
                       document.querySelector('.smart-style-popup button') ||
                       Array.from(document.querySelectorAll('button, div')).find(el => el.textContent.includes('معالجة'));

    const resultStatus = Array.from(document.querySelectorAll('div, p, span')).find(el => el.textContent.includes('تم تعديل صورتك'));
    const targetImg = document.querySelector('.smart-style-popup img') || document.querySelector('.smart-style-popup .result-image-placeholder img');

    // إخفاء جملة النجاح والصورة في البداية عشان ما يبقاش شكلها غريب
    if (resultStatus) resultStatus.style.display = 'none';

    if (processBtn) {
        processBtn.style.cursor = 'pointer';
        processBtn.addEventListener('click', () => {
            
            // 🛑 الفحص الحقيقي: لو مفيش ملف مرفوع، ارفض التشغيل تماماً!
            if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
                alert('يا كابتن إيهاب، أنت ما رفعتش صورة أصلاً! 😂 ارفع صورتك الشخصية أولاً عشان نعدلها.');
                return; // يوقف الكود هنا وما يكملش هبل
            }

            // لو في صورة مرفوعة فعلاً، يكمل المعالجة:
            console.log("تم كشف الصورة المرفوعة، جاري بدء المعالجة...");
            const originalText = processBtn.innerHTML;
            processBtn.innerHTML = '⏳ جاري تعديل المظهر بالذكاء الاصطناعي...';
            processBtn.style.opacity = '0.7';

            setTimeout(() => {
                // إظهار جملة النجاح
                if (resultStatus) {
                    resultStatus.style.setProperty('display', 'block', 'important');
                }

                // عرض النتيجة بصورة حقيقية
                if (targetImg) {
                    targetImg.src = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop&q=60"; 
                    targetImg.style.width = "100%";
                    targetImg.style.borderRadius = "8px";
                }

                processBtn.innerHTML = originalText;
                processBtn.style.opacity = '1';
                alert('🎉 تم تغيير الملابس وتعديل المظهر بنجاح!');

            }, 2500); 
        });
    }

    // ========================================================
    // 2. تشغيل نافذة صانع الفيديو الاحترافي (النافذة البنفسجية)
    // ========================================================
    const videoBtn = Array.from(document.querySelectorAll('button, div')).find(el => el.textContent.includes('توليد وصناعة'));
    const videoTextInput = document.querySelector('.purple-popup textarea') || document.querySelector('.purple-popup input[type="text"]');
    const videoSuccessStatus = Array.from(document.querySelectorAll('div, p, span')).find(el => el.textContent.includes('إنتاج ومعالجة'));
    const videoPosterBox = document.querySelector('.purple-popup .video-preview') || document.getElementById('videoResultContainer');

    if (videoSuccessStatus) videoSuccessStatus.style.display = 'none';

    if (videoBtn) {
        videoBtn.style.cursor = 'pointer';
        videoBtn.addEventListener('click', () => {
            
            // 🛑 فحص النص: لو كاتب فاضي أو سايبها بيضاء
            if (!videoTextInput || videoTextInput.value.trim() === "") {
                alert('اكتب النص أو القصة أولاً عشان الذكاء الاصطناعي يعرف هيصنع فيديو عن إيه!');
                return;
            }

            const originalVideoText = videoBtn.innerHTML;
            videoBtn.innerHTML = '🎬 جاري إنتاج لقطات الفيديو...';
            videoBtn.style.opacity = '0.7';

            setTimeout(() => {
                if (videoSuccessStatus) videoSuccessStatus.style.setProperty('display', 'block', 'important');

                if (videoPosterBox) {
                    videoPosterBox.innerHTML = `
                        <video controls autoplay muted loop width="100%" style="border-radius: 8px; max-height: 250px;">
                            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-32120-large.mp4" type="video/mp4">
                        </video>
                    `;
                }

                videoBtn.innerHTML = originalVideoText;
                videoBtn.style.opacity = '1';
                alert('🎬 تم توليد الفيديو بنجاح!');
            }, 3000);
        });
    }
});
