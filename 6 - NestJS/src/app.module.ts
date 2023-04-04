import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './Endpoints/courses/courses.module';
import { StudentsModule } from './Endpoints/students/students.module';

@Module({
  imports: [StudentsModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
