# 프로젝트 셋업 (With Expo Go)

Expo Go 사용:

- 빠른 개발 시작
- 기본 기능 구현
- UI/UX 개발
- Expo API(기본 제공) 기능만으로 충분한 경우

## 사전 설정

[Set up your environment](https://docs.expo.dev/get-started/set-up-your-environment/)
Android Emulator or iOS Simulator(MacOS) -> Expo Go 선택 이후 순서대로 설정

## 프로젝트 시작

1. Install dependencies

   ```bash
   npm ci
   ```

2. Start a development server

   ```bash
   npm start
   ```

3. Open the app on your device
   press `a` in the terminal -> Open Android emulator
   press `i` in the terminal -> Open iOS simulator

4. Open the developer menu
   press `m` in the terminal -> Open the developer menu
   https://docs.expo.dev/debugging/tools/

# 프로젝트 셋업 (With Development build) (Recommended)

Development Build 사용:

- 커스텀 네이티브 모듈이 필요한 경우
- 특정 third-party 라이브러리 사용이 필요한 경우
- 완전한 네이티브 기능이 필요한 경우
- 성능 최적화 필요한 경우
- 네이티브 코드 수정이 필요한 경우

NFC 모듈을 사용해야 하기 때문에 Development Build 사용

## 사전 설정

[Set up your environment](https://docs.expo.dev/get-started/set-up-your-environment/)
Android Emulator or iOS Simulator(MacOS) -> Development build -> EAS off 선택 이후 순서대로 설정

# Get started

1. Install dependencies

   ```bash
   npm ci
   ```

2. Build your app

   ```bash
   npm run build:pre
   ```

3. Running your app on Simulator/Emulator

   ```bash
   npm run ios
   ```

   ```bash
   npm run android
   ```

# Technologies Used

## Core

- [React Native](https://reactnative.dev/) - Mobile application framework
- [Expo](https://expo.dev/) - React Native development platform
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-based routing
- [TypeScript](https://www.typescriptlang.org/) - Programming language

## UI & Styling

- [NativeWind](https://www.nativewind.dev/) - TailwindCSS for React Native

## Development Tools

- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting
- ~~[Jest](https://jestjs.io/) - Testing framework~~

## Project Management

- [Git](https://git-scm.com/) - Version control
- [gitmoji](https://gitmoji.dev/) - Commit message convention
- ~~[GitHub Actions](https://github.com/features/actions) - CI/CD~~

## Recommended IDE

- [![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/) Visual Studio Code
- [![Cursor](https://img.shields.io/badge/Cursor-000000?style=for-the-badge&logo=cursor&logoColor=white)](https://cursor.sh/) Cursor
