import { CleaningServices, Lock, Settings } from "@mui/icons-material";
import Licenses from "../pages/Permissions/Licenses";
import Languages from "../pages/Settings/LanguagesPage/Languages";
import Registry from "../pages/Settings/Registry";
import CompaniesSites from "../pages/Settings/CompaniesSites";
import Housekeeping from "../pages/Housekeeping";
import UserGroups from "../pages/Permissions/UserGroups";
import FileTypes from "../pages/Settings/FileTypesPage/FileTypes";

/**
 * @typedef {Object} Route
 * @property {string} name - The name of the route (displayed in the sidebar).
 * @property {string} path - The URL path of the route.
 * @property {JSX.Element} icon - The icon component associated with the route (used in the sidebar).
 * @property {Route[]} children - An array of child routes.
 * @property {JSX.Element} [element] - The react component to render for the route.
 */
export default [
  {
    name: "Housekeeping",
    path: "/",
    icon: CleaningServices,
    children: [],
    element: <Housekeeping />,
  },
  {
    name: "Permissions",
    icon: Lock,
    children: [
      {
        name: "User Groups",
        path: "/permissions/user-groups",
        children: [],
        element: <UserGroups />,
      },
      {
        name: "Licenses",
        path: "/permissions/licenses",
        children: [],
        element: <Licenses />,
      },
    ],
  },
  {
    name: "Settings",
    icon: Settings,
    children: [
      {
        name: "Languages",
        path: "/settings/languages",
        children: [],
        element: <Languages />,
      },
      {
        name: "Registry",
        path: "/settings/registry",
        children: [],
        element: <Registry />,
      },
      {
        name: "Companies & Sites",
        path: "/settings/companies-sites",
        children: [],
        element: <CompaniesSites />,
      },
      {
        name: "File Types",
        path: "/settings/file-types",
        children: [],
        element: <FileTypes />,
      },
    ],
  },
];
