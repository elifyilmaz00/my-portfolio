import React, { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Form gönderimini asenkron olarak ve try-catch kontrolünde simüle eder
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      // Asenkron sunucu/API istek simülasyonu
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // %15 ihtimalle hata senaryosunu canlandırıyoruz (DoD hata yönetimi testi için)
          if (Math.random() < 0.15) {
            reject(new Error('Simulated network failure'));
          } else {
            resolve(true);
          }
        }, 1500);
      });

      setStatus('success');
    } catch (error) {
      // Hata yakalama ve konsola yazdırma
      console.error('İletişim formu gönderim hatası:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Başlık */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.contact.title}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* İletişim Kanalları */}
          <div className="space-y-6">
            {/* E-posta Kartı */}
            <GlassCard hoverGlow className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-fg-dark/50 uppercase tracking-wider">{t.contact.emailLabel}</p>
                <a href={`mailto:${t.contact.email}`} className="text-sm font-semibold text-white hover:text-primary transition-colors">
                  {t.contact.email}
                </a>
              </div>
            </GlassCard>

            {/* Telefon Kartı */}
            <GlassCard hoverGlow className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-fg-dark/50 uppercase tracking-wider">GSM / Phone</p>
                <a href={`tel:${t.contact.phone}`} className="text-sm font-semibold text-white hover:text-secondary transition-colors">
                  {t.contact.phone}
                </a>
              </div>
            </GlassCard>

            {/* Konum Kartı */}
            <GlassCard hoverGlow className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-fg-dark/50 uppercase tracking-wider">Lokasyon / Location</p>
                <p className="text-sm font-semibold text-white">
                  {t.contact.location}
                </p>
              </div>
            </GlassCard>
          </div>

          {/* İletişim Formu ve Durum Arayüzleri */}
          <GlassCard className="flex flex-col gap-4 relative min-h-[350px] justify-center">
            {status === 'success' ? (
              // Başarı Ekranı
              <div className="flex flex-col items-center text-center p-6 animate-fade-in">
                <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Mesajınız Alındı!</h3>
                <p className="text-sm text-fg-dark/70 mb-6">En kısa sürede dönüş sağlayacağım.</p>
                <Button variant="glass" onClick={() => setStatus('idle')} className="text-xs border border-white/10">
                  Yeni Mesaj Gönder
                </Button>
              </div>
            ) : status === 'error' ? (
              // Premium Hata Arayüzü (DoD Kuralı)
              <div className="flex flex-col items-center text-center p-6 animate-fade-in">
                <AlertTriangle className="w-16 h-16 text-accent mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Gönderim Başarısız</h3>
                <p className="text-sm text-fg-dark/80 mb-6 leading-relaxed">
                  Kod tabanında ufak bir yan etki (side-effect) oluştu. Sistem mühendisi (ben) durumu hemen inceliyor!
                </p>
                <Button variant="glass" onClick={() => setStatus('idle')} className="text-xs border border-white/10">
                  Tekrar Dene
                </Button>
              </div>
            ) : (
              // Form Ekranı
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-fg-dark/70 font-semibold">{t.contact.nameLabel}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2.5 rounded-xl glass-effect border border-white/10 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors" 
                    required 
                    autoComplete="off"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-fg-dark/70 font-semibold">{t.contact.emailLabel}</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2.5 rounded-xl glass-effect border border-white/10 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors" 
                    required 
                    autoComplete="off"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-fg-dark/70 font-semibold">{t.contact.messageLabel}</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-2.5 rounded-xl glass-effect border border-white/10 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors resize-none" 
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" disabled={isSubmitting} className="gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Gönderiliyor...</span>
                    </>
                  ) : (
                    <span>{t.contact.sendButton}</span>
                  )}
                </Button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
