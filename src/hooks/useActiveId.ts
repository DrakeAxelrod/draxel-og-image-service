import { useEffect, useState } from "react";

export const useActiveId = (itemIds: string[]) => {
  const [activeId, setActiveId] = useState(``);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` },
    );
    itemIds.forEach((id: string) =>
      observer.observe(document.getElementById(id) as Element),
    );
    return () => {
      itemIds.forEach((id: string) =>
        observer.unobserve(document.getElementById(id) as Element),
      );
    };
  }, [itemIds]);
  return activeId;
};
