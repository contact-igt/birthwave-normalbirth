"use client";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/page/PageHero";
import { WhoItsFor } from "@/components/page/WhoItsFor";
import { DoctorTrust } from "@/components/page/DoctorTrust";
import { JourneySteps } from "@/components/page/JourneySteps";
import { ServiceApproach } from "@/components/page/ServiceApproach";
import { VideoExperience } from "@/components/home/VideoExperience";
import { PageFAQ } from "@/components/page/PageFAQ";
import { PageCTA } from "@/components/page/PageCTA";
import { EnquirySection } from "@/components/page/EnquirySection";
import type { ServiceContent } from "@/lib/services";
import { getTeamMember, team } from "@/lib/team";
import { Reveal } from "@/components/motion/Reveal";

function parsePoint(point: string) {
  const separatorMatch = point.match(/^(.*?)\s*(?:—|–|-|:)\s+(.*)$/);
  if (separatorMatch && separatorMatch[1].length < 60) {
    return {
      title: separatorMatch[1].trim(),
      description: separatorMatch[2].trim(),
    };
  }
  return {
    title: null,
    description: point.trim(),
  };
}

function PointIcon({ index }: { index: number }) {
  const icons = [
    <svg key="0" className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3"/><path d="M9 12.5v3.5a3 3 0 0 0 6 0v-2"/><circle cx="18" cy="10" r="3"/></svg>,
    <svg key="1" className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    <svg key="2" className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.2A7 7 0 0 1 11 20z"/><path d="m2 21 7-7"/></svg>,
    <svg key="3" className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2.5"/><path d="m5 17 3-6 4 2 4-2 3 6"/><path d="M12 13v8"/></svg>,
    <svg key="4" className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
    <svg key="5" className="h-5 w-5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
  ];
  return icons[index % icons.length];
}

export function ServiceLandingPage({ service }: { service: ServiceContent }) {
  const expert = getTeamMember(service.expertSlug) ?? team[0];

  return (
    <main>
      <PageHero
        eyebrow={service.hero.eyebrow}
        heading={service.hero.heading}
        intro={service.hero.intro}
        accent={service.accent}
        image={service.image}
        illustration={service.illustration}
      />

      <section id="care-support" className="scroll-mt-[100px] bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              Birth Planning &amp; Preparation
            </p>
            <h2 className="mt-3 font-display text-[30px] font-bold leading-tight text-ink sm:text-[34px]">
              {service.explanation.heading}
            </h2>
            <p className="mt-3.5 text-[16px] leading-[1.65] text-muted">
              {service.explanation.body}
            </p>
          </div>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {service.explanation.points.map((point, index) => {
              const { title, description } = parsePoint(point);
              return (
                <Reveal
                  key={point}
                  as="li"
                  delay={index * 60}
                  className="group relative flex flex-col justify-start rounded-[22px] border border-border/80 bg-cream/35 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brown/40 hover:bg-white hover:shadow-[0_12px_32px_rgba(46,36,33,0.08)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-white shadow-[0_2px_8px_rgba(46,36,33,0.04)] transition-colors group-hover:border-brown/30 group-hover:bg-blush">
                      <PointIcon index={index} />
                    </span>
                    <div className="min-w-0 flex-1">
                      {title ? (
                        <h3 className="font-display text-[17px] sm:text-[18px] font-bold leading-snug text-ink transition-colors group-hover:text-brown">
                          {title}
                        </h3>
                      ) : null}
                      <p
                        className={`leading-relaxed text-muted ${
                          title
                            ? "mt-2 text-[14.5px]"
                            : "font-medium text-[15px] text-ink/80"
                        }`}
                      >
                        {description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {service.whoItsFor && service.whoItsFor.length > 0 && (
        <WhoItsFor points={service.whoItsFor} />
      )}

      {/* VIDEO BEFORE JOURNEY */}
      <div id="video" className="scroll-mt-[100px]">
        <VideoExperience />
      </div>

      <div id="journey" className="scroll-mt-[100px]">
        <JourneySteps
          eyebrow={service.journey.eyebrow}
          heading={service.journey.heading}
          intro={service.journey.intro}
          steps={service.journey.steps}
        />
      </div>

      <div id="doctor" className="scroll-mt-[100px]">
        <DoctorTrust
          member={expert}
          heading={service.doctorTrust.heading}
          body={service.doctorTrust.body}
          bullets={service.doctorTrust.bullets}
        />
      </div>

      {service.approach && (
        <div id="approach" className="scroll-mt-[100px]">
          <ServiceApproach
            eyebrow={service.approach.eyebrow}
            heading={service.approach.heading}
            body={service.approach.body}
            items={service.approach.items}
          />
        </div>
      )}

      <div id="faqs" className="scroll-mt-[100px]">
        <PageFAQ heading={`Questions about ${service.title}`} faqs={service.faqs} />
      </div>

      <PageCTA heading={service.cta.heading} body={service.cta.body} />

      <div id="contact-form" className="scroll-mt-[100px]">
        <EnquirySection defaultService={service.slug} id="enquiry-form" />
      </div>
    </main>
  );
}
