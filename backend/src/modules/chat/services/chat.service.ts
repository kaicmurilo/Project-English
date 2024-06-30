import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';
import { Chat } from '../models/chat.interface';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class ChatService {
  constructor(@InjectModel('Chat') private readonly chatModel: Model<Chat>) {}

  async processMessage(message: string): Promise<any> {
    if (message === 'teste') {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('teste devolvido, mensagem não salva em banco');
        }, 3000); // 3 segundos de atraso
      });
    }

    try {
      // Buscar a última mensagem salva no banco de dados
      const lastChat = await this.chatModel.findOne().sort({ createdAt: -1 });

      // Construir o prompt para o modelo
      const prompt = `
        Você é um professor de inglês. 
        Mensagem anterior do usuário: "${lastChat?.userMessage || 'Início da conversa'}"
        Resposta anterior do GPT: "${lastChat?.gptMessage || 'Início da conversa'}"
        Mensagem atual do usuário: "${message}"
        você deve responder a mensagem do usuário de acordo com o seu papel de professor de inglês, continuando a conversa com alguma pergunta ou tópico educativo, criando uma cronologia que melhore o nível do usuário. A correção deve ser retornada em português BR para o aluno entender o campo correção não deve conter a tradução da conversa, no seguinte formato JSON:
        {
          "conversa": "aqui deve ser a continuação da conversa",
          "correcao": "aqui deve ser a correcao caso necessário e explicação para o usuário, a resposta da correção deve ser em português"
        }
      `;

      // Fazer a requisição para a API do OpenAI
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );

      const result = JSON.parse(response.data.choices[0].message.content);
      const continuationResponse = result.conversa;
      const correctionAndExplanation = result.correcao;

      // Salvar a interação no banco de dados
      const chat = new this.chatModel({
        userMessage: message,
        gptMessage: continuationResponse,
        correctionAndExplanation: correctionAndExplanation,
      });
      await chat.save();

      return {
        continuationResponse,
        correctionAndExplanation,
      };
    } catch (error) {
      console.error('Error processing message:', error);
      return 'Não foi possível processar a mensagem';
    }
  }

  async getChats(): Promise<Chat[]> {
    return this.chatModel.find().sort({ createdAt: 1 }).exec();
  }
}
