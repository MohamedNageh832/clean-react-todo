import { ThemeToggler } from "../components";
import Logo from "./logo";
import { LanguageToggler } from "../components/ui";

export const Navbar = () => {
  return (
    <nav className="py-3">
      <section className="container flex-between m-auto">
        <Logo />

        <section className="flex gap-3 items-center">
          <LanguageToggler />
          <ThemeToggler />
        </section>
      </section>
    </nav>
  );
};
