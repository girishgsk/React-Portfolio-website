import React from "react";
import "../Styles/notfound404.css";

const Notfound404 = () => {
  return (
    <div>
      <header>
        <h1>404 - Page Not Found</h1>
      </header>
      <main>
        <p className="not">
          Sorry, the page you are looking for does not exist.
        </p>
        <a href="/">Go back to Home</a>
      </main>
      <footer>
        <p>&copy; 2024 Girish Kumbhar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Notfound404;
