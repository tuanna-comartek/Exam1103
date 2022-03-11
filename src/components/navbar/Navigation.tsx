import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import BlogPage from "../../pages/blog/BlogPage";
import HomePage from "../../pages/home/HomePage";
import OtherPage1 from "../../pages/otherPage1/OtherPage1";
import OtherPage2 from "../../pages/otherPage2/OtherPage2";
import OtherPage3 from "../../pages/otherPage3/Other3";
import TodoList from "../../pages/TodoList/TodoList";

const Navigation = () => {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light my-navbar">
          <div className="container-fluid my-navbar-content">
            <div className="navbar-brand content-left">
              <img
                src="https://comartek.com/wp-content/uploads/2021/07/concept_logo-web.png"
                alt="Comartek"
              />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse content-right"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav ">
                <div className="nav-link active" aria-current="page">
                  <Link className="item-nav" to="/">
                    Home Page
                  </Link>
                </div>
                <div className="nav-link">
                  <Link className="item-nav" to="/blog">
                    Blog Page
                  </Link>
                </div>
                <div className="nav-link">
                  <Link className="item-nav" to="/other1">
                    Other Page 1
                  </Link>
                </div>
                <div className="nav-link">
                  <Link className="item-nav" to="/other2">
                    Other Page 2
                  </Link>
                </div>
                <div className="nav-link">
                  <Link className="item-nav" to="/other3">
                    Other Page 3
                  </Link>
                </div>
                <div className="nav-link">
                  <Link className="item-nav" to="/other4">
                    To-do List
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/">
            <TodoList />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/other1">
            <OtherPage1
              name="Nguyen Anh Tuan"
              address="Viet Nam"
              phoneNumber={+84869794311}
              email="abc@gmail.com"
            />
          </Route>
          <Route path="/other2">
            <OtherPage2 />
          </Route>
          <Route path="/other3">
            <OtherPage3 />
          </Route>
          <Route path="/other4">
            <TodoList />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default Navigation;
