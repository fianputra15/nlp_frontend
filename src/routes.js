// Pages
import {
  AppBar,
  Autocomplete,
  Avatars,
  BackendError,
  Badges,
  Blank,
  ButtonNavigation,
  Buttons,
  Calendar,
  Cards,
  Charts,
  Chat,
  Mahasiswa,
  Frekuensi,
  Nilai,
  Preprocessing,
  Parsing,
  Chips,
  Detail,
  Dialogs,
  Dividers,
  Drawers,
  Editor,
  ExpansionPanels,
  Google,
  GridList,
  Home,
  Invoice,
  Leaflet,
  Lists,
  Lockscreen,
  Media,
  Menus,
  Messages,
  NotFound,
  Paper,
  PasswordReset,
  Pickers,
  PricingPage,
  Products,
  Progress,
  SelectionControls,
  Selects,
  Signin,
  Signup,
  Snackbars,
  Social,
  Steppers,
  Tables,
  Tabs,
  Taskboard,
  TextFields,
  TimelinePage,
  Tooltips,
  Widgets
} from './pages';

import AppsIcon from '@material-ui/icons/Apps';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EqualizerIcon from '@material-ui/icons/Equalizer';
// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import FaceIcon from '@material-ui/icons/Face';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import NavigationIcon from '@material-ui/icons/Navigation';
import PagesIcon from '@material-ui/icons/Pages';
import PersonIcon from '@material-ui/icons/Person';
import PhotoIcon from '@material-ui/icons/Photo';
import Translator from "./pages/nlp/Translator";
import Implementasi from "./pages/nlp/Implementasi";
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import PragmatikAnalysis from "./pages/nlp/PragmatikAnalysis";

export default {
  items: [
    {
      path: '/',
      name: 'Home',
      type: 'link',
      icon: ExploreIcon,
      component: Home
    },
    {
      path: '/master',
      name: 'Master',
      type: 'submenu',
      icon: AppsIcon,
      badge: {
        type: 'primary',
        value: '3'
      },
      children: [
        {
          path: '/mahasiswa',
          name: 'Mahasiswa',
          component: Mahasiswa
        },
        {
          path: '/frekuensi',
          name: 'Frekuensi',
          component: Frekuensi
        },
        {
          path: '/nilai',
          name: 'Nilai',
          component: Nilai
        },
      ]
    },
    {
      path: '/nlp',
      name: 'NLP',
      type: 'submenu',
      icon: ShowChartIcon,
      children: [
        {
          path: '/preprocessing',
          name: 'Preprocessing',
          component: Preprocessing
        },
        {
          path: '/parsing',
          name: 'Parsing',
          component: Parsing
        },
        {
          path: '/translator',
          name: 'Translator',
          component: Translator
        },
        {
          path: '/evaluator',
          name: 'Evaluator',
          component: PragmatikAnalysis
        }
      ]
    },
    {
      path: '/implementasi',
      name: 'Implementation',
      type: 'link',
      icon: PagesIcon,
      component: Implementasi
    },
  ]
};
