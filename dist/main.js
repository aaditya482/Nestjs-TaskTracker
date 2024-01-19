"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const corsOptions = {
        origin: [
            'https://localhost:8080',
            'http://localhost:8080',
            'https://superlative-semolina-63b0b0.netlify.app/',
            'http://superlative-semolina-63b0b0.netlify.app/',
        ],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    };
    app.enableCors(corsOptions);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map