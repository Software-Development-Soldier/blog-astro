---
title: 블로그를 시작합니다
description: 정보체계관리단 블로그의 첫 글입니다. 이 블로그는 Astro로 만들고 GitHub Pages로 배포하는 개념 검증(PoC) 사이트입니다.
pubDate: 2026-11-13
authors: [team]
tags: [notice]
---

정보체계관리단 블로그의 첫 글입니다. 이 블로그는 [Astro](https://astro.build)로 만들고 GitHub Pages로 배포하는 개념 검증(PoC) 사이트입니다.

## 이 블로그가 동작하는 방식

1. 마크다운 파일로 글을 작성해 `src/content/blog/` 폴더에 추가합니다.
2. `main` 브랜치에 병합되면 GitHub Actions가 사이트를 빌드합니다.
3. 빌드된 정적 파일이 GitHub Pages에 자동으로 배포됩니다.

서버나 데이터베이스 없이 정적 파일만으로 운영되므로 관리 부담이 거의 없습니다.

## 기본 제공 기능

- 태그별 글 모음
- RSS 피드
- 다크 모드
- 코드 구문 강조
