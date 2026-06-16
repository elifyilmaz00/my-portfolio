'use client';

import React from 'react';
import { useLanguage } from '@/hooks/use-language';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

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

          {/* İletişim Formu */}
          <GlassCard className="flex flex-col gap-4">
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-fg-dark/70 font-semibold">{t.contact.nameLabel}</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2.5 rounded-xl glass-effect border border-white/10 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors" 
                  required 
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-fg-dark/70 font-semibold">{t.contact.emailLabel}</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2.5 rounded-xl glass-effect border border-white/10 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors" 
                  required 
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-fg-dark/70 font-semibold">{t.contact.messageLabel}</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-2.5 rounded-xl glass-effect border border-white/10 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors resize-none" 
                  required
                ></textarea>
              </div>
              <Button type="submit" variant="primary">
                {t.contact.sendButton}
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
