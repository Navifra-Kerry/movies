import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import {
  createProxyMiddleware,
  Filter,
  Options,
  RequestHandler,
} from 'http-proxy-middleware';
import { createTerminus } from '@godaddy/terminus';

function bootstrap() {
  const app = express();
  const port = process.env.GUI_PORT ? process.env.GUI_PORT : 8000;
  const options = {
    target: 'http://localhost:4000', // target host
    //changeOrigin: true, // needed for virtual hosted sites
    // ws: true, // proxy websockets
    pathRewrite: function (path: any, req: any) {
      return path.replace('/api', '');
    },
  };
  app.use('/', createProxyMiddleware(options));
  // app.use(
  //   cors({
  //     origin: true,
  //     credentials: true,
  //     optionsSuccessStatus: 200,
  //   }),
  // );

  //const onSignal = async () => {
  //  // logger.info('Server is starting cleanup');
  //  // await redisSubscriber.finalize();
  //  // io.close();
  //  // clientManager.remove();
  //  // redisSubscriber.remove();
  //};
  //
  //const onHealthCheck = async () => {
  //  // redis가 접속이 끊어지면 컨테이너 이미지 강제 종 료
  //  //return redisSubscriber.onHealthCheck();
  //};

  const server = app.listen(port);

  console.log('server started');

  //createTerminus(server, {
  //  signal: 'SIGINT',
  //  healthChecks: {
  //    '/_health/liveness': onHealthCheck,
  //  },
  //  onSignal,
  //});
}
bootstrap();
