"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { EnquiryForm } from "@/components/page/EnquiryForm";
import { TeamAvatar } from "@/components/TeamAvatar";
import { VideoExperience } from "@/components/home/VideoExperience";
import { site } from "@/lib/site";
import { getTeamMember } from "@/lib/team";

function SectionIcon({ type }: { type: string }) {
  switch (type) {
    case "antenatal":
    case "medical":
    case "stethoscope":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3"/><path d="M9 12.5v3.5a3 3 0 0 0 6 0v-2"/><circle cx="18" cy="10" r="3"/></svg>
      );
    case "preparation":
    case "clock":
    case "pulse":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
      );
    case "movement":
    case "yoga":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2.5"/><path d="m5 17 3-6 4 2 4-2 3 6"/><path d="M12 13v8"/></svg>
      );
    case "nutrition":
    case "leaf":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.2A7 7 0 0 1 11 20z"/><path d="m2 21 7-7"/></svg>
      );
    case "education":
    case "book":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
      );
    case "emotional":
    case "heart":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      );
    case "breathing":
    case "wind":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>
      );
    case "lactation":
    case "drop":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
      );
    case "recovery":
    case "shield":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
      );
    case "partner":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      );
    case "baby":
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
      );
    case "shield-alert":
      return (
        <svg className="h-5 w-5 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      );
    default:
      return (
        <svg className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      );
  }
}

const faqsData = [
  {
    q: "What is a normal vaginal delivery?",
    a: "It is childbirth through the vagina rather than by Caesarean section. Labour and delivery can differ from one woman to another.",
  },
  {
    q: "Can I prepare for a normal vaginal delivery during pregnancy?",
    a: "Yes. Antenatal care, childbirth education and discussions about movement, nutrition, labour, comfort measures and birth preferences can help you prepare. What is appropriate for you should be discussed with your healthcare team.",
  },
  {
    q: "When should I start preparing for childbirth?",
    a: "You can begin discussing birth preparation during your antenatal visits rather than waiting until the final weeks of pregnancy.",
  },
  {
    q: "Can my birth partner be involved?",
    a: "Birth partners can play an important role in emotional and practical support. Discuss BirthWave’s current labour-room arrangements with your care team.",
  },
  {
    q: "What pain-relief options are available during vaginal delivery?",
    a: "Different pain-management options may be available during labour. Your doctor and maternity team can explain which options are appropriate and available to you.",
  },
  {
    q: "Does planning for vaginal delivery mean I will definitely have one?",
    a: "No. Labour cannot be predicted completely. Your care team monitors you and your baby and may recommend a change in the birth plan if clinically necessary.",
  },
  {
    q: "What is the difference between normal vaginal delivery and natural birth?",
    a: "Normal vaginal delivery describes the route of birth — the baby is born through the vagina. “Natural birth” is commonly used to describe an approach that aims to allow labour and birth to progress physiologically with fewer interventions where appropriate. Because the term “natural birth” can mean different things to different people, discuss your preferences with your doctor.",
  },
];

