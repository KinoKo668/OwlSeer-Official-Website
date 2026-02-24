/**
 * @page Contact Page - Get in Touch with OwlSeer
 * 
 * SEO Keywords: contact OwlSeer | TikTok tool support | creator tool help | OwlSeer customer service
 * TikTok strategy consultation | content creator support | AI tool assistance
 * 
 * Long-tail Keywords: how to contact OwlSeer support | TikTok tool customer service email
 * OwlSeer response time | get help with TikTok strategy tool | OwlSeer support hours
 * 
 * 中文关键词: 联系OwlSeer | TikTok工具支持 | 创作者工具帮助 | 客户服务 | 策略咨询
 */

import React, { useState } from 'react';
import { useLanguage } from '../contexts';
import { motion } from 'motion/react';
import { 
  Mail, 
  Send, 
  CheckCircle2
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { SocialLinks } from './layout/SocialLinks';
import { translations } from '../data/translations';
import { SEO } from './SEO';
import { getCanonicalUrl, seoConfig, getLocalizedStructuredDataSchemas, generateAlternates } from '../data/seoConfig';

interface ContactPageProps {
  onNavigate: (page: any) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

export function ContactPage({ onNavigate, isDarkMode, setIsDarkMode }: ContactPageProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Use global language context
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  const isZh = language === 'zh';
  const contactCopy = isZh
    ? {
        heroTitlePrefix: '我们很想',
        heroTitleHighlight: '听到你的声音',
        heroSubtitle: '有任何问题或需要帮助？欢迎联系我们，我们会尽快回复。',
        getInTouch: '联系我们',
        emailUs: '邮件联系',
        emailResponse: '我们的团队通常会在 24 小时内回复。',
        faqTitle: '常见问题',
        faqItems: [
          {
            q: '可以免费体验 OwlSeer 吗？',
            a: '可以。我们提供免费示例报告，帮助你在做决定前先看到可获得的洞察内容。'
          },
          {
            q: 'AI 分析是如何工作的？',
            a: '我们的 AI 会分析你 TikTok 账号中的多维数据点，识别内容模式、受众行为和增长机会。'
          },
          {
            q: '你们提供企业/机构方案吗？',
            a: '提供。针对需要管理多个账号的机构或大型品牌，我们有定制化企业方案。欢迎联系咨询。'
          }
        ],
        successTitle: '消息发送成功！',
        successDesc: '感谢你的联系。我们已收到你的信息，会尽快回复。',
        sendAnother: '继续发送',
        form: {
          nameLabel: '姓名',
          namePlaceholder: '请输入你的姓名',
          emailLabel: '邮箱',
          emailPlaceholder: 'you@company.com',
          subjectLabel: '主题',
          subjectPlaceholder: '我们可以如何帮助你？',
          messageLabel: '留言内容',
          messagePlaceholder: '请详细描述你的需求...',
          subjects: {
            sales: '销售咨询',
            support: '技术支持',
            partnership: '合作机会',
            feedback: '产品反馈',
            other: '其他'
          }
        },
        sending: '发送中...',
        sendMessage: '发送消息',
        privacyPrefix: '提交该表单即表示你同意我们的',
        privacyLabel: '隐私政策',
        privacySuffix: '。'
      }
    : {
        heroTitlePrefix: "We'd love to",
        heroTitleHighlight: 'hear from you',
        heroSubtitle: "Have a question or need help? We're here for you. Reach out and we'll respond as quickly as possible.",
        getInTouch: 'Get in touch',
        emailUs: 'Email Us',
        emailResponse: 'Our team typically responds within 24 hours.',
        faqTitle: 'Frequently Asked Questions',
        faqItems: [
          {
            q: 'Can I try OwlSeer for free?',
            a: "Yes! We offer a free sample report so you can see exactly what kind of insights you'll get before committing."
          },
          {
            q: 'How does the AI analysis work?',
            a: 'Our proprietary AI analyzes thousands of data points from your TikTok account to identify patterns, audience behaviors, and content opportunities.'
          },
          {
            q: 'Do you offer enterprise plans?',
            a: 'Absolutely. For agencies and large brands managing multiple accounts, we offer custom enterprise solutions. Contact us for details.'
          }
        ],
        successTitle: 'Message Sent!',
        successDesc: "Thank you for reaching out. We've received your message and will get back to you shortly.",
        sendAnother: 'Send another message',
        form: {
          nameLabel: 'Name',
          namePlaceholder: 'Your name',
          emailLabel: 'Email',
          emailPlaceholder: 'you@company.com',
          subjectLabel: 'Subject',
          subjectPlaceholder: 'What can we help you with?',
          messageLabel: 'Message',
          messagePlaceholder: 'Tell us more about your needs...',
          subjects: {
            sales: 'Sales Inquiry',
            support: 'Technical Support',
            partnership: 'Partnership Opportunity',
            feedback: 'Product Feedback',
            other: 'Other'
          }
        },
        sending: 'Sending...',
        sendMessage: 'Send Message',
        privacyPrefix: 'By submitting this form, you agree to our',
        privacyLabel: 'Privacy Policy',
        privacySuffix: '.'
      };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  // Get SEO config
  const seo = seoConfig.contact[language as 'en' | 'zh'] || seoConfig.contact.en;
  const localizedSchemas = getLocalizedStructuredDataSchemas(language);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans text-gray-900 dark:text-gray-100 selection:bg-[#1AAE82]/30">
      {/* SEO Meta Tags */}
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={getCanonicalUrl('/contact', language)}
        lang={language}
        alternates={generateAlternates('/contact')}
        structuredData={localizedSchemas.contactPage}
      />
      
      <Navbar 
        onTrySample={() => handleNavigate('landing')} 
        onSignUp={() => handleNavigate('auth')}
        onNavigate={handleNavigate}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        t={t}
      />

      <main className="pt-[72px]">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-6 tracking-tight">
                {contactCopy.heroTitlePrefix} <span className="text-[#1AAE82]">{contactCopy.heroTitleHighlight}</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {contactCopy.heroSubtitle}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Contact Info & Context */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold font-display mb-6">{contactCopy.getInTouch}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1AAE82]/10 flex items-center justify-center flex-shrink-0 text-[#1AAE82]">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{contactCopy.emailUs}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{contactCopy.emailResponse}</p>
                      <a href="mailto:support@owlseer.com" className="text-[#1AAE82] hover:underline mt-2 inline-block font-medium">support@owlseer.com</a>
                    </div>
                  </div>

                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 p-6 shadow-sm"
              >
                <h3 className="font-bold text-lg mb-4">{contactCopy.faqTitle}</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="hover:text-[#1AAE82] text-left">{contactCopy.faqItems[0].q}</AccordionTrigger>
                    <AccordionContent className="text-gray-500">
                      {contactCopy.faqItems[0].a}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b-0">
                    <AccordionTrigger className="hover:text-[#1AAE82] text-left">{contactCopy.faqItems[1].q}</AccordionTrigger>
                    <AccordionContent className="text-gray-500">
                      {contactCopy.faqItems[1].a}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b-0">
                    <AccordionTrigger className="hover:text-[#1AAE82] text-left">{contactCopy.faqItems[2].q}</AccordionTrigger>
                    <AccordionContent className="text-gray-500">
                      {contactCopy.faqItems[2].a}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
              
              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.4 }}
                 className="pt-1"
              >
                <SocialLinks className="flex items-center gap-5" />
              </motion.div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 p-8 md:p-10 shadow-lg relative overflow-hidden"
              >
                {/* Decorative background blob */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#1AAE82]/5 rounded-full blur-3xl pointer-events-none"></div>

                {isSuccess ? (
                  <div className="min-h-[400px] flex flex-col items-center justify-center text-center">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-20 h-20 bg-[#1AAE82]/10 rounded-full flex items-center justify-center mb-6 text-[#1AAE82]"
                    >
                      <CheckCircle2 className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{contactCopy.successTitle}</h3>
                    <p className="text-gray-500 dark:text-gray-400 max-w-md mb-8">
                      {contactCopy.successDesc}
                    </p>
                    <Button 
                      onClick={() => setIsSuccess(false)}
                      variant="outline"
                      className="border-gray-200 dark:border-slate-700"
                    >
                      {contactCopy.sendAnother}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{contactCopy.form.nameLabel}</Label>
                        <Input 
                          id="name" 
                          placeholder={contactCopy.form.namePlaceholder} 
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          required
                          className="bg-gray-50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{contactCopy.form.emailLabel}</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder={contactCopy.form.emailPlaceholder} 
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          required
                          className="bg-gray-50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{contactCopy.form.subjectLabel}</Label>
                      <Select 
                        value={formState.subject} 
                        onValueChange={(value) => setFormState({...formState, subject: value})}
                      >
                        <SelectTrigger className="bg-gray-50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700">
                          <SelectValue placeholder={contactCopy.form.subjectPlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">{contactCopy.form.subjects.sales}</SelectItem>
                          <SelectItem value="support">{contactCopy.form.subjects.support}</SelectItem>
                          <SelectItem value="partnership">{contactCopy.form.subjects.partnership}</SelectItem>
                          <SelectItem value="feedback">{contactCopy.form.subjects.feedback}</SelectItem>
                          <SelectItem value="other">{contactCopy.form.subjects.other}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{contactCopy.form.messageLabel}</Label>
                      <Textarea 
                        id="message" 
                        placeholder={contactCopy.form.messagePlaceholder} 
                        className="min-h-[150px] bg-gray-50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700"
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-[#1AAE82] hover:bg-[#1AAE82]/90 text-white h-12 text-lg font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {contactCopy.sending}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          {contactCopy.sendMessage} <Send className="w-4 h-4" />
                        </div>
                      )}
                    </Button>

                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                      {contactCopy.privacyPrefix}{' '}
                      <button type="button" onClick={() => handleNavigate('privacy')} className="text-[#1AAE82] hover:underline">
                        {contactCopy.privacyLabel}
                      </button>
                      {contactCopy.privacySuffix}
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer t={t.footer} onNavigate={handleNavigate} showSocialLinks={false} />
    </div>
  );
}
