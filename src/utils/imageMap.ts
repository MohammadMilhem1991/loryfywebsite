import { Language } from "../types";

const EN_TO_AR_MAP: Record<string, string> = {
  "https://i.postimg.cc/wTbd85QS/Mobile-home-screen-4K-v2.png": "https://i.postimg.cc/HLDXjw65/home-screen-AR.png",
  "https://i.postimg.cc/9FnmNCwp/Mobile-home-screen-4K.png": "https://i.postimg.cc/HLDXjw65/home-screen-AR.png",
  "https://i.postimg.cc/wvr5hqCb/home-screen-AR.png": "https://i.postimg.cc/HLDXjw65/home-screen-AR.png",
  "https://i.postimg.cc/J7jC4Dm2/home-screen-AR.png": "https://i.postimg.cc/HLDXjw65/home-screen-AR.png",
  "https://i.postimg.cc/ZRNSVkhP/Mobile-app-signup-(4k)-v2.png": "https://i.postimg.cc/3JxPxdtG/singup-AR.png",
  "https://i.postimg.cc/Kzm0vQSp/Mobile-app-chat-company-partner-(4k)-v2.png": "https://i.postimg.cc/NFfPFzkc/chat-1-AR.png",
  "https://i.postimg.cc/T27DpQv7/Mobile-app-chat-resturent-partner-(4k).png": "https://i.postimg.cc/5yNkyRSM/chat-2-AR.png",
  "https://i.postimg.cc/gcSZn4bM/Mobile-app-chat-salon-partner-(4k)-v2.png": "https://i.postimg.cc/C5L65Qsp/chat-3-AR.png",
  "https://i.postimg.cc/BQPB3RPb/Mobile-app-chat-salon-partner-(4k)-local-guys-v2.png": "https://i.postimg.cc/6q51qmfw/chat-4-AR.png",
  "https://i.postimg.cc/bNR4JpPy/Create-ad-sell.png": "https://i.postimg.cc/t40tmcn9/Create-ad-sell-AR.png",
  "https://i.postimg.cc/X7gtJ4WV/Create-ad-Find-partner.png": "https://i.postimg.cc/6psL1P4N/Create-ad-Find-partner-AR.png",
  "https://i.postimg.cc/Y9hbpBxZ/1.png": "https://i.postimg.cc/Z5kFDQvT/1-AR.png",
  "https://i.postimg.cc/hjP12Wwr/2.png": "https://i.postimg.cc/zGmSPQHY/2-AR.png",
  "https://i.postimg.cc/wvTQw8PF/3.png": "https://i.postimg.cc/W1R6fyqv/3-AR.png",
  "https://i.postimg.cc/sXD4Td8m/4.png": "https://i.postimg.cc/P5GzF7vH/5-AR.png",
  "https://i.postimg.cc/TYVspGrn/e1.png": "https://i.postimg.cc/Y9jXYysg/e1-AR.png",
  "https://i.postimg.cc/jdH1LKzz/e2.png": "https://i.postimg.cc/zB3dKPcg/e2-AR.png",
  "https://i.postimg.cc/kXQHB9xN/e3.png": "https://i.postimg.cc/RFqPKbDc/e3-AR.png",
  "https://i.postimg.cc/Bbg1VR3N/e4.png": "https://i.postimg.cc/vmNhPghB/e4-AR.png",
  "https://i.postimg.cc/zXCQV5nd/e5.png": "https://i.postimg.cc/CLC4BgKd/e5-AR.png",
  "https://i.postimg.cc/02Y4bxpV/e6.png": "https://i.postimg.cc/FR1P3nB3/e6-AR.png"
};

export function getLocalizedImage(src: string, currentLang: Language): string {
  if (currentLang === "ar") {
    return EN_TO_AR_MAP[src] || src;
  }
  return src;
}
