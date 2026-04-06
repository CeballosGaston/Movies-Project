import { useState, useEffect } from "react";
import { getPersonDetails } from "./person.service";
import type { PersonDetails } from "../shared/types/person.type";

export const useActorDetail = (id: string) => {
  const [actor, setActor] = useState<PersonDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await getPersonDetails(id);
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
