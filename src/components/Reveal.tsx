import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: 'div' | 'section' | 'span' | 'li';
};

export function Reveal({ children, delay = 0, duration, className = '', as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = {};
  if (delay) style.transitionDelay = `${delay}ms`;
  if (duration) style.transitionDuration = `${duration}ms`;

  return (
    <Tag
      ref={ref as never}
      style={Object.keys(style).length ? style : undefined}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
