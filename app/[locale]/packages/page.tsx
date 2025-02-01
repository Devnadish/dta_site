"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { contactUs } from "../../../constant/icons";

export default function SmallBusinessPricing() {
  const [projectBrief, setProjectBrief] = useState("");
  const [contact, setContact] = useState("");
  const [budget, setBudget] = useState("");
  const [finalPrice, setFinalPrice] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = () => {
    alert("🎉 تم استلام طلبك! سيتواصل معك فريقنا خلال ٤٨ ساعة.");
  };

  const handleCalculate = () => {
    const basePrice = parseFloat(budget) || 0;
    setFinalPrice((basePrice * 0.9).toFixed(2)); // تطبيق خصم 10%
    setShowConfirmation(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-50 to-gray-100 text-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl text-center mb-10"
      >
        <h1 className="text-5xl font-extrabold mb-4 flex items-center justify-center text-blue-600 gap-2">
          <Icon icon={contactUs.email.icon} width="28" height="28" /> احصل على
          أفضل عرض!
        </h1>
        <p className="text-lg mb-6 text-gray-700">
          أخبرنا عن مشروعك وسنرد عليك خلال ٤٨ ساعة.
        </p>
        <Input
          type="text"
          placeholder="وصف مختصر للمشروع"
          value={projectBrief}
          onChange={(e) => setProjectBrief(e.target.value)}
          className="mb-4 p-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400"
        />
        <Input
          type="text"
          placeholder="بريدك الإلكتروني أو رقم هاتفك"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="mb-4 p-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400"
        />
      </motion.div>

      <div className="w-full max-w-md text-center mb-10">
        <h2 className="text-2xl font-bold mb-4">💰 احسب التكلفة التقديرية</h2>
        <p className="text-gray-700 mb-4">
          احصل على تقدير فوري بسعر مخفض بناءً على ميزانيتك.
        </p>
        <Input
          type="number"
          placeholder="أدخل ميزانيتك التقديرية (بالريال السعودي)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="mb-4 p-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-400"
        />
        <Button
          onClick={handleCalculate}
          className="w-full bg-green-500 text-white p-4 font-bold rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105"
        >
          🔢 احسب الخصم
        </Button>
        {finalPrice && (
          <div className="mt-4 text-lg font-bold text-green-700">
            <p>سعرك المخفض: {finalPrice} ريال</p>
            {showConfirmation && (
              <div className="mt-4">
                <p className="text-gray-700">
                  هل ترغب في تقديم الطلب بهذا السعر؟
                </p>
                <div className="flex gap-4 mt-2 justify-center">
                  <Button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
                  >
                    ✅ نعم، أرسل الطلب
                  </Button>
                  <Button
                    onClick={() => setShowConfirmation(false)}
                    className="bg-gray-400 text-white p-3 rounded-lg hover:bg-gray-500"
                  >
                    ❌ تعديل الميزانية
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "💡 باقة البداية",
            color: "text-blue-600",
            price: "500 - 1000 ريال",
            desc: "تصميم موقع بسيط، تحسين محركات البحث الأساسي، دعم عبر البريد الإلكتروني.",
          },
          {
            title: "🚀 الباقة المتقدمة",
            color: "text-green-600",
            price: "1000 - 3000 ريال",
            desc: "تحسين متقدم لمحركات البحث، تكامل مع وسائل التواصل الاجتماعي، دعم أولوية.",
          },
          {
            title: "🔥 الباقة الاحترافية",
            color: "text-red-600",
            price: "3000+ ريال",
            desc: "تطوير مخصص، استراتيجيات تسويق شاملة، مدير حساب مخصص.",
          },
        ].map((plan, index) => (
          <Card
            key={index}
            className="p-6 shadow-lg bg-white rounded-2xl text-center text-black transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <CardContent>
              <h2 className={`text-3xl font-extrabold mb-2 ${plan.color}`}>
                {plan.title}
              </h2>
              <p className="text-gray-600 mb-4">{plan.desc}</p>
              <p className="text-xl font-bold">{plan.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
