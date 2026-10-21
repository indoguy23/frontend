export type DemoAccountRole = "admin" | "vendor" | "customer";

export interface RegisteredDemoUser {
  fullName: string;
  email: string;
  passwordHash: string;
  role: "customer" | "vendor";
  storeName: string;
}

export interface DemoSession {
  email: string;
  fullName: string;
  role: DemoAccountRole;
  storeName: string;
  loggedInAt: string;
}

const USERS_KEY = "markethub-demo-users";
const SESSION_KEY = "markethub-demo-session";

const isDemoAccountRole = (role: unknown): role is DemoAccountRole =>
  role === "admin" || role === "vendor" || role === "customer";

const isRegisteredDemoUser = (value: unknown): value is RegisteredDemoUser => {
  if (typeof value !== "object" || value === null) return false;

  const user = value as Record<string, unknown>;

  return (
    typeof user.fullName === "string" &&
    typeof user.email === "string" &&
    typeof user.passwordHash === "string" &&
    (user.role === "customer" || user.role === "vendor") &&
    typeof user.storeName === "string"
  );
};

const isDemoSession = (value: unknown): value is DemoSession => {
  if (typeof value !== "object" || value === null) return false;

  const session = value as Record<string, unknown>;

  return (
    typeof session.email === "string" &&
    session.email.trim().length > 0 &&
    typeof session.fullName === "string" &&
    isDemoAccountRole(session.role) &&
    typeof session.storeName === "string" &&
    typeof session.loggedInAt === "string"
  );
};

export const hashDemoPassword = async (password: string): Promise<string> => {
  const encodedPassword = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encodedPassword);

  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

export const getRegisteredDemoUsers = (): RegisteredDemoUser[] => {
  const storedUsers = localStorage.getItem(USERS_KEY);

  if (!storedUsers) return [];

  const users: unknown = JSON.parse(storedUsers);

  if (!Array.isArray(users) || !users.every(isRegisteredDemoUser)) {
    throw new Error("Invalid demo-user data.");
  }

  return users;
};

export const saveRegisteredDemoUsers = (users: RegisteredDemoUser[]): void => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getDemoSession = (): DemoSession | null => {
  // Try both stores. A malformed entry in one must not hide a valid entry
  // in the other.
  for (const storage of [localStorage, sessionStorage]) {
    try {
      const storedSession = storage.getItem(SESSION_KEY);

      if (!storedSession) continue;

      const parsedSession: unknown = JSON.parse(storedSession);

      if (isDemoSession(parsedSession)) {
        return parsedSession;
      }
    } catch {
      // Continue to the other storage if reading or parsing fails.
    }
  }

  return null;
};

export const saveDemoSession = (
  session: DemoSession,
  rememberMe: boolean,
): void => {
  // Do not leave an old session in the other store.
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_KEY);

  const storage = rememberMe ? localStorage : sessionStorage;
  storage.setItem(SESSION_KEY, JSON.stringify(session));
};

export const clearDemoSession = (): void => {
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_KEY);
};
