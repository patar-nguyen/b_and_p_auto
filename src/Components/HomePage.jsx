import React, { useState, useEffect } from 'react';
import './Assets/HomePage.css';
import axios from 'axios';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const HomePage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await axios.get("http://localhost:3000/login");
        if (res.data.loggedIn) {
          setLoggedIn(true);
          setUser(res.data.user);
        } else {
          setLoggedIn(false);
          setUser(null);
        }
      } catch (err) {
        console.error("Error checking login status:", err);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:3000/logout");
      if (res.status === 200) {
        setLoggedIn(false);
        setUser(null);
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Error during logout", err);
    }
  }

  return (
    <div className="home-container">
          <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
          <div className="mainBody">
            {loggedIn ? (
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt, risus id vulputate blandit, risus turpis lacinia quam, eu varius erat risus non libero. Suspendisse euismod, lectus et hendrerit vestibulum, augue ligula interdum ipsum, ut mattis libero magna vel risus. Proin ac cursus mi, a vehicula leo. Suspendisse venenatis ipsum massa, eget varius lectus tincidunt vel. Phasellus nisl sem, vehicula sagittis scelerisque ac, imperdiet egestas turpis. Curabitur interdum velit vel quam tempor suscipit. Integer sodales orci at luctus dapibus. Quisque vulputate rutrum est nec iaculis. Nunc mauris tellus, mattis quis mi cursus, aliquam finibus mauris. Aenean lobortis felis est, et cursus orci venenatis in. Fusce nec nunc semper, iaculis tortor ullamcorper, auctor nulla.

              Donec placerat aliquam arcu non dignissim. Vivamus non est id ex euismod iaculis ut sit amet quam. Pellentesque pellentesque varius nisi sed mollis. Donec eleifend velit nisi, quis pulvinar libero maximus eu. Vivamus auctor risus in neque sollicitudin blandit. Pellentesque at ex quis mi scelerisque consectetur. Aenean sem nisl, dapibus eget consectetur sit amet, pharetra ut dui. Suspendisse potenti. Vivamus non imperdiet lorem. Quisque accumsan est quis lectus maximus semper. Integer scelerisque malesuada condimentum. Suspendisse sed diam at nunc gravida gravida et a ante. Donec semper, nisl vitae aliquet viverra, diam nulla finibus tortor, in tincidunt felis urna et augue. Nunc gravida eleifend lectus sit amet fermentum.
              
              Nunc porttitor porttitor arcu, quis pharetra magna. Pellentesque nec tristique libero, eu dapibus dolor. Praesent luctus consectetur hendrerit. Sed ultricies suscipit velit ut pharetra. Etiam velit elit, faucibus nec mauris non, dapibus lobortis felis. Nulla imperdiet varius tristique. Maecenas ut eros quis nisl bibendum porta vel sit amet lectus. Donec et convallis erat, eu elementum ex. Fusce suscipit ultricies quam, at vehicula orci lobortis rhoncus. Vestibulum vel dolor odio. Pellentesque feugiat ultricies est, non vehicula tortor tempor quis. Nunc eu erat fringilla, vehicula nunc vitae, mollis erat. Vestibulum vehicula venenatis nibh in convallis.
              
              Pellentesque tempor, purus tincidunt sollicitudin aliquet, turpis dolor elementum libero, at placerat nulla velit ut arcu. Integer tempus, ex in malesuada ultricies, tortor arcu tempus mi, non tristique arcu ligula vel purus. Ut vitae enim gravida, convallis ipsum non, tincidunt turpis. Aliquam et placerat lorem. Vestibulum venenatis dolor porttitor magna luctus, et euismod sem iaculis. Ut sed tortor non justo ultricies tristique nec eget mauris. Nullam pharetra libero velit, id ullamcorper arcu viverra a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla pharetra condimentum metus. Nunc feugiat dolor sed sem egestas accumsan. Donec vel tristique ipsum, et fermentum leo. Mauris vulputate nisl vel lectus finibus vehicula. Nam sit amet bibendum neque. Suspendisse porta mi efficitur feugiat eleifend.
              
              DoLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt, risus id vulputate blandit, risus turpis lacinia quam, eu varius erat risus non libero. Suspendisse euismod, lectus et hendrerit vestibulum, augue ligula interdum ipsum, ut mattis libero magna vel risus. Proin ac cursus mi, a vehicula leo. Suspendisse venenatis ipsum massa, eget varius lectus tincidunt vel. Phasellus nisl sem, vehicula sagittis scelerisque ac, imperdiet egestas turpis. Curabitur interdum velit vel quam tempor suscipit. Integer sodales orci at luctus dapibus. Quisque vulputate rutrum est nec iaculis. Nunc mauris tellus, mattis quis mi cursus, aliquam finibus mauris. Aenean lobortis felis est, et cursus orci venenatis in. Fusce nec nunc semper, iaculis tortor ullamcorper, auctor nulla.

              Donec placerat aliquam arcu non dignissim. Vivamus non est id ex euismod iaculis ut sit amet quam. Pellentesque pellentesque varius nisi sed mollis. Donec eleifend velit nisi, quis pulvinar libero maximus eu. Vivamus auctor risus in neque sollicitudin blandit. Pellentesque at ex quis mi scelerisque consectetur. Aenean sem nisl, dapibus eget consectetur sit amet, pharetra ut dui. Suspendisse potenti. Vivamus non imperdiet lorem. Quisque accumsan est quis lectus maximus semper. Integer scelerisque malesuada condimentum. Suspendisse sed diam at nunc gravida gravida et a ante. Donec semper, nisl vitae aliquet viverra, diam nulla finibus tortor, in tincidunt felis urna et augue. Nunc gravida eleifend lectus sit amet fermentum.
              
              Nunc porttitor porttitor arcu, quis pharetra magna. Pellentesque nec tristique libero, eu dapibus dolor. Praesent luctus consectetur hendrerit. Sed ultricies suscipit velit ut pharetra. Etiam velit elit, faucibus nec mauris non, dapibus lobortis felis. Nulla imperdiet varius tristique. Maecenas ut eros quis nisl bibendum porta vel sit amet lectus. Donec et convallis erat, eu elementum ex. Fusce suscipit ultricies quam, at vehicula orci lobortis rhoncus. Vestibulum vel dolor odio. Pellentesque feugiat ultricies est, non vehicula tortor tempor quis. Nunc eu erat fringilla, vehicula nunc vitae, mollis erat. Vestibulum vehicula venenatis nibh in convallis.
              
              Pellentesque tempor, purus tincidunt sollicitudin aliquet, turpis dolor elementum libero, at placerat nulla velit ut arcu. Innec volutpat purus vitae porttitor lobortis. Donec non commodo sapien. Donec imperdiet velit at metus ullamcorper, nec lobortis ligula porttitor. Nulla aliquam mauris in aliquet commodo. Ut metus lorem, imperdiet vel urna vitae, tristique congue risus. Mauris tempus lorem ut nulla pulvinar auctor. Maecenas vehicula turpis nisl, in ullamcorper mi elementum eget. Aliquam rutrum neque ac sapien cursus pulvinar. Ut porttitor dapibus dolor, eu faucibus quam mollis et. Praesent quis mollis enim. Vivamus at elit id massa pulvinar maximus vel vel ex. Pellentesque lobortis nec leo at venenatis.</p>
              
            ) : (
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt, risus id vulputate blandit, risus turpis lacinia quam, eu varius erat risus non libero. Suspendisse euismod, lectus et hendrerit vestibulum, augue ligula interdum ipsum, ut mattis libero magna vel risus. Proin ac cursus mi, a vehicula leo. Suspendisse venenatis ipsum massa, eget varius lectus tincidunt vel. Phasellus nisl sem, vehicula sagittis scelerisque ac, imperdiet egestas turpis. Curabitur interdum velit vel quam tempor suscipit. Integer sodales orci at luctus dapibus. Quisque vulputate rutrum est nec iaculis. Nunc mauris tellus, mattis quis mi cursus, aliquam finibus mauris. Aenean lobortis felis est, et cursus orci venenatis in. Fusce nec nunc semper, iaculis tortor ullamcorper, auctor nulla.

              Donec placerat aliquam arcu non dignissim. Vivamus non est id ex euismod iaculis ut sit amet quam. Pellentesque pellentesque varius nisi sed mollis. Donec eleifend velit nisi, quis pulvinar libero maximus eu. Vivamus auctor risus in neque sollicitudin blandit. Pellentesque at ex quis mi scelerisque consectetur. Aenean sem nisl, dapibus eget consectetur sit amet, pharetra ut dui. Suspendisse potenti. Vivamus non imperdiet lorem. Quisque accumsan est quis lectus maximus semper. Integer scelerisque malesuada condimentum. Suspendisse sed diam at nunc gravida gravida et a ante. Donec semper, nisl vitae aliquet viverra, diam nulla finibus tortor, in tincidunt felis urna et augue. Nunc gravida eleifend lectus sit amet fermentum.
              
              Nunc porttitor porttitor arcu, quis pharetra magna. Pellentesque nec tristique libero, eu dapibus dolor. Praesent luctus consectetur hendrerit. Sed ultricies suscipit velit ut pharetra. Etiam velit elit, faucibus nec mauris non, dapibus lobortis felis. Nulla imperdiet varius tristique. Maecenas ut eros quis nisl bibendum porta vel sit amet lectus. Donec et convallis erat, eu elementum ex. Fusce suscipit ultricies quam, at vehicula orci lobortis rhoncus. Vestibulum vel dolor odio. Pellentesque feugiat ultricies est, non vehicula tortor tempor quis. Nunc eu erat fringilla, vehicula nunc vitae, mollis erat. Vestibulum vehicula venenatis nibh in convallis.
              
              Pellentesque tempor, purus tincidunt sollicitudin aliquet, turpis dolor elementum libero, at placerat nulla velit ut arcu. Integer tempus, ex in malesuada ultricies, tortor arcu tempus mi, non tristique arcu ligula vel purus. Ut vitae enim gravida, convallis ipsum non, tincidunt turpis. Aliquam et placerat lorem. Vestibulum venenatis dolor porttitor magna luctus, et euismod sem iaculis. Ut sed tortor non justo ultricies tristique nec eget mauris. Nullam pharetra libero velit, id ullamcorper arcu viverra a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla pharetra condimentum metus. Nunc feugiat dolor sed sem egestas accumsan. Donec vel tristique ipsum, et fermentum leo. Mauris vulputate nisl vel lectus finibus vehicula. Nam sit amet bibendum neque. Suspendisse porta mi efficitur feugiat eleifend.
              
              Donec volutpat purus vitae porttitor lobortis. Donec non commodo sapien. Donec imperdiet velit at metus ullamcorper, nec lobortis ligula porttitor. Nulla aliquam mauris in aliquet commodo. Ut metus lorem, imperdiet vel urna vitae, tristique congue risus. Mauris tempus lorem ut nulla pulvinar auctor. Maecenas vehicula turpis nisl, in ullamcorper mi elementum eget. Aliquam rutrum neque ac sapien cursus pulvinar. Ut porttitor dapibus dolor, eu faucibus quam mollis et. Praesent quis mollis enim. Vivamus at elit id massa pulvinar maximus vel vel ex. Pellentesque lobortis nec leo at venenatis.</p>
            )}
          </div>
          <Footer />
    </div>
  );
};
