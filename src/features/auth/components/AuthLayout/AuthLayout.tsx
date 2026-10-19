import type { AuthLayoutProps } from "./AuthLayout.types";
import { authLayoutStyles as styles } from "./AuthLayout.styles";

const AuthLayout = ({
  title,
  description,
  children,
  footer,
}: AuthLayoutProps) => {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.container}>
          <section className={styles.card}>
            <header className={styles.header}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{description}</p>
            </header>

            <div className={styles.content}>{children}</div>

            {footer && <footer className={styles.footer}>{footer}</footer>}
          </section>
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
