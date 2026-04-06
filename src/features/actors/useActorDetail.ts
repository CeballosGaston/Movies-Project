import { useState, useEffect } from "react";
import { getActorDetails } from "./actor.service";
import type { ActorDetails } from "./actors.type";

export const useActorDetail = (id: string) => {
  const [actor, setActor] = useState<ActorDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await getActorDetails(id);
        setActor(data);
      } catch (err) {
        console.error(err);
        setError("Error loading actor details");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  return { actor, loading, error };
};