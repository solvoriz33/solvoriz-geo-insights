import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { authService } from "@/services/auth";
import type { User } from "@/services/types";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  signIn: typeof authService.signIn;
  signUp: typeof authService.signUp;
  signInWithGoogle: typeof authService.signInWithGoogle;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sync = () => setUser(authService.getUser());
    sync();
    setLoading(false);
    return authService.subscribe(sync);
  }, []);

  const signOut = useCallback(async () => {
    await authService.signOut();
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      signIn: authService.signIn,
      signUp: authService.signUp,
      signInWithGoogle: authService.signInWithGoogle,
      signOut,
    }),
    [user, loading, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
