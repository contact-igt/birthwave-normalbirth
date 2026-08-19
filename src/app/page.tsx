import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BirthDeliveryCarePage } from "@/components/birth-delivery-care/BirthDeliveryCarePage";

export const metadata: Metadata = {
  title: "Normal Vaginal Delivery – Preparing for a Normal Vaginal Delivery | The Birth Wave Chennai",
  description:
    "Preparing for a Normal Vaginal Delivery at BirthWave. Antenatal care, birth preparation, labour support, and post-delivery recovery with Dr. Santoshi Nandigam in Nungambakkam, Chennai.",
  keywords: [
    "Normal Vaginal Delivery Chennai",
    "Normal Delivery Chennai",
    "Normal Birth Preparation",
    "Dr. Santoshi Nandigam",
    "Obstetrician Nungambakkam",
    "Labour Stages and Preparation",
    "Childbirth Education Chennai",
  ],
  openGraph: {
    title: "Normal Vaginal Delivery – Preparing for a Normal Vaginal Delivery | The Birth Wave",
    description:
      "Every pregnancy and every labour is different. At BirthWave, we help you understand your pregnancy, prepare for labour and discuss your preferences for birth with your care team.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <BirthDeliveryCarePage />
      <Footer />
    </>
  );
}

