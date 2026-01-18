import { useState, useEffect } from 'react';

interface ContentData {
  hero: any;
  services: any;
  about: any;
  portfolio: any;
  contact: any;
  footer: any;
}

export const useContent = () => {
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/content.json');
        if (!response.ok) {
          throw new Error('Failed to fetch content');
        }
        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { content, loading, error };
};
