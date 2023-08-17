# 내새꾸

## 프로젝트 시작

1. `npm ci`
2. `npm i -g nx`
3. `nx serve {project-name}`

## 작업 실행

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <task1> <task2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <task1> <task2> -p <proj1> <proj2>
```

## Nx console 사용

visual studio code, intellij 모두 Nx console plugin을 통해 쉽게 스캐폴딩 사용 가능.

## 프로젝트, 작업 의존성 그래프 보기

```
nx graph
```