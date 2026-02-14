/**
 * @page Pricing Page - OwlSeer Plans & Pricing
 * 
 * SEO Keywords: TikTok tool pricing | content creator subscription plans | AI strategy tool cost
 * TikTok analytics pricing | creator tool subscription | social media tool plans
 * 
 * Long-tail Keywords: best free TikTok analytics tool | affordable TikTok growth platform
 * creator tool with free trial | TikTok strategy tool monthly pricing | 7-day free trial TikTok tool
 * 
 * 中文关键词: TikTok工具价格 | 创作者订阅计划 | AI策略工具费用 | 免费试用 | 内容创作者工具定价
 */

import React, { useState } from 'react';
import { useLanguage } from '../contexts';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  ChevronDown, 
  Sparkles, 
  Shield, 
  ArrowRight
} from 'lucide-react';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { translations } from '../data/translations';
import { SEO } from './SEO';
import { getCanonicalUrl, seoConfig, getLocalizedStructuredDataSchemas, generateAlternates } from '../data/seoConfig';

// --- Components ---

const basePricingPage = (translations as any).en?.pricingPage || {};
const zhPricingPage = (translations as any).zh?.pricingPage || {};

const localizedPricingPageContent = {
  en: {
    ...basePricingPage,
    trialBanner: {
      title: "Risk-free 7-day trial of our full platform",
      subtitle: "No long-term commitment required. 7 days of unlimited access to strategy tools and scripts.",
      bullet1: "Clear tier-based pricing",
      bullet2: "No automatic billing until trial ends",
      button: "Start 7-Day Trial"
    },
    table: {
      tiktokAccounts: "Connected Accounts",
      tiktokAccountsDesc: "Available creator accounts",
      teamSeats: "Team Seats",
      teamSeatsDesc: "Parallel collaborators",
      aiCredits: "Free Video Analyses / Month",
      aiCreditsDesc: "Competitive video deep analysis quota",
      scriptGeneration: "Monthly AI Credits",
      scriptGenerationDesc: "Credits for Copilot and reasoning tasks",
      deepNicheAnalysis: "AI Content Pipeline",
      deepNicheAnalysisDesc: "Profile, diagnosis, goals, and script workflow",
      viralHookLibrary: "AI Copilot Tier",
      viralHookLibraryDesc: "Reasoning depth and context capacity",
      dataHistory: "Batch Task Processing",
      dataHistoryDesc: "Handle multiple topics/scripts in one run",
      weeklyGrowthReport: "Report Export",
      weeklyGrowthReportDesc: "Operational recap for weekly/monthly reviews",
      whiteLabelReports: "Priority Compute Queue",
      whiteLabelReportsDesc: "Faster task response during peak hours",
      supportLevel: "Scheduling & Script Workflow",
      apiAccess: "Workflow Focus",
      values: {
        included: "Included",
        notIncluded: "—",
        copilotBasic: "Basic",
        copilotEnhanced: "Enhanced",
        copilotHigh: "High-Capacity",
        exportBasic: "Basic",
        exportAdvanced: "Advanced",
        workflowStandard: "Standard",
        workflowComplete: "Complete",
        workflowScale: "Scale-Optimized",
        focusBasic: "Solo Creator",
        focusTeam: "Small Team",
        focusMcn: "Agency / Multi-account"
      }
    },
    mobile: {
      popular: "POPULAR",
      everythingInGrowth: "Everything in Growth",
      accounts: "Accounts",
      support: "Support"
    },
    trust: {
      headline: "Trusted by 10,000+ Creators & Brands"
    }
  },
  zh: {
    ...zhPricingPage,
    trialBanner: {
      title: "全平台 7 天无风险试用",
      subtitle: "无需长期承诺。7 天内可无限使用策略工具与脚本能力。",
      bullet1: "清晰的分层定价",
      bullet2: "试用结束前不会自动扣费",
      button: "开启 7 天试用"
    },
    table: {
      tiktokAccounts: "可用账号数",
      tiktokAccountsDesc: "可管理的创作账号数量",
      teamSeats: "团队席位",
      teamSeatsDesc: "可并行协作席位",
      aiCredits: "每月免费视频分析",
      aiCreditsDesc: "对标账号深度拆解额度",
      scriptGeneration: "月度 Credits",
      scriptGenerationDesc: "Copilot 与推理任务额度",
      deepNicheAnalysis: "AI 内容全链路",
      deepNicheAnalysisDesc: "画像、诊断、目标解析与脚本生成",
      viralHookLibrary: "AI Copilot 档位",
      viralHookLibraryDesc: "推理能力与上下文上限",
      dataHistory: "批量任务处理",
      dataHistoryDesc: "一次处理多个主题或脚本",
      weeklyGrowthReport: "报表导出",
      weeklyGrowthReportDesc: "支持周/月运营复盘导出",
      whiteLabelReports: "优先计算队列",
      whiteLabelReportsDesc: "高峰期任务更快响应",
      supportLevel: "排期与脚本协同",
      apiAccess: "适用场景",
      values: {
        included: "已包含",
        notIncluded: "—",
        copilotBasic: "基础版",
        copilotEnhanced: "增强版",
        copilotHigh: "高上限版",
        exportBasic: "基础导出",
        exportAdvanced: "高级导出",
        workflowStandard: "标准流程",
        workflowComplete: "完整流程",
        workflowScale: "规模化流程",
        focusBasic: "个人创作",
        focusTeam: "小团队协作",
        focusMcn: "机构 / 多账号运营"
      }
    },
    mobile: {
      popular: "最受欢迎",
      everythingInGrowth: "包含增长版全部功能",
      accounts: "账号",
      support: "支持"
    },
    trust: {
      headline: "已获得 10,000+ 创作者与品牌信任"
    }
  },
  ja: {
    ...basePricingPage,
    hero: {
      title: "成長に投資し、",
      titleHighlight: "勘に頼らない。",
      subtitle: "あなたの成長段階に合うプランを選択。無料で始めて必要に応じて拡張。"
    },
    comparison: {
      title: "機能比較の詳細",
      subtitle: "各プランで使える機能を比較できます。",
      features: "機能",
      mostPopular: "人気No.1",
      forIndividuals: "個人向け",
      forCreators: "本格運用向け",
      forTeams: "チーム・代理店向け",
      corePlatform: "コアプラットフォーム",
      intelligence: "AI・インテリジェンス",
      analytics: "分析・レポート",
      support: "サポート・セキュリティ"
    },
    faq: {
      title: "よくある質問",
      items: [
        { q: "サブスクリプションはいつでも解約できますか？", a: "はい。月額プランに長期契約はありません。ダッシュボードからいつでも解約できます。" },
        { q: "7日間の無料トライアルはどう動作しますか？", a: "7日間、全機能を利用できます。トライアル終了まで課金されず、期間中いつでも解約可能です。" },
        { q: "TikTokのパスワードは必要ですか？", a: "不要です。公式APIとOAuth連携を利用し、パスワードを保存することはありません。" },
        { q: "アカウント数を増やしたい場合は？", a: "上位プランへアップグレード可能です。複数アカウント運用向けの機能を提供します。" },
        { q: "返金は可能ですか？", a: "はい。30日間の返金保証があります。満足いただけない場合はサポートへご連絡ください。" }
      ]
    },
    cta: {
      title: "もう勘に頼らない運用へ",
      subtitle: "データで伸ばすクリエイター運用を今すぐ開始しましょう。",
      button: "今すぐ始める"
    },
    trialBanner: {
      title: "フル機能を7日間、リスクなしで体験",
      subtitle: "長期契約は不要。戦略ツールとスクリプト機能を7日間無制限で利用できます。",
      bullet1: "明確なプラン別料金",
      bullet2: "トライアル終了まで自動課金なし",
      button: "7日間トライアル開始"
    },
    table: {
      tiktokAccounts: "接続アカウント数",
      tiktokAccountsDesc: "運用できるアカウント数",
      teamSeats: "チーム席数",
      teamSeatsDesc: "同時に作業できるメンバー数",
      aiCredits: "無料動画分析 / 月",
      aiCreditsDesc: "競合動画の深掘り分析枠",
      scriptGeneration: "月間 AI クレジット",
      scriptGenerationDesc: "Copilot と推論タスクに使用",
      deepNicheAnalysis: "AIコンテンツ全工程",
      deepNicheAnalysisDesc: "プロフィール・診断・目標・スクリプト",
      viralHookLibrary: "AI Copilot レベル",
      viralHookLibraryDesc: "推論深度と文脈上限",
      dataHistory: "バッチタスク処理",
      dataHistoryDesc: "複数テーマを一括処理",
      weeklyGrowthReport: "レポート書き出し",
      weeklyGrowthReportDesc: "週次・月次の運用振り返り",
      whiteLabelReports: "優先コンピュートキュー",
      whiteLabelReportsDesc: "ピーク時も高速応答",
      supportLevel: "スケジュール & スクリプト運用",
      apiAccess: "想定利用シーン",
      values: {
        included: "含まれる",
        notIncluded: "—",
        copilotBasic: "ベーシック",
        copilotEnhanced: "拡張",
        copilotHigh: "高上限",
        exportBasic: "基本",
        exportAdvanced: "高度",
        workflowStandard: "標準",
        workflowComplete: "完全",
        workflowScale: "スケール最適化",
        focusBasic: "個人クリエイター",
        focusTeam: "小規模チーム",
        focusMcn: "代理店 / 複数アカウント"
      }
    },
    mobile: {
      popular: "人気",
      everythingInGrowth: "グロースの全機能を含む",
      accounts: "アカウント",
      support: "サポート"
    },
    trust: {
      headline: "10,000+ のクリエイターとブランドが利用中"
    }
  },
  ko: {
    ...basePricingPage,
    hero: {
      title: "성장에 투자하고,",
      titleHighlight: "추측은 줄이세요.",
      subtitle: "목표에 맞는 요금제를 선택하세요. 무료로 시작하고 필요할 때 확장하세요."
    },
    comparison: {
      title: "기능 상세 비교",
      subtitle: "요금제별 제공 기능을 한눈에 확인하세요.",
      features: "기능",
      mostPopular: "가장 인기",
      forIndividuals: "개인용",
      forCreators: "성장 크리에이터용",
      forTeams: "팀·에이전시용",
      corePlatform: "핵심 플랫폼",
      intelligence: "AI·인텔리전스",
      analytics: "분석·리포트",
      support: "지원·보안"
    },
    faq: {
      title: "자주 묻는 질문",
      items: [
        { q: "구독은 언제든 취소할 수 있나요?", a: "네. 월간 플랜은 장기 약정이 없으며 대시보드에서 언제든 해지할 수 있습니다." },
        { q: "7일 무료 체험은 어떻게 동작하나요?", a: "7일 동안 전체 기능을 사용할 수 있으며, 체험 종료 전까지 결제되지 않습니다." },
        { q: "TikTok 비밀번호를 제공해야 하나요?", a: "아니요. 공식 API와 OAuth로 연결하며 비밀번호는 저장하지 않습니다." },
        { q: "계정을 더 추가하려면 어떻게 하나요?", a: "상위 플랜으로 업그레이드하면 더 많은 계정과 팀 기능을 사용할 수 있습니다." },
        { q: "환불이 가능한가요?", a: "네. 30일 환불 보장을 제공합니다. 만족하지 못하면 지원팀으로 문의해 주세요." }
      ]
    },
    cta: {
      title: "이제 감이 아닌 데이터로 운영하세요",
      subtitle: "데이터 기반으로 성장하는 크리에이터 워크플로를 시작하세요.",
      button: "지금 시작하기"
    },
    trialBanner: {
      title: "전체 플랫폼 7일 무위험 체험",
      subtitle: "장기 약정 없이 전략 도구와 스크립트 기능을 7일간 무제한으로 사용하세요.",
      bullet1: "명확한 요금제 기준 가격",
      bullet2: "체험 종료 전 자동 청구 없음",
      button: "7일 체험 시작"
    },
    table: {
      tiktokAccounts: "연결 계정 수",
      tiktokAccountsDesc: "운영 가능한 계정 수",
      teamSeats: "팀 좌석",
      teamSeatsDesc: "동시 협업 가능한 인원",
      aiCredits: "월간 무료 영상 분석",
      aiCreditsDesc: "경쟁 영상 심층 분석 할당량",
      scriptGeneration: "월간 AI 크레딧",
      scriptGenerationDesc: "Copilot 및 추론 작업에 사용",
      deepNicheAnalysis: "AI 콘텐츠 전체 파이프라인",
      deepNicheAnalysisDesc: "프로필·진단·목표·스크립트",
      viralHookLibrary: "AI Copilot 등급",
      viralHookLibraryDesc: "추론 깊이와 문맥 처리 한도",
      dataHistory: "배치 작업 처리",
      dataHistoryDesc: "여러 주제를 한 번에 처리",
      weeklyGrowthReport: "리포트 내보내기",
      weeklyGrowthReportDesc: "주간/월간 운영 리뷰용",
      whiteLabelReports: "우선 연산 큐",
      whiteLabelReportsDesc: "피크 시간대에도 빠른 응답",
      supportLevel: "일정 및 스크립트 워크플로",
      apiAccess: "적합한 운영 시나리오",
      values: {
        included: "포함",
        notIncluded: "—",
        copilotBasic: "기본형",
        copilotEnhanced: "강화형",
        copilotHigh: "고급형",
        exportBasic: "기본",
        exportAdvanced: "고급",
        workflowStandard: "표준",
        workflowComplete: "완성형",
        workflowScale: "스케일 최적화",
        focusBasic: "개인 크리에이터",
        focusTeam: "소규모 팀",
        focusMcn: "에이전시 / 멀티 계정"
      }
    },
    mobile: {
      popular: "인기",
      everythingInGrowth: "Growth 플랜의 모든 기능 포함",
      accounts: "계정",
      support: "지원"
    },
    trust: {
      headline: "10,000+ 크리에이터와 브랜드가 신뢰"
    }
  },
  es: {
    ...basePricingPage,
    hero: {
      title: "Invierte en crecimiento,",
      titleHighlight: "no en suposiciones.",
      subtitle: "Elige el plan que se ajusta a tu ambición. Empieza gratis y escala cuando lo necesites."
    },
    comparison: {
      title: "Comparación detallada de funciones",
      subtitle: "Todo lo que incluye cada plan.",
      features: "Funciones",
      mostPopular: "MÁS POPULAR",
      forIndividuals: "Para individuales",
      forCreators: "Para creadores serios",
      forTeams: "Para equipos y agencias",
      corePlatform: "Plataforma base",
      intelligence: "Inteligencia y IA",
      analytics: "Analítica y reportes",
      support: "Soporte y seguridad"
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { q: "¿Puedo cancelar en cualquier momento?", a: "Sí. No hay compromiso de permanencia en planes mensuales. Puedes cancelar desde tu panel." },
        { q: "¿Cómo funciona la prueba de 7 días?", a: "Tienes acceso completo durante 7 días. No cobramos hasta que termine la prueba." },
        { q: "¿Necesitan mi contraseña de TikTok?", a: "No. Usamos API oficial y OAuth. Nunca almacenamos tu contraseña." },
        { q: "¿Qué pasa si necesito más cuentas?", a: "Puedes subir de plan para habilitar más cuentas y funciones de equipo." },
        { q: "¿Ofrecen reembolso?", a: "Sí. Hay garantía de devolución de 30 días si no estás satisfecho." }
      ]
    },
    cta: {
      title: "¿Listo para dejar de adivinar?",
      subtitle: "Únete a creadores que escalan con datos, no con suerte.",
      button: "Empezar ahora"
    },
    trialBanner: {
      title: "Prueba completa de 7 días sin riesgo",
      subtitle: "Sin compromiso a largo plazo. 7 días de acceso ilimitado a estrategia y scripts.",
      bullet1: "Precios claros por nivel",
      bullet2: "Sin cobro automático hasta el fin de prueba",
      button: "Iniciar prueba de 7 días"
    },
    table: {
      tiktokAccounts: "Cuentas conectadas",
      tiktokAccountsDesc: "Número de cuentas que puedes operar",
      teamSeats: "Asientos de equipo",
      teamSeatsDesc: "Colaboradores simultáneos",
      aiCredits: "Análisis de video gratis / mes",
      aiCreditsDesc: "Cuota de análisis profundo competitivo",
      scriptGeneration: "Créditos de IA mensuales",
      scriptGenerationDesc: "Uso para Copilot y tareas de razonamiento",
      deepNicheAnalysis: "Pipeline completo de contenido IA",
      deepNicheAnalysisDesc: "Perfil, diagnóstico, objetivos y guiones",
      viralHookLibrary: "Nivel de AI Copilot",
      viralHookLibraryDesc: "Profundidad de razonamiento y contexto",
      dataHistory: "Procesamiento por lotes",
      dataHistoryDesc: "Procesa varios temas o guiones en una corrida",
      weeklyGrowthReport: "Exportación de reportes",
      weeklyGrowthReportDesc: "Resumen para revisión semanal/mensual",
      whiteLabelReports: "Cola de cómputo prioritaria",
      whiteLabelReportsDesc: "Respuesta más rápida en horas pico",
      supportLevel: "Flujo de calendario y guiones",
      apiAccess: "Enfoque de uso",
      values: {
        included: "Incluido",
        notIncluded: "—",
        copilotBasic: "Básico",
        copilotEnhanced: "Mejorado",
        copilotHigh: "Alta capacidad",
        exportBasic: "Básico",
        exportAdvanced: "Avanzado",
        workflowStandard: "Estándar",
        workflowComplete: "Completo",
        workflowScale: "Optimizado para escala",
        focusBasic: "Creador individual",
        focusTeam: "Equipo pequeño",
        focusMcn: "Agencia / Multi-cuenta"
      }
    },
    mobile: {
      popular: "POPULAR",
      everythingInGrowth: "Todo lo de Growth",
      accounts: "Cuentas",
      support: "Soporte"
    },
    trust: {
      headline: "Con la confianza de más de 10.000 creadores y marcas"
    }
  },
  fr: {
    ...basePricingPage,
    hero: {
      title: "Investissez dans la croissance,",
      titleHighlight: "pas dans l'intuition.",
      subtitle: "Choisissez le plan adapté à votre ambition. Commencez gratuitement puis évoluez."
    },
    comparison: {
      title: "Comparatif détaillé des fonctionnalités",
      subtitle: "Tout ce que chaque plan inclut.",
      features: "Fonctionnalités",
      mostPopular: "LE PLUS POPULAIRE",
      forIndividuals: "Pour individuels",
      forCreators: "Pour créateurs ambitieux",
      forTeams: "Pour équipes et agences",
      corePlatform: "Plateforme cœur",
      intelligence: "Intelligence & IA",
      analytics: "Analytique & rapports",
      support: "Support & sécurité"
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        { q: "Puis-je annuler à tout moment ?", a: "Oui. Les plans mensuels sont sans engagement et résiliables depuis votre tableau de bord." },
        { q: "Comment fonctionne l'essai gratuit de 7 jours ?", a: "Vous avez l'accès complet pendant 7 jours. Aucun prélèvement avant la fin de l'essai." },
        { q: "Dois-je fournir mon mot de passe TikTok ?", a: "Non. Connexion via API officielle et OAuth, sans stockage de mot de passe." },
        { q: "Que faire si j'ajoute plus de comptes ?", a: "Vous pouvez passer à un plan supérieur pour débloquer plus de comptes et d'options équipe." },
        { q: "Proposez-vous un remboursement ?", a: "Oui, une garantie de remboursement de 30 jours est disponible." }
      ]
    },
    cta: {
      title: "Prêt à arrêter de deviner ?",
      subtitle: "Rejoignez des créateurs qui grandissent avec la donnée, pas avec la chance.",
      button: "Commencer maintenant"
    },
    trialBanner: {
      title: "Essai complet 7 jours sans risque",
      subtitle: "Sans engagement long terme. 7 jours d'accès illimité aux outils de stratégie et scripts.",
      bullet1: "Tarification claire par niveau",
      bullet2: "Aucune facturation automatique avant la fin d'essai",
      button: "Démarrer l'essai 7 jours"
    },
    table: {
      tiktokAccounts: "Comptes connectés",
      tiktokAccountsDesc: "Nombre de comptes opérables",
      teamSeats: "Sièges équipe",
      teamSeatsDesc: "Collaborateurs en parallèle",
      aiCredits: "Analyses vidéo gratuites / mois",
      aiCreditsDesc: "Quota d'analyse concurrentielle approfondie",
      scriptGeneration: "Crédits IA mensuels",
      scriptGenerationDesc: "Utilisés pour Copilot et les tâches de raisonnement",
      deepNicheAnalysis: "Chaîne complète de contenu IA",
      deepNicheAnalysisDesc: "Profil, diagnostic, objectifs et scripts",
      viralHookLibrary: "Niveau AI Copilot",
      viralHookLibraryDesc: "Profondeur de raisonnement et fenêtre de contexte",
      dataHistory: "Traitement par lot",
      dataHistoryDesc: "Traite plusieurs sujets/scripts en une fois",
      weeklyGrowthReport: "Export de rapports",
      weeklyGrowthReportDesc: "Récapitulatif pour revue hebdo/mensuelle",
      whiteLabelReports: "File de calcul prioritaire",
      whiteLabelReportsDesc: "Réponse plus rapide en période de pointe",
      supportLevel: "Workflow planning & scripts",
      apiAccess: "Cas d'usage cible",
      values: {
        included: "Inclus",
        notIncluded: "—",
        copilotBasic: "Basique",
        copilotEnhanced: "Amélioré",
        copilotHigh: "Haute capacité",
        exportBasic: "Standard",
        exportAdvanced: "Avancé",
        workflowStandard: "Standard",
        workflowComplete: "Complet",
        workflowScale: "Optimisé échelle",
        focusBasic: "Créateur solo",
        focusTeam: "Petite équipe",
        focusMcn: "Agence / Multi-comptes"
      }
    },
    mobile: {
      popular: "POPULAIRE",
      everythingInGrowth: "Tout ce qui est inclus dans Growth",
      accounts: "Comptes",
      support: "Support"
    },
    trust: {
      headline: "Déjà adopté par 10 000+ créateurs et marques"
    }
  },
  de: {
    ...basePricingPage,
    hero: {
      title: "Investiere in Wachstum,",
      titleHighlight: "nicht in Bauchgefühl.",
      subtitle: "Wähle den Plan, der zu deinen Zielen passt. Starte kostenlos und skaliere bei Bedarf."
    },
    comparison: {
      title: "Detaillierter Funktionsvergleich",
      subtitle: "Alles, was in den Plänen enthalten ist.",
      features: "Funktionen",
      mostPopular: "AM BELIEBTESTEN",
      forIndividuals: "Für Einzelpersonen",
      forCreators: "Für ambitionierte Creator",
      forTeams: "Für Teams und Agenturen",
      corePlatform: "Kernplattform",
      intelligence: "Intelligence & KI",
      analytics: "Analytik & Reporting",
      support: "Support & Sicherheit"
    },
    faq: {
      title: "Häufige Fragen",
      items: [
        { q: "Kann ich jederzeit kündigen?", a: "Ja. Monatspläne haben keine Laufzeitbindung und können jederzeit im Dashboard gekündigt werden." },
        { q: "Wie funktioniert die 7-Tage-Testphase?", a: "Du erhältst 7 Tage vollen Zugriff. Erst nach Ablauf der Testphase erfolgt eine Belastung." },
        { q: "Braucht ihr mein TikTok-Passwort?", a: "Nein. Wir verbinden über offizielle API und OAuth. Dein Passwort wird nicht gespeichert." },
        { q: "Was passiert bei mehr Accounts?", a: "Du kannst auf einen größeren Plan upgraden und zusätzliche Konten sowie Teamfunktionen freischalten." },
        { q: "Gibt es eine Rückerstattung?", a: "Ja, wir bieten eine 30-Tage-Geld-zurück-Garantie." }
      ]
    },
    cta: {
      title: "Bereit, mit Raten aufzuhören?",
      subtitle: "Schließe dich Creatorn an, die mit Daten wachsen statt mit Zufall.",
      button: "Jetzt starten"
    },
    trialBanner: {
      title: "7 Tage risikofreier Vollzugang",
      subtitle: "Keine langfristige Bindung. 7 Tage unbegrenzter Zugriff auf Strategie-Tools und Skripte.",
      bullet1: "Klare, planbasierte Preise",
      bullet2: "Keine automatische Abrechnung bis Testende",
      button: "7-Tage-Test starten"
    },
    table: {
      tiktokAccounts: "Verbundene Konten",
      tiktokAccountsDesc: "Anzahl aktiv nutzbarer Konten",
      teamSeats: "Team-Sitze",
      teamSeatsDesc: "Parallel arbeitende Teammitglieder",
      aiCredits: "Kostenlose Videoanalysen / Monat",
      aiCreditsDesc: "Kontingent für tiefe Wettbewerbsanalysen",
      scriptGeneration: "Monatliche KI-Credits",
      scriptGenerationDesc: "Für Copilot und Reasoning-Aufgaben",
      deepNicheAnalysis: "Vollständige KI-Content-Pipeline",
      deepNicheAnalysisDesc: "Profil, Diagnose, Ziele und Skripte",
      viralHookLibrary: "AI-Copilot-Stufe",
      viralHookLibraryDesc: "Reasoning-Tiefe und Kontextfenster",
      dataHistory: "Batch-Aufgabenverarbeitung",
      dataHistoryDesc: "Mehrere Themen/Skripte in einem Lauf",
      weeklyGrowthReport: "Report-Export",
      weeklyGrowthReportDesc: "Rückblick für Wochen- und Monatsreviews",
      whiteLabelReports: "Priorisierte Compute-Queue",
      whiteLabelReportsDesc: "Schnellere Antwort bei Lastspitzen",
      supportLevel: "Planungs- & Skript-Workflow",
      apiAccess: "Einsatzfokus",
      values: {
        included: "Enthalten",
        notIncluded: "—",
        copilotBasic: "Basis",
        copilotEnhanced: "Erweitert",
        copilotHigh: "Hohe Kapazität",
        exportBasic: "Basis",
        exportAdvanced: "Erweitert",
        workflowStandard: "Standard",
        workflowComplete: "Vollständig",
        workflowScale: "Skalierungsoptimiert",
        focusBasic: "Solo-Creator",
        focusTeam: "Kleines Team",
        focusMcn: "Agentur / Multi-Account"
      }
    },
    mobile: {
      popular: "BELIEBT",
      everythingInGrowth: "Alles aus dem Growth-Plan",
      accounts: "Konten",
      support: "Support"
    },
    trust: {
      headline: "Vertrauen von über 10.000 Creatorn und Brands"
    }
  }
};

