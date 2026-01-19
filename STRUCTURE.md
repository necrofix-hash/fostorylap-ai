# FostoryLap.AI 웹사이트 구조 문서

## 개요

**웹사이트 이름**: FostoryLap.AI
**웹사이트 유형**: AI 디자인 뉴스/매거진 플랫폼
**디자인 스타일**: Brutalist (브루탈리즘)

---

## 기술 스택

| 기술 | 버전 | 용도 |
|------|------|------|
| React | 19.x | UI 프레임워크 |
| TypeScript | 5.8 | 타입 안전성 |
| Tailwind CSS | CDN | 스타일링 |
| Vite | 6.x | 빌드 도구 |
| React Router | 최신 | 페이지 라우팅 |
| Lucide React | 0.562 | 아이콘 |

---

## 폴더 구조

```
neo-ai-design/
│
├── index.html              # HTML 진입점
├── index.tsx               # React 진입점
├── App.tsx                 # 메인 앱 (라우팅 설정)
│
├── constants.ts            # 상수 데이터 (메뉴, 아티클 등)
├── types.ts                # TypeScript 타입 정의
│
├── components/             # 재사용 가능한 UI 컴포넌트
│   ├── Navbar.tsx          # 상단 네비게이션 바
│   ├── Hero.tsx            # 메인 히어로 섹션
│   ├── Marquee.tsx         # 흐르는 텍스트 배너
│   ├── NewsGrid.tsx        # 뉴스 카드 그리드
│   ├── ArticleCard.tsx     # 개별 아티클 카드
│   ├── Newsletter.tsx      # 뉴스레터 구독 섹션
│   ├── Button.tsx          # 재사용 버튼 컴포넌트
│   └── Footer.tsx          # 하단 푸터
│
├── pages/                  # 페이지 컴포넌트
│   ├── ToolsPage.tsx       # /tools - AI 도구 디렉토리
│   ├── TutorialsPage.tsx   # /tutorials - 튜토리얼 목록
│   ├── EthicsPage.tsx      # /ethics - AI 윤리 가이드
│   └── CommunityPage.tsx   # /community - 커뮤니티
│
├── vite.config.ts          # Vite 빌드 설정
├── tsconfig.json           # TypeScript 설정
└── package.json            # 의존성 관리
```

---

## 페이지 구조

### 라우트 맵

| URL 경로 | 페이지 | 설명 |
|----------|--------|------|
| `/` | 홈페이지 | Hero + Marquee + NewsGrid + Newsletter |
| `/tools` | Tools | AI 도구 디렉토리 |
| `/tutorials` | Tutorials | 튜토리얼 목록 |
| `/ethics` | Ethics | AI 윤리 가이드라인 |
| `/community` | Community | 커뮤니티 허브 |

### 레이아웃 구조

```
┌─────────────────────────────────────────┐
│              Navbar (고정)               │
├─────────────────────────────────────────┤
│                                         │
│           Main Content Area             │
│         (페이지별 콘텐츠)                 │
│                                         │
├─────────────────────────────────────────┤
│               Footer                    │
└─────────────────────────────────────────┘
```

---

## 홈페이지 섹션 구성

### 1. Navbar (`components/Navbar.tsx`)
- 로고: FostoryLap.AI
- 메뉴: TOOLS, TUTORIALS, ETHICS, COMMUNITY
- SUBSCRIBE 버튼
- 모바일 햄버거 메뉴

### 2. Hero (`components/Hero.tsx`)
- 배지: "LIVE FEED: AI DESIGN NEWS"
- 메인 헤드라인: "CRAFTING THE SYNTHETIC FUTURE"
- 검색바 (프롬프트 스타일)
- 태그: #GENERATIVE, #SYNTHETIC, #DIFFUSION, #MODEL

### 3. Marquee (`components/Marquee.tsx`)
- 검은 배경에 흐르는 뉴스 텍스트
- 무한 애니메이션

### 4. NewsGrid (`components/NewsGrid.tsx`)
- "Latest Drops" 타이틀
- 3컬럼 아티클 카드 그리드
- "LOAD FEED" 버튼

### 5. Newsletter (`components/Newsletter.tsx`)
- 라임색 배경
- "JOIN THE RESISTANCE" 헤드라인
- 이메일 구독 폼

### 6. Footer (`components/Footer.tsx`)
- 로고 및 브랜드 설명
- SNS 링크 (Twitter, Discord, GitHub)
- SECTIONS 메뉴
- LEGAL 메뉴
- 저작권 표시

---

## 서브 페이지 구성

### Tools 페이지 (`/tools`)
- AI 도구 카드 그리드 (6개)
- 카테고리 태그 (IMAGE, VIDEO, DESIGN)
- 별점 평가
- 외부 링크

### Tutorials 페이지 (`/tutorials`)
- 튜토리얼 리스트 (6개)
- 난이도 태그 (BEGINNER, INTERMEDIATE, ADVANCED, EXPERT)
- 작성자, 소요시간 정보

### Ethics 페이지 (`/ethics`)
- 윤리 가이드라인 메인 콘텐츠
- 커뮤니티 가이드라인 (5개 규칙)
- HOT TOPICS 사이드바
- RESOURCES 사이드바

### Community 페이지 (`/community`)
- Discord 가입 CTA
- Featured Members (4명)
- Weekly Leaderboard
- Upcoming Events
- Community Stats

---

## 데이터 구조

### Article 타입
```
{
  id: string          // 고유 ID
  title: string       // 제목
  category: string    // 카테고리 (BREAKING, TUTORIAL 등)
  author: string      // 작성자
  date: string        // 날짜
  imageUrl: string    // 이미지 URL
  bgColor: string     // 카테고리 배경색
}
```

### 카테고리 색상
| 카테고리 | 색상 클래스 | 실제 색상 |
|----------|-------------|-----------|
| BREAKING | bg-lime-300 | 연두색 |
| TUTORIAL | bg-purple-300 | 보라색 |
| OPINION | bg-yellow-300 | 노란색 |
| LEGAL | bg-orange-300 | 주황색 |
| REVIEW | bg-cyan-300 | 청록색 |
| ANALYSIS | bg-pink-300 | 분홍색 |

---

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

**개발 서버 URL**: `http://localhost:3000`
