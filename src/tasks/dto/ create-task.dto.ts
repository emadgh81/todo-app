import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty({ message: `title must not be empty` })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @MinLength(2, { message: `must be 2 word at least` })
  title!: string;
}
