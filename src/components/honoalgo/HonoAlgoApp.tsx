'use client';

import { useState, useEffect, useCallback } from 'react';
import { Language, getTranslation, isRTL } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  TrendingUp,
  Zap,
  Shield,
  Globe,
  RefreshCw,
  Headphones,
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  Sparkles,
  Timer,
  Users,
  ArrowRight,
  Play,
  Infinity,
  Award,
  Target,
  Clock,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  Languages,
  Check,
  X
} from 'lucide-react';

// Logo Component
const InfinityLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`${className} relative flex items-center justify-center`}>
    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 rounded-full blur-lg opacity-50 animate-pulse" />
    <Infinity className="w-full h-full text-amber-400 relative z-10" strokeWidth={1.5} />
  </div>
);

// Countdown Timer Hook
const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};

// Navigation Component
const Navigation = ({ 
  lang, 
  setLang, 
  t, 
  rtl 
}: { 
  lang: Language; 
  setLang: (l: Language) => void;
  t: ReturnType<typeof getTranslation>;
  rtl: boolean;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'features', label: t.nav.features },
    { id: 'comparison', label: t.nav.comparison },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'faq', label: t.nav.faq },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-16 ${rtl ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <div 
            className={`flex items-center gap-2 cursor-pointer ${rtl ? 'flex-row-reverse' : ''}`}
            onClick={() => scrollToSection('hero')}
          >
            <InfinityLogo className="w-8 h-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              HonoAlgo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-6 ${rtl ? 'flex-row-reverse' : ''}`}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className={`hidden md:flex items-center gap-4 ${rtl ? 'flex-row-reverse' : ''}`}>
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className={`flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors ${rtl ? 'flex-row-reverse' : ''}`}
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm">{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
            <Button
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
            >
              {t.hero.freeCta}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4 ${rtl ? 'text-right' : 'text-left'}`}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full py-2 text-slate-300 hover:text-amber-400 transition-colors ${rtl ? 'text-right' : 'text-left'}`}
              >
                {item.label}
              </button>
            ))}
            <div className={`flex items-center gap-2 pt-4 border-t border-slate-700 mt-4 ${rtl ? 'flex-row-reverse justify-end' : ''}`}>
              <button
                onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                className={`flex items-center gap-2 text-slate-300 ${rtl ? 'flex-row-reverse' : ''}`}
              >
                <Languages className="w-4 h-4" />
                <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = ({ 
  t, 
  rtl,
  lang 
}: { 
  t: ReturnType<typeof getTranslation>;
  rtl: boolean;
  lang: Language;
}) => {
  const countdown = useCountdown();

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%230f172a' width='1920' height='1080'/%3E%3C/svg%3E"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-stock-market-monitor-display-44542-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className={`relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 ${rtl ? 'text-right' : 'text-left'}`}>
        <div className={`flex flex-col items-start gap-8 ${rtl ? 'items-end' : 'items-start'}`}>
          {/* Badge */}
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 px-4 py-2">
            <Sparkles className={`w-4 h-4 ${rtl ? 'ml-2' : 'mr-2'}`} />
            {t.hero.badge}
          </Badge>

          {/* Logo & Title */}
          <div className={`flex items-center gap-4 ${rtl ? 'flex-row-reverse' : ''}`}>
            <InfinityLogo className="w-20 h-20 md:w-32 md:h-32" />
            <div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                {t.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mt-2">{t.hero.subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl">
            {t.hero.description}
          </p>

          {/* Countdown */}
          <div className={`flex flex-col gap-2 ${rtl ? 'items-end' : 'items-start'}`}>
            <p className="text-amber-400 font-medium flex items-center gap-2">
              <Timer className="w-4 h-4" />
              {t.hero.countdown}
            </p>
            <div className={`flex gap-4 ${rtl ? 'flex-row-reverse' : ''}`}>
              {[
                { value: countdown.days, label: t.hero.days },
                { value: countdown.hours, label: t.hero.hours },
                { value: countdown.minutes, label: t.hero.minutes },
                { value: countdown.seconds, label: t.hero.seconds },
              ].map((item, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 text-center min-w-[60px] border border-amber-500/20">
                  <div className="text-2xl md:text-3xl font-bold text-amber-400">{String(item.value).padStart(2, '0')}</div>
                  <div className="text-xs text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 ${rtl ? 'flex-row-reverse' : ''}`}>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-400 hover:bg-amber-500/10 px-8 py-6 text-lg"
              onClick={scrollToPricing}
            >
              {t.hero.freeCta}
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg shadow-lg shadow-amber-500/25"
              onClick={scrollToPricing}
            >
              {t.hero.proCta}
              <ArrowRight className={`w-5 h-5 ${rtl ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
          </div>

          {/* Trust Badge */}
          <div className={`flex items-center gap-3 text-slate-400 mt-4 ${rtl ? 'flex-row-reverse' : ''}`}>
            <Users className="w-5 h-5 text-amber-400" />
            <span>
              {t.hero.trustedBy} <span className="text-amber-400 font-bold">10,000+</span> {t.hero.traders}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <ChevronLeft className="w-8 h-8 text-amber-400 rotate-[-90deg]" />
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = ({ 
  t, 
  rtl 
}: { 
  t: ReturnType<typeof getTranslation>;
  rtl: boolean;
}) => {
  const icons = [Target, Zap, Shield, Globe, RefreshCw, Headphones];

  return (
    <section id="features" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 ${rtl ? 'text-right' : 'text-center'}`}>
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-4">
            {t.features.title}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.features.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <Card 
                key={index} 
                className={`bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-all duration-300 group ${rtl ? 'text-right' : 'text-left'}`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${rtl ? 'mr-0 ml-auto' : ''}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Comparison Section
const ComparisonSection = ({ 
  t, 
  rtl 
}: { 
  t: ReturnType<typeof getTranslation>;
  rtl: boolean;
}) => {
  return (
    <section id="comparison" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 ${rtl ? 'text-right' : 'text-center'}`}>
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-4">
            {t.comparison.title}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.comparison.subtitle}
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className={`py-4 px-4 text-slate-400 font-medium ${rtl ? 'text-right' : 'text-left'}`}>
                  {t.comparison.features}
                </th>
                <th className="py-4 px-4 text-center">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent font-bold">
                    {t.comparison.honoalgo}
                  </span>
                </th>
                <th className="py-4 px-4 text-center text-slate-400">{t.comparison.tradingview}</th>
                <th className="py-4 px-4 text-center text-slate-400">{t.comparison.springbox}</th>
              </tr>
            </thead>
            <tbody>
              {t.comparison.rows.map((row, index) => (
                <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                  <td className={`py-4 px-4 text-white ${rtl ? 'text-right' : 'text-left'}`}>{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-amber-400 font-semibold">{row.honoalgo}</span>
                  </td>
                  <td className="py-4 px-4 text-center text-slate-400">{row.tradingview}</td>
                  <td className="py-4 px-4 text-center text-slate-400">{row.springbox}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={`mt-8 flex justify-center ${rtl ? 'flex-row-reverse' : ''}`}>
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 px-6 py-3 text-lg">
            <Award className={`w-5 h-5 ${rtl ? 'ml-2' : 'mr-2'}`} />
            {t.comparison.bestChoice}: HonoAlgo
          </Badge>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = ({ 
  t, 
  rtl 
}: { 
  t: ReturnType<typeof getTranslation>;
  rtl: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = t.testimonials.reviews;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="testimonials" className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 ${rtl ? 'text-right' : 'text-center'}`}>
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-4">
            {t.testimonials.title}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.testimonials.subtitle}
          </h2>
          <div className={`flex items-center justify-center gap-2 mt-4 ${rtl ? 'flex-row-reverse' : ''}`}>
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="text-slate-400 mr-2">4.9/5 {t.testimonials.onTrustpilot}</span>
          </div>
        </div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${rtl ? '' : '-'}${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-slate-900/50 border-slate-700">
                    <CardContent className="p-8">
                      <div className={`flex items-center gap-1 mb-4 ${rtl ? 'justify-end flex-row-reverse' : ''}`}>
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <p className={`text-lg text-slate-300 mb-6 ${rtl ? 'text-right' : 'text-left'}`}>
                        &quot;{review.content}&quot;
                      </p>
                      <div className={`flex items-center gap-4 ${rtl ? 'flex-row-reverse justify-end' : ''}`}>
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                          {review.name.charAt(0)}
                        </div>
                        <div className={rtl ? 'text-right' : 'text-left'}>
                          <p className="text-white font-medium">{review.name}</p>
                          <p className="text-slate-400 text-sm">{review.role}</p>
                        </div>
                        <Badge variant="outline" className="border-green-500/30 text-green-400 ml-auto">
                          <CheckCircle2 className={`w-3 h-3 ${rtl ? 'ml-1' : 'mr-1'}`} />
                          {t.testimonials.verified}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className={`absolute top-1/2 -translate-y-1/2 bg-slate-700/50 hover:bg-amber-500 text-white p-2 rounded-full transition-colors ${rtl ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`}
          >
            {rtl ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
          </button>
          <button
            onClick={nextSlide}
            className={`absolute top-1/2 -translate-y-1/2 bg-slate-700/50 hover:bg-amber-500 text-white p-2 rounded-full transition-colors ${rtl ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'}`}
          >
            {rtl ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-amber-400' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = ({ 
  t, 
  rtl,
  lang 
}: { 
  t: ReturnType<typeof getTranslation>;
  rtl: boolean;
  lang: Language;
}) => {
  const [showOrderBump, setShowOrderBump] = useState(false);

  const handleProClick = () => {
    setShowOrderBump(true);
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 ${rtl ? 'text-right' : 'text-center'}`}>
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-4">
            {t.pricing.title}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.pricing.subtitle}
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto ${rtl ? 'direction-rtl' : ''}`}>
          {/* Free Plan */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">{t.pricing.free.name}</CardTitle>
              <CardDescription className="text-slate-400">{t.pricing.free.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className={`flex items-baseline gap-2 mb-6 ${rtl ? 'flex-row-reverse justify-end' : ''}`}>
                <span className="text-5xl font-bold text-white">${t.pricing.free.price}</span>
                <span className="text-slate-400">/{t.pricing.free.period}</span>
              </div>
              <ul className="space-y-3">
                {t.pricing.free.features.map((feature, index) => (
                  <li key={index} className={`flex items-center gap-3 text-slate-300 ${rtl ? 'flex-row-reverse' : ''}`}>
                    <Check className="w-5 h-5 text-amber-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full border-amber-500 text-amber-400 hover:bg-amber-500/10"
              >
                {t.pricing.free.cta}
              </Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="bg-slate-800/50 border-amber-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-white">{t.pricing.pro.name}</CardTitle>
              <CardDescription className="text-slate-400">{t.pricing.pro.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className={`flex items-baseline gap-2 mb-6 ${rtl ? 'flex-row-reverse justify-end' : ''}`}>
                <span className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  ${t.pricing.pro.price}
                </span>
                <span className="text-slate-400">/{t.pricing.pro.period}</span>
              </div>
              <ul className="space-y-3">
                {t.pricing.pro.features.map((feature, index) => (
                  <li key={index} className={`flex items-center gap-3 text-slate-300 ${rtl ? 'flex-row-reverse' : ''}`}>
                    <Check className="w-5 h-5 text-amber-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <Button 
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
                onClick={handleProClick}
              >
                {t.pricing.pro.cta}
              </Button>
              <p className={`flex items-center gap-2 text-sm text-slate-400 ${rtl ? 'flex-row-reverse' : ''}`}>
                <Shield className="w-4 h-4" />
                {t.pricing.moneyBack}
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Order Bump Dialog */}
      <Dialog open={showOrderBump} onOpenChange={setShowOrderBump}>
        <DialogContent className="bg-slate-900 border-slate-700 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-amber-400 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              {t.pricing.orderBump.title}
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              {t.pricing.orderBump.description}
            </DialogDescription>
          </DialogHeader>
          
          <Card className="bg-slate-800/50 border-amber-500/50">
            <CardContent className="p-4">
              <div className={`flex items-center justify-between mb-3 ${rtl ? 'flex-row-reverse' : ''}`}>
                <span className="text-white font-bold">InfinityRSI V6.2</span>
                <Badge className="bg-green-500/20 text-green-400">{t.pricing.orderBump.savings}</Badge>
              </div>
              <ul className="space-y-2 mb-4">
                {t.pricing.orderBump.features.map((feature, index) => (
                  <li key={index} className={`flex items-center gap-2 text-slate-300 text-sm ${rtl ? 'flex-row-reverse' : ''}`}>
                    <Check className="w-4 h-4 text-amber-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className={`flex items-center justify-between ${rtl ? 'flex-row-reverse' : ''}`}>
                <span className="text-2xl font-bold text-amber-400">{t.pricing.orderBump.price}</span>
              </div>
            </CardContent>
          </Card>

          <DialogFooter className="flex-col gap-2">
            <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
              {t.pricing.orderBump.addBtn} - ${lang === 'ar' ? '25' : '25.00'}
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-slate-400 hover:text-white"
              onClick={() => setShowOrderBump(false)}
            >
              {t.pricing.orderBump.noThanks}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

// FAQ Section
const FAQSection = ({ 
  t, 
  rtl 
}: { 
  t: ReturnType<typeof getTranslation>;
  rtl: boolean;
}) => {
  return (
    <section id="faq" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 ${rtl ? 'text-right' : 'text-center'}`}>
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-4">
            {t.faq.title}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.faq.subtitle}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {t.faq.items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-slate-800/50 border-slate-700 rounded-lg px-6"
            >
              <AccordionTrigger className={`text-white hover:text-amber-400 text-left ${rtl ? 'text-right flex-row-reverse [&>svg]:rotate-180' : ''}`}>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className={`text-slate-400 ${rtl ? 'text-right' : ''}`}>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = ({ 
  t, 
  rtl 
}: { 
  t: ReturnType<typeof getTranslation>;
  rtl: boolean;
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 ${rtl ? 'text-right' : 'text-center'}`}>
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-4">
            {t.contact.title}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.contact.subtitle}
          </h2>
        </div>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={rtl ? 'text-right' : ''}>
                  <Label htmlFor="name" className="text-white mb-2 block">{t.contact.name}</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.placeholder.name}
                    className="bg-slate-900 border-slate-600 focus:border-amber-500 text-white"
                    required
                  />
                </div>
                <div className={rtl ? 'text-right' : ''}>
                  <Label htmlFor="email" className="text-white mb-2 block">{t.contact.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.placeholder.email}
                    className="bg-slate-900 border-slate-600 focus:border-amber-500 text-white"
                    required
                  />
                </div>
              </div>

              <div className={rtl ? 'text-right' : ''}>
                <Label htmlFor="subject" className="text-white mb-2 block">{t.contact.subject}</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t.contact.placeholder.subject}
                  className="bg-slate-900 border-slate-600 focus:border-amber-500 text-white"
                  required
                />
              </div>

              <div className={rtl ? 'text-right' : ''}>
                <Label htmlFor="message" className="text-white mb-2 block">{t.contact.message}</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.placeholder.message}
                  className="bg-slate-900 border-slate-600 focus:border-amber-500 text-white min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-6 ${rtl ? 'flex-row-reverse' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className={`w-4 h-4 animate-spin ${rtl ? 'ml-2' : 'mr-2'}`} />
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    <Send className={`w-4 h-4 ${rtl ? 'ml-2' : 'mr-2'}`} />
                    {t.contact.send}
                  </>
                )}
              </Button>

              {isSuccess && (
                <div className={`flex items-center justify-center gap-2 text-green-400 ${rtl ? 'flex-row-reverse' : ''}`}>
                  <CheckCircle2 className="w-5 h-5" />
                  {t.contact.success}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

// Footer
const Footer = ({ 
  t, 
  rtl,
  lang,
  setLang 
}: { 
  t: ReturnType<typeof getTranslation>;
  rtl: boolean;
  lang: Language;
  setLang: (l: Language) => void;
}) => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 ${rtl ? 'md:flex-row-reverse' : ''}`}>
          {/* Logo */}
          <div className={`flex items-center gap-2 ${rtl ? 'flex-row-reverse' : ''}`}>
            <InfinityLogo className="w-8 h-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              HonoAlgo
            </span>
          </div>

          {/* Links */}
          <div className={`flex items-center gap-6 ${rtl ? 'flex-row-reverse' : ''}`}>
            <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
              {t.footer.links.privacy}
            </a>
            <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
              {t.footer.links.terms}
            </a>
            <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
              {t.footer.links.refund}
            </a>
          </div>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className={`flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors ${rtl ? 'flex-row-reverse' : ''}`}
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm">{lang === 'ar' ? 'English' : 'عربي'}</span>
          </button>
        </div>

        <div className={`mt-8 pt-8 border-t border-slate-800 text-center ${rtl ? 'text-right md:text-center' : ''}`}>
          <p className="text-slate-400 text-sm">
            {t.footer.copyright}
          </p>
          <p className={`flex items-center justify-center gap-1 text-slate-500 text-sm mt-2 ${rtl ? 'flex-row-reverse' : ''}`}>
            {t.footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Component
export default function HonoAlgoApp() {
  const [lang, setLang] = useState<Language>('ar');
  const t = getTranslation(lang);
  const rtl = isRTL(lang);

  useEffect(() => {
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, rtl]);

  return (
    <div className={`min-h-screen bg-slate-900 text-white ${rtl ? 'rtl' : 'ltr'}`}>
      <Navigation lang={lang} setLang={setLang} t={t} rtl={rtl} />
      <HeroSection t={t} rtl={rtl} lang={lang} />
      <FeaturesSection t={t} rtl={rtl} />
      <ComparisonSection t={t} rtl={rtl} />
      <TestimonialsSection t={t} rtl={rtl} />
      <PricingSection t={t} rtl={rtl} lang={lang} />
      <FAQSection t={t} rtl={rtl} />
      <ContactSection t={t} rtl={rtl} />
      <Footer t={t} rtl={rtl} lang={lang} setLang={setLang} />
    </div>
  );
}
