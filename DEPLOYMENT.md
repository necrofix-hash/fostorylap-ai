# FostoryLap.AI 배포 가이드

> 이 문서는 웹사이트를 인터넷에 공개하는 방법을 설명합니다.

---

## 목차

1. [사전 준비: GitHub에 코드 올리기](#1-사전-준비-github에-코드-올리기)
2. [방법 1: Vercel 배포 (추천)](#2-방법-1-vercel-배포-추천)
3. [방법 2: Netlify 배포](#3-방법-2-netlify-배포)
4. [방법 3: GitHub Pages 배포](#4-방법-3-github-pages-배포)
5. [배포 후 확인사항](#5-배포-후-확인사항)
6. [문제 해결](#6-문제-해결)

---

## 1. 사전 준비: GitHub에 코드 올리기

### 1-1. GitHub 저장소 생성

1. [GitHub](https://github.com) 로그인
2. 오른쪽 상단 `+` 버튼 → `New repository` 클릭
3. 저장소 정보 입력:
   - **Repository name**: `fostorylap-ai` (원하는 이름)
   - **Public** 선택 (무료 호스팅을 위해)
4. `Create repository` 클릭

### 1-2. 코드 업로드

터미널에서 프로젝트 폴더로 이동 후 실행:

```bash
# Git 초기화 (처음 한 번만)
git init

# 모든 파일 추가
git add .

# 커밋
git commit -m "Initial commit"

# GitHub 저장소 연결 (URL은 본인 저장소로 변경)
git remote add origin https://github.com/necrofix-hash/fostorylap-ai.git

# 업로드
git branch -M main
git push -u origin main
```

> **YOUR_USERNAME**을 본인의 GitHub 사용자명으로 변경하세요.

---

## 2. 방법 1: Vercel 배포 (추천)

> **난이도**: 쉬움 | **소요시간**: 5분 | **비용**: 무료

### 장점
- 자동 빌드 & 배포
- 빠른 속도 (글로벌 CDN)
- GitHub push 시 자동 업데이트
- React Router 자동 지원

### 배포 단계

#### Step 1: Vercel 가입
1. [vercel.com](https://vercel.com) 접속
2. `Sign Up` 클릭
3. `Continue with GitHub` 선택하여 GitHub 계정 연결

#### Step 2: 프로젝트 가져오기
1. 대시보드에서 `Add New...` → `Project` 클릭
2. `Import Git Repository` 섹션에서 저장소 선택
3. `fostorylap-ai` (또는 본인 저장소) 옆의 `Import` 클릭

#### Step 3: 빌드 설정
설정 화면에서 아래 값 확인 (보통 자동 감지됨):

| 항목 | 값 |
|------|-----|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

#### Step 4: 배포
1. `Deploy` 버튼 클릭
2. 빌드 완료까지 대기 (1-2분)
3. 완료 시 URL 제공: `https://프로젝트명.vercel.app`

### 커스텀 도메인 연결 (선택사항)
1. 프로젝트 대시보드 → `Settings` → `Domains`
2. 도메인 입력 후 `Add`
3. DNS 설정 안내에 따라 도메인 설정

---

## 3. 방법 2: Netlify 배포

> **난이도**: 쉬움 | **소요시간**: 5분 | **비용**: 무료

### 장점
- 드래그 앤 드롭 배포 가능
- 폼 기능 내장
- GitHub 연동 지원

### 배포 단계

#### Step 1: Netlify 가입
1. [netlify.com](https://netlify.com) 접속
2. `Sign up` 클릭
3. `GitHub` 선택하여 계정 연결

#### Step 2: 사이트 추가
1. `Sites` 탭 → `Add new site` → `Import an existing project`
2. `Deploy with GitHub` 선택
3. 저장소 선택

#### Step 3: 빌드 설정
| 항목 | 값 |
|------|-----|
| Branch to deploy | `main` |
| Build command | `npm run build` |
| Publish directory | `dist` |

#### Step 4: 리다이렉트 설정 (React Router용)

프로젝트 루트에 `netlify.toml` 파일 생성:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

또는 `public/_redirects` 파일 생성:
```
/*    /index.html   200
```

#### Step 5: 배포
1. `Deploy site` 클릭
2. 완료 시 URL 제공: `https://랜덤문자.netlify.app`

### 사이트 이름 변경
1. `Site settings` → `Change site name`
2. 원하는 이름 입력 → `https://원하는이름.netlify.app`

---

## 4. 방법 3: GitHub Pages 배포

> **난이도**: 중간 | **소요시간**: 15분 | **비용**: 무료

### 주의사항
- 추가 설정 필요
- React Router 경로 문제 해결 필요
- 기본 경로가 `/저장소이름/`으로 설정됨

### 배포 단계

#### Step 1: vite.config.ts 수정

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/저장소이름/',  // 이 줄 추가 (본인 저장소 이름으로 변경)
})
```

#### Step 2: 404.html 생성 (React Router 지원용)

`public/404.html` 파일 생성:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>FostoryLap.AI</title>
    <script type="text/javascript">
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

#### Step 3: index.html 수정

`index.html`의 `<head>` 안에 스크립트 추가:

```html
<script type="text/javascript">
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) {
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>
```

#### Step 4: GitHub Actions 워크플로우 생성

`.github/workflows/deploy.yml` 파일 생성:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### Step 5: GitHub Pages 활성화

1. GitHub 저장소 → `Settings` → `Pages`
2. Source: `GitHub Actions` 선택
3. 코드 push 후 자동 배포

#### Step 6: 확인
- URL: `https://YOUR_USERNAME.github.io/저장소이름/`

---

## 5. 배포 후 확인사항

### 체크리스트

- [ ] 홈페이지 정상 로드
- [ ] 모든 메뉴 링크 작동
- [ ] 서브 페이지 직접 접속 가능 (예: `/tools`)
- [ ] 이미지 정상 표시
- [ ] 모바일 반응형 확인
- [ ] 새로고침 시 404 오류 없음

### URL 테스트

```
https://your-site.vercel.app/
https://your-site.vercel.app/tools
https://your-site.vercel.app/tutorials
https://your-site.vercel.app/ethics
https://your-site.vercel.app/community
```

---

## 6. 문제 해결

### 문제: 서브 페이지 새로고침 시 404 오류

**원인**: React Router의 클라이언트 사이드 라우팅

**해결**:
- Vercel: 자동 처리됨
- Netlify: `_redirects` 파일 또는 `netlify.toml` 설정
- GitHub Pages: `404.html` 및 스크립트 추가

### 문제: 이미지가 안 보임

**원인**: 상대 경로 문제

**해결**:
- 이미지 URL이 절대 경로인지 확인
- `public` 폴더의 이미지는 `/이미지명.png`로 참조

### 문제: 빌드 실패

**해결**:
```bash
# 로컬에서 빌드 테스트
npm run build

# 오류 메시지 확인 후 수정
```

### 문제: GitHub Pages 경로 오류

**원인**: `base` 설정 누락

**해결**: `vite.config.ts`에 `base` 옵션 추가

---

## 플랫폼별 비교 요약

| 항목 | Vercel | Netlify | GitHub Pages |
|------|--------|---------|--------------|
| 설정 난이도 | 쉬움 | 쉬움 | 중간 |
| 빌드 자동화 | O | O | 설정 필요 |
| React Router | 자동 | 설정 필요 | 설정 필요 |
| 커스텀 도메인 | O | O | O |
| HTTPS | 자동 | 자동 | 자동 |
| 속도 | 빠름 | 빠름 | 보통 |
| 추천 | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |

---

## 빠른 시작 (Vercel 기준)

```bash
# 1. GitHub에 코드 올리기
git add .
git commit -m "Ready for deployment"
git push origin main

# 2. vercel.com 접속

# 3. GitHub 연결 → 저장소 선택 → Deploy

# 4. 완료! URL 확인
```

**예상 소요 시간**: 5-10분
