function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <h3>Silver Club</h3>
      <a href="https://www.facebook.com/profile.php?id=100091465431429">
        <img src="https://e7.pngegg.com/pngimages/884/642/png-clipart-logo-facebook-inc-round-logo-desktop-wallpaper-black-and-white.png" alt="facebook logo" />
      </a>
      <p>Join the Club</p>
      <p>Silver Club &copy; {year}</p>
    </footer>
  );
}

export default Footer;
