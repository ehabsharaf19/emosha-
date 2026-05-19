document.addEventListener('DOMContentLoaded', () => {
    // 1. جلب العناصر من الواجهة
    const fileInput = document.getElementById('fileInput');
    const clothingType = document.getElementById('clothingType');
    const styleAdditions = document.getElementById('styleAdditions');
    const processBtn = document.getElementById('processBtn');
    const resultImage = document.getElementById('resultImage');
    const resultStatus = document.getElementById('resultStatus');
    
    let uploadedFile = null;

    // 2. مراقبة رفع الصورة وتحديث الاسم
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                uploadedFile = e.target.files[0];
                // هنا تقدر تخلي كلمة "جاهز" تظهر ديناميكياً مع اسم الملف
                console.log("تم تحميل الصورة:", uploadedFile.name);
            }
        });
    }

    // 3. تشغيل زر "معالجة وتغيير الاستايل فوراً"
    if (processBtn) {
        processBtn.addEventListener('click', async () => {
            // التأكد من رفع الصورة أولاً
            if (!uploadedFile) {
                alert('من فضلك ارفع صورتك الشخصية الواضحة أولاً!');
                return;
            }

            // جلب القيم المختارة من القوائم
            const selectedOutfit = clothingType.value; // مثل: بدلة رسمية وجاكيت
            const selectedAddition = styleAdditions.value; // مثل: تعديل اللبس فقط

            // تغيير حالة الزر أثناء المعالجة
            processBtn.disabled = true;
            processBtn.innerHTML = '<span>جاري المعالجة وتوليد المظهر...</span>';

            try {
                // محاكاة إرسال البيانات (هنا هتحط الـ API بتاعك مستقبلاً)
                console.log(`بدء المعالجة لـ: ${selectedOutfit} مع ${selectedAddition}`);
                
                // أنيميشن أو انتظار وهمي لمدة 3 ثوانٍ لمحاكاة الذكاء الاصطناعي
                await new Promise(resolve => setTimeout(resolve, 3000));

                // 4. عرض النتيجة بعد النجاح
                if (resultStatus) {
                    resultStatus.style.display = 'block'; // إظهار جملة "تم تعديل صورتك بنجاح"
                }
                
                if (resultImage) {
                    // هنا تضع رابط الصورة الناتجة من السيرفر، كمثال سنضع صورة تجريبية:
                    // resultImage.src = URL.createObjectURL(uploadedFile); 
                    
                    // تحديث النص السفلي للصورة الناتجة ديناميكياً
                    const detailsText = document.querySelector('.result-details-text');
                    if (detailsText) {
                        detailsText.innerText = `تم تطبيق: ${selectedOutfit} + ${selectedAddition}`;
                    }
                }

                alert('تمت معالجة الصورة وتغيير المظهر بنجاح! 🎉');

            } catch (error) {
                console.error("حدث خطأ أثناء المعالجة:", error);
                alert('عذراً، حدث خطأ أثناء توليد الصورة. حاول مرة أخرى.');
            } finally {
                // إعادة الزر لحالته الطبيعية
                processBtn.disabled = false;
                processBtn.innerHTML = '<i class="fa fa-magic"></i> معالجة وتغيير الاستايل فوراً';
            }
        });
    }
});