const PricingCard = ({ 
  tier, 
  price, 
  period, 
  summary,
  features, 
  cta, 
  popular = false, 
  popularLabel,
  onAction 
}: { 
  tier: string; 
  price: string; 
  period: string; 
  summary: string;
  features: string[]; 
  cta: string; 
  popular?: boolean; 
  popularLabel: string;
  onAction: () => void 
}) => (
  <div className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 h-full ${
    popular 
      ? 'bg-white dark:bg-slate-900 text-gray-900 dark:text-white shadow-2xl shadow-emerald-500/20 border-2 border-emerald-500 scale-105 z-10' 
      : 'bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 hover:border-emerald-500/50 hover:shadow-xl'
  }`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
        {popularLabel}
      </div>
    )}

    <div className="mb-8">
      <h3 className={`text-xl font-bold mb-2 ${popular ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>{tier}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-display font-bold">{price}</span>
        {price !== 'Free' && <span className={`text-sm ${popular ? 'text-gray-500 dark:text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>/{period}</span>}
      </div>
      <p className={`mt-4 text-sm ${popular ? 'text-gray-500 dark:text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
        {summary}
      </p>
    </div>

    <div className="flex-1 space-y-4 mb-8">
      {features.map((feature, i) => (
        <div key={i} className="flex items-start gap-3 text-sm">
          <div className={`mt-0.5 p-0.5 rounded-full ${popular ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'}`}>
            <Check className="w-3 h-3" strokeWidth={3} />
          </div>
          <span className={popular ? 'text-gray-600 dark:text-gray-300' : 'text-gray-600 dark:text-gray-300'}>{feature}</span>
        </div>
      ))}
    </div>

    <button
      onClick={onAction}
      className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
        popular
          ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30'
          : 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-900 dark:text-white'
      }`}
    >
      {cta}
    </button>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 dark:border-slate-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
      >
        <span className="font-semibold text-gray-900 dark:text-white text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-500 dark:text-gray-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Page ---

export function PricingPage({ onNavigate, isDarkMode, setIsDarkMode }: { onNavigate?: (page: any) => void, isDarkMode: boolean, setIsDarkMode: (isDark: boolean) => void }) {
  const [isAnnual, setIsAnnual] = useState(true);
  
  // Use global language context
  const { language, setLanguage } = useLanguage();
  
  const t = translations[language as keyof typeof translations] || translations.en;
  
  // Fallback for pricing page specific translations if not present in main translation object
  const pricingT = t.pricingSection || translations.en.pricingSection;
  const pageT = (localizedPricingPageContent as any)[language] || localizedPricingPageContent.en;
  const trialBannerT = {
    ...localizedPricingPageContent.en.trialBanner,
    ...(pageT.trialBanner || {})
  };
  const tableT = {
    ...localizedPricingPageContent.en.table,
    ...(pageT.table || {}),
    values: {
      ...localizedPricingPageContent.en.table.values,
      ...((pageT.table || {}).values || {})
    }
  };
  const mobileT = {
    ...localizedPricingPageContent.en.mobile,
    ...(pageT.mobile || {})
  };
  const trustT = {
    ...localizedPricingPageContent.en.trust,
    ...(pageT.trust || {})
  };

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      console.log('Navigate to:', page);
    }
  };

  // Get SEO config
  const seo = (seoConfig.pricing as any)[language] || seoConfig.pricing.en;
  const localizedSchemas = getLocalizedStructuredDataSchemas(language);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans selection:bg-emerald-500/30">
      {/* SEO Meta Tags */}
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={getCanonicalUrl('/pricing', language)}
        lang={language}
        alternates={generateAlternates('/pricing')}
        structuredData={localizedSchemas.product}
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
        {/* Header */}
        <section 
          className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center max-w-7xl mx-auto"
          aria-label="Pricing plans and free trial information"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 mb-8">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">{pricingT.title}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white font-display mb-8 tracking-tight">
            {pageT.hero.title}<br />
            <span className="text-gray-400">{pageT.hero.titleHighlight}</span>
          </h1>
          
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            {pageT.hero.subtitle}
          </p>

          {/* Risk-free Trial Banner */}
          <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-emerald-50/50 to-blue-50/50 dark:from-emerald-900/10 dark:to-blue-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{trialBannerT.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{trialBannerT.subtitle}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <span className="flex items-center gap-1"><Check className="w-4 h-4 text-emerald-500" /> {trialBannerT.bullet1}</span>
                  <span className="flex items-center gap-1"><Check className="w-4 h-4 text-emerald-500" /> {trialBannerT.bullet2}</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <button 
                  onClick={() => handleNavigate('auth')}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-lg shadow-emerald-600/20 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                >
                  {trialBannerT.button} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>{pricingT.monthly}</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-gray-200 dark:bg-slate-700 rounded-full transition-colors focus:outline-none"
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ${isAnnual ? 'translate-x-8' : ''}`} />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>{pricingT.yearly}</span>
              <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wide rounded-full">{pricingT.save}</span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
            <PricingCard 
              tier={pricingT.plans?.creator?.name || "Basic"}
              price={isAnnual ? "$31" : "$39"}
              period={pricingT.period || "mo"}
              summary={pricingT.plans?.creator?.summary || ""}
              cta={pricingT.cta?.trial || "Start Free Trial"}
              features={pricingT.plans?.creator?.features || []}
              popularLabel={pricingT.labels?.mostPopular || pageT.comparison.mostPopular}
              onAction={() => handleNavigate('auth')}
            />
            
            <PricingCard 
              tier={pricingT.plans?.growth?.name || "Growth"}
              price={isAnnual ? "$60" : "$75"}
              period={pricingT.period || "mo"}
              summary={pricingT.plans?.growth?.summary || ""}
              popular={true}
              cta={pricingT.cta?.buy || "Buy Now"}
              features={pricingT.plans?.growth?.features || []}
              popularLabel={pricingT.labels?.mostPopular || pageT.comparison.mostPopular}
              onAction={() => handleNavigate('auth')}
            />
            
            <PricingCard 
              tier={pricingT.plans?.scale?.name || "Pro"}
              price={isAnnual ? "$196" : "$245"}
              period={pricingT.period || "mo"}
              summary={pricingT.plans?.scale?.summary || ""}
              cta={pricingT.cta?.buy || "Buy Now"}
              features={pricingT.plans?.scale?.features || []}
              popularLabel={pricingT.labels?.mostPopular || pageT.comparison.mostPopular}
              onAction={() => handleNavigate('auth')} // Or contact page
            />
          </div>

          {/* Feature Comparison Table */}
          <div className="mt-32 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-display mb-4">{pageT.comparison.title}</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">{pageT.comparison.subtitle}</p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl">
              {/* Desktop View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-20 border-b border-gray-200 dark:border-slate-800">
                      <th className="p-6 w-[30%] min-w-[250px] sticky left-0 bg-gray-50 dark:bg-slate-900 z-30 shadow-[4px_0_24px_-4px_rgba(0,0,0,0.05)] md:shadow-none">
                        <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{pageT.comparison.features}</span>
                      </th>
                      <th className="p-6 w-[23%] min-w-[200px] text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">{pricingT.plans?.creator?.name || "Basic"}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-normal">{pageT.comparison.forIndividuals}</div>
                      </th>
                      <th className="p-6 w-[23%] min-w-[200px] text-center relative bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10 rounded-t-2xl">
                        <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-[#1AAE82] text-white text-[10px] font-bold px-3 py-1 rounded-b-lg shadow-sm">{pageT.comparison.mostPopular}</div>
                        <div className="text-lg font-bold text-[#1AAE82] mb-1 mt-2">{pricingT.plans?.growth?.name || "Growth"}</div>
                        <div className="text-sm text-[#1AAE82]/80 font-normal">{pageT.comparison.forCreators}</div>
                      </th>
                      <th className="p-6 w-[23%] min-w-[200px] text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">{pricingT.plans?.scale?.name || "Pro"}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-normal">{pageT.comparison.forTeams}</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                    
                    {/* Section: Core Features */}
                    <tr className="bg-gray-50/30 dark:bg-slate-900/30">
                      <td colSpan={4} className="p-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest sticky left-0 bg-gray-50/95 dark:bg-slate-900/95 z-10 backdrop-blur-sm">
                        {pageT.comparison.corePlatform}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {tableT.tiktokAccounts}
                        <div className="text-xs text-gray-400 font-normal mt-1">{tableT.tiktokAccountsDesc}</div>
                      </td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">1</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10 text-lg">3</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">8</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {tableT.teamSeats}
                        <div className="text-xs text-gray-400 font-normal mt-1">{tableT.teamSeatsDesc}</div>
                      </td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">1</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10 text-lg">4</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">10</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {tableT.deepNicheAnalysis}
                        <div className="text-xs text-gray-400 font-normal mt-1">{tableT.deepNicheAnalysisDesc}</div>
                      </td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">{tableT.values.included}</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10">{tableT.values.included}</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">{tableT.values.included}</td>
                    </tr>

                    {/* Section: Intelligence */}
                    <tr className="bg-gray-50/30 dark:bg-slate-900/30">
                      <td colSpan={4} className="p-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest sticky left-0 bg-gray-50/95 dark:bg-slate-900/95 z-10 backdrop-blur-sm">
                        {pageT.comparison.intelligence}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {tableT.aiCredits}
                        <div className="text-xs text-gray-400 font-normal mt-1">{tableT.aiCreditsDesc}</div>
                      </td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">30</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10 text-lg">120</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">400</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {tableT.scriptGeneration}
                        <div className="text-xs text-gray-400 font-normal mt-1">{tableT.scriptGenerationDesc}</div>
                      </td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">600</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10 text-lg">1,200</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">4,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {tableT.viralHookLibrary}
                        <div className="text-xs text-gray-400 font-normal mt-1">{tableT.viralHookLibraryDesc}</div>
                      </td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">{tableT.values.copilotBasic}</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10">{tableT.values.copilotEnhanced}</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">{tableT.values.copilotHigh}</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {tableT.dataHistory}
                        <div className="text-xs text-gray-400 font-normal mt-1">{tableT.dataHistoryDesc}</div>
                      </td>
                      <td className="p-6 text-center"><span className="text-gray-300 dark:text-slate-700">{tableT.values.notIncluded}</span></td>
                      <td className="p-6 text-center bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10 text-gray-900 dark:text-white font-bold">{tableT.values.included}</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">{tableT.values.included}</td>
                    </tr>

                    {/* Section: Analytics */}
                    <tr className="bg-gray-50/30 dark:bg-slate-900/30">
                      <td colSpan={4} className="p-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest sticky left-0 bg-gray-50/95 dark:bg-slate-900/95 z-10 backdrop-blur-sm">
                        {pageT.comparison.analytics}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {tableT.weeklyGrowthReport}
                        <div className="text-xs text-gray-400 font-normal mt-1">{tableT.weeklyGrowthReportDesc}</div>
                      </td>
                      <td className="p-6 text-center"><span className="text-gray-300 dark:text-slate-700">{tableT.values.notIncluded}</span></td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10">{tableT.values.exportBasic}</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">{tableT.values.exportAdvanced}</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {tableT.whiteLabelReports}
                        <div className="text-xs text-gray-400 font-normal mt-1">{tableT.whiteLabelReportsDesc}</div>
                      </td>
                      <td className="p-6 text-center"><span className="text-gray-300 dark:text-slate-700">{tableT.values.notIncluded}</span></td>
                      <td className="p-6 text-center bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10"><span className="text-gray-300 dark:text-slate-700">{tableT.values.notIncluded}</span></td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">{tableT.values.included}</td>
                    </tr>

                    {/* Section: Support */}
                    <tr className="bg-gray-50/30 dark:bg-slate-900/30">
                      <td colSpan={4} className="p-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest sticky left-0 bg-gray-50/95 dark:bg-slate-900/95 z-10 backdrop-blur-sm">
                        {pageT.comparison.support}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {tableT.supportLevel}
                      </td>
                      <td className="p-6 text-center text-gray-900 dark:text-white">{tableT.values.workflowStandard}</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10">{tableT.values.workflowComplete}</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">{tableT.values.workflowScale}</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-6 text-gray-600 dark:text-gray-300 font-medium sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-gray-100 dark:border-slate-800 md:border-none">
                        {tableT.apiAccess}
                      </td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">{tableT.values.focusBasic}</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-bold bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10">{tableT.values.focusTeam}</td>
                      <td className="p-6 text-center text-gray-900 dark:text-white font-semibold">{tableT.values.focusMcn}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile View - Accordion Style */}
              <div className="md:hidden">
                {/* Creator */}
                <div className="border-b border-gray-100 dark:border-slate-800 p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{pricingT.plans?.creator?.name || "Basic"}</h3>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex justify-between"><span>{tableT.tiktokAccounts}</span> <span className="font-semibold text-gray-900 dark:text-white">1</span></li>
                    <li className="flex justify-between"><span>{tableT.teamSeats}</span> <span className="font-semibold text-gray-900 dark:text-white">1</span></li>
                    <li className="flex justify-between"><span>{tableT.aiCredits}</span> <span className="font-semibold text-gray-900 dark:text-white">30</span></li>
                    <li className="flex justify-between"><span>{tableT.scriptGeneration}</span> <span className="font-semibold text-gray-900 dark:text-white">600</span></li>
                    <li className="flex justify-between"><span>{tableT.viralHookLibrary}</span> <span className="font-semibold text-gray-900 dark:text-white">{tableT.values.copilotBasic}</span></li>
                  </ul>
                </div>

                {/* Growth (Highlighted) */}
                <div className="border-b border-gray-100 dark:border-slate-800 p-6 bg-[#1AAE82]/5 dark:bg-[#1AAE82]/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#1AAE82] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">{mobileT.popular}</div>
                  <h3 className="text-xl font-bold text-[#1AAE82] mb-4">{pricingT.plans?.growth?.name || "Growth"}</h3>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex justify-between"><span>{tableT.tiktokAccounts}</span> <span className="font-bold text-gray-900 dark:text-white">3</span></li>
                    <li className="flex justify-between"><span>{tableT.teamSeats}</span> <span className="font-bold text-gray-900 dark:text-white">4</span></li>
                    <li className="flex justify-between"><span>{tableT.aiCredits}</span> <span className="font-bold text-gray-900 dark:text-white">120</span></li>
                    <li className="flex justify-between"><span>{tableT.scriptGeneration}</span> <span className="font-bold text-[#1AAE82]">1,200</span></li>
                    <li className="flex justify-between"><span>{tableT.dataHistory}</span> <span className="font-bold text-gray-900 dark:text-white">{tableT.values.included}</span></li>
                    <li className="flex justify-between"><span>{tableT.weeklyGrowthReport}</span> <span className="font-bold text-gray-900 dark:text-white">{tableT.values.exportBasic}</span></li>
                  </ul>
                </div>

                {/* Scale */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{pricingT.plans?.scale?.name || "Pro"}</h3>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex justify-between"><span>{mobileT.everythingInGrowth}</span> <Check className="w-4 h-4 text-[#1AAE82]" /></li>
                    <li className="flex justify-between"><span>{tableT.tiktokAccounts}</span> <span className="font-bold text-gray-900 dark:text-white">8</span></li>
                    <li className="flex justify-between"><span>{tableT.teamSeats}</span> <span className="font-bold text-gray-900 dark:text-white">10</span></li>
                    <li className="flex justify-between"><span>{tableT.aiCredits}</span> <span className="font-bold text-gray-900 dark:text-white">400</span></li>
                    <li className="flex justify-between"><span>{tableT.scriptGeneration}</span> <span className="font-bold text-gray-900 dark:text-white">4,000</span></li>
                    <li className="flex justify-between"><span>{tableT.whiteLabelReports}</span> <span className="font-bold text-gray-900 dark:text-white">{tableT.values.included}</span></li>
                    <li className="flex justify-between"><span>{tableT.viralHookLibrary}</span> <span className="font-bold text-gray-900 dark:text-white">{tableT.values.copilotHigh}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

          {/* Social Proof */}
          <section 
            className="py-12 border-y border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900/50"
            aria-label="Trusted by creators and brands"
          >
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">{trustT.headline}</p>
              <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
                 {/* Placeholders for logos */}
                 <div className="text-xl font-bold font-display text-gray-400">TechFlow</div>
                 <div className="text-xl font-bold font-display text-gray-400">CreatorDao</div>
                 <div className="text-xl font-bold font-display text-gray-400">ViralNation</div>
                 <div className="text-xl font-bold font-display text-gray-400">GrowthLab</div>
                 <div className="text-xl font-bold font-display text-gray-400">IndieHacker</div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section 
            className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
            aria-label="Frequently asked questions about pricing"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white font-display mb-12">
              {pageT.faq.title}
            </h2>
            <div className="space-y-2">
            {pageT.faq.items?.map((item: any, i: number) => (
              <FaqItem 
                key={i}
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>
          </section>

          {/* CTA */}
          <section 
            className="px-4 sm:px-6 lg:px-8 pb-24"
            aria-label="Start your free trial"
          >
            <div className="max-w-5xl mx-auto bg-[#111827] dark:bg-black rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-6 tracking-tight">
                  {pageT.cta.title}
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                  {pageT.cta.subtitle}
                </p>
                <button 
                  onClick={() => handleNavigate('auth')}
                  className="px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-bold text-lg shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 mx-auto"
                >
                  {pageT.cta.button} <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>
        </main>

      <Footer t={t.footer} onNavigate={handleNavigate} />
    </div>
  );
}
