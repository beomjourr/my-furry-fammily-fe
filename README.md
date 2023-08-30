# 내새꾸

## 프로젝트 시작

1. `npm ci`
2. `npm i -g nx`
3. `nx serve {project-name}`

## 작업 실행

```
nx <target> <project> <...options>
```

여러 작업 실행. 해당 작업이 있는 모든 프로젝트를 실행함.

```
nx run-many -t <task1> <task2>
```

특정 프로젝트들만 작업 실행.

```
nx run-many -t <task1> <task2> -p <proj1> <proj2>
```

수정한 내용에 영향받은 프로젝트만 작업 실행
```
nx affected -t <task1>,<task2>
```

## Nx console 사용

visual studio code, intellij 모두 Nx console plugin을 통해 쉽게 컴포넌트 생성, 프로젝트 생성 등 스캐폴딩 사용 가능.

https://nx.dev/recipes/nx-console/console-generate-command

## 프로젝트, 작업 의존성 그래프 보기

```
nx graph
```

## 수정한 내용 영향받은 프로젝트 보기

```
nx graph --affected
```

## commit 규칙

https://www.conventionalcommits.org/ko/v1.0.0/

conventionalcommits 규칙을 따르도록 commitlint 적용함.
커밋한 내용은 CHANGE_LOG에 자동으로 기입되니 주의하여 커밋 부탁드립니다.
