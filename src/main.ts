import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  //<NestExpressApplication> 추가
  //익스프레스 인스턴스 구성
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //html 렌더링 설정 작업

  //dirname 이 나 자신의 경로기준이기 ..으로 상위폴더
  app.useStaticAssets(join(__dirname, '..', 'assets'));
  app.setBaseViewsDir(join(__dirname, '..', 'assets', 'views'));
  app.setViewEngine('ejs');

  await app.listen(3001);
}
bootstrap();
