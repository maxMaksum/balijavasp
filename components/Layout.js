
import Header from "./Header/Header";


function Layout({children}) {
    return (
      <div className="relative h-screen">
        <Header className="fixed top-0" />
        <div className="relative ">{children}</div>

      </div>
    );
}

export default Layout
