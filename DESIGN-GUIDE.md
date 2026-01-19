# FostoryLap.AI 디자인 관리 가이드

> **React/코드를 몰라도** 텍스트, 색상, 이미지 등을 수정할 수 있도록 안내하는 문서입니다.

---

## 목차

1. [텍스트 수정하기](#1-텍스트-수정하기)
2. [색상 변경하기](#2-색상-변경하기)
3. [이미지 변경하기](#3-이미지-변경하기)
4. [메뉴 수정하기](#4-메뉴-수정하기)
5. [아티클/콘텐츠 수정하기](#5-아티클콘텐츠-수정하기)
6. [디자인 스타일 이해하기](#6-디자인-스타일-이해하기)

---

## 1. 텍스트 수정하기

### 로고 텍스트
**파일**: `components/Navbar.tsx` (18-20줄)
```
FostoryLap.AI
```
→ 큰따옴표(" ") 안의 텍스트를 변경

**파일**: `components/Footer.tsx` (10줄)
```
FostoryLap.AI
```

### 메인 헤드라인
**파일**: `components/Hero.tsx` (25-31줄)
```
CRAFTING THE SYNTHETIC FUTURE
```

### 서브 텍스트
**파일**: `components/Hero.tsx` (33-36줄)
```
The unapologetic daily digest for designers surviving the algorithm.
Tools, prompts, and raw inspiration.
```

### 뉴스레터 섹션
**파일**: `components/Newsletter.tsx`
- 배지 텍스트 (14줄): `NO SPAM. ONLY SIGNAL.`
- 헤드라인 (17-19줄): `JOIN THE RESISTANCE.`
- 설명 텍스트 (20-22줄)

### 푸터 정보
**파일**: `components/Footer.tsx`
- 브랜드 설명 (11-14줄)
- 저작권 (44줄): `© 2024 FostoryLap.AI. ALL RIGHTS RESERVED.`

---

## 2. 색상 변경하기

### Tailwind CSS 색상 시스템

이 웹사이트는 **Tailwind CSS**를 사용합니다. 색상은 클래스명으로 지정됩니다.

#### 색상 클래스 형식
```
bg-{색상}-{농도}    → 배경색
text-{색상}-{농도}  → 글자색
border-{색상}-{농도} → 테두리색
```

#### 주요 색상 팔레트

| 색상 이름 | 클래스 예시 | 용도 |
|-----------|-------------|------|
| **검정** | `bg-black`, `text-black` | 기본 텍스트, 테두리 |
| **흰색** | `bg-white`, `text-white` | 배경, 버튼 텍스트 |
| **라임** | `bg-lime-300`, `bg-lime-400` | 강조, 뉴스레터 배경 |
| **보라** | `bg-purple-300`, `bg-purple-600` | 카테고리, 그라데이션 |
| **분홍** | `bg-pink-300`, `bg-pink-500` | 카테고리, 선택 강조 |
| **청록** | `bg-cyan-300` | 카테고리 |
| **노랑** | `bg-yellow-300`, `bg-yellow-400` | 버튼, 배경 |
| **주황** | `bg-orange-300` | 카테고리 |
| **파랑** | `text-blue-600`, `text-blue-700` | 링크, 로고 점 |

#### 농도 (밝기)
- `50` ~ `950` (숫자가 클수록 진함)
- 자주 사용: `300` (연한), `400` (중간), `500` (기본), `600` (진한)

#### 색상 변경 예시

**뉴스레터 배경색 변경** (`components/Newsletter.tsx` 6줄):
```
변경 전: bg-lime-400
변경 후: bg-pink-400  (분홍색으로 변경)
```

**버튼 색상 변경** (`components/Button.tsx`):
- Primary 버튼 (19줄): `bg-black`
- Secondary 버튼 (22줄): `bg-yellow-400`

---

## 3. 이미지 변경하기

### 아티클 이미지
**파일**: `constants.ts` (14-68줄)

각 아티클의 `imageUrl` 값을 변경:
```
imageUrl: 'https://picsum.photos/800/600?random=1',
```
→ 원하는 이미지 URL로 교체

### 이미지 권장 사양
| 용도 | 권장 크기 | 비율 |
|------|-----------|------|
| 아티클 카드 | 800 x 600px | 4:3 |
| 히어로 배경 | 1920 x 1080px | 16:9 |

### 무료 이미지 소스
- [Unsplash](https://unsplash.com) - 고품질 무료 사진
- [Pexels](https://pexels.com) - 무료 스톡 이미지
- [Lorem Picsum](https://picsum.photos) - 플레이스홀더 이미지

---

## 4. 메뉴 수정하기

### 네비게이션 메뉴
**파일**: `constants.ts` (3-8줄)

```javascript
export const NAV_LINKS = [
  { label: 'TOOLS', href: '/tools' },
  { label: 'TUTORIALS', href: '/tutorials' },
  { label: 'ETHICS', href: '/ethics' },
  { label: 'COMMUNITY', href: '/community' },
];
```

#### 수정 방법
- `label`: 화면에 표시되는 메뉴 이름
- `href`: 클릭 시 이동할 페이지 경로

#### 예시: 메뉴 이름 변경
```javascript
{ label: 'AI도구', href: '/tools' },  // TOOLS → AI도구
```

### 히어로 태그
**파일**: `constants.ts` (10-12줄)
```javascript
export const HERO_TAGS = [
  '#GENERATIVE', '#SYNTHETIC', '#DIFFUSION', '#MODEL'
];
```

---

## 5. 아티클/콘텐츠 수정하기

### 홈페이지 아티클
**파일**: `constants.ts` (14-68줄)

각 아티클 구조:
```javascript
{
  id: '1',                    // 고유 번호
  title: '아티클 제목',         // 카드에 표시되는 제목
  category: 'BREAKING',        // 카테고리 태그
  author: 'Sarah Jenkins',     // 작성자 이름
  date: 'OCT 24',              // 날짜
  imageUrl: '이미지URL',        // 썸네일 이미지
  bgColor: TagColor.LIME,      // 카테고리 태그 색상
}
```

### 카테고리 색상 옵션
**파일**: `types.ts` (16-23줄)
```
TagColor.LIME    → 연두색
TagColor.PURPLE  → 보라색
TagColor.ORANGE  → 주황색
TagColor.BLUE    → 청록색
TagColor.PINK    → 분홍색
TagColor.YELLOW  → 노란색
```

### 흐르는 텍스트 (마키)
**파일**: `constants.ts` (71줄)
```javascript
export const MARQUEE_TEXT = "BREAKING NEWS +++ AI TAKES OVER PIXELS +++ ...";
```

---

## 6. 디자인 스타일 이해하기

### Brutalist 디자인 특징

이 웹사이트는 **브루탈리즘(Brutalist)** 디자인 스타일을 사용합니다.

#### 핵심 요소

| 요소 | 스타일 | Tailwind 클래스 |
|------|--------|-----------------|
| **두꺼운 테두리** | 2-4px 검은 테두리 | `border-2 border-black`, `border-4 border-black` |
| **박스 쉐도우** | 오프셋된 그림자 | `shadow-[4px_4px_0px_0px_#000]` |
| **굵은 폰트** | Extra Bold, Black | `font-bold`, `font-black` |
| **대비 색상** | 검정/흰색 + 강렬한 색상 | `bg-black`, `bg-lime-400` |

#### 버튼 스타일
```
┌──────────────┐
│   BUTTON     │ ← 검은 테두리
└──────────────┘
    ████████████  ← 오프셋 그림자 (4px 아래/오른쪽)
```

#### 호버 효과
- 그림자가 커지고 (4px → 6px)
- 요소가 살짝 위로 이동 (-2px)

#### 클릭 효과
- 그림자가 사라지고
- 요소가 눌리는 듯 이동 (+4px)

---

## 주요 파일 빠른 참조

| 수정 내용 | 파일 위치 |
|-----------|-----------|
| 로고/브랜드명 | `components/Navbar.tsx`, `components/Footer.tsx` |
| 메인 헤드라인 | `components/Hero.tsx` |
| 메뉴 항목 | `constants.ts` |
| 아티클 데이터 | `constants.ts` |
| 뉴스레터 텍스트 | `components/Newsletter.tsx` |
| 버튼 스타일 | `components/Button.tsx` |
| Tools 페이지 | `pages/ToolsPage.tsx` |
| Tutorials 페이지 | `pages/TutorialsPage.tsx` |
| Ethics 페이지 | `pages/EthicsPage.tsx` |
| Community 페이지 | `pages/CommunityPage.tsx` |

---

## 수정 후 확인 방법

1. 파일 저장
2. 브라우저에서 `http://localhost:3000` 새로고침
3. 변경사항 확인

> **팁**: 개발 서버가 실행 중이면 파일 저장 시 자동으로 새로고침됩니다.
