import FooterLogo from "../ui/Footer/FooterLogo";

export default function Footer() {
  return (
    <footer className="top-0 left-0 w-full px-2 md:px-0 lg:px-96 z-10 shadow-md bg-gray-600">
      <div className="px-4 py-6 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white dark:text-gray-300 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a href="https://ddfrmnsh.tech/">Dede Firmansah</a>. All Rights
          Reserved.
        </span>
        <FooterLogo />
      </div>
    </footer>
  );
}
