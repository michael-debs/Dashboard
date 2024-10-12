import { Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import routes from "./constants/routes";

const formattedRouts = routes.map(getRouteDetails);

function AppRouter() {
  return (
    <Routes>
      {formattedRouts.map(({ path, element, children }, index) => (
        <Route key={index} path={path} element={element}>
          {children.map(
            ({ path: childPath, element: childElement }, index2) => (
              <Route key={index2} path={childPath} element={childElement} />
            )
          )}
        </Route>
      ))}
    </Routes>
  );
}

AppRouter.propTypes = {
  children: PropTypes.node,
};

function getRouteDetails({ path, element, children }) {
  return {
    path,
    element,
    children: children.map(getRouteDetails),
  };
}

export default AppRouter;
