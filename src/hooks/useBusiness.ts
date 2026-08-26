import { useEffect, useState } from "react";
import { geoApi } from "@/services/geoApi";
import type { Business } from "@/services/types";

export function useBusiness() {
  const [business, setBusiness] = useState<Business | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sync = () => setBusiness(geoApi.getBusiness());
    sync();
    setLoading(false);
    return geoApi.subscribe(sync);
  }, []);

  return { business, loading };
}
