import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <section className="container m-auto">
      <p>home</p>
      {t("test")}
    </section>
  );
};
export default HomePage;
