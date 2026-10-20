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

  if (!Array.isArray(users)) {
    throw new Error("Invalid demo-user data.");
  }

  return users as RegisteredDemoUser[];
};

export const saveRegisteredDemoUsers = (users: RegisteredDemoUser[]): void => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const saveDemoSession = (
  session: DemoSession,
  rememberMe: boolean,
): void => {
  // Avoid keeping a stale session in the other storage.
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_KEY);

  const storage = rememberMe ? localStorage : sessionStorage;
  storage.setItem(SESSION_KEY, JSON.stringify(session));
};
