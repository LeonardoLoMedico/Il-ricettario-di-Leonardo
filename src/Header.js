import HeaderMenuButton from "./HeaderMenuButton";
function Header() {
  return (
    <header class="site-header">
      <div class="header-fixed">
          <HeaderMenuButton></HeaderMenuButton>
      </div>
      <div class="header-relative"></div>
    </header>
  );
}
export default Header;
