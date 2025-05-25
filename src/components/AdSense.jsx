import { useEffect } from "react";

// Componente para anúncios responsivos
export const AdSenseResponsive = ({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
}) => {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4622453145159228" // Substitua pelo seu ID
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      />
    </div>
  );
};

// Componente para anúncio banner horizontal
export const AdSenseBanner = ({ adSlot, className = "" }) => {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className={`adsense-banner ${className}`}>
      <ins
        className="adsbygoogle"
        style={{
          display: "inline-block",
          width: "100%",
          height: "90px",
        }}
        data-ad-client="ca-pub-4622453145159228" // Substitua pelo seu ID
        data-ad-slot={adSlot}
      />
    </div>
  );
};

// Componente para anúncio quadrado/retângulo
export const AdSenseSquare = ({ adSlot, className = "" }) => {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className={`adsense-square ${className}`}>
      <ins
        className="adsbygoogle"
        style={{
          display: "inline-block",
          width: "300px",
          height: "250px",
        }}
        data-ad-client="ca-pub-4622453145159228" // Substitua pelo seu ID
        data-ad-slot={adSlot}
      />
    </div>
  );
};

// Componente para anúncio vertical (sidebar)
export const AdSenseVertical = ({ adSlot, className = "" }) => {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className={`adsense-vertical ${className}`}>
      <ins
        className="adsbygoogle"
        style={{
          display: "inline-block",
          width: "160px",
          height: "600px",
        }}
        data-ad-client="ca-pub-4622453145159228" // Substitua pelo seu ID
        data-ad-slot={adSlot}
      />
    </div>
  );
};

// HOC para lazy loading de anúncios
export const LazyAdSense = ({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref}>
      {isVisible ? children : <div style={{ minHeight: "250px" }} />}
    </div>
  );
};
