import React from 'react';
import { AlertTriangle, Phone, Globe, Facebook, Info, LifeBuoy } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header / Top Bar */}
      <header className="bg-red-700 text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
             {/* Logo Placeholder - ใช้ icon แทนชั่วคราว */}
            <div className="bg-white p-2 rounded-full text-red-700">
               <LifeBuoy size={24} />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold">วิทยาลัยเทคนิคสงขลา</h1>
              <p className="text-xs md:text-sm text-red-100 opacity-90">Songkhla Technical College</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 md:py-16 max-w-4xl">
        
        {/* Alert Card */}
        <div className="bg-white rounded-xl shadow-lg border-l-8 border-red-600 overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
              <div className="bg-red-100 p-4 rounded-full shrink-0">
                <AlertTriangle size={48} className="text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-2">
                  แจ้งปิดทำการชั่วคราว (น้ำท่วม)
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  เนื่องจากสถานการณ์อุทกภัยในพื้นที่ วิทยาลัยเทคนิคสงขลาขอแจ้งปิดทำการ
                  และระงับการให้บริการระบบสารสนเทศและเว็บไซต์หลักชั่วคราว เพื่อความปลอดภัยของข้อมูลและอุปกรณ์
                </p>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border border-red-100 text-red-800 font-medium text-center">
              🔴 เว็บไซต์หลักและระบบ e-services ภายใน ไม่สามารถใช้งานได้ในขณะนี้
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Announcements */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-4 text-blue-800">
              <Facebook size={24} />
              <h3 className="text-xl font-semibold">ติดตามข่าวสารล่าสุด</h3>
            </div>
            <p className="text-gray-600 mb-4">
              กรุณาติดตามประกาศวันเปิดทำการและข่าวสารต่าง ๆ ผ่านทางเพจ Facebook อย่างเป็นทางการ
            </p>
            <a 
              href="https://www.facebook.com/prachasamphanth.thekhnikh.sngkhla" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium gap-2"
            >
              <Facebook size={18} />
              ไปที่เพจ Facebook งานประชาสัมพันธ์
            </a>
          </div>

          {/* Emergency Contacts */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-4 text-green-800">
              <Phone size={24} />
              <h3 className="text-xl font-semibold">ติดต่อฉุกเฉิน / สอบถาม</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Info className="text-gray-400 mt-1" size={18} />
                <div>
                  <span className="block font-semibold text-gray-800">สายด่วนอุทกภัย (ปภ.)</span>
                  <a href="tel:1784" className="text-blue-600 hover:underline">1784</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-slate-100 py-6 mt-12 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} วิทยาลัยเทคนิคสงขลา. All Rights Reserved.</p>
          <p className="mt-1">หน้าเว็บชั่วคราวสำหรับสถานการณ์ฉุกเฉิน</p>
        </div>
      </footer>
    </div>
  );
}