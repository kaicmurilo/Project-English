import { Controller, Post, Body, Get } from '@nestjs/common';
import { ChatService } from '../services/chat.service';


@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async chat(@Body('message') message: string) {
    return this.chatService.processMessage(message);
  }

  @Get()
  async getChats() {
    return this.chatService.getChats();
  }
}
