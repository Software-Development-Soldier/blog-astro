# 정보체계관리단 블로그 (Astro PoC)

[Astro](https://astro.build)로 만든 블로그 개념 검증(PoC)입니다. `main` 브랜치에 push되면 GitHub Actions가 빌드해 GitHub Pages에 배포합니다.

- 사이트: https://software-development-soldier.github.io/blog-astro/

> 이 레포와 사이트는 공개입니다. 커밋 이력까지 공개되므로 내부 정보나 민감한 내용을 올리지 마세요.

## 로컬 실행

```bash
npm install
npm run dev
```

## 글 작성

`src/content/blog/제목.md` 파일을 추가합니다. 작성자와 태그는 `src/consts.ts`에 등록된 키를 사용합니다.

## 빌드

```bash
npm run build
npm run preview
```
