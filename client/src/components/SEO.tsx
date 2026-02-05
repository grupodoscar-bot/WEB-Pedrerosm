import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEO({ 
  title = "Pedrero Social Media - Agencia de Social Media Marketing en Badajoz",
  description = "Agencia de Social Media Marketing especializada en Instagram y TikTok. Estrategia, contenido y crecimiento para tu marca. Transformamos tu presencia digital en resultados medibles.",
  keywords = "social media marketing, agencia redes sociales, instagram marketing, tiktok marketing, contenido redes sociales, estrategia digital, badajoz, extremadura, gestión redes sociales",
  ogImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663330305411/VuacErqQgkZnYdUQ.png",
  ogType = "website"
}: SEOProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };
    
    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', window.location.href, true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
  }, [title, description, keywords, ogImage, ogType]);
  
  return null;
}
