import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiagnosticsModule } from './diagnostics/diagnostics.module';

@Module({
  imports: [DiagnosticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
