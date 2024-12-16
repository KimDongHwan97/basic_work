## 프로젝트 진행순서

1. npm init -y , npm i express , npm install prisma @prisma/client, npx prisma init 을 설치해준다
2. "type": "module" 로 바꿔준다.
3. schema.prisma 에서 "mysql"로 바꾸고 모델링을 해준다. .env 파일에서 데이터베이스 주소를 설정해준다.
4. 마이그레이션으로 데이터베이스를 저장해준다. npx prisma migrate dev --name homework5
5. src 폴더 안에 app.js 파일을 만들어주고 인터넷에 express 자바스크립트를 검색해 기본 세팅을 해준다.
6. app.use(express.json());와 app.use('/api'); 를 만들어준다.
7. utils/prisma 폴더를 만들어주고 index.js 파일을 만들어주고 안에 기본베이스를 저장해준다.
8. src 폴더 안에 routes 폴더를 만들어주고 안에 players 라우터를 만들어준다.
9. players 라우터안에 선수 CRUD를 만들어준다.