import type { User } from "./types";

/**
 * Auth service abstraction.
 * Currently backed by local storage mock state. Replace the bodies of these
 * functions with Supabase Auth calls without touching the UI layer.
 */

const KEY = "solvoriz.auth.user";

const delay = (ms = 500) => new Promise((r) => setTimeout(r, ms));

function read(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}

function write(user: User | null) {
  if (typeof window === "undefined") return;
  if (user) window.localStorage.setItem(KEY, JSON.stringify(user));
  else window.localStorage.removeItem(KEY);
  window.dispatchEvent(new Event("solvoriz:auth"));
}

export const authService = {
  getUser(): User | null {
    return read();
  },

  async signIn(email: string, _password: string): Promise<User> {
    await delay();
    const user: User = {
      id: crypto.randomUUID(),
      name: email.split("@")[0] || "Member",
      email,
    };
    write(user);
    return user;
  },

  async signUp(input: {
    name: string;
    email: string;
    password: string;
    company: string;
  }): Promise<User> {
    await delay();
    const user: User = {
      id: crypto.randomUUID(),
      name: input.name,
      email: input.email,
      company: input.company,
    };
    write(user);
    return user;
  },

  async signInWithGoogle(): Promise<User> {
    await delay(700);
    const user: User = {
      id: crypto.randomUUID(),
      name: "Google User",
      email: "user@example.com",
    };
    write(user);
    return user;
  },

  async signOut(): Promise<void> {
    await delay(150);
    write(null);
  },

  subscribe(listener: () => void): () => void {
    if (typeof window === "undefined") return () => {};
    window.addEventListener("solvoriz:auth", listener);
    window.addEventListener("storage", listener);
    return () => {
      window.removeEventListener("solvoriz:auth", listener);
      window.removeEventListener("storage", listener);
    };
  },
};
