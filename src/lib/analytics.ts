// Google Analytics 4 + GTM Event Tracking

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: Record<string, unknown>[];
  }
}

type EventParams = Record<string, string | number | boolean>;

// Push event to dataLayer for GTM
const pushToDataLayer = (eventName: string, params?: EventParams) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
};

// Track event to both GA4 and GTM dataLayer
export const trackEvent = (eventName: string, params?: EventParams) => {
  if (typeof window !== 'undefined') {
    // Push to dataLayer for GTM
    pushToDataLayer(eventName, params);
    
    // Also send to GA4 via gtag
    if (window.gtag) {
      window.gtag('event', eventName, params);
    }
    
    console.log(`[Analytics] Event: ${eventName}`, params);
  }
};

// ============================================
// EVENTOS DE SUBSCRIÇÃO (Conversões principais)
// ============================================

export const trackSubscriptionClick = (location: string) => {
  trackEvent('subscription_click', {
    event_category: 'engagement',
    event_label: location,
    button_location: location,
  });
};

export const trackSubscriptionFormOpen = (location: string) => {
  trackEvent('subscription_form_open', {
    event_category: 'engagement',
    event_label: location,
    form_location: location,
  });
};

export const trackSubscriptionFormSubmit = (success: boolean) => {
  trackEvent('subscription_form_submit', {
    event_category: 'conversion',
    event_label: success ? 'success' : 'error',
    conversion_success: success,
  });
  
  // Evento de conversão específico para GTM
  if (success) {
    trackEvent('generate_lead', {
      event_category: 'conversion',
      currency: 'EUR',
      value: 5.95,
    });
  }
};

export const trackSubscriptionStep = (step: number, stepName: string) => {
  trackEvent('subscription_step', {
    event_category: 'funnel',
    step_number: step,
    step_name: stepName,
  });
};

// ============================================
// EVENTOS DE NAVEGAÇÃO
// ============================================

export const trackNavClick = (section: string) => {
  trackEvent('navigation_click', {
    event_category: 'navigation',
    event_label: section,
    clicked_section: section,
  });
};

export const trackSectionView = (section: string) => {
  trackEvent('section_view', {
    event_category: 'engagement',
    event_label: section,
    viewed_section: section,
  });
};

// ============================================
// EVENTOS DE INTERAÇÃO
// ============================================

export const trackCarouselInteraction = (carousel: string, action: 'next' | 'prev' | 'dot') => {
  trackEvent('carousel_interaction', {
    event_category: 'engagement',
    event_label: carousel,
    carousel_name: carousel,
    interaction_type: action,
  });
};

export const trackFAQInteraction = (question: string) => {
  trackEvent('faq_click', {
    event_category: 'engagement',
    event_label: question,
    faq_question: question,
  });
};

export const trackCarHover = (carName: string, carNumber: number) => {
  trackEvent('car_hover', {
    event_category: 'engagement',
    car_name: carName,
    car_number: carNumber,
  });
};

// ============================================
// EVENTOS DE CONTACTO
// ============================================

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    event_category: 'contact',
    event_label: 'footer_phone',
    contact_method: 'phone',
  });
};

export const trackEmailClick = () => {
  trackEvent('email_click', {
    event_category: 'contact',
    event_label: 'footer_email',
    contact_method: 'email',
  });
};

// ============================================
// EVENTOS DE SCROLL
// ============================================

export const trackScrollToTop = () => {
  trackEvent('scroll_to_top', {
    event_category: 'navigation',
  });
};

export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    scroll_percentage: percentage,
  });
};

// ============================================
// EVENTOS DE PÁGINA
// ============================================

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    event_category: 'navigation',
    page_name: pageName,
  });
};

// ============================================
// INICIALIZAÇÃO DE SCROLL TRACKING
// ============================================

let scrollMilestones = { 25: false, 50: false, 75: false, 100: false };

export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

    const milestones = [25, 50, 75, 100] as const;
    
    milestones.forEach((milestone) => {
      if (scrollPercent >= milestone && !scrollMilestones[milestone]) {
        scrollMilestones[milestone] = true;
        trackScrollDepth(milestone);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Reset scroll milestones (útil para SPA navigation)
export const resetScrollMilestones = () => {
  scrollMilestones = { 25: false, 50: false, 75: false, 100: false };
};