export function BirthDeliveryCarePage() {
  const santoshi = getTeamMember("santoshi-nandigam")!;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main>
      {/* ========================================================================= */}
      {/* SECTION 1: HERO (1st div) */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-cream py-16 md:py-20 lg:py-24">
        <Container className="grid items-center gap-12 xl:grid-cols-[1.1fr_0.9fr] xl:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-rose/30 bg-blush px-3.5 py-1">
              <span className="h-2 w-2 rounded-full bg-rose animate-pulse" />
              <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-rose">
                NORMAL VAGINAL DELIVERY
              </p>
            </div>

            <h1 className="mt-4 max-w-xl font-display text-[32px] sm:text-[42px] md:text-[50px] font-bold leading-[1.12] text-ink">
              Preparing for a Normal Vaginal Delivery
            </h1>

            <div className="mt-5 max-w-xl space-y-3.5 text-[16px] leading-[1.65] text-muted sm:text-[16.5px]">
              <p>
                Every pregnancy and every labour is different. At BirthWave, we help you understand your pregnancy, prepare for labour and discuss your preferences for birth with your care team.
              </p>
              <p>
                From antenatal care and birth preparation to labour support and post-delivery recovery, our approach brings each stage of your maternity journey together.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact-form"
                className="rounded-full bg-brown px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-150 hover:bg-brown-600 active:scale-[0.98] active:bg-brown-700 shadow-[0_4px_16px_rgba(97,62,55,0.22)]"
              >
                Book an Appointment
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition-all duration-150 hover:border-brown hover:text-brown active:scale-[0.98] shadow-sm"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-border/80 bg-white/70 px-4 py-3 text-[13.5px] text-muted">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-coral" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              <p className="leading-snug">
                Birth plans depend on your individual pregnancy and may change if medically required.
              </p>
            </div>
          </div>

          <div className="relative mx-auto flex h-[380px] w-full max-w-lg items-center justify-center overflow-hidden rounded-[32px] bg-pink p-3.5 sm:h-[460px] sm:p-4 shadow-[0_12px_40px_rgba(46,36,33,0.08)]">
            <div className="relative h-full w-full overflow-hidden rounded-[24px]">
              <Image
                src="/images/image3.jpg"
                alt="Dr. Santoshi Nandigam with a newborn at BirthWave"
                fill
                sizes="(min-width: 1280px) 500px, 90vw"
                className="object-cover object-[center_20%]"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: UNDERSTANDING NORMAL VAGINAL DELIVERY (2nd div) */}
      {/* ========================================================================= */}
      <section id="care-support" className="scroll-mt-[100px] bg-white py-16 md:py-24 border-b border-border/60">
        <Container className="max-w-4xl">
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              Understanding Normal Vaginal Delivery
            </p>
            <h2 className="mt-3 font-display text-[30px] font-bold leading-tight text-ink sm:text-[38px]">
              What is a normal vaginal delivery?
            </h2>
            <div className="mt-6 space-y-4 text-[16.5px] leading-[1.7] text-muted">
              <p className="text-[18px] font-medium leading-relaxed text-ink/90">
                A normal vaginal delivery means giving birth to your baby through the vagina rather than through a Caesarean section.
              </p>
              <p>
                Labour usually involves contractions, gradual opening of the cervix and the baby’s movement through the birth canal.
              </p>
              <p>
                How labour begins, progresses and ultimately leads to delivery can be different for every woman. Your doctor monitors your pregnancy and labour and discusses care according to your individual circumstances.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <Reveal delay={0} className="flex flex-col rounded-[22px] border border-border/80 bg-cream/40 p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-xs">
                <SectionIcon type="baby" />
              </span>
              <h3 className="mt-4 font-display text-[16.5px] font-bold text-ink">
                Physiological Route
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                Delivery through the natural birth canal rather than a surgical Caesarean section.
              </p>
            </Reveal>

            <Reveal delay={60} className="flex flex-col rounded-[22px] border border-border/80 bg-cream/40 p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-xs">
                <SectionIcon type="pulse" />
              </span>
              <h3 className="mt-4 font-display text-[16.5px] font-bold text-ink">
                Labour Progression
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                Coordinated contractions, gradual cervical dilation, and guided descent of your baby.
              </p>
            </Reveal>

            <Reveal delay={120} className="flex flex-col rounded-[22px] border border-border/80 bg-cream/40 p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-xs">
                <SectionIcon type="medical" />
              </span>
              <h3 className="mt-4 font-display text-[16.5px] font-bold text-ink">
                Individualised Monitoring
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                Continuous clinical assessment tailored to you and your baby’s unique progress.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: VIDEO EXPERIENCE (3rd div) */}
      {/* ========================================================================= */}
      <div id="video" className="scroll-mt-[100px] border-b border-border/60">
        <VideoExperience />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 4: DOCTOR SECTION (4th div) */}
      {/* ========================================================================= */}
      <section id="doctor" className="scroll-mt-[100px] bg-white py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              DOCTOR-LED, WOMEN-CENTRED CARE
            </p>
            <h2 className="mt-3 font-display text-[30px] font-bold leading-tight text-ink sm:text-[38px]">
              Meet Dr. Santoshi Nandigam
            </h2>
            <p className="mt-1 text-[15px] font-semibold text-muted">
              Founder, BirthWave | Obstetrician &amp; Gynaecologist
            </p>
          </div>

          <div className="mt-10 rounded-[28px] border border-border/80 bg-cream/35 p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-center">
              <div className="relative mx-auto h-[280px] w-[240px] shrink-0 overflow-hidden rounded-[24px] border border-border shadow-[0_8px_24px_rgba(46,36,33,0.08)] bg-white">
                <TeamAvatar member={santoshi} focal="top" className="h-full w-full" />
              </div>
              <div className="space-y-4 text-[16px] leading-[1.7] text-ink/85">
                <p>
                  Discuss your pregnancy, birth preferences and questions directly with your obstetric care team.
                </p>
                <p>
                  Every pregnancy is assessed individually, and recommendations may change as pregnancy and labour progress.
                </p>
                <div className="pt-3">
                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center rounded-full bg-brown px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-150 hover:bg-brown-600 active:scale-[0.98] shadow-[0_4px_16px_rgba(97,62,55,0.2)]"
                  >
                    Meet Our Care Team &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: PREPARING FOR BIRTH (5th div) */}
      {/* ========================================================================= */}
      <section id="preparing-for-birth" className="scroll-mt-[100px] bg-cream/40 py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              PREPARING FOR BIRTH
            </p>
            <h2 className="mt-3 font-display text-[30px] font-bold leading-tight text-ink sm:text-[38px]">
              Preparing for Vaginal Birth Starts During Pregnancy
            </h2>
            <div className="mt-4 space-y-2 text-[16.5px] leading-[1.7] text-muted">
              <p>
                Birth preparation is not something that needs to begin only when labour starts.
              </p>
              <p>
                During pregnancy, your care team can help you understand what to expect and prepare physically and emotionally for childbirth.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Antenatal Care",
                desc: "Regular pregnancy check-ups help monitor the health and progress of both mother and baby.",
                icon: "antenatal",
              },
              {
                title: "Birth Preparation",
                desc: "Understand labour, contractions, when to come to the hospital and what you may experience during different stages of labour.",
                icon: "preparation",
              },
              {
                title: "Movement & Pregnancy-Appropriate Exercise",
                desc: "Where medically appropriate, movement, pregnancy yoga and suitable exercises may form part of your pregnancy and birth preparation.",
                icon: "movement",
              },
              {
                title: "Nutrition",
                desc: "Receive guidance on nutrition and healthy habits throughout pregnancy.",
                icon: "nutrition",
              },
              {
                title: "Childbirth Education",
                desc: "Learn about labour, birth positions, breathing, comfort measures, pain-relief choices and the role of your birth partner.",
                icon: "education",
              },
              {
                title: "Emotional Preparation",
                desc: "Ask questions, discuss concerns and understand your options before labour begins.",
                icon: "emotional",
              },
            ].map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 50}
                className="group flex flex-col justify-between rounded-[24px] border border-border/80 bg-white p-7 shadow-[0_4px_20px_rgba(46,36,33,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-brown/40 hover:shadow-[0_12px_32px_rgba(46,36,33,0.08)]"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-cream/70 shadow-xs transition-colors group-hover:bg-blush">
                    <SectionIcon type={card.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-[18px] font-bold text-ink transition-colors group-hover:text-brown">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* WHO Guidance Trust Callout */}
          <Reveal delay={200} className="mt-10 rounded-[26px] border border-rose/30 bg-blush/60 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wider text-rose">
                  Clinical Benchmark · WHO Childbirth Guidance
                </p>
                <p className="mt-1.5 text-[15.5px] leading-relaxed text-ink/90">
                  WHO’s patient-centred childbirth guidance supports clear communication, pain-relief strategies, mobility during labour and a companion of choice as important elements of quality maternity care, subject to the woman’s circumstances and healthcare setting.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: DURING LABOUR (6th div) */}
      {/* ========================================================================= */}
      <section id="journey" className="scroll-mt-[100px] bg-white py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              DURING LABOUR
            </p>
            <h2 className="mt-3 font-display text-[30px] font-bold leading-tight text-ink sm:text-[38px]">
              What Happens During Labour?
            </h2>
            <p className="mt-4 text-[16.5px] leading-[1.7] text-muted">
              No two labours follow exactly the same pattern. Your maternity team will monitor how you and your baby are doing and guide you as labour progresses.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Early Labour",
                desc: "Contractions begin and the cervix gradually starts to change.",
                bg: "bg-cream/40",
              },
              {
                step: "02",
                title: "Established Labour",
                desc: "Contractions generally become stronger and more regular as the cervix continues to open.",
                bg: "bg-blush/40",
              },
              {
                step: "03",
                title: "Birth",
                desc: "As labour progresses and the cervix becomes fully dilated, you are guided through the birth of your baby.",
                bg: "bg-sky/40",
              },
              {
                step: "04",
                title: "After Birth",
                desc: "The immediate post-birth period includes care for you and your newborn, along with support for feeding and early recovery.",
                bg: "bg-pink/40",
              },
            ].map((stage, i) => (
              <Reveal
                key={stage.step}
                delay={i * 60}
                className={`relative flex flex-col justify-between rounded-[24px] border border-border/80 ${stage.bg} p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brown/40 hover:shadow-[0_12px_32px_rgba(46,36,33,0.06)]`}
              >
                <div>
                  <span className="inline-block font-display text-[15px] font-bold tracking-wider text-coral">
                    STAGE {stage.step}
                  </span>
                  <h3 className="mt-3 font-display text-[20px] font-bold text-ink">
                    {stage.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">
                    {stage.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* WHO Progression Note */}
          <div className="mt-8 rounded-2xl border border-border/70 bg-cream/35 p-5 sm:p-6">
            <p className="text-[14.5px] leading-relaxed text-ink/85">
              <strong className="font-semibold text-ink">Individual pace of labour:</strong> The pace of labour varies considerably between individuals; WHO specifically notes that labour progression should not be reduced to a single universal cervical-dilation rate.
            </p>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: YOUR BIRTH EXPERIENCE (7th div) */}
      {/* ========================================================================= */}
      <section id="preferences" className="scroll-mt-[100px] bg-cream/45 py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              YOUR BIRTH EXPERIENCE
            </p>
            <h2 className="mt-3 font-display text-[30px] font-bold leading-tight text-ink sm:text-[38px]">
              Your Preferences Matter
            </h2>
            <p className="mt-3.5 text-[16.5px] leading-[1.65] text-muted">
              Birth preparation is also an opportunity to talk openly about what matters to you.
            </p>
            <p className="mt-2 text-[15px] font-semibold text-ink/85">
              Depending on your pregnancy, labour and the clinical situation, discussions may include:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { title: "Movement and positions during labour", icon: "movement" },
              { title: "Breathing and relaxation techniques", icon: "breathing" },
              { title: "Pain-relief options", icon: "pulse" },
              { title: "Birth-partner involvement", icon: "partner" },
              { title: "Immediate care after birth", icon: "baby" },
              { title: "Breastfeeding and lactation support", icon: "lactation" },
              { title: "Postpartum recovery", icon: "recovery" },
            ].map((pref, i) => (
              <Reveal
                key={pref.title}
                delay={i * 40}
                className="group flex items-center gap-3.5 rounded-[20px] border border-border/80 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-brown/40 hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blush text-rose">
                  <SectionIcon type={pref.icon} />
                </span>
                <span className="text-[14.5px] font-semibold leading-snug text-ink group-hover:text-brown transition-colors">
                  {pref.title}
                </span>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-rose/30 bg-blush/50 p-5 sm:p-6 max-w-3xl">
            <p className="text-[15px] font-medium leading-relaxed text-ink/90">
              Your preferences are discussed alongside the wellbeing of you and your baby.
            </p>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: IMPORTANT CLINICAL SECTION (8th div) */}
      {/* ========================================================================= */}
      <section id="clinical-safety" className="scroll-mt-[100px] bg-white py-16 md:py-24 border-b border-border/60">
        <Container className="max-w-4xl">
          <div className="rounded-[32px] border border-border/90 bg-cream/35 p-8 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(46,36,33,0.04)]">
            <div className="flex items-center gap-2 text-rose">
              <SectionIcon type="shield-alert" />
              <p className="text-[13px] font-bold uppercase tracking-[0.14em]">
                SAFETY &amp; CLINICAL FLEXIBILITY
              </p>
            </div>

            <h2 className="mt-4 font-display text-[28px] font-bold leading-tight text-ink sm:text-[34px]">
              What if Labour Does Not Go as Planned?
            </h2>

            <div className="mt-5 space-y-4 text-[16px] leading-[1.7] text-muted">
              <p>
                A birth plan is a guide, not a prediction of exactly how labour will unfold.
              </p>
              <p>
                Sometimes labour may progress differently than expected or a medical concern may arise. Your obstetric and maternity team will explain what is happening and discuss the appropriate next steps with you.
              </p>
              <p>
                This may include additional monitoring, assistance during vaginal birth or Caesarean birth when clinically required.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-brown/30 bg-white p-6 sm:p-7 shadow-xs">
              <p className="text-[16.5px] font-semibold leading-relaxed text-ink">
                The goal is safe, respectful and appropriate care for both mother and baby — not achieving one particular type of birth at any cost.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: CONNECTED CARE (9th div) */}
      {/* ========================================================================= */}
      <section id="connected-care" className="scroll-mt-[100px] bg-cream/40 py-16 md:py-24 border-b border-border/60">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              CONNECTED CARE
            </p>
            <h2 className="mt-3 font-display text-[30px] font-bold leading-tight text-ink sm:text-[38px]">
              Care Beyond the Delivery Room
            </h2>
            <p className="mt-3.5 text-[16.5px] leading-[1.65] text-muted">
              BirthWave’s maternity care can connect your pregnancy, childbirth and recovery journey through:
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pregnancy & Antenatal Care",
                desc: "Regular pregnancy monitoring and guidance.",
                icon: "antenatal",
              },
              {
                title: "Childbirth Education",
                desc: "Preparation for labour, delivery and the early days after birth.",
                icon: "education",
              },
              {
                title: "Pregnancy Yoga & Movement",
                desc: "Pregnancy-appropriate movement where suitable.",
                icon: "movement",
              },
              {
                title: "Nutrition Support",
                desc: "Guidance throughout pregnancy and recovery.",
                icon: "nutrition",
              },
              {
                title: "Lactation Support",
                desc: "Breastfeeding preparation and support after birth.",
                icon: "lactation",
              },
              {
                title: "Postpartum Recovery",
                desc: "Support as your body recovers following childbirth.",
                icon: "recovery",
              },
            ].map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 50}
                className="group flex flex-col justify-between rounded-[22px] border border-border/80 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(46,36,33,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-brown/40 hover:shadow-[0_12px_32px_rgba(46,36,33,0.08)]"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-cream/70 shadow-xs transition-colors group-hover:bg-blush">
                    <SectionIcon type={card.icon} />
                  </span>
                  <h3 className="mt-4 font-display text-[17.5px] font-bold text-ink transition-colors group-hover:text-brown">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: FAQs (10th div) */}
      {/* ========================================================================= */}
      <section id="faqs" className="scroll-mt-[100px] bg-white py-16 md:py-24 border-b border-border/60">
        <Container className="max-w-3xl">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              NORMAL DELIVERY FAQ
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-ink sm:text-[34px]">
              Frequently Asked Questions About Normal Vaginal Delivery
            </h2>
          </div>

          <div className="mt-10 flex flex-col gap-3.5">
            {faqsData.map((item, i) => {
              const open = openFaqIndex === i;
              return (
                <Reveal
                  key={item.q}
                  delay={i * 40}
                  className="overflow-hidden rounded-2xl border border-border bg-cream/35 transition-colors hover:border-brown/40 shadow-xs"
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenFaqIndex(open ? null : i)}
                    className="flex min-h-[62px] w-full items-center justify-between gap-4 px-6 py-4.5 text-left"
                  >
                    <span className="text-[16px] font-semibold text-ink">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blush text-rose transition-transform duration-200 ${
                        open ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M8 1v14M1 8h14"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden text-[15px] leading-relaxed text-muted transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden px-6 pb-5 text-ink/80">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11: FINAL CTA (11th div) */}
      {/* ========================================================================= */}
      <section className="bg-blush py-14 md:py-18">
        <Container className="flex flex-col items-start justify-between gap-8 xl:flex-row xl:items-center">
          <div className="max-w-xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              START YOUR JOURNEY
            </p>
            <h2 className="mt-2 font-display text-[28px] sm:text-[34px] font-bold leading-tight text-ink">
              Thinking About a Normal Vaginal Delivery?
            </h2>
            <p className="mt-2 text-[17px] font-semibold text-ink/90">
              Start the conversation during pregnancy.
            </p>
            <p className="mt-2 text-[15.5px] leading-relaxed text-muted">
              Meet the BirthWave team to discuss your pregnancy, birth preparation and preferences.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3.5">
            <a
              href="#contact-form"
              className="rounded-full bg-brown px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-150 hover:bg-brown-600 active:scale-[0.98] active:bg-brown-700 shadow-[0_4px_16px_rgba(97,62,55,0.2)]"
            >
              Book an Appointment
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-white px-6 py-3.5 text-[15px] font-semibold text-ink transition-all duration-150 hover:border-brown hover:text-brown active:scale-[0.98] shadow-xs"
            >
              Chat on WhatsApp
            </a>
            <a
              href={site.phoneHref}
              className="rounded-full border border-border bg-white px-6 py-3.5 text-[15px] font-semibold text-ink transition-all duration-150 hover:border-brown hover:text-brown active:scale-[0.98] shadow-xs"
            >
              Call: {site.phone}
            </a>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 12: ENQUIRY SECTION (12th div) */}
      {/* ========================================================================= */}
      <section id="contact-form" className="scroll-mt-[100px] bg-white py-16 md:py-20 pb-24 md:pb-20">
        <Container className="max-w-2xl">
          <h2 className="font-display text-[26px] font-bold leading-tight text-ink">
            Send an enquiry
          </h2>
          <p className="mt-2 text-[15px] text-muted">
            Prefer to write ahead? Fill this in and continue on WhatsApp.
          </p>
          <div className="mt-6">
            <Suspense fallback={null}>
              <EnquiryForm defaultService="normal-birth-delivery" />
            </Suspense>
          </div>
        </Container>
      </section>
    </main>
  );
}
