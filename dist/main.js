"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const pipes_1 = require("@nestjs/common/pipes");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const all_exceptions_filter_1 = require("./common/filters/all-exceptions.filter");
const fs = require("fs");
async function bootstrap() {
    const logger = new common_1.Logger('NestBootstrap');
    const crPath = process.env.CERT;
    const pkPath = process.env.KEY;
    const options = {};
    if (fs.existsSync(crPath) && fs.existsSync(pkPath)) {
        logger.log(`Carga con certificados`);
        options.httpsOptions = {
            cert: fs.readFileSync(crPath),
            key: fs.readFileSync(pkPath)
        };
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule, options);
    app.enableCors();
    const httpAdapter = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new all_exceptions_filter_1.AllExceptionsFilter(httpAdapter));
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new pipes_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Product API')
        .setDescription('This microservice handle basic products information, so this save and search information')
        .setVersion('1.0')
        .addBearerAuth({
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header'
    }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const configService = app.get(config_1.ConfigService);
    await app.listen(+configService.get("PORT"));
    logger.log(`Listen on port ${configService.get("PORT")}`);
}
bootstrap();
//# sourceMappingURL=main.js.map