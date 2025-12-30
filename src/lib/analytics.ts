// Google Analytics 4 Event Tracking

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

type EventParams = Record<string, string | number | boolean>;

export const trackEvent = (eventName: string, params?: EventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
    console.log(`[GA4] Event: ${eventName}`, params);
  }
};

// Eventos de Subscrição
export const trackSubscriptionClick = (location: string) => {
  trackEvent('subscription_click', {
    event_category: 'engagement',
    event_label: location,
  });
};

export const trackSubscriptionFormOpen = (location: string) => {
  trackEvent('subscription_form_open', {
    event_category: 'engagement',
    event_label: location,
  });
};

export const trackSubscriptionFormSubmit = (success: boolean) => {
  trackEvent('subscription_form_submit', {
    event_category: 'conversion',
    event_label: success ? 'success' : 'error',
  });
};

// Eventos de Navegação
export const trackNavClick = (section: string) => {
  trackEvent('navigation_click', {
    event_category: 'navigation',
    event_label: section,
  });
};

export const trackSectionView = (section: string) => {
  trackEvent('section_view', {
    event_category: 'engagement',
    event_label: section,
  });
};

// Eventos de Interação
export const trackCarouselInteraction = (carousel: string, action: 'next' | 'prev' | 'dot') => {
  trackEvent('carousel_interaction', {
    event_category: 'engagement',
    event_label: carousel,
    action: action,
  });
};

export const trackFAQInteraction = (question: string) => {
  trackEvent('faq_click', {
    event_category: 'engagement',
    event_label: question,
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    event_category: 'contact',
    event_label: 'footer_phone',
  });
};

export const trackEmailClick = () => {
  trackEvent('email_click', {
    event_category: 'contact',
    event_label: 'footer_email',
  });
};

export const trackScrollToTop = () => {
  trackEvent('scroll_to_top', {
    event_category: 'navigation',
  });
};

// Eventos de Scroll
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    depth: percentage,
  });
};
