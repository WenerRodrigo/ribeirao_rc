import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkRole = async (userId: string) => {
      try {
        const { data } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", userId)
          .eq("role", "admin")
          .maybeSingle();

        setIsAdmin(!!data);
      } catch (err) {
        console.error("Erro ao verificar role:", err);
        setIsAdmin(false);
      }
    };

    const syncAuthState = (currentUser: User | null) => {
      setUser(currentUser);

      if (!currentUser) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      void checkRole(currentUser.id).finally(() => {
        setLoading(false);
      });
    };

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      syncAuthState(session?.user ?? null);
    });

    void supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        syncAuthState(session?.user ?? null);
      })
      .catch((err) => {
        console.error("Erro ao recuperar sessão:", err);
        setUser(null);
        setIsAdmin(false);
        setLoading(false);
      });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    return supabase.auth.signInWithPassword({ email, password });
  };

  const signUp = async (email: string, password: string) => {
    return supabase.auth.signUp({ email, password, options: { emailRedirectTo: window.location.origin } });
  };

  const signOut = async () => {
    return supabase.auth.signOut();
  };

  return { user, isAdmin, loading, signIn, signUp, signOut };
}
