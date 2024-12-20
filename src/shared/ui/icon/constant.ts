import ArrowBackIcon from '@/assets/images/action/i-arrow-back.svg';
import ArrowDownMediumIcon from '@/assets/images/action/i-arrow-down-md.svg';
import ArrowNextMediumIcon from '@/assets/images/action/i-arrow-next-md.svg';
import ArrowNextIcon from '@/assets/images/action/i-arrow-next.svg';
import ArrowRightIcon from '@/assets/images/action/i-arrow-right.svg';
import BackspaceIcon from '@/assets/images/action/i-backspace.svg';
import BellDotIcon from '@/assets/images/action/i-bell-dot.svg';
import BellIcon from '@/assets/images/action/i-bell.svg';
import CancelWhiteIcon from '@/assets/images/action/i-cancel-w.svg';
import CancelIcon from '@/assets/images/action/i-cancel.svg';
import CloseIcon from '@/assets/images/action/i-close.svg';
import DrawerIcon from '@/assets/images/action/i-drawer.svg';
import EmptyIcon from '@/assets/images/action/i-empty.svg';
import EyeIcon from '@/assets/images/action/i-eye-light.svg';
import EyeOffIcon from '@/assets/images/action/i-eye-off-light.svg';
import PeopleIcon from '@/assets/images/action/i-people.svg';
import PlaceIcon from '@/assets/images/action/i-place.svg';
import SearchIcon from '@/assets/images/action/i-search.svg';
import SettingIcon from '@/assets/images/action/i-setting.svg';
import CheckIcon from '@/assets/images/menu/i-check.svg';
import EnterIcon from '@/assets/images/menu/i-enter.svg';
import FlashLightIcon from '@/assets/images/menu/i-menu-light.svg';
import ScheduleIcon from '@/assets/images/menu/i-menu-schedule.svg';
import VacationIcon from '@/assets/images/menu/i-menu-vacation.svg';
import OutIcon from '@/assets/images/menu/i-out.svg';

export const ICON_BASE_PATH = '@/assets/images' as const;

export const iconMap = {
  // menu
  check: CheckIcon,
  enter: EnterIcon,
  flashLight: FlashLightIcon,
  schedule: ScheduleIcon,
  vacation: VacationIcon,
  out: OutIcon,

  // action
  arrowBack: ArrowBackIcon,
  arrowDownMedium: ArrowDownMediumIcon,
  arrowNextMedium: ArrowNextMediumIcon,
  arrowNext: ArrowNextIcon,
  arrowRight: ArrowRightIcon,
  backspace: BackspaceIcon,
  bellDot: BellDotIcon,
  bell: BellIcon,
  cancelWithe: CancelWhiteIcon,
  cancel: CancelIcon,
  close: CloseIcon,
  drawer: DrawerIcon,
  empty: EmptyIcon,
  eye: EyeIcon,
  eyeOff: EyeOffIcon,
  people: PeopleIcon,
  place: PlaceIcon,
  search: SearchIcon,
  setting: SettingIcon,
} as const;
